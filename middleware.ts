import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  
  // Create response early to add headers
  const response = NextResponse.next()
  
  // Temporarily disable CSP to debug runtime errors
  // TODO: Re-enable CSP after fixing runtime issues
  
  // Add basic security headers instead
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Handle www to non-www redirect with proper URL construction
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    // Ensure we don't break the URL structure
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Only handle HTTP to HTTPS in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }
  
  // Handle /en redirects to default domain (English as default language)
  const url = request.nextUrl.clone()
  
  // Redirect /en paths to root (making English the default without prefix)
  if (url.pathname.startsWith('/en/') || url.pathname === '/en') {
    // Remove /en prefix and redirect to the same path without locale
    const pathWithoutLocale = url.pathname.replace(/^\/en/, '') || '/'
    url.pathname = pathWithoutLocale
    return NextResponse.redirect(url, 301)
  }
  
  // Return response with headers
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