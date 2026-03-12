const fs = require("fs");
const path = require("path");

const targets = [
  {
    dir: path.join(__dirname, "..", "public", "images", "optimized"),
    exportName: "optimizedImages",
  },
  {
    dir: path.join(
      __dirname,
      "..",
      "public",
      "images",
      "NPS 2024 images",
      "optimized",
    ),
    exportName: "optimized2024",
  },
  {
    dir: path.join(
      __dirname,
      "..",
      "public",
      "images",
      "NPS 2025 images",
      "optimized",
    ),
    exportName: "optimized2025",
  },
];

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => {
      const full = path.join(dir, f);
      return fs.statSync(full).isFile();
    })
    .map(
      (f) =>
        "/" +
        path
          .relative(path.join(__dirname, "..", "public"), path.join(dir, f))
          .replace(/\\\\/g, "/"),
    );
}

let out = "// GENERATED - Do not edit manually\n\n";

for (const t of targets) {
  const files = listFiles(t.dir);
  out += `export const ${t.exportName} = [\n`;
  for (const f of files) {
    out += `  '${f}',\n`;
  }
  out += `]\n\n`;
}

fs.writeFileSync(path.join(__dirname, "..", "lib", "optimizedImages.ts"), out);
console.log("Wrote lib/optimizedImages.ts");
