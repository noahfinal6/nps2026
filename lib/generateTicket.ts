export async function generateTicketImage(data: {
  fullName: string
  packageLabel: string
  summitName?: string
  orderId?: string
}) {
  const width = 800
  const height = 450
  const canvas = globalThis.document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!

  // Background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)

  // Header
  ctx.fillStyle = '#0f5132'
  ctx.fillRect(0, 0, width, 80)
  ctx.fillStyle = '#fff'
  ctx.font = '28px sans-serif'
  ctx.fillText(data.summitName || 'NPS 2026', 20, 50)

  // Participant name
  ctx.fillStyle = '#111827'
  ctx.font = 'bold 36px sans-serif'
  ctx.fillText(data.fullName, 20, 140)

  // Package
  ctx.font = '22px sans-serif'
  ctx.fillStyle = '#374151'
  ctx.fillText(data.packageLabel, 20, 190)

  // Order ID
  ctx.font = '18px monospace'
  ctx.fillStyle = '#6b7280'
  ctx.fillText('Ref: ' + (data.orderId || 'N/A'), 20, 230)

  // Simple barcode (visual) based on orderId
  const code = data.orderId || String(Date.now())
  const startX = 20
  const startY = 260
  const barHeight = 110
  for (let i = 0; i < code.length; i++) {
    const v = code.charCodeAt(i) % 2
    ctx.fillStyle = v ? '#111' : '#eee'
    const bw = 6
    ctx.fillRect(startX + i * bw, startY, bw - 1, barHeight)
  }

  // Small footer info
  ctx.font = '14px sans-serif'
  ctx.fillStyle = '#6b7280'
  ctx.fillText('Show this ticket at the entrance. Valid ID required.', 20, height - 20)

  return canvas.toDataURL('image/png')
}

export default generateTicketImage
