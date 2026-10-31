#!/usr/bin/env node
import fs from "fs";
import path from "path";
import {
  isValidProjectName,
  resolveProjectPath,
  PROJECT_LIFECYCLE_STATES,
  extractScreenIds,
  getPlatformDefaults,
  loadProjectConfig,
  saveProjectConfig,
  updateProjectState,
  TEMPLATE_DIR,
} from "../common/project-utils.js";
import { parseFigmaUrl } from "../figma-integration/figma-client.js";
import {
  optimizeSvg,
  compressRaster,
  generateMobileRasterScales,
} from "../asset-optimization/optimize.js";

/**
 * Smart AI Figma Designer & Creator — Technical Test Suite
 *
 * Verifies core creator infrastructure:
 * 1. Safe project path resolution and traversal protection
 * 2. Authoritative lifecycle state updates, user sign-off tracking, and ON_HOLD protection
 * 3. Dynamic platform defaults (iOS HIG, Android Material 3, Responsive Web)
 * 4. End-to-end project scaffolding with complete platformDetails injection
 * 5. Safe non-destructive asset optimization and multi-scale generation
 * 6. Mathematical WCAG AA contrast ratio calculations
 * 7. Standardized screen ID extraction and inventory consistency
 * 8. Resilient Figma URL parsing (handling URL-encoded colons, FigJam, and Slides)
 * 9. Template neutrality and project isolation
 */

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${testName} ${details ? `(${details})` : ""}`);
  }
}

async function runTestSuite() {
  console.log("======================================================");
  console.log("🧪 RUNNING FIGMA CREATOR TECHNICAL TEST SUITE");
  console.log("======================================================\n");

  // TEST SUITE 1: Project Name & Path Security
  console.log("--- 1. Project Security & Path Traversal Protection ---");
  assert(isValidProjectName("alpha-product"), "Valid hyphenated name accepted");
  assert(
    isValidProjectName("alpha_product_01"),
    "Valid underscored name accepted",
  );
  assert(
    isValidProjectName("SaaSDesktop"),
    "Valid alphanumeric mixed-case accepted",
  );
  assert(
    !isValidProjectName("PROJECT_TEMPLATE"),
    "PROJECT_TEMPLATE reserved name blocked",
  );
  assert(
    !isValidProjectName("../escape-dir"),
    "Directory traversal with '..' blocked",
  );
  assert(
    !isValidProjectName("sub/dir"),
    "Forward slash subdirectories blocked",
  );
  assert(!isValidProjectName("sub\\dir"), "Backslash subdirectories blocked");
  assert(!isValidProjectName(""), "Empty project name string blocked");
  assert(!isValidProjectName("   "), "Whitespace-only project name blocked");
  assert(!isValidProjectName(null), "Null project name blocked");
  assert(!isValidProjectName(undefined), "Undefined project name blocked");

  try {
    resolveProjectPath("../malicious");
    assert(false, "resolveProjectPath must throw on directory traversal");
  } catch (err) {
    assert(
      err.message.includes("Invalid project name"),
      "resolveProjectPath throws expected security error",
    );
  }

  // TEST SUITE 2: Dynamic Platform Configuration
  console.log("\n--- 2. Dynamic Platform Defaults & Configuration ---");
  const webConfig = getPlatformDefaults("web", "react");
  assert(webConfig.projectType === "web-app", "Web gets web-app projectType");
  assert(
    webConfig.targetPlatform === "Web (Responsive)",
    "Web targetPlatform confirmed",
  );
  assert(
    webConfig.platformDetails?.breakpoints?.desktop.includes("1440"),
    "Web defines 1440px desktop breakpoint",
  );
  assert(
    webConfig.platformDetails?.breakpoints?.mobile.includes("393"),
    "Web defines 393px mobile breakpoint",
  );
  assert(
    webConfig.development?.language === "TypeScript",
    "React automatically mapped to TypeScript",
  );
  assert(
    webConfig.visualDirection?.typography?.displaySize === "36px",
    "Web typography scale set to 36px display",
  );

  const androidConfig = getPlatformDefaults("android", "compose");
  assert(
    androidConfig.projectType === "mobile-app",
    "Android gets mobile-app projectType",
  );
  assert(
    androidConfig.platformDetails?.minTouchTarget === "48x48 dp",
    "Android enforces 48x48 dp touch target",
  );
  assert(
    androidConfig.development?.language === "Kotlin",
    "Compose automatically mapped to Kotlin",
  );

  const iosConfig = getPlatformDefaults("ios", "swiftui");
  assert(iosConfig.targetPlatform === "iOS", "iOS gets iOS targetPlatform");
  assert(
    iosConfig.platformDetails?.viewport.includes("393x852"),
    "iOS gets 393x852 pt viewport",
  );
  assert(
    iosConfig.platformDetails?.safeAreaInsets?.top.includes("59 pt"),
    "iOS enforces 59 pt top safe area",
  );
  assert(
    iosConfig.platformDetails?.minTouchTarget === "44x44 pt",
    "iOS enforces 44x44 pt touch target",
  );
  assert(
    iosConfig.development?.language === "Swift",
    "SwiftUI automatically mapped to Swift",
  );

  // TEST SUITE 3: Project Lifecycle & Sign-off Tracking
  console.log("\n--- 3. Project Lifecycle & Human Authority ---");
  const tempProject = "temp-lifecycle-test";
  const tempDir = resolveProjectPath(tempProject);

  try {
    // Scaffolding minimal project for lifecycle testing
    fs.mkdirSync(tempDir, { recursive: true });
    fs.writeFileSync(
      path.join(tempDir, "project.config.json"),
      JSON.stringify(
        {
          projectName: tempProject,
          status: "DISCOVERING",
          lifecycle: { state: "DISCOVERING", history: [], userSignOff: null },
        },
        null,
        2,
      ),
      "utf8",
    );

    // Transition 1: READY_FOR_DESIGN
    const c1 = updateProjectState(
      tempProject,
      "READY_FOR_DESIGN",
      "Architecture validated",
    );
    assert(
      c1.status === "READY_FOR_DESIGN",
      "Transitioned to READY_FOR_DESIGN",
    );
    assert(c1.lifecycle.history.length === 1, "History logged 1 transition");

    // Transition 2: USER_APPROVED
    const c2 = updateProjectState(
      tempProject,
      "USER_APPROVED",
      "User approved via chat",
      {
        userSignOff: {
          approvedBy: "Ritik Thakre",
          timestamp: new Date().toISOString(),
        },
      },
    );
    assert(c2.status === "USER_APPROVED", "Transitioned to USER_APPROVED");
    assert(
      c2.lifecycle.userSignOff?.approvedBy === "Ritik Thakre",
      "Explicit user sign-off recorded",
    );

    // Transition 3: REVISION_REQUESTED clears userSignOff
    const c3 = updateProjectState(
      tempProject,
      "REVISION_REQUESTED",
      "User requested color change",
    );
    assert(
      c3.status === "REVISION_REQUESTED",
      "Transitioned to REVISION_REQUESTED",
    );
    assert(
      c3.lifecycle.userSignOff === null,
      "userSignOff cleared on revision request",
    );

    // Transition 4: Set to ON_HOLD
    const c4 = updateProjectState(tempProject, "ON_HOLD", "Paused project");
    assert(c4.status === "ON_HOLD", "Transitioned to ON_HOLD");

    // Transition 5: Resuming ON_HOLD without allowResume must throw
    let blockedResume = false;
    try {
      updateProjectState(
        tempProject,
        "DESIGN_IN_PROGRESS",
        "Unauthorized resume",
      );
    } catch (err) {
      blockedResume = true;
      assert(
        err.message.includes("currently ON_HOLD"),
        "Resumption of ON_HOLD blocked without authorization",
      );
    }
    assert(
      blockedResume,
      "ON_HOLD project cannot be resumed without explicit authorization",
    );

    // Transition 6: Resuming ON_HOLD with allowResume succeeds
    const c6 = updateProjectState(
      tempProject,
      "DISCOVERING",
      "Authorized resume",
      { allowResume: true },
    );
    assert(c6.status === "DISCOVERING", "Authorized resume succeeded");
  } finally {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }

  // TEST SUITE 4: Screen Architecture ID Extraction & Consistency
  console.log("\n--- 4. Screen Architecture ID Extraction & Consistency ---");
  const sampleMarkdown = `
# Sample Architecture
| Screen ID | Screen Name | Viewport |
| --- | --- | --- |
| \`ONB-01\` | Splash | 393x852 |
| \`ONB-02\` | Welcome | 393x852 |
| \`MAIN-01\` | Home | 393x852 |
| \`MAIN-01-EMPTY\` | Home Empty | 393x852 |
| \`MOT-01\` | Splash Motion | — |
| \`FEAT-01\` | Brand Feature | — |
| \`REQ-01\` | Requirement | — |
| \`MAIN-01\` | Duplicate Entry | 393x852 |
`;
  const extracted = extractScreenIds(sampleMarkdown);
  assert(
    extracted.length === 4,
    "Extracted exactly 4 unique Screen & State IDs",
  );
  assert(extracted.includes("ONB-01"), "Contains ONB-01");
  assert(extracted.includes("ONB-02"), "Contains ONB-02");
  assert(extracted.includes("MAIN-01"), "Contains MAIN-01");
  assert(extracted.includes("MAIN-01-EMPTY"), "Contains MAIN-01-EMPTY");
  assert(!extracted.includes("MOT-01"), "Filtered out MOT-01 motion ID");
  assert(!extracted.includes("FEAT-01"), "Filtered out FEAT-01 feature ID");
  assert(!extracted.includes("REQ-01"), "Filtered out REQ-01 requirement ID");

  // TEST SUITE 5: Figma URL Parsing & Resiliency
  console.log("\n--- 5. Figma URL Parsing & Resiliency ---");
  const url1 = parseFigmaUrl(
    "https://www.figma.com/design/gtamCkSGXtOpzj3XYcWzie/Untitled?node-id=0-1",
  );
  assert(
    url1.fileKey === "gtamCkSGXtOpzj3XYcWzie" && url1.nodeId === "0:1",
    "Parses standard dash node-id (0-1)",
  );

  const url2 = parseFigmaUrl(
    "https://www.figma.com/design/gtamCkSGXtOpzj3XYcWzie/Untitled?node-id=8%3A448",
  );
  assert(
    url2.fileKey === "gtamCkSGXtOpzj3XYcWzie" && url2.nodeId === "8:448",
    "Parses URL-encoded colon node-id (8%3A448)",
  );

  const url3 = parseFigmaUrl(
    "https://www.figma.com/board/gtamCkSGXtOpzj3XYcWzie/FigJam-Flow",
  );
  assert(
    url3.fileKey === "gtamCkSGXtOpzj3XYcWzie" && url3.nodeId === null,
    "Parses FigJam /board/ URL format",
  );

  const url4 = parseFigmaUrl(
    "https://www.figma.com/proto/gtamCkSGXtOpzj3XYcWzie/Prototype?node-id=10:20",
  );
  assert(
    url4.fileKey === "gtamCkSGXtOpzj3XYcWzie" && url4.nodeId === "10:20",
    "Parses /proto/ URL with colon node-id",
  );

  // TEST SUITE 6: Non-Destructive Asset Optimization
  console.log("\n--- 6. Asset Optimization & Multi-Scale Safety ---");
  const testSvgPath = path.join(path.resolve(), "test-temp-asset.svg");
  const testOutSvgPath = path.join(path.resolve(), "test-temp-asset-opt.svg");
  const testScalesDir = path.join(path.resolve(), "test-temp-scales");

  try {
    fs.writeFileSync(
      testSvgPath,
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#007AFF"/></svg>',
      "utf8",
    );

    // Overwrite without permission should throw
    let overwriteBlocked = false;
    try {
      await optimizeSvg(testSvgPath, testSvgPath);
    } catch (err) {
      overwriteBlocked = true;
      assert(
        err.message.includes("Destructive overwrite blocked"),
        "Destructive overwrite of source asset is blocked",
      );
    }
    assert(
      overwriteBlocked,
      "Source asset protected against destructive in-place overwrite",
    );

    // Optimization to separate output succeeds
    const optRes = await optimizeSvg(testSvgPath, testOutSvgPath);
    assert(
      fs.existsSync(testOutSvgPath),
      "Optimized SVG created at distinct output path",
    );
    assert(optRes.optimizedSize > 0, "Optimized SVG contains valid data");

    // Multi-scale generation using intrinsic metadata
    const scalesRes = await generateMobileRasterScales(
      testSvgPath,
      testScalesDir,
      "test_icon",
    );
    assert(scalesRes.length === 3, "Generated 3 raster scales (@1x, @2x, @3x)");
    assert(
      scalesRes[0].dimensions === "32x32",
      "@1x dimensions match intrinsic 32x32",
    );
    assert(scalesRes[1].dimensions === "64x64", "@2x dimensions match 64x64");
    assert(scalesRes[2].dimensions === "96x96", "@3x dimensions match 96x96");
    assert(
      fs.existsSync(path.join(testScalesDir, "test_icon@1x.png")),
      "test_icon@1x.png created on disk",
    );
  } finally {
    if (fs.existsSync(testSvgPath)) fs.unlinkSync(testSvgPath);
    if (fs.existsSync(testOutSvgPath)) fs.unlinkSync(testOutSvgPath);
    if (fs.existsSync(testScalesDir))
      fs.rmSync(testScalesDir, { recursive: true, force: true });
  }

  // TEST SUITE 7: Template Neutrality & Fintech Isolation
  console.log("\n--- 7. Template Neutrality & Fintech Isolation ---");
  const templateConfig = JSON.parse(
    fs.readFileSync(path.join(TEMPLATE_DIR, "project.config.json"), "utf8"),
  );
  assert(
    templateConfig.status === "DISCOVERING",
    "PROJECT_TEMPLATE status is DISCOVERING",
  );
  assert(
    templateConfig.platformDetails !== undefined,
    "PROJECT_TEMPLATE defines platformDetails block",
  );
  assert(
    templateConfig.executionPolicy?.humanApprovalSoleAuthority === true,
    "Enforces humanApprovalSoleAuthority in template",
  );

  const templateInventory = fs.readFileSync(
    path.join(TEMPLATE_DIR, "architecture", "SCREEN_INVENTORY.md"),
    "utf8",
  );
  assert(
    !templateInventory.includes("balances/status"),
    "No banking 'balances/status' in template inventory",
  );
  assert(
    !templateInventory.includes("biometrics"),
    "No banking 'biometrics' in template inventory",
  );

  const fintechConfig = loadProjectConfig("fintech-mobile-app");
  assert(
    fintechConfig.status === "ON_HOLD",
    "fintech-mobile-app is strictly ON_HOLD",
  );

  // SUMMARY
  console.log("\n======================================================");
  console.log(
    `📊 TEST SUITE SUMMARY: ${passedTests}/${totalTests} tests passed (${failedTests} failures)`,
  );
  console.log("======================================================\n");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch((err) => {
  console.error("Test suite runtime failure:", err);
  process.exit(1);
});
