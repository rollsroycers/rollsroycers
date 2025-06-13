import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import PriceCalculator from '@/components/PriceCalculator'
import ComparisonTool from '@/components/ComparisonTool'
import VirtualTour from '@/components/VirtualTour'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function GhostPage() {
  const { t } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('overview')
  
  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: t('fleet.ghost.images.blackAlt') },
    { src: '/images/Rolls-royce-with-chauffeur.jpg', alt: t('fleet.ghost.images.chauffeurAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.ghost.images.interiorAlt') },
    { src: '/images/Rolls-Royce-front.jpg', alt: t('fleet.ghost.images.frontGrilleAlt') }
  ]

  const specifications = {
    performance: [
      { label: t('fleet.ghost.specs.performance.engine.label'), value: t('fleet.ghost.specs.performance.engine.value') },
      { label: t('fleet.ghost.specs.performance.power.label'), value: t('fleet.ghost.specs.performance.power.value') },
      { label: t('fleet.ghost.specs.performance.torque.label'), value: t('fleet.ghost.specs.performance.torque.value') },
      { label: t('fleet.ghost.specs.performance.acceleration.label'), value: t('fleet.ghost.specs.performance.acceleration.value') },
      { label: t('fleet.ghost.specs.performance.topSpeed.label'), value: t('fleet.ghost.specs.performance.topSpeed.value') }
    ],
    dimensions: [
      { label: t('fleet.ghost.specs.dimensions.length.label'), value: t('fleet.ghost.specs.dimensions.length.value') },
      { label: t('fleet.ghost.specs.dimensions.width.label'), value: t('fleet.ghost.specs.dimensions.width.value') },
      { label: t('fleet.ghost.specs.dimensions.height.label'), value: t('fleet.ghost.specs.dimensions.height.value') },
      { label: t('fleet.ghost.specs.dimensions.wheelbase.label'), value: t('fleet.ghost.specs.dimensions.wheelbase.value') },
      { label: t('fleet.ghost.specs.dimensions.seating.label'), value: t('fleet.ghost.specs.dimensions.seating.value') }
    ],
    technology: t('fleet.ghost.specs.technology', { returnObjects: true }) as string[]
  }

  const rentalPackages = [
    {
      duration: t('fleet.ghost.rentalPackages.daily.duration'),
      price: t('fleet.ghost.rentalPackages.daily.price'),
      includes: t('fleet.ghost.rentalPackages.daily.includes', { returnObjects: true }) as string[]
    },
    {
      duration: t('fleet.ghost.rentalPackages.weekend.duration'),
      price: t('fleet.ghost.rentalPackages.weekend.price'),
      includes: t('fleet.ghost.rentalPackages.weekend.includes', { returnObjects: true }) as string[]
    },
    {
      duration: t('fleet.ghost.rentalPackages.weekly.duration'),
      price: t('fleet.ghost.rentalPackages.weekly.price'),
      includes: t('fleet.ghost.rentalPackages.weekly.includes', { returnObjects: true }) as string[]
    },
    {
      duration: t('fleet.ghost.rentalPackages.monthly.duration'),
      price: t('fleet.ghost.rentalPackages.monthly.price'),
      includes: t('fleet.ghost.rentalPackages.monthly.includes', { returnObjects: true }) as string[]
    }
  ]

  const businessFeatures = [
    {
      icon: '💼',
      title: t('fleet.ghost.businessFeatures.excellence.title'),
      description: t('fleet.ghost.businessFeatures.excellence.description')
    },
    {
      icon: '🔇',
      title: t('fleet.ghost.businessFeatures.quiet.title'),
      description: t('fleet.ghost.businessFeatures.quiet.description')
    },
    {
      icon: '🌐',
      title: t('fleet.ghost.businessFeatures.connected.title'),
      description: t('fleet.ghost.businessFeatures.connected.description')
    },
    {
      icon: '🛡️',
      title: t('fleet.ghost.businessFeatures.safety.title'),
      description: t('fleet.ghost.businessFeatures.safety.description')
    }
  ]

  return (
    <>
      <SEO pageKey="fleet.ghost" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-black.jpg"
              alt="Rolls-Royce Ghost Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                GHOST
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Post Opulence. The Essence of Simplicity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Reserve Ghost Now
                </motion.button>
                <a href="#business" className="btn-secondary">
                  Business Solutions
                </a>
              </div>
              
              {/* Key Highlights */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4.8s to 100km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Whisper Quiet</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>563 HP V12</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-0 z-40 bg-rolls-black/95 backdrop-blur-sm border-b border-rolls-gold/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              {['overview', 'specifications', 'business', 'gallery', 'booking'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-4 py-2 transition-all ${
                    activeTab === tab
                      ? 'text-rolls-gold border-b-2 border-rolls-gold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h2 className="text-4xl font-bold text-white mb-6">
                    The Essence of Luxury Redefined
                  </h2>
                  <p className="text-gray-300 mb-4">
                    The Rolls-Royce Ghost represents a new chapter in luxury motoring. With its minimalist aesthetic philosophy of 'Post Opulence', it delivers an experience that transcends traditional luxury.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Perfect for Dubai's business elite, the Ghost combines unparalleled comfort with cutting-edge technology, creating an environment where success feels effortless.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-rolls-gold">130db</div>
                      <div className="text-sm text-gray-400">Quietest Cabin</div>
                    </div>
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-rolls-gold">100+</div>
                      <div className="text-sm text-gray-400">Sound Deadening Compounds</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative h-96 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/images/inside-Rolls-Royce.jpg"
                    alt={t('fleet.ghost.images.interiorExcellenceAlt')}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Specifications Section */}
        {activeTab === 'specifications' && (
          <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Performance</h3>
                  <div className="space-y-4">
                    {specifications.performance.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-400">{spec.label}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Dimensions</h3>
                  <div className="space-y-4">
                    {specifications.dimensions.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-400">{spec.label}</span>
                        <span className="text-white font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Technology</h3>
                  <ul className="space-y-3">
                    {specifications.technology.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Business Section */}
        {activeTab === 'business' && (
          <section id="business" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Ghost for Business Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {businessFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Corporate Packages */}
              <div className="max-w-4xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Corporate Rental Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-3">Executive Package</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Dedicated account manager</li>
                      <li>• Priority booking system</li>
                      <li>• Corporate billing options</li>
                      <li>• Volume discounts available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-3">VIP Client Services</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Airport meet & greet</li>
                      <li>• Multilingual chauffeurs</li>
                      <li>• Flexible rental terms</li>
                      <li>• 24/7 concierge support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {activeTab === 'gallery' && (
          <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Ghost Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-80 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Booking Section */}
        {activeTab === 'booking' && (
          <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Book Your Ghost Experience
              </h2>
              
              {/* Rental Packages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                {rentalPackages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{pkg.duration}</h3>
                    <div className="text-3xl font-bold text-rolls-gold mb-4">{pkg.price}</div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              {/* Price Calculator */}
              <div className="max-w-4xl mx-auto mb-12">
                <PriceCalculator />
              </div>

              {/* Contact CTA */}
              <div className="text-center">
                <p className="text-xl text-gray-300 mb-6">
                  Ready to experience the Ghost? Our team is available 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+971558164922" className="btn-primary">
                    Call: +971 55 816 4922
                  </a>
                  <Link href="/booking" className="btn-secondary">
                    Book Online
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Comparison Tool */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Compare with Our Fleet
            </h2>
            <ComparisonTool />
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}