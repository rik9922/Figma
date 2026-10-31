#!/usr/bin/env node
import fs from "fs";
import path from "path";

/**
 * AI Asset Generation & Licensing Tracking Tool
 * Manages asset generation briefs, prompt formulation, directory placement,
 * and strict commercial license verification for project-specific asset workflows.
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

export const LICENSE_STATUSES = [
  "VERIFIED_COMMERCIAL_USE",
  "VERIFIED_NONCOMMERCIAL_ONLY",
  "RESTRICTED",
  "UNKNOWN",
  "PENDING_VERIFICATION",
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
  provider = "Antigravity AI",
  model = "Imagen 3",
  modelVersion = "3.0",
  providerTermsUrl = "https://cloud.google.com/terms",
  modelLicense = "Google Terms of Service",
  commercialStatus = "PENDING_VERIFICATION",
  attributionRequired = false,
  restrictions = "None verified yet",
}) {
  if (!ASSET_CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category "${category}". Must be one of: ${ASSET_CATEGORIES.join(", ")}`,
    );
  }

  if (!LICENSE_STATUSES.includes(commercialStatus)) {
    throw new Error(
      `Invalid license status "${commercialStatus}". Must be one of: ${LICENSE_STATUSES.join(", ")}`,
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
    provider,
    model,
    modelVersion,
    generationDate: new Date().toISOString(),
    providerTermsUrl,
    modelLicense,
    commercialStatus,
    attributionRequired,
    restrictions,
  };
}

export function logAssetToManifest(manifestPath, assetRecord) {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest not found at: ${manifestPath}`);
  }

  let content = fs.readFileSync(manifestPath, "utf8");
  const tableRow = `| \`${assetRecord.id}\` | \`${assetRecord.name}\` | ${assetRecord.category} | ${assetRecord.intendedScreen} | ${assetRecord.dimensions} | ${assetRecord.format.toUpperCase()} | ${assetRecord.provider} (${assetRecord.model}) | \`${assetRecord.status}\` | \`${assetRecord.commercialStatus}\` | ${assetRecord.figmaNode || "—"} |\n`;

  // Insert into table if present
  if (content.includes("## Detailed Asset Records")) {
    content = content.replace(
      "## Detailed Asset Records",
      `${tableRow}\n## Detailed Asset Records`,
    );
  } else {
    content += `\n${tableRow}`;
  }

  const detailBlock = `
### Record: \`${assetRecord.id}\` (${assetRecord.name})
- **File Location**: \`${assetRecord.filePath || "assets/generated/" + assetRecord.category + "/" + assetRecord.name + "." + assetRecord.format}\`
- **Intended Usage**: ${assetRecord.intendedScreen} — ${assetRecord.description}
- **Visual Style**: ${assetRecord.style}
- **Palette**: ${assetRecord.palette}
- **Provider**: ${assetRecord.provider}
- **Model**: ${assetRecord.model} (${assetRecord.modelVersion || "N/A"})
- **Generation Date**: ${assetRecord.generationDate || new Date().toISOString()}
- **Provider Terms**: ${assetRecord.providerTermsUrl || "Pending verification"}
- **Model License**: ${assetRecord.modelLicense || "Pending verification"}
- **Commercial Use Permission**: \`${assetRecord.commercialStatus || "PENDING_VERIFICATION"}\`
- **Attribution Required**: ${assetRecord.attributionRequired ? "Yes" : "No"}
- **Additional Restrictions**: ${assetRecord.restrictions || "None specified"}
- **Workflow Approval Status**: \`${assetRecord.status}\`
`;
  content += detailBlock;

  fs.writeFileSync(manifestPath, content, "utf8");
  return true;
}

// CLI info helper
if (process.argv[1] && process.argv[1].endsWith("generate-asset.js")) {
  console.log("AI Asset Generation & Licensing Helper loaded.");
  console.log("Categories supported:", ASSET_CATEGORIES.join(", "));
  console.log("License Statuses:", LICENSE_STATUSES.join(", "));
}
