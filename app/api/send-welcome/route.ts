import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  // Fail fast in server logs if API key missing
  console.warn('RESEND_API_KEY is not set in environment')
}

const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email } = body

    if (!email) {
      return NextResponse.json({ success: false, error: 'email is required' }, { status: 400 })
    }

    const from = 'onboarding@resend.dev'
    const subject = 'Welcome to NPRS 2026'
    const eventUrl = 'https://xemnps2026.vercel.app/program'
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: #111827;">
        <h1 style="color:#064e3b; margin-bottom: 8px;">Welcome to NPRS 2026</h1>
        <p style="margin-bottom:12px;">Hello ${name || ''},</p>

        <p style="margin-bottom:12px;">Thank you for registering for the<br/>National Pre-Retirement Summit.</p>

        <p style="margin-bottom:18px;">We look forward to seeing you.</p>

        <div style="text-align:center; margin-bottom:18px;">
          <a href="${eventUrl}" target="_blank" rel="noreferrer" style="display:inline-block; background:#064e3b; color:#fff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:600;">View Event Details</a>
        </div>

        <p style="margin-top:18px;">—<br/>NPRS Team</p>
      </div>
    `

    const response = await resend.emails.send({
      from,
      to: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true, data: response }, { status: 200 })
  } catch (err: any) {
    console.error('send-welcome error', err)
    return NextResponse.json({ success: false, error: err?.message || String(err) }, { status: 500 })
  }
}
