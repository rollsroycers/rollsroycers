import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Set direction based on locale - only on client side
    if (isClient && typeof window !== 'undefined' && document) {
      const dir = router.locale === 'ar' ? 'rtl' : 'ltr'
      const lang = router.locale || 'en'
      
      // Only update if different to prevent unnecessary DOM changes
      if (document.documentElement.dir !== dir) {
        document.documentElement.dir = dir
      }
      if (document.documentElement.lang !== lang) {
        document.documentElement.lang = lang
      }
      
      // Add performance class only if not already present
      if (!document.documentElement.classList.contains('js-enabled')) {
        document.documentElement.classList.add('js-enabled')
      }
    }
  }, [router.locale, isClient])

  useEffect(() => {
    // Ensure we're on client side
    if (!isClient || typeof window === 'undefined') return;

    // Defer performance optimizations to not block initial render
    const initPerformance = () => {
      try {
        // Simple performance initialization
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            console.log('Performance optimizations initialized')
            
            // Report Web Vitals in production
            if (process.env.NODE_ENV === 'production') {
              const handleBeforeUnload = () => {
                console.log('Page unloading - performance metrics collected')
              }
              window.addEventListener('beforeunload', handleBeforeUnload)
              
              // Cleanup function
              return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload)
              }
            }
          }, { timeout: 3000 })
        }
      } catch (error) {
        console.warn('Performance initialization failed:', error)
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
          
          // Check for updates periodically - store interval ID
          let updateInterval: NodeJS.Timeout | null = null
          
          const startUpdateChecks = () => {
            updateInterval = setInterval(() => {
              if (registration) {
                registration.update()
              }
            }, 60000) // Check every minute
          }
          
          // Handle SW updates
          const handleUpdateFound = () => {
            const newWorker = registration.installing
            if (newWorker) {
              const handleStateChange = () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  console.log('New service worker available. Please refresh.')
                }
              }
              newWorker.addEventListener('statechange', handleStateChange)
            }
          }
          
          registration.addEventListener('updatefound', handleUpdateFound)
          startUpdateChecks()
          
          // Clean up interval and listeners on page unload
          const cleanup = () => {
            if (updateInterval) {
              clearInterval(updateInterval)
            }
            registration.removeEventListener('updatefound', handleUpdateFound)
          }
          
          window.addEventListener('beforeunload', cleanup)
          
          // Return cleanup function for effect cleanup
          return cleanup
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
  }, [isClient])

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