import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { optimizeForMobile, setMobileViewportHeight } from '@/utils/mobileOptimizations'
import { getPerformanceMonitor } from '@/utils/performanceMonitor'
import { initializePerformanceOptimizations } from '@/utils/performanceOptimizations'

// Minimal app with React 18 compatibility
function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Initialize mobile optimizations
    optimizeForMobile()

    // Set up mobile-safe viewport height
    setMobileViewportHeight()

    // Initialize performance monitoring
    getPerformanceMonitor()

    // Initialize general performance optimizations
    initializePerformanceOptimizations()
  }, [])

  // During SSR, render minimal component
  if (!isMounted) {
    return <Component {...pageProps} />
  }

  return <Component {...pageProps} />
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

// Export directly without appWithTranslation for Cloudflare Workers compatibility
// Translations are already baked into SSG pages at build time
export default MyApp