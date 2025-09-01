import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  
  // Handle www to non-www redirect
  if (hostname.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Handle HTTP to HTTPS redirect (only in production)
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }
  
  // Get the locale from the pathname
  const locale = pathname.split('/')[1]
  const locales = ['ar', 'zh', 'fr', 'ru', 'hi'] // Removed 'en' from locales
  
  // Check if the pathname starts with a locale
  const hasLocale = locales.includes(locale)
  
  // Redirect /en/* to /* (English is default)
  if (locale === 'en') {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    const newUrl = new URL(newPath, request.url)
    newUrl.search = url.search
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Create response with headers
  const response = NextResponse.next()
  
  // Add canonical link header for better SEO
  // All language versions should point to the English version as canonical
  if (hasLocale) {
    const canonicalPath = pathname.replace(`/${locale}`, '')
    const canonicalUrl = `https://rollsroycers.com${canonicalPath || '/'}`
    response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`)
  }
  
  // For English pages (no locale prefix), set self-referencing canonical
  if (!hasLocale && pathname !== '/') {
    const canonicalUrl = `https://rollsroycers.com${pathname}`
    response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`)
  }
  
  // Add x-robots-tag for proper indexing
  response.headers.set('X-Robots-Tag', 'index, follow')
  
  // Add cache control for better performance
  response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts|icons).*)',
  ],
}