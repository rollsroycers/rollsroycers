import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  const hostname = request.headers.get('host') || 'rollsroycers.com'
  
  // Handle www to non-www redirect FIRST (highest priority)
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
  
  // CRITICAL: Handle /en redirect to prevent Next.js from adding it
  // This must be done carefully to avoid loops
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    // Extract the path without the /en prefix
    const pathWithoutEn = pathname.slice(3) || '/'
    
    // Build the new URL
    const redirectUrl = new URL(pathWithoutEn, request.url)
    redirectUrl.search = url.search
    
    // Create redirect response with cache prevention headers
    const response = NextResponse.redirect(redirectUrl, 301)
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('X-Robots-Tag', 'noindex') // Don't index /en URLs
    
    return response
  }
  
  // Get the locale from the pathname
  const pathSegments = pathname.split('/').filter(Boolean)
  const locale = pathSegments[0]
  const locales = ['ar', 'zh', 'fr', 'ru', 'hi'] // NOT including 'en' since it's default
  
  // Check if the pathname starts with a locale
  const hasLocale = locales.includes(locale)
  
  // Create response with headers
  const response = NextResponse.next()
  
  // Set canonical headers for SEO
  let canonicalUrl = ''
  
  if (hasLocale) {
    // For non-English pages, canonical points to English version
    const canonicalPath = pathname.replace(`/${locale}`, '') || '/'
    canonicalUrl = `https://rollsroycers.com${canonicalPath}`
  } else {
    // For English pages (no locale prefix), self-referencing canonical
    canonicalUrl = `https://rollsroycers.com${pathname}`
  }
  
  // Add canonical link header
  response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`)
  
  // Add hreflang headers for SEO
  const hreflangLinks = []
  const basePath = hasLocale ? pathname.replace(`/${locale}`, '') : pathname
  
  // Add English (x-default and en)
  hreflangLinks.push(`<https://rollsroycers.com${basePath}>; rel="alternate"; hreflang="x-default"`)
  hreflangLinks.push(`<https://rollsroycers.com${basePath}>; rel="alternate"; hreflang="en"`)
  
  // Add other languages
  locales.forEach(lang => {
    hreflangLinks.push(`<https://rollsroycers.com/${lang}${basePath}>; rel="alternate"; hreflang="${lang}"`)
  })
  
  // Set all hreflang links
  response.headers.set('Link', hreflangLinks.join(', '))
  
  // Add x-robots-tag for proper indexing
  response.headers.set('X-Robots-Tag', 'index, follow')
  
  // Add cache control for better performance
  response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  
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