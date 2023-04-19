import { NextRequest, NextResponse, userAgent } from 'next/server'

// Set pathname were middleware will be executed
export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  // Parse user agent
  const { isBot } = userAgent(req)

  console.log('IsBot? ', isBot)

  if(!isBot) {
    return NextResponse.redirect("https://alpha.near.org")
  } 
}
