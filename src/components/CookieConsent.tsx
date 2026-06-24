import { useState, useEffect } from 'react'
import { m as motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'

export default function CookieConsent() {
  const { t } = useTranslation('common')
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
    // Initialize Google Analytics or other tracking here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="bg-rolls-black/95 backdrop-blur-lg border border-rolls-gold/30 rounded-lg p-4 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                    🍪 {t('cookie.title')}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm line-clamp-2 md:line-clamp-none">
                    {t('cookie.description')}
                  </p>
                </div>
                <div className="flex flex-row gap-2 sm:gap-3 flex-shrink-0 self-end md:self-auto">
                  <button
                    onClick={declineCookies}
                    className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {t('cookie.decline')}
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="btn-primary text-sm"
                  >
                    {t('cookie.accept')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}