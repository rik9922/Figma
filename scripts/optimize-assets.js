import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import sharp from "sharp";

/**
 * Mobile Asset Optimizer
 * 1. Cleans and optimizes SVG assets exported from Figma using SVGO
 * 2. Generates @1x, @2x, and @3x mobile assets using Sharp
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

  fs.writeFileSync(outputSvgPath, result.data, "utf8");
  return {
    originalSize: rawSvg.length,
    optimizedSize: result.data.length,
    savings: `${Math.round((1 - result.data.length / rawSvg.length) * 100)}%`,
  };
}

export async function generateMobileRasterScales(
  inputSvgPath,
  outputDir,
  baseName,
  baseWidth = 24,
  baseHeight = 24,
) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const svgBuffer = fs.readFileSync(inputSvgPath);
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

    await sharp(svgBuffer)
      .resize(targetWidth, targetHeight)
      .png()
      .toFile(outPath);

    results.push({
      scale: `${scale}x`,
      width: targetWidth,
      height: targetHeight,
      path: outPath,
    });
  }

  return results;
}
