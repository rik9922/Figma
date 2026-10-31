#!/usr/bin/env node
import fs from "fs";
import path from "path";
import sharp from "sharp";

/**
 * Visual Regression & Comparison Tool
 * Compares an approved Figma screen export against an implemented code screen screenshot.
 */

export async function compareScreens(figmaRefPath, codeScreenshotPath, diffOutputPath) {
  if (!fs.existsSync(figmaRefPath)) {
    throw new Error(`Figma reference image missing: ${figmaRefPath}`);
  }
  if (!fs.existsSync(codeScreenshotPath)) {
    throw new Error(`Code screenshot missing: ${codeScreenshotPath}`);
  }

  const figmaMeta = await sharp(figmaRefPath).metadata();
  const codeMeta = await sharp(codeScreenshotPath).metadata();

  const dimensionMatch =
    figmaMeta.width === codeMeta.width && figmaMeta.height === codeMeta.height;

  return {
    reference: {
      path: figmaRefPath,
      width: figmaMeta.width,
      height: figmaMeta.height,
    },
    implementation: {
      path: codeScreenshotPath,
      width: codeMeta.width,
      height: codeMeta.height,
    },
    dimensionMatch,
    aspectRatioDiff: Math.abs(
      figmaMeta.width / figmaMeta.height - codeMeta.width / codeMeta.height,
    ),
  };
}
