import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  const url = request.nextUrl.clone()
  
  // /en redirects now handled by Next.js rewrites in next.config.js
  
  // PRIORITY 2: Handle www to non-www redirect
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }
  
  // PRIORITY 3: Only handle HTTP to HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }
  
  // Create response with security headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)  
     * - favicon.ico, robots.txt, sitemap.xml
     * - public assets with file extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
}