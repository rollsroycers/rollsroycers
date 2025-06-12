import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import PriceCalculator from '@/components/PriceCalculator'
import ComparisonTool from '@/components/ComparisonTool'
import VirtualTour from '@/components/VirtualTour'
import WhatsAppButton from '@/components/WhatsAppButton'
import WeatherRecommendations from '@/components/WeatherRecommendations'
import SEO from '@/components/SEO'

export default function DawnPage() {
  const [roofStatus, setRoofStatus] = useState<'open' | 'closed'>('closed')
  
  const images = [
    { src: '/images/Rolls-royce-dawn-series-2.jpg', alt: 'Rolls-Royce Dawn Convertible Dubai' },
    { src: '/images/Rolls-Royce-Ride-2.jpg', alt: 'Dawn Driving Experience Dubai' },
    { src: '/images/inside-Rolls-Royce.jpg', alt: 'Dawn Luxury Interior' },
    { src: '/images/Rolls-Royce-white.jpg', alt: 'White Dawn for Special Events' }
  ]

  const specifications = {
    performance: [
      { label: 'Engine', value: '6.6L V12 Twin-Turbo' },
      { label: 'Power', value: '563 HP' },
      { label: 'Torque', value: '820 Nm' },
      { label: '0-100 km/h', value: '4.9 seconds' },
      { label: 'Top Speed', value: '250 km/h' }
    ],
    convertible: [
      { label: 'Roof Operation', value: 'Fully Automatic' },
      { label: 'Opening Time', value: '22 seconds' },
      { label: 'Operation Speed', value: 'Up to 50 km/h' },
      { label: 'Roof Material', value: 'Fabric (6 layers)' },
      { label: 'Acoustic Insulation', value: 'Library Quiet' }
    ],
    features: [
      'Silent Ballet Roof Mechanism',
      'Bespoke Audio (16 speakers)',
      'Heated/Cooled Seats',
      'Wind Deflector System',
      'Starlight Headliner',
      'Spirit of Ecstasy Retractable',
      'Night Vision Camera',
      'Adaptive LED Headlights'
    ]
  }

  const idealOccasions = [
    {
      icon: '🌅',
      title: 'Sunrise Drives',
      description: 'Experience Dubai\'s golden hour along Jumeirah Beach Road'
    },
    {
      icon: '🌴',
      title: 'Palm Jumeirah Tours',
      description: 'Cruise the iconic Palm with the roof down'
    },
    {
      icon: '🎊',
      title: 'Special Celebrations',
      description: 'Perfect for anniversaries and romantic occasions'
    },
    {
      icon: '📸',
      title: 'Photoshoots',
      description: 'Ideal backdrop for luxury lifestyle photography'
    }
  ]

  const rentalPackages = [
    {
      duration: 'Daily',
      price: 'AED 5,500',
      includes: ['200 km/day', 'Convertible Insurance', 'Concierge Service']
    },
    {
      duration: 'Weekend',
      price: 'AED 10,500',
      includes: ['500 km total', 'Premium Coverage', 'Beach Route Map']
    },
    {
      duration: 'Weekly',
      price: 'AED 33,000',
      includes: ['1,500 km total', 'Full Insurance', 'VIP Support']
    },
    {
      duration: 'Monthly',
      price: 'AED 110,000',
      includes: ['4,000 km total', 'Maintenance', 'Flexible Terms']
    }
  ]

  return (
    <>
      <SEO pageKey="fleet.dawn" />
      <Layout>
        {/* Hero Section with Roof Animation */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-dawn-series-2.jpg"
              alt="Rolls-Royce Dawn Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/40 via-transparent to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                DAWN
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                The World's Quietest Convertible
              </p>
              
              {/* Roof Status Indicator */}
              <div className="mb-8">
                <button
                  onClick={() => setRoofStatus(roofStatus === 'open' ? 'closed' : 'open')}
                  className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 text-white hover:bg-rolls-gold/10 transition-colors"
                >
                  <motion.div
                    animate={{ rotate: roofStatus === 'open' ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </motion.div>
                  Roof: {roofStatus === 'open' ? 'Open' : 'Closed'}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Experience Dawn Today
                </motion.button>
                <Link href="#weather" className="btn-secondary">
                  Check Weather Conditions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Open-Air Luxury Redefined
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Silent Ballet</h3>
                <p className="text-gray-400">The quietest convertible roof mechanism in the world</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">22 Seconds</h3>
                <p className="text-gray-400">Smooth roof operation even while driving up to 50 km/h</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">All-Weather</h3>
                <p className="text-gray-400">6-layer fabric roof provides exceptional insulation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Bespoke Audio</h3>
                <p className="text-gray-400">Perfectly tuned for both open and closed driving</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ideal Occasions */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Perfect Moments for Dawn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {idealOccasions.map((occasion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <div className="text-5xl mb-4">{occasion.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{occasion.title}</h3>
                  <p className="text-gray-400">{occasion.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Recommendations */}
        <section id="weather" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Weather-Perfect Driving
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Technical Excellence
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Convertible Tech</h3>
                <div className="space-y-4">
                  {specifications.convertible.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Luxury Features</h3>
                <ul className="space-y-3">
                  {specifications.features.map((feature, index) => (
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

        {/* Rental Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Dawn Rental Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {rentalPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center hover:border-rolls-gold/40 transition-colors"
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
            <div className="max-w-4xl mx-auto">
              <PriceCalculator />
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              360° Dawn Experience
            </h2>
            <VirtualTour />
          </div>
        </section>

        {/* Dubai Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Recommended Dubai Routes
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-rolls-gold mb-4">Coastal Drive</h3>
                <p className="text-gray-300 mb-4">
                  Jumeirah Beach Road → La Mer → City Walk → Downtown Dubai
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Distance: 25 km</li>
                  <li>• Duration: 45 minutes</li>
                  <li>• Best Time: Sunset</li>
                  <li>• Highlights: Beach views, Burj Al Arab</li>
                </ul>
              </div>
              
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-rolls-gold mb-4">Desert Escape</h3>
                <p className="text-gray-300 mb-4">
                  Dubai → Al Qudra Lakes → Desert Conservation Reserve
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Distance: 50 km</li>
                  <li>• Duration: 1.5 hours</li>
                  <li>• Best Time: Early morning</li>
                  <li>• Highlights: Desert landscapes, wildlife</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Feel the Dubai Breeze in a Dawn
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book now and receive a complimentary sunset drive route map and professional photography session
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call: +971 55 816 4922
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                Check Availability
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Compare Our Fleet
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