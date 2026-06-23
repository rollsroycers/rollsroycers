import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Playfair_Display, Montserrat, Noto_Sans_Arabic } from 'next/font/google'
import { optimizeForMobile, setMobileViewportHeight } from '@/utils/mobileOptimizations'
import { getPerformanceMonitor } from '@/utils/performanceMonitor'
import { initializePerformanceOptimizations } from '@/utils/performanceOptimizations'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // 900 (font-black) used 0 times — dropped to cut a font file
  display: 'swap',
  variable: '--font-display',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-arabic',
})

// i18n config passed explicitly — required for Cloudflare Workers where
// auto-resolving next-i18next.config.js at runtime is not possible
const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  // Lets useTranslation('common') components resolve keys that now live in
  // page/section-scoped namespaces (split out of common.json). Must stay in
  // sync with the list in src/lib/serverSideTranslations.ts.
  fallbackNS: ["common","seo_home","seo_fleet","seo_services","seo_locations","seo_compare","seo_other","sp_corporate","sp_wedding","sp_airportTransfer","sp_chauffeur","sp_events","sp_photoshoot","sp_tours","servicespages","fc_phantom","fc_ghost","fc_cullinan","fc_dawn","fc_wraith","fc_spectre","fc_shared","fleetcards","lc_downtown","lc_dubaiMarina","lc_jbr","lc_businessBay","lc_difc","lc_palmJumeirah","lc_shared","comparecontent","weatherrec","page_about","page_blog","page_faq","page_pricing","page_terms","page_privacy","page_booking","page_gallery","page_testimonials","sb_fleet-cullinan","sb_fleet-dawn","sb_fleet-ghost","sb_fleet-phantom","sb_fleet-wraith","sb_home","sb_luxury-car-rental-dubai","sb_pricing","sb_services-airport-transfer","sb_services-hourly","sb_services-wedding"],
  react: { useSuspense: false },
}

// Minimal app with React 18 compatibility
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Safety net for stale tabs after a deploy: if a client-side navigation fails
  // (e.g. the page's buildId no longer matches the served worker, so /_next/data
  // 503/404s), recover with a full navigation to the target so the user always lands
  // on the current build instead of getting stuck. Now rare thanks to the deterministic
  // git-SHA buildId (next.config.js), but this guarantees recovery on genuine code deploys.
  useEffect(() => {
    const onRouteError = (err: any, url: string) => {
      if (err?.cancelled) return
      window.location.assign(url)
    }
    router.events.on('routeChangeError', onRouteError)
    return () => router.events.off('routeChangeError', onRouteError)
  }, [router])

  useEffect(() => {
    // Critical: Initialize mobile optimizations immediately
    optimizeForMobile()
    setMobileViewportHeight()

    // Defer non-critical initializations to avoid blocking FCP/LCP
    const deferNonCritical = () => {
      getPerformanceMonitor()
      initializePerformanceOptimizations()
    }

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(deferNonCritical, { timeout: 3000 })
    } else {
      setTimeout(deferNonCritical, 2000)
    }

    // The previous custom service worker caused INTERMITTENT client-side navigation
    // failures across deploys (cacheFirst on JS / _next chunks + cached HTML). It is
    // no longer registered; public/sw.js is now a self-unregistering kill switch. Here
    // we also proactively unregister any existing SW + clear its caches so returning
    // visitors recover on their next load instead of being stuck on stale assets.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => {})
      if (typeof caches !== 'undefined' && caches.keys) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {})
      }
    }
  }, [])

  const fontClasses = `app-font-root ${playfairDisplay.variable} ${montserrat.variable} ${notoSansArabic.variable}`

  return (
    // reducedMotion="user" makes framer-motion honor prefers-reduced-motion (the CSS-only
    // override did not stop JS-driven whileInView/animate transforms).
    // LazyMotion + domAnimation: components import `m as motion`, so framer-motion ships
    // the lightweight `m` core + only the domAnimation features (animation/exit/inView/
    // hover/tap/focus — everything used; no layout/drag) instead of the full motion bundle.
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        </Head>
        <div className={fontClasses}><Component {...pageProps} /></div>
      </MotionConfig>
    </LazyMotion>
  )
}

// Use Next.js built-in web vitals reporting
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Log to console
    console.log(metric)

    // Send to analytics
    if ('gtag' in window && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true
      })
    }

    // Send to custom analytics endpoint
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      const body = JSON.stringify({
        metric: metric.name,
        value: metric.value,
        id: metric.id,
        label: metric.label,
        url: window.location.href,
        timestamp: Date.now()
      })

      // Use sendBeacon if available for reliability
      if (navigator.sendBeacon) {
        navigator.sendBeacon(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, body)
      } else {
        fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
          method: 'POST',
          body,
          keepalive: true
        }).catch(console.error)
      }
    }
  }
}

export default appWithTranslation(MyApp, i18nConfig as any)