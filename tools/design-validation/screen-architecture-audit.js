#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..", "..");
const PROJECTS_DIR = path.join(ROOT_DIR, "projects");

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Error: Project name is required.");
  console.log("Usage: node screen-architecture-audit.js <project-name>");
  process.exit(1);
}

const targetDir = path.join(PROJECTS_DIR, projectName);
const archFile = path.join(targetDir, "requirements", "SCREEN_ARCHITECTURE.md");

if (!fs.existsSync(archFile)) {
  console.error(`❌ Error: SCREEN_ARCHITECTURE.md not found at ${archFile}`);
  process.exit(1);
}

console.log(`📐 Auditing Screen Architecture for "${projectName}"...`);
const content = fs.readFileSync(archFile, "utf8");

const errors = [];
const warnings = [];

// 1. Extract Screen IDs from table
const screenIdRegex = /\|\s*`([A-Z]{2,6}-[0-9]{2}(?:-[A-Z]+)?)`\s*\|/g;
const discoveredIds = new Set();
let match;
while ((match = screenIdRegex.exec(content)) !== null) {
  discoveredIds.add(match[1]);
}

console.log(`- Discovered ${discoveredIds.size} Screen & State IDs:`, Array.from(discoveredIds).join(", "));

if (discoveredIds.size === 0) {
  errors.push("No standardized Screen IDs (e.g. `AUTH-01`, `HOME-01`) found in table.");
}

// 2. Check for required edge states
const hasEmptyState = Array.from(discoveredIds).some((id) => id.includes("EMPTY"));
const hasLoadingState = Array.from(discoveredIds).some((id) => id.includes("LOADING"));
const hasErrorState = Array.from(discoveredIds).some((id) => id.includes("ERROR") || id.includes("FAILED"));

if (!hasEmptyState) warnings.push("Missing documented EMPTY state (e.g. `[MODULE]-EMPTY`).");
if (!hasLoadingState) warnings.push("Missing documented LOADING / SKELETON state (e.g. `[MODULE]-LOADING`).");
if (!hasErrorState) warnings.push("Missing documented ERROR / FAILURE state (e.g. `[MODULE]-ERROR`).");

// 3. Verify Motion Specification coverage
if (!content.includes("Motion & Animation Specifications")) {
  warnings.push("Missing dedicated 'Motion & Animation Specifications' section.");
} else {
  if (!content.includes("Reduced-Motion")) {
    errors.push("Motion specs must include accessibility Reduced-Motion alternatives.");
  }
}

// 4. Verify Figma Canvas Structure
if (!content.includes("Proposed Figma Canvas Layout")) {
  warnings.push("Missing 'Proposed Figma Canvas Layout' section.");
}

console.log("-----------------------------------------");
if (errors.length === 0) {
  console.log(`✅ Screen Architecture audit PASSED for "${projectName}".`);
  if (warnings.length > 0) {
    console.log("⚠️  Recommendations:");
    warnings.forEach((w) => console.log(`   - ${w}`));
  }
  process.exit(0);
} else {
  console.error(`❌ Screen Architecture audit FAILED with ${errors.length} error(s):`);
  errors.forEach((e) => console.error(`   - ${e}`));
  process.exit(1);
}

