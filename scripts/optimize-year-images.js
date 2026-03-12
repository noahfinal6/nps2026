const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const projects = [
  {
    srcDir: path.join(__dirname, "..", "public", "images", "2024"),
    outDir: path.join(__dirname, "..", "public", "images", "2024", "optimized"),
  },
  {
    srcDir: path.join(__dirname, "..", "public", "images", "2025"),
    outDir: path.join(__dirname, "..", "public", "images", "2025", "optimized"),
  },
];

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processFolder(srcDir, outDir) {
  await ensureDir(outDir);
  const files = fs.readdirSync(srcDir).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    const full = path.join(srcDir, f);
    if (fs.statSync(full).isDirectory()) return false;
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });

  console.log(`Found ${files.length} images in ${srcDir}`);

  for (const file of files) {
    const input = path.join(srcDir, file);
    const name = path.parse(file).name + ".webp";
    const output = path.join(outDir, name);

    try {
      await sharp(input)
        .resize({ width: 1600 })
        .webp({ quality: 65 })
        .toFile(output);
      console.log("Optimized:", file, "->", name);
    } catch (e) {
      console.error("Error optimizing", file, e.message);
    }
  }
}

async function run() {
  for (const p of projects) {
    await processFolder(p.srcDir, p.outDir);
  }
  console.log("Optimization complete.");
}

run();
