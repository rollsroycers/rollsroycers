import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  
  // Only handle www to non-www redirect (avoid complex locale redirects)
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Only handle HTTP to HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }
  
  // DO NOT handle /en redirects - let Next.js i18n handle it
  // This prevents redirect loops
  
  // Just pass through all other requests
  return NextResponse.next()
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