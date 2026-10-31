#!/usr/bin/env node
import fs from "fs";
import path from "path";
import sharp from "sharp";

const SOURCE_DIR = path.resolve("projects/crust-and-q/assets/generated/photography");
const THUMB_DIR = path.resolve("projects/crust-and-q/assets/thumbnails");

if (!fs.existsSync(THUMB_DIR)) {
  fs.mkdirSync(THUMB_DIR, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith(".jpg") || f.endsWith(".png"));
  console.log(`Processing ${files.length} photography assets for mobile card thumbnails...`);

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const outputPath = path.join(THUMB_DIR, file.replace(/\.(png|jpg)$/, ".jpg"));

    const isHero = file.startsWith("hero_");
    const width = isHero ? 700 : 450;
    const height = isHero ? 350 : 300;

    await sharp(inputPath)
      .resize(width, height, { fit: "cover", position: "center" })
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(`  ✓ ${file} -> ${(stats.size / 1024).toFixed(1)} KB`);
  }

  console.log("All thumbnails processed successfully!");
}

processImages().catch(err => {
  console.error("Error processing thumbnails:", err);
  process.exit(1);
});
