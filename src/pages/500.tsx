import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom500() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SEO 
        pageKey="500"
        title="500 - Server Error | Rolls-Royce Dubai"
        description="Sorry, something went wrong on our server. Please try again later."
      />
    <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rolls-black to-rolls-navy px-4">
          <div className="text-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Error Code */}
              <h1 className="text-8xl md:text-9xl font-bold text-rolls-gold mb-4">
                500
              </h1>

          {/* Error Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Server Error
            </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
                Sorry, something went wrong on our server. We're working to fix this issue.
                Please try again later.
              </p>

          {/* Action Buttons */}
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                
            <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary"
                >
                  Try Again
            </button>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 p-6 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>📞 <a href="tel:+971558164922" className="text-rolls-gold hover:text-white transition-colors">+971 55 816 4922</a></p>
                  <p>📧 <a href="mailto:info@rollsroycers.com" className="text-rolls-gold hover:text-white transition-colors">info@rollsroycers.com</a></p>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'seo', 'navigation'])),
    },
  }
}