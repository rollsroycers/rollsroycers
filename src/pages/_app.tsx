import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Set direction based on locale
    document.documentElement.dir = router.locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = router.locale || 'en'
  }, [router.locale])

  useEffect(() => {
    // Only show loading screen on first load
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('SW registered: ', registration)
          },
          (registrationError) => {
            console.log('SW registration failed: ', registrationError)
          }
        )
      })
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {isFirstLoad && <LoadingScreen />}
      </AnimatePresence>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)