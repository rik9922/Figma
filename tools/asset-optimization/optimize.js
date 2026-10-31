#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import sharp from "sharp";

/**
 * Mobile Asset Optimizer Tool
 * - Cleans and optimizes SVG assets exported from Figma using SVGO
 * - Generates @1x, @2x, and @3x mobile assets using Sharp
 * - Converts and compresses raster images (JPG/PNG to WebP/PNG)
 */

export async function optimizeSvg(inputSvgPath, outputSvgPath) {
  const rawSvg = fs.readFileSync(inputSvgPath, "utf8");
  const result = optimize(rawSvg, {
    multipass: true,
    plugins: [
      "preset-default",
      "removeDimensions",
      {
        name: "prefixIds",
        params: { prefix: path.basename(inputSvgPath, ".svg") },
      },
    ],
  });

  const outDir = path.dirname(outputSvgPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(outputSvgPath, result.data, "utf8");
  return {
    originalSize: rawSvg.length,
    optimizedSize: result.data.length,
    savings: `${Math.round((1 - result.data.length / rawSvg.length) * 100)}%`,
  };
}

export async function generateMobileRasterScales(
  inputSvgOrImgPath,
  outputDir,
  baseName,
  baseWidth = 24,
  baseHeight = 24,
) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const scales = [
    { scale: 1, suffix: "@1x" },
    { scale: 2, suffix: "@2x" },
    { scale: 3, suffix: "@3x" },
  ];

  const results = [];
  for (const { scale, suffix } of scales) {
    const targetWidth = baseWidth * scale;
    const targetHeight = baseHeight * scale;
    const outPath = path.join(outputDir, `${baseName}${suffix}.png`);

    await sharp(inputSvgOrImgPath)
      .resize(targetWidth, targetHeight)
      .png({ quality: 90 })
      .toFile(outPath);

    results.push({
      scale: `${scale}x`,
      dimensions: `${targetWidth}x${targetHeight}`,
      file: outPath,
    });
  }

  return results;
}

export async function compressRaster(inputPath, outputPath, { quality = 85, format = "webp" } = {}) {
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let transformer = sharp(inputPath);
  if (format === "webp") {
    transformer = transformer.webp({ quality });
  } else if (format === "png") {
    transformer = transformer.png({ quality, compressionLevel: 9 });
  } else if (format === "jpeg" || format === "jpg") {
    transformer = transformer.jpeg({ quality });
  }

  await transformer.toFile(outputPath);
  const originalSize = fs.statSync(inputPath).size;
  const optimizedSize = fs.statSync(outputPath).size;

  return {
    originalSize,
    optimizedSize,
    savings: `${Math.round((1 - optimizedSize / originalSize) * 100)}%`,
  };
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith("optimize.js")) {
  const [,, command, input, output] = process.argv;
  if (!command || !input) {
    console.log("Usage: node optimize.js <svg|raster|scales> <input-file> [output-file]");
    process.exit(0);
  }
  (async () => {
    try {
      if (command === "svg") {
        const res = await optimizeSvg(input, output || input);
        console.log("SVG Optimized:", res);
      } else if (command === "raster") {
        const res = await compressRaster(input, output || input);
        console.log("Raster Compressed:", res);
      } else if (command === "scales") {
        const baseName = path.basename(input, path.extname(input));
        const res = await generateMobileRasterScales(input, output || "./scales", baseName);
        console.log("Scales Generated:", res);
      }
    } catch (err) {
      console.error("Optimization failed:", err.message);
      process.exit(1);
    }
  })();
}

