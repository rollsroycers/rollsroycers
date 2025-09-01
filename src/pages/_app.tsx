import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import performance utilities
import { initFontOptimization } from '@/utils/fontOptimization'
import initializePerformanceOptimizations from '@/utils/performanceOptimizations'
import { getPerformanceMonitor } from '@/utils/performanceMonitor'

// Lazy load AnimatePresence to reduce initial bundle
const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.AnimatePresence })),
  { ssr: false }
)

// Lazy load LoadingScreen
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isFirstLoad, setIsFirstLoad] = useState(false) // Changed to false by default

  useEffect(() => {
    // Set direction based on locale
    document.documentElement.dir = router.locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = router.locale || 'en'
  }, [router.locale])

  useEffect(() => {
    // Only show loading screen if explicitly needed (e.g., for branding)
    // Removing the automatic loading screen to improve FCP
    if (typeof window !== 'undefined' && window.sessionStorage.getItem('showLoader') === 'true') {
      setIsFirstLoad(true)
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        window.sessionStorage.removeItem('showLoader')
      }, 1500) // Reduced from 2500ms
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Initialize all performance optimizations
    initializePerformanceOptimizations()
    initFontOptimization()
    
    // Initialize performance monitoring
    const monitor = getPerformanceMonitor()
    
    // Defer service worker registration to improve initial load
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // Use requestIdleCallback if available, otherwise setTimeout
      const registerSW = () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('SW registered: ', registration)
            
            // Check for updates periodically
            setInterval(() => {
              registration.update()
            }, 60000) // Check every minute
          },
          (registrationError) => {
            console.log('SW registration failed: ', registrationError)
          }
        )
      }

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(registerSW)
      } else {
        setTimeout(registerSW, 5000) // Wait 5 seconds before registering
      }
    }
    
    // Report Web Vitals
    if (process.env.NODE_ENV === 'production') {
      // Log performance metrics when page is about to unload
      window.addEventListener('beforeunload', () => {
        const metrics = monitor?.getMetrics()
        if (metrics) {
          console.log('Performance Metrics:', metrics)
        }
      })
    }
  }, [])

  return (
    <>
      {AnimatePresence && isFirstLoad && (
        <AnimatePresence>
          {isFirstLoad && <LoadingScreen />}
        </AnimatePresence>
      )}
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)