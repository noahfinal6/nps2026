import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // Redirect requests for /favicon.ico to the project's dark 32x32 icon.
  // NextResponse.redirect requires an absolute URL in edge/middleware contexts,
  // so build one from the incoming request URL.
  const target = new URL('/icon-dark-32x32.png', request.url)
  return NextResponse.redirect(target, 307)
}
