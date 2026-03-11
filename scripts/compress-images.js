// Simple image compression script using sharp
// Usage: pnpm add sharp && node scripts/compress-images.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images')
const OUTPUT_DIR = path.join(IMAGES_DIR, 'optimized')

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

// Only process top-level images, skip logos folder
const allowedExt = ['.jpg', '.jpeg', '.png', '.webp']

fs.readdir(IMAGES_DIR, async (err, files) => {
  if (err) return console.error('Failed to read images directory', err)

  const images = files.filter(f => {
    const full = path.join(IMAGES_DIR, f)
    const stat = fs.statSync(full)
    // skip directories (like logos) and non-image files
    if (stat.isDirectory()) return false
    return allowedExt.includes(path.extname(f).toLowerCase())
  })

  console.log('Found images to compress:', images)

  for (const img of images) {
    const input = path.join(IMAGES_DIR, img)
    const output = path.join(OUTPUT_DIR, img)

    try {
      await sharp(input)
        .resize({ width: 2000 }) // cap width for faster delivery; adjust as needed
        .jpeg({ quality: 70, mozjpeg: true })
        .toFile(output)
      console.log('Compressed:', img)
    } catch (e) {
      console.error('Error compressing', img, e)
    }
  }

  console.log('Compression complete. Optimized images are in:', OUTPUT_DIR)
})
