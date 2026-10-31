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

// Extract all color values (supports strings, objects, and aliases)
function extractColors(obj, prefix = "") {
  let colors = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object") {
      if (typeof v.value === "string") {
        colors[`${prefix}${k}`] = v.value;
      } else {
        Object.assign(colors, extractColors(v, `${prefix}${k}.`));
      }
    } else if (typeof v === "string") {
      colors[`${prefix}${k}`] = v;
    }
  }
  return colors;
}

const rawColors = extractColors(raw.color || raw);

// Resolve aliases (e.g. "{color.brand.primary}" or "brand.primary")
function resolveColor(val, depth = 0) {
  if (!val || depth > 5) return val;
  if (typeof val !== "string") return val;
  if (val.startsWith("#")) return val;
  const cleaned = val.replace(/^\{/, "").replace(/\}$/, "");
  if (rawColors[cleaned]) return resolveColor(rawColors[cleaned], depth + 1);
  const withoutPrefix = cleaned.replace(/^color\./, "");
  if (rawColors[withoutPrefix])
    return resolveColor(rawColors[withoutPrefix], depth + 1);
  return val;
}

const colors = {};
for (const [k, v] of Object.entries(rawColors)) {
  const resolved = resolveColor(v);
  if (typeof resolved === "string" && resolved.startsWith("#")) {
    colors[k] = resolved;
  }
}

console.log(
  `- Discovered ${Object.keys(colors).length} resolved color token definitions.`,
);

// Generic Semantic Role Discovery
const textPrimary =
  colors["text.primary"] ||
  colors["text.base"] ||
  colors["text.default"] ||
  colors["ink.base"] ||
  colors["color.text"] ||
  colors["text"] ||
  "#000000";

const surfacePrimary =
  colors["surface.background"] ||
  colors["paper.ground"] ||
  colors["ground.base"] ||
  colors["surface.page"] ||
  colors["surface"] ||
  colors["background"] ||
  "#FFFFFF";

const textSecondary =
  colors["text.secondary"] ||
  colors["text.muted"] ||
  colors["text.subtle"] ||
  colors["ink.secondary"] ||
  colors["text.caption"];

const brandPrimary =
  colors["brand.primary"] ||
  colors["accent.citrine"] ||
  colors["accent"] ||
  colors["brand"] ||
  colors["color.primary"];

const darkSurface =
  colors["ink.base"] ||
  colors["surface.dark"] ||
  colors["background.dark"] ||
  colors["surface.inverse"];

const textInverse =
  colors["text.inverse"] ||
  colors["text.white"] ||
  colors["text.onBrand"] ||
  colors["text.light"];

const feedbackError =
  colors["feedback.error"] ||
  colors["color.error"] ||
  colors["error.base"] ||
  colors["error"];

// Check common contrast pairs if present
const testPairs = [];

// 1. Primary Text vs Primary Surface (WCAG AA Body text: 4.5:1)
testPairs.push({
  name: "Primary Text vs Primary Surface",
  fg: textPrimary,
  bg: surfacePrimary,
  req: 4.5,
});

// 2. Secondary Text vs Primary Surface (WCAG AA Body text: 4.5:1)
if (textSecondary) {
  testPairs.push({
    name: "Secondary Text vs Primary Surface",
    fg: textSecondary,
    bg: surfacePrimary,
    req: 4.5,
  });
}

// 3. Brand / Accent vs Dark Surface or Primary Surface (UI components / graphics: 3.0:1)
if (brandPrimary) {
  if (darkSurface && darkSurface !== surfacePrimary) {
    testPairs.push({
      name: "Accent / Brand vs Dark Surface",
      fg: brandPrimary,
      bg: darkSurface,
      req: 3.0,
    });
  } else {
    testPairs.push({
      name: "Accent / Brand vs Primary Surface",
      fg: brandPrimary,
      bg: surfacePrimary,
      req: 3.0,
    });
  }
}

// 4. Text on Brand / Accent
if (brandPrimary) {
  const brandLum = luminance(hexToRgb(brandPrimary));
  const isBrandDark = brandLum < 0.4;
  const onBrandText = isBrandDark ? textInverse || "#FFFFFF" : textPrimary;
  testPairs.push({
    name: isBrandDark
      ? "Inverse Text vs Dark Brand"
      : "Dark Text vs Light Brand",
    fg: onBrandText,
    bg: brandPrimary,
    req: 4.5,
  });
}

// 5. Inverse Text vs Dark Surface
if (textInverse && darkSurface && darkSurface !== brandPrimary) {
  testPairs.push({
    name: "Inverse Text vs Dark Container / Surface",
    fg: textInverse,
    bg: darkSurface,
    req: 4.5,
  });
}

// 6. Feedback Error vs Surface (WCAG AA: 3.0:1 for graphical/boundary, 4.5:1 for text)
if (feedbackError) {
  testPairs.push({
    name: "Feedback Error vs Primary Surface",
    fg: feedbackError,
    bg: surfacePrimary,
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
