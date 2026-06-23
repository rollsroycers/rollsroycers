import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { MotionConfig } from 'framer-motion'
import { useEffect } from 'react'
import { Playfair_Display, Montserrat, Noto_Sans_Arabic } from 'next/font/google'
import { optimizeForMobile, setMobileViewportHeight } from '@/utils/mobileOptimizations'
import { getPerformanceMonitor } from '@/utils/performanceMonitor'
import { initializePerformanceOptimizations } from '@/utils/performanceOptimizations'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
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
  fallbackNS: ["common","fleetcontent","loccontent","comparecontent","servicespages","page_about","page_blog","page_faq","page_pricing","page_terms","page_privacy","page_booking","page_gallery","page_testimonials","sb_fleet-cullinan","sb_fleet-dawn","sb_fleet-ghost","sb_fleet-phantom","sb_fleet-wraith","sb_home","sb_luxury-car-rental-dubai","sb_pricing","sb_services-airport-transfer","sb_services-hourly","sb_services-wedding"],
  react: { useSuspense: false },
}

// Minimal app with React 18 compatibility
function MyApp({ Component, pageProps }: AppProps) {
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

    // Register the service worker (public/sw.js was shipped but never registered,
    // so the PWA / offline support / runtime caching were all dead).
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {})
      })
    }
  }, [])

  const fontClasses = `app-font-root ${playfairDisplay.variable} ${montserrat.variable} ${notoSansArabic.variable}`

  return (
    // reducedMotion="user" makes framer-motion honor prefers-reduced-motion (the CSS-only
    // override did not stop JS-driven whileInView/animate transforms).
    <MotionConfig reducedMotion="user">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <div className={fontClasses}><Component {...pageProps} /></div>
    </MotionConfig>
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