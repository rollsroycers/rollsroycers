import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'ar', 'ru', 'fr', 'zh', 'hi']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/favicon.ico') ||
    pathname.includes('/robots.txt') ||
    pathname.includes('/sitemap') ||
    pathname.includes('/manifest.json') ||
    pathname.includes('/sw.js') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    pathname.includes('.jpeg') ||
    pathname.includes('.gif') ||
    pathname.includes('.svg') ||
    pathname.includes('.ico') ||
    pathname.includes('.webp') ||
    pathname.includes('.css') ||
    pathname.includes('.js')
  ) {
    return NextResponse.next()
  }
  
  // Check if pathname starts with any locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // Check if pathname starts with the default locale (en)
  const pathnameHasDefaultLocale = pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`
  
  // If URL has /en prefix, redirect to URL without /en (301 permanent redirect for SEO)
  if (pathnameHasDefaultLocale) {
    const newPathname = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
    const newUrl = new URL(newPathname, request.url)
    
    // Copy over any query params
    newUrl.search = request.nextUrl.search
    
    return NextResponse.redirect(newUrl, 301)
  }
  
  // If pathname doesn't have any locale prefix, rewrite to include default locale internally
  // This prevents Next.js from issuing a 307 redirect
  if (!pathnameHasLocale) {
    // Clone the URL
    const url = request.nextUrl.clone()
    
    // Add the default locale to the pathname internally (rewrite, not redirect)
    url.pathname = `/${defaultLocale}${pathname}`
    
    // Return a rewrite response (internal routing without redirect)
    return NextResponse.rewrite(url)
  }
  
  // For non-default locales, just proceed normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|manifest.json|sw.js|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js)$).*)',
  ],
}