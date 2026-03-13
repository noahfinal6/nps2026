import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Simulate processing time
    await new Promise((r) => setTimeout(r, 800))
    const orderId = 'ORD-' + Date.now()
    // In a real implementation you'd create a payment intent, persist order, send email, etc.
    return NextResponse.json({ success: true, orderId, received: body })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
