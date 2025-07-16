import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'

export default function Custom404() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Auto redirect after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  // Smart suggestions based on URL
  useEffect(() => {
    const path = router.asPath.toLowerCase()
    const smartSuggestions = []

    if (path.includes('phantom')) {
      smartSuggestions.push('/fleet/phantom')
    }
    if (path.includes('ghost')) {
      smartSuggestions.push('/fleet/ghost')
    }
    if (path.includes('cullinan')) {
      smartSuggestions.push('/fleet/cullinan')
    }
    if (path.includes('dawn')) {
      smartSuggestions.push('/fleet/dawn')
    }
    if (path.includes('wraith')) {
      smartSuggestions.push('/fleet/wraith')
    }
    if (path.includes('rent') || path.includes('book')) {
      smartSuggestions.push('/booking')
    }
    if (path.includes('price') || path.includes('cost')) {
      smartSuggestions.push('/pricing')
    }
    if (path.includes('service')) {
      smartSuggestions.push('/services/chauffeur')
      smartSuggestions.push('/services/wedding')
    }
    if (path.includes('contact') || path.includes('phone')) {
      smartSuggestions.push('/contact')
    }
    if (path.includes('gallery') || path.includes('photo')) {
      smartSuggestions.push('/gallery')
    }

    // Add default suggestions if no smart matches
    if (smartSuggestions.length === 0) {
      smartSuggestions.push('/fleet/phantom', '/booking', '/services/chauffeur')
    }

    setSuggestions(smartSuggestions.slice(0, 3))
  }, [router.asPath])

  const popularPages = [
    {
      title: 'Rolls-Royce Phantom',
      description: 'The pinnacle of luxury motoring',
      href: '/fleet/phantom',
      icon: '👑',
      image: '/images/Rolls-royce-phantom.jpg'
    },
    {
      title: 'Rolls-Royce Cullinan',
      description: 'Effortless, everywhere luxury SUV',
      href: '/fleet/cullinan',
      icon: '🏔️',
      image: '/images/Rolls-Royce_Cullinan_.jpg'
    },
    {
      title: 'Wedding Services',
      description: 'Make your special day unforgettable',
      href: '/services/wedding',
      icon: '💒',
      image: '/images/Rolls-Royce-white.jpg'
    },
    {
      title: 'Chauffeur Service',
      description: 'Professional drivers available 24/7',
      href: '/services/chauffeur',
      icon: '🎩',
      image: '/images/Black_Rolls_Royce_Ghost.jpg'
    }
  ]

  const getSuggestionDetails = (path: string) => {
    const pages: { [key: string]: { title: string; icon: string } } = {
      '/fleet/phantom': { title: 'Rolls-Royce Phantom', icon: '👑' },
      '/fleet/ghost': { title: 'Rolls-Royce Ghost', icon: '🌟' },
      '/fleet/cullinan': { title: 'Rolls-Royce Cullinan', icon: '🏔️' },
      '/fleet/dawn': { title: 'Rolls-Royce Dawn', icon: '☀️' },
      '/fleet/wraith': { title: 'Rolls-Royce Wraith', icon: '⚡' },
      '/booking': { title: 'Book Your Rolls-Royce', icon: '📅' },
      '/pricing': { title: 'View Our Pricing', icon: '💰' },
      '/services/chauffeur': { title: 'Chauffeur Service', icon: '🎩' },
      '/services/wedding': { title: 'Wedding Services', icon: '💒' },
      '/contact': { title: 'Contact Us', icon: '📞' },
      '/gallery': { title: 'Photo Gallery', icon: '📸' }
    }
    return pages[path] || { title: path, icon: '🔗' }
  }

  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found | Rolls-Royce Dubai</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our luxury Rolls-Royce fleet or contact us for assistance." />
      </Head>

      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          {/* Error Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-rolls-gold to-yellow-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">
              Oops! Lost in Luxury
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              It seems the page you're looking for has taken a detour in one of our exquisite Rolls-Royce vehicles. 
              Let us guide you back to the right destination.
            </p>
          </motion.div>

          {/* Auto redirect countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-gray-300">Redirecting to homepage in</span>
              <span className="text-2xl font-bold text-rolls-gold">{countdown}</span>
              <span className="text-gray-300">seconds</span>
            </div>
          </motion.div>

          {/* Smart Suggestions */}
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl text-white text-center mb-6">Were you looking for?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {suggestions.map((suggestion, index) => {
                  const details = getSuggestionDetails(suggestion)
                  return (
                    <motion.div
                      key={suggestion}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Link
                        href={suggestion}
                        className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-all hover:scale-105 text-center group"
                      >
                        <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">
                          {details.icon}
                        </span>
                        <span className="text-white font-medium group-hover:text-rolls-gold transition-colors">
                          {details.title}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl text-white text-center mb-8">Popular Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Link href={page.href} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-3xl">{page.icon}</span>
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-rolls-gold transition-colors">
                      {page.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{page.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-rolls-gold text-black font-semibold rounded-full hover:bg-yellow-600 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+971558164922"
                className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/971558164922"
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
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
