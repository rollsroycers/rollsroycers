import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Custom500() {
  const router = useRouter()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <Layout>
      <Head>
        <title>500 - Server Error | Rolls-Royce Dubai</title>
        <meta name="description" content="We're experiencing technical difficulties. Our team is working to resolve this issue." />
      </Head>

      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          {/* Error Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  ⚙️
                </div>
              </motion.div>
              <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                500
              </h1>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">
              Technical Pit Stop
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
              Even the finest machines need maintenance. We're experiencing a temporary issue, 
              but our expert technicians are already on it.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-green-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Our team has been notified</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                isRefreshing
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isRefreshing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                  Refreshing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </>
              )}
            </button>
            <button
              onClick={handleGoHome}
              className="px-8 py-3 bg-rolls-gold text-black rounded-full font-semibold hover:bg-yellow-600 transition-all"
            >
              Return Home
            </button>
          </motion.div>

          {/* Status Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl text-white font-semibold mb-4">What happened?</h3>
            <p className="text-gray-400 mb-6">
              Our server encountered an unexpected error while processing your request. 
              This is usually temporary and should be resolved shortly.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <div className="text-left">
                  <h4 className="text-white font-medium">Automatic Recovery</h4>
                  <p className="text-gray-400 text-sm">Our systems are designed to self-heal and should be back online soon.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <h4 className="text-white font-medium">Need Immediate Assistance?</h4>
                  <p className="text-gray-400 text-sm">
                    Call us directly at{' '}
                    <a href="tel:+971558164922" className="text-rolls-gold hover:underline">
                      +971 55 816 4922
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <h4 className="text-white font-medium">WhatsApp Support</h4>
                  <p className="text-gray-400 text-sm">
                    Message us on{' '}
                    <a href="https://wa.me/971558164922" className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                    {' '}for quick assistance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-gray-600 text-sm"
          >
            Error Code: 500 | Request ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}