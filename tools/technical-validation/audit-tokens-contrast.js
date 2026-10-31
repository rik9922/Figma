#!/usr/bin/env node
/**
 * Technical WCAG 2.1 AA Token Contrast Checker
 * Evaluates foreground/background color token contrast ratios mathematically.
 *
 * NOTE: This is a technical color math calculator, NOT an automated design approval gate.
 * The human user is the sole design reviewer and approval authority.
 * Usage: node tools/technical-validation/audit-tokens-contrast.js <project-name>
 */

import fs from "fs";
import path from "path";
import { resolveProjectPath } from "../common/project-utils.js";

const projectName = process.argv[2];
if (!projectName) {
  console.error("❌ Error: Project name is required.");
  console.log(
    "Usage: node tools/technical-validation/audit-tokens-contrast.js <project-name>",
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

const tokensPath = path.join(targetDir, "design-system", "TOKENS.json");
if (!fs.existsSync(tokensPath)) {
  console.error(`❌ Error: TOKENS.json not found at: ${tokensPath}`);
  process.exit(1);
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  if (clean.length === 3) {
    return [
      parseInt(clean[0] + clean[0], 16),
      parseInt(clean[1] + clean[1], 16),
      parseInt(clean[2] + clean[2], 16),
    ];
  }
  const num = parseInt(clean.slice(0, 6), 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function luminance([r, g, b]) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRatio(hex1, hex2) {
  const lum1 = luminance(hexToRgb(hex1));
  const lum2 = luminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

console.log(`🎨 Calculating token contrast ratios for "${projectName}"...`);
const raw = JSON.parse(fs.readFileSync(tokensPath, "utf8"));

// Extract all color values
function extractColors(obj, prefix = "") {
  let colors = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object") {
      if (v.value && (v.type === "color" || v.value.startsWith("#"))) {
        colors[`${prefix}${k}`] = v.value;
      } else {
        Object.assign(colors, extractColors(v, `${prefix}${k}.`));
      }
    }
  }
  return colors;
}

const colors = extractColors(raw.color || raw);
console.log(
  `- Discovered ${Object.keys(colors).length} color token definitions.`,
);

// Check common contrast pairs if present
const testPairs = [];
const textCol =
  colors["text.primary"] ||
  colors["text.primary.value"] ||
  colors["text"] ||
  "#000000";
const bgCol =
  colors["paper.ground"] ||
  colors["surface.background"] ||
  colors["surface"] ||
  "#FFFFFF";

testPairs.push({
  name: "Primary Text vs Primary Surface",
  fg: textCol,
  bg: bgCol,
  req: 4.5,
});

if (
  colors["text.secondary"] &&
  (colors["surface.background"] || colors["surface"])
) {
  testPairs.push({
    name: "Secondary Text vs Surface",
    fg: colors["text.secondary"],
    bg: colors["surface.background"] || colors["surface"] || "#FFFFFF",
    req: 4.5,
  });
}

if (colors["accent.citrine"] && colors["ink.base"]) {
  testPairs.push({
    name: "Citrine Accent vs Obsidian Ink",
    fg: colors["accent.citrine"],
    bg: colors["ink.base"],
    req: 3.0,
  });
}

let failed = 0;
for (const pair of testPairs) {
  const ratio = parseFloat(contrastRatio(pair.fg, pair.bg).toFixed(2));
  const pass = ratio >= pair.req;
  console.log(
    `  ${pass ? "✅" : "⚠️"} ${pair.name} (${pair.fg} on ${pair.bg}): ${ratio}:1 (Reference standard: ${pair.req}:1)`,
  );
  if (!pass) failed++;
}

if (failed === 0) {
  console.log(
    "✅ All tested token contrast pairs satisfy WCAG 2.1 AA mathematical thresholds.\n",
  );
  process.exit(0);
} else {
  console.log(
    `⚠️  ${failed} token pair(s) fall below recommended WCAG 2.1 AA ratios. Review tokens before finalizing visual direction.\n`,
  );
  process.exit(0);
}
