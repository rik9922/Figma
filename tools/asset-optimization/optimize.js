#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import sharp from "sharp";

/**
 * Safe Asset Optimizer Tool
 * - Cleans and optimizes SVG assets exported from Figma using SVGO
 * - Generates @1x, @2x, and @3x mobile assets using Sharp
 * - Converts and compresses raster images (JPG/PNG to WebP/PNG)
 *
 * SAFETY GUARANTEE: Never overwrites source assets by default.
 * Separate input and output paths are strictly required unless explicit
 * authorization (--allow-overwrite) is granted.
 */

export async function optimizeSvg(
  inputSvgPath,
  outputSvgPath,
  { allowOverwrite = false } = {},
) {
  if (!fs.existsSync(inputSvgPath)) {
    throw new Error(`Input SVG file does not exist: ${inputSvgPath}`);
  }

  if (!outputSvgPath) {
    throw new Error(
      "Output path is required. Overwriting source assets by default is strictly prohibited.",
    );
  }

  const resolvedInput = path.resolve(inputSvgPath);
  const resolvedOutput = path.resolve(outputSvgPath);

  if (resolvedInput === resolvedOutput && !allowOverwrite) {
    throw new Error(
      `Destructive overwrite blocked: Output path matches source asset "${inputSvgPath}". To authorize overwriting, explicitly pass { allowOverwrite: true } or --allow-overwrite.`,
    );
  }

  const rawSvg = fs.readFileSync(resolvedInput, "utf8");
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

  const outDir = path.dirname(resolvedOutput);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(resolvedOutput, result.data, "utf8");
  return {
    source: resolvedInput,
    output: resolvedOutput,
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
  if (!fs.existsSync(inputSvgOrImgPath)) {
    throw new Error(`Input asset file does not exist: ${inputSvgOrImgPath}`);
  }

  if (!outputDir) {
    throw new Error(
      "Output directory is required for multi-scale asset generation.",
    );
  }

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

export async function compressRaster(
  inputPath,
  outputPath,
  { quality = 85, format = "webp", allowOverwrite = false } = {},
) {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input raster file does not exist: ${inputPath}`);
  }

  if (!outputPath) {
    throw new Error(
      "Output path is required. Overwriting source assets by default is strictly prohibited.",
    );
  }

  const resolvedInput = path.resolve(inputPath);
  const resolvedOutput = path.resolve(outputPath);

  if (resolvedInput === resolvedOutput && !allowOverwrite) {
    throw new Error(
      `Destructive overwrite blocked: Output path matches source asset "${inputPath}". To authorize overwriting, explicitly pass { allowOverwrite: true } or --allow-overwrite.`,
    );
  }

  const outDir = path.dirname(resolvedOutput);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let transformer = sharp(resolvedInput);
  if (format === "webp") {
    transformer = transformer.webp({ quality });
  } else if (format === "png") {
    transformer = transformer.png({ quality, compressionLevel: 9 });
  } else if (format === "jpeg" || format === "jpg") {
    transformer = transformer.jpeg({ quality });
  }

  await transformer.toFile(resolvedOutput);
  const originalSize = fs.statSync(resolvedInput).size;
  const optimizedSize = fs.statSync(resolvedOutput).size;

  return {
    source: resolvedInput,
    output: resolvedOutput,
    originalSize,
    optimizedSize,
    savings: `${Math.round((1 - optimizedSize / originalSize) * 100)}%`,
  };
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith("optimize.js")) {
  const args = process.argv.slice(2);
  const allowOverwrite = args.includes("--allow-overwrite");
  const nonFlagArgs = args.filter((a) => !a.startsWith("--"));
  const [command, input, output] = nonFlagArgs;

  if (!command || !input) {
    console.log(
      "Usage: node optimize.js <svg|raster|scales> <input-file> <output-file-or-dir> [--allow-overwrite]",
    );
    console.log(
      "Note: Source assets are protected against destructive overwriting by default.",
    );
    process.exit(0);
  }

  (async () => {
    try {
      if (command === "svg") {
        if (!output) {
          console.error(
            "❌ Error: Output path required. Overwriting source assets is blocked by default.",
          );
          process.exit(1);
        }
        const res = await optimizeSvg(input, output, { allowOverwrite });
        console.log("SVG Optimized:", res);
      } else if (command === "raster") {
        if (!output) {
          console.error(
            "❌ Error: Output path required. Overwriting source assets is blocked by default.",
          );
          process.exit(1);
        }
        const res = await compressRaster(input, output, { allowOverwrite });
        console.log("Raster Compressed:", res);
      } else if (command === "scales") {
        const outDir = output || "./scales";
        const baseName = path.basename(input, path.extname(input));
        const res = await generateMobileRasterScales(input, outDir, baseName);
        console.log("Scales Generated:", res);
      } else {
        console.error(`Unknown command: ${command}`);
        process.exit(1);
      }
    } catch (err) {
      console.error("Optimization failed:", err.message);
      process.exit(1);
    }
  })();
}
