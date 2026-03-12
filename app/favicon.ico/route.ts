import { NextResponse } from 'next/server'

export async function GET() {
  // Redirect requests for /favicon.ico to the project's dark 32x32 icon.
  return NextResponse.redirect('/icon-dark-32x32.png', 307)
}
