// Optimize logos into webp and resized versions
// Usage: npm install --save-dev sharp && node scripts/optimize-logos.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const LOGOS_DIR = path.join(__dirname, '..', 'public', 'images', 'logos')
const OUT_DIR = path.join(LOGOS_DIR, 'optimized')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

const files = fs.readdirSync(LOGOS_DIR).filter(f => {
  const ext = path.extname(f).toLowerCase()
  return ['.png', '.jpg', '.jpeg'].includes(ext)
})

console.log('Found logos:', files)

files.forEach(async (file) => {
  const input = path.join(LOGOS_DIR, file)
  const base = path.parse(file).name
  const out = path.join(OUT_DIR, base + '.webp')

  try {
    await sharp(input)
      .resize({ width: 1200 })
      .webp({ quality: 75 })
      .toFile(out)
    console.log('Optimized', file, '->', out)
  } catch (e) {
    console.error('Error optimizing', file, e)
  }
})
