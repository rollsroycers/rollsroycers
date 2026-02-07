import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
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
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
    localeDetection: false,
  },
  defaultNS: 'common',
  react: { useSuspense: false },
}

// Minimal app with React 18 compatibility
function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

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
  }, [])

  const fontClasses = `${playfairDisplay.variable} ${montserrat.variable} ${notoSansArabic.variable}`

  // During SSR, render minimal component
  if (!isMounted) {
    return <div className={fontClasses}><Component {...pageProps} /></div>
  }

  return <div className={fontClasses}><Component {...pageProps} /></div>
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