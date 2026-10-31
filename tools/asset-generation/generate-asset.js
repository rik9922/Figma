#!/usr/bin/env node
import fs from "fs";
import path from "path";

/**
 * AI Asset Generation Tool
 * Manages asset generation briefs, prompt formulation, and directory placement
 * for project-specific asset workflows.
 */

export const ASSET_CATEGORIES = [
  "onboarding",
  "illustrations",
  "backgrounds",
  "photography",
  "avatars",
  "branding",
  "decorative",
];

export function createAssetBrief({
  id,
  name,
  category,
  intendedScreen,
  description,
  style,
  palette,
  dimensions = "1024x1024",
  format = "png",
}) {
  if (!ASSET_CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category "${category}". Must be one of: ${ASSET_CATEGORIES.join(", ")}`,
    );
  }

  return {
    id,
    name,
    category,
    intendedScreen,
    description,
    style,
    palette,
    dimensions,
    format,
    status: "PENDING_REVIEW",
    createdAt: new Date().toISOString(),
  };
}

export function logAssetToManifest(manifestPath, assetRecord) {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest not found at: ${manifestPath}`);
  }

  let content = fs.readFileSync(manifestPath, "utf8");
  const tableRow = `| \`${assetRecord.id}\` | \`${assetRecord.name}\` | ${assetRecord.category} | ${assetRecord.intendedScreen} | ${assetRecord.dimensions} | ${assetRecord.format.toUpperCase()} | ${assetRecord.tool || "Antigravity AI"} | \`${assetRecord.status}\` | ${assetRecord.figmaNode || "—"} |\n`;

  // Insert before detailed records if present
  if (content.includes("## Detailed Asset Records")) {
    content = content.replace("## Detailed Asset Records", `${tableRow}\n## Detailed Asset Records`);
  } else {
    content += `\n${tableRow}`;
  }

  const detailBlock = `
### Record: \`${assetRecord.id}\` (${assetRecord.name})
- **File Location**: \`${assetRecord.filePath || "assets/generated/" + assetRecord.category + "/" + assetRecord.name + "." + assetRecord.format}\`
- **Intended Usage**: ${assetRecord.intendedScreen} — ${assetRecord.description}
- **Visual Style**: ${assetRecord.style}
- **Palette**: ${assetRecord.palette}
- **Licensing**: Royalty-free commercial use
- **Status**: \`${assetRecord.status}\`
`;
  content += detailBlock;

  fs.writeFileSync(manifestPath, content, "utf8");
  return true;
}

// CLI info helper
if (process.argv[1] && process.argv[1].endsWith("generate-asset.js")) {
  console.log("AI Asset Generation Helper loaded.");
  console.log("Categories supported:", ASSET_CATEGORIES.join(", "));
}

