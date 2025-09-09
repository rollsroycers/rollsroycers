import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  const url = request.nextUrl.clone()
  
  // PRIORITY 1: Handle /en redirects FIRST (before any other processing)
  // This ensures English content is served from root domain without /en prefix
  if (url.pathname === '/en' || url.pathname.startsWith('/en/')) {
    // Remove /en prefix and redirect to the same path without locale
    const pathWithoutLocale = url.pathname.replace(/^\/en/, '') || '/'
    url.pathname = pathWithoutLocale
    // Force redirect with rewrite URL to ensure it works
    const redirectUrl = new URL(pathWithoutLocale, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }
  
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
     * 
     * IMPORTANT: Explicitly include /en paths for redirect handling
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
    // Explicitly match /en paths to ensure middleware processes them
    '/en/:path*',
    '/en'
  ],
}