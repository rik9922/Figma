#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { resolveProjectPath } from "../common/project-utils.js";

/**
 * Technical Screen Architecture Auditor
 * Validates syntax, standardized Screen IDs, edge states, and canvas structure
 * within a project's SCREEN_ARCHITECTURE.md.
 *
 * NOTE: This is a technical format validator, NOT an automated design approval gate.
 * The human user is the sole design reviewer and approval authority.
 */

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Error: Project name is required.");
  console.log(
    "Usage: node tools/technical-validation/screen-architecture-audit.js <project-name>",
  );
  process.exit(1);
}

let targetDir;
try {
  targetDir = resolveProjectPath(projectName, { mustExist: true });
} catch (err) {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
}

const archFile = path.join(targetDir, "requirements", "SCREEN_ARCHITECTURE.md");

if (!fs.existsSync(archFile)) {
  console.error(`❌ Error: SCREEN_ARCHITECTURE.md not found at ${archFile}`);
  process.exit(1);
}

console.log(
  `📐 Auditing Screen Architecture technical structure for "${projectName}"...`,
);
const content = fs.readFileSync(archFile, "utf8");

const errors = [];
const warnings = [];

// 1. Extract Screen IDs from markdown tables: e.g. `ONB-01`, `AUTH-01`, `MAIN-01`, `SCR-01`
const screenIdRegex = /\|\s*`([A-Z0-9_-]+)`\s*\|/g;
const discoveredIds = new Set();
let match;
while ((match = screenIdRegex.exec(content)) !== null) {
  const id = match[1];
  // Filter out non-screen ID table cells (e.g. MOT-01, FEAT-01)
  if (
    !id.startsWith("MOT-") &&
    !id.startsWith("FEAT-") &&
    !id.startsWith("REQ-")
  ) {
    discoveredIds.add(id);
  }
}

console.log(
  `- Discovered ${discoveredIds.size} Screen & State IDs:`,
  Array.from(discoveredIds).join(", "),
);

if (discoveredIds.size === 0) {
  errors.push(
    "No standardized Screen IDs (e.g. `ONB-01`, `MAIN-01`) found in tables.",
  );
}

// 2. Check for documented edge states
const hasEmptyState = Array.from(discoveredIds).some((id) =>
  id.includes("EMPTY"),
);
const hasLoadingState = Array.from(discoveredIds).some(
  (id) => id.includes("LOADING") || id.includes("SKELETON"),
);
const hasErrorState = Array.from(discoveredIds).some(
  (id) => id.includes("ERROR") || id.includes("FAILED"),
);

if (!hasEmptyState)
  warnings.push("Consider documenting an EMPTY state (e.g. `[MODULE]-EMPTY`).");
if (!hasLoadingState)
  warnings.push(
    "Consider documenting a LOADING / SKELETON state (e.g. `[MODULE]-LOADING`).",
  );
if (!hasErrorState)
  warnings.push(
    "Consider documenting an ERROR / FAILURE state (e.g. `[MODULE]-ERROR`).",
  );

// 3. Technical check for Figma Canvas Organization section
if (
  !content.includes("Proposed Figma Canvas Layout") &&
  !content.includes("Canvas Layout")
) {
  warnings.push(
    "Missing 'Proposed Figma Canvas Layout' section in specification.",
  );
}

console.log("-----------------------------------------");
if (errors.length === 0) {
  console.log(
    `✅ Technical architecture structure is VALID for "${projectName}".`,
  );
  if (warnings.length > 0) {
    console.log("ℹ️  Recommendations for design planning:");
    warnings.forEach((w) => console.log(`   - ${w}`));
  }
  process.exit(0);
} else {
  console.error(
    `❌ Architecture technical validation found ${errors.length} error(s):`,
  );
  errors.forEach((e) => console.error(`   - ${e}`));
  process.exit(1);
}
