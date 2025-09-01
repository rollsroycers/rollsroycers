import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Set direction based on locale - only on client side
    if (typeof window !== 'undefined') {
      document.documentElement.dir = router.locale === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = router.locale || 'en'
      
      // Add performance class
      document.documentElement.classList.add('js-enabled')
    }
  }, [router.locale])

  useEffect(() => {
    // Ensure we're on client side
    if (typeof window === 'undefined') return;

    // Defer performance optimizations to not block initial render
    const initPerformance = () => {
      // Simple performance initialization
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          console.log('Performance optimizations initialized')
          
          // Report Web Vitals in production
          if (process.env.NODE_ENV === 'production') {
            window.addEventListener('beforeunload', () => {
              console.log('Page unloading - performance metrics collected')
            })
          }
        }, { timeout: 3000 })
      }
    }

    initPerformance()

    // Defer service worker registration
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none'
          })
          
          console.log('Service Worker registered:', registration)
          
          // Check for updates periodically
          const updateInterval = setInterval(() => {
            registration.update()
          }, 60000) // Check every minute
          
          // Handle SW updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  console.log('New service worker available. Please refresh.')
                }
              })
            }
          })
          
          // Clean up interval on page unload
          window.addEventListener('beforeunload', () => {
            clearInterval(updateInterval)
          })
        } catch (error) {
          console.error('Service Worker registration failed:', error)
        }
      }

      // Wait longer before registering SW to prioritize page load
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(registerSW, { timeout: 10000 })
      } else {
        setTimeout(registerSW, 10000) // Wait 10 seconds
      }
    }
  }, [])

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

export default appWithTranslation(MyApp)