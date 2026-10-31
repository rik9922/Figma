import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT_DIR = path.resolve(__dirname, "..", "..");
export const PROJECTS_DIR = path.join(ROOT_DIR, "projects");
export const TEMPLATE_DIR = path.join(PROJECTS_DIR, "PROJECT_TEMPLATE");

/**
 * Authoritative Project Lifecycle States
 */
export const PROJECT_LIFECYCLE_STATES = Object.freeze([
  "DISCOVERING",
  "RESEARCHING",
  "READY_FOR_DESIGN",
  "DESIGN_IN_PROGRESS",
  "AWAITING_USER_REVIEW",
  "REVISION_REQUESTED",
  "USER_APPROVED",
  "ON_HOLD",
  "BLOCKED",
]);

/**
 * Validates a project name string.
 * Must consist strictly of alphanumeric characters, hyphens, or underscores.
 * Disallows directory traversal, dots, and slashes.
 */
export function isValidProjectName(projectName) {
  if (typeof projectName !== "string") return false;
  const trimmed = projectName.trim();
  if (!trimmed || trimmed === "PROJECT_TEMPLATE") return false;
  return /^[a-zA-Z0-9_-]+$/.test(trimmed) && !trimmed.includes("..");
}

/**
 * Safely resolves an absolute project directory path inside `projects/`.
 * Guarantees no path traversal outside `projects/`.
 *
 * @param {string} projectName
 * @param {object} options
 * @param {boolean} [options.mustExist=false]
 * @param {boolean} [options.mustNotExist=false]
 * @returns {string} Absolute resolved path
 */
export function resolveProjectPath(
  projectName,
  { mustExist = false, mustNotExist = false } = {},
) {
  if (!isValidProjectName(projectName)) {
    throw new Error(
      `Invalid project name "${projectName}". Use only alphanumeric characters, hyphens, and underscores. Directory traversal is prohibited.`,
    );
  }

  const resolved = path.resolve(PROJECTS_DIR, projectName);
  const expectedPrefix = PROJECTS_DIR + path.sep;

  if (!resolved.startsWith(expectedPrefix)) {
    throw new Error(
      `Security violation: Resolved path "${resolved}" escapes the authorized projects directory.`,
    );
  }

  const exists = fs.existsSync(resolved);
  if (mustExist && !exists) {
    throw new Error(`Project directory does not exist: ${resolved}`);
  }
  if (mustNotExist && exists) {
    throw new Error(`Project "${projectName}" already exists at: ${resolved}`);
  }

  return resolved;
}

/**
 * Lists all active project names in `projects/`, excluding the golden template.
 * @returns {string[]}
 */
export function listProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        entry.name !== "PROJECT_TEMPLATE" &&
        !entry.name.startsWith("."),
    )
    .map((entry) => entry.name);
}

/**
 * Safely loads and parses a project's `project.config.json`.
 * @param {string} projectName
 * @returns {object}
 */
export function loadProjectConfig(projectName) {
  const projectDir = resolveProjectPath(projectName, { mustExist: true });
  const configPath = path.join(projectDir, "project.config.json");
  if (!fs.existsSync(configPath)) {
    throw new Error(
      `Missing project.config.json for project "${projectName}" at: ${configPath}`,
    );
  }
  try {
    return JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (err) {
    throw new Error(
      `Invalid JSON in project.config.json for "${projectName}": ${err.message}`,
    );
  }
}

/**
 * Safely writes a project's `project.config.json`.
 * @param {string} projectName
 * @param {object} config
 */
export function saveProjectConfig(projectName, config) {
  const projectDir = resolveProjectPath(projectName, { mustExist: true });
  const configPath = path.join(projectDir, "project.config.json");
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf8");
}

/**
 * Transitions a project to a new lifecycle state with timestamped history.
 * @param {string} projectName
 * @param {string} newState
 * @param {string} [note=""]
 * @returns {object} Updated config
 */
export function updateProjectState(projectName, newState, note = "") {
  if (!PROJECT_LIFECYCLE_STATES.includes(newState)) {
    throw new Error(
      `Invalid lifecycle state "${newState}". Allowed states: ${PROJECT_LIFECYCLE_STATES.join(", ")}`,
    );
  }

  const config = loadProjectConfig(projectName);
  const previousState = config.status || config.projectStatus || "DISCOVERING";

  config.status = newState;
  config.projectStatus = newState;

  if (!config.lifecycle) {
    config.lifecycle = {
      state: newState,
      history: [],
      userSignOff: null,
    };
  }

  config.lifecycle.state = newState;
  config.lifecycle.history.push({
    from: previousState,
    to: newState,
    timestamp: new Date().toISOString(),
    note: note || `State transitioned to ${newState}`,
  });

  saveProjectConfig(projectName, config);
  return config;
}

/**
 * Generates platform-specific configuration parameters based on target platform and framework.
 * Ensures web projects get web configs, mobile projects get mobile configs,
 * and programming language matches framework.
 */
export function getPlatformDefaults(
  platform = "ios",
  requestedFramework = null,
) {
  const p = (platform || "").toLowerCase();

  if (p === "web" || p === "desktop") {
    const framework = requestedFramework || "React";
    const language =
      framework.toLowerCase().includes("typescript") ||
      framework.toLowerCase().includes("react")
        ? "TypeScript"
        : "JavaScript";
    return {
      projectType: "web-app",
      targetPlatform: "Web (Responsive)",
      platformDetails: {
        type: "web",
        breakpoints: {
          desktop: "1440x900 px (12-column grid)",
          tabletLandscape: "1024x768 px (12-column grid)",
          tabletPortrait: "768x1024 px (8-column grid)",
          mobile: "393x852 px (4-column grid)",
        },
        guidelines: "Responsive Web / Modern CSS Flexbox & Grid",
      },
      development: {
        framework,
        language,
        externalRepoUrl: "",
        localWorkspacePath: "./source-code",
      },
      visualDirection: {
        typography: {
          displayFamily: "Inter, sans-serif",
          bodyFamily: "Inter, sans-serif",
          displaySize: "36px",
          headlineSize: "24px",
          bodySize: "16px",
          captionSize: "14px",
        },
        spatialGrid: "8pt",
      },
    };
  }

  if (p === "android") {
    const framework = requestedFramework || "Jetpack Compose";
    const language = framework.toLowerCase().includes("compose")
      ? "Kotlin"
      : "Java";
    return {
      projectType: "mobile-app",
      targetPlatform: "Android",
      platformDetails: {
        type: "mobile",
        viewport: "412x915 dp (Google Pixel 8/9 standard)",
        safeAreaInsets: {
          top: "24-48 dp (Status Bar)",
          bottom: "24-48 dp (Gesture Nav)",
        },
        minTouchTarget: "48x48 dp",
        guidelines: "Google Material Design 3",
      },
      development: {
        framework,
        language,
        externalRepoUrl: "",
        localWorkspacePath: "./source-code",
      },
      visualDirection: {
        typography: {
          displayFamily: "Roboto, Google Sans, sans-serif",
          bodyFamily: "Roboto, sans-serif",
          displaySize: "36px",
          headlineSize: "22px",
          bodySize: "16px",
          captionSize: "12px",
        },
        spatialGrid: "8pt",
      },
    };
  }

  if (p === "cross-platform" || p === "react-native" || p === "flutter") {
    const framework =
      requestedFramework ||
      (p.includes("flutter") ? "Flutter" : "React Native");
    const language = framework.toLowerCase().includes("flutter")
      ? "Dart"
      : "TypeScript";
    return {
      projectType: "mobile-app",
      targetPlatform: "Cross-Platform (iOS + Android)",
      platformDetails: {
        type: "mobile",
        canonicalViewport:
          "393x852 pt (iOS canonical, adapts to 412x915 dp Android)",
        minTouchTarget: "44x44 pt (iOS) / 48x48 dp (Android)",
        guidelines:
          "Canonical screen architecture with platform-specific safe area adaptations",
      },
      development: {
        framework,
        language,
        externalRepoUrl: "",
        localWorkspacePath: "./source-code",
      },
      visualDirection: {
        typography: {
          displayFamily: "System Font, sans-serif",
          bodyFamily: "System Font, sans-serif",
          displaySize: "34px",
          headlineSize: "20px",
          bodySize: "16px",
          captionSize: "12px",
        },
        spatialGrid: "8pt",
      },
    };
  }

  // Default: iOS
  const framework = requestedFramework || "SwiftUI";
  const language = framework.toLowerCase().includes("swift")
    ? "Swift"
    : "SwiftUI";
  return {
    projectType: "mobile-app",
    targetPlatform: "iOS",
    platformDetails: {
      type: "mobile",
      viewport: "393x852 pt (iPhone 16 Pro standard)",
      safeAreaInsets: {
        top: "59 pt (Dynamic Island / Status Bar)",
        bottom: "34 pt (Home Swipe Indicator)",
      },
      minTouchTarget: "44x44 pt",
      guidelines: "Apple Human Interface Guidelines (HIG)",
    },
    development: {
      framework,
      language,
      externalRepoUrl: "",
      localWorkspacePath: "./source-code",
    },
    visualDirection: {
      typography: {
        displayFamily: "SF Pro, -apple-system, sans-serif",
        bodyFamily: "SF Pro, -apple-system, sans-serif",
        displaySize: "34px",
        headlineSize: "20px",
        bodySize: "16px",
        captionSize: "12px",
      },
      spatialGrid: "8pt",
    },
  };
}
