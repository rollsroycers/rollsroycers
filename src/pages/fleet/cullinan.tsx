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
import SEO from '@/components/SEO'

export default function CullinanPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  
  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: 'Rolls-Royce Cullinan Black Exterior Dubai' },
    { src: '/images/Rolls-Royce-front.jpg', alt: 'Cullinan Front View Luxury SUV' },
    { src: '/images/inside-Rolls-Royce.jpg', alt: 'Cullinan Interior Leather Seats' },
    { src: '/images/Rolls-Royce-Ride-2.jpg', alt: 'Cullinan on Dubai Roads' }
  ]

  const specifications = {
    performance: [
      { label: 'Engine', value: '6.75L V12 Twin-Turbo' },
      { label: 'Power', value: '563 HP' },
      { label: 'Torque', value: '850 Nm' },
      { label: '0-100 km/h', value: '5.2 seconds' },
      { label: 'Top Speed', value: '250 km/h' }
    ],
    dimensions: [
      { label: 'Length', value: '5,341 mm' },
      { label: 'Width', value: '2,164 mm' },
      { label: 'Height', value: '1,835 mm' },
      { label: 'Wheelbase', value: '3,295 mm' },
      { label: 'Boot Capacity', value: '600L / 1,930L' }
    ],
    features: [
      'All-Terrain Capability',
      'Magic Carpet Ride Suspension',
      'Night Vision & Wildlife Detection',
      'Viewing Suite (Rear Seats)',
      'Refrigerated Compartment',
      'Bespoke Audio System',
      'Panoramic Glass Roof',
      '4-Zone Climate Control'
    ]
  }

  const rentalPackages = [
    {
      duration: 'Daily',
      price: 'AED 6,500',
      includes: ['200 km/day', 'Basic Insurance', 'Chauffeur Option']
    },
    {
      duration: 'Weekend',
      price: 'AED 12,000',
      includes: ['500 km total', 'Premium Insurance', 'Airport Transfer']
    },
    {
      duration: 'Weekly',
      price: 'AED 39,000',
      includes: ['1,500 km total', 'Full Coverage', 'Dedicated Concierge']
    },
    {
      duration: 'Monthly',
      price: 'AED 130,000',
      includes: ['4,000 km total', 'VIP Support', 'Maintenance Included']
    }
  ]

  return (
    <>
      <SEO pageKey="fleet.cullinan" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].alt}
              fill
              className="object-cover transition-opacity duration-1000"
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
                CULLINAN
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                The Ultimate Luxury SUV Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Cullinan Now
                </motion.button>
                <Link href="#specs" className="btn-secondary">
                  Explore Features
                </Link>
              </div>
            </motion.div>

            {/* Image Navigation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeImageIndex ? 'bg-rolls-gold w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Cullinan in Dubai?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">All-Terrain Mastery</h3>
                <p className="text-gray-400">Conquer Dubai's desert dunes or cruise the city streets with equal elegance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Spacious Luxury</h3>
                <p className="text-gray-400">Room for 5 adults in supreme comfort, perfect for family adventures</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Night Vision</h3>
                <p className="text-gray-400">Advanced safety with thermal imaging for confident night driving</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Viewing Suite</h3>
                <p className="text-gray-400">Unique rear seats that fold out for luxury outdoor experiences</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specs" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Key Features</h3>
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
              Cullinan Rental Packages
            </h2>
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
            <div className="max-w-4xl mx-auto">
              <PriceCalculator />
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              360° Virtual Experience
            </h2>
            <VirtualTour />
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Cullinan Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dubai's premier luxury SUV rental. Book now and receive complimentary chauffeur service for your first day.
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
                Online Booking
              </Link>
            </div>
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