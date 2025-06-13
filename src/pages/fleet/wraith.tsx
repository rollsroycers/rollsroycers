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

export default function WraithPage() {
  const { t } = useTranslation('common')
  const [selectedFeature, setSelectedFeature] = useState('performance')

  const getTranslatedArray = (key: string, fallback: string[]): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : fallback;
  };
  
  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: t('fleet.wraith.images.blackBadgeAlt') },
    { src: '/images/Rolls-Royce-Ride.jpg', alt: t('fleet.wraith.images.grandTourerAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.wraith.images.starlightInteriorAlt') },
    { src: '/images/Rolls-Royce-front.jpg', alt: t('fleet.wraith.images.frontDesignAlt') }
  ]

  const specifications = {
    performance: [
      { label: t('fleet.wraith.specs.performance.engine.label'), value: t('fleet.wraith.specs.performance.engine.value') },
      { label: t('fleet.wraith.specs.performance.power.label'), value: t('fleet.wraith.specs.performance.power.value') },
      { label: t('fleet.wraith.specs.performance.torque.label'), value: t('fleet.wraith.specs.performance.torque.value') },
      { label: t('fleet.wraith.specs.performance.acceleration.label'), value: t('fleet.wraith.specs.performance.acceleration.value') },
      { label: t('fleet.wraith.specs.performance.topSpeed.label'), value: t('fleet.wraith.specs.performance.topSpeed.value') }
    ],
    dimensions: [
      { label: t('fleet.wraith.specs.dimensions.length.label'), value: t('fleet.wraith.specs.dimensions.length.value') },
      { label: t('fleet.wraith.specs.dimensions.width.label'), value: t('fleet.wraith.specs.dimensions.width.value') },
      { label: t('fleet.wraith.specs.dimensions.height.label'), value: t('fleet.wraith.specs.dimensions.height.value') },
      { label: t('fleet.wraith.specs.dimensions.wheelbase.label'), value: t('fleet.wraith.specs.dimensions.wheelbase.value') },
      { label: t('fleet.wraith.specs.dimensions.doors.label'), value: t('fleet.wraith.specs.dimensions.doors.value') }
    ],
    exclusive: getTranslatedArray('fleet.wraith.specs.exclusive', [
      'Satellite Aided Transmission',
      'Starlight Headliner',
      'Bespoke Audio System',
      'Night Vision Camera',
      'Dynamic Suspension'
    ])
  }

  const blackBadge = {
    title: t('fleet.wraith.blackBadge.title') || 'Black Badge',
    description: t('fleet.wraith.blackBadge.description') || 'The alter ego of Rolls-Royce. Black Badge is the expression of a bolder attitude to luxury.',
    features: getTranslatedArray('fleet.wraith.blackBadge.features', [
      'Enhanced V12 Twin-Turbo Engine',
      'Darkened Chrome Details',
      'Exclusive Black Badge Wheels',
      'Carbon Fiber Interior Elements',
      'Bespoke Black Badge Leather'
    ])
  }

  const rentalPackages = [
    {
      duration: t('fleet.wraith.rentalPackages.daily.duration') || 'Daily',
      price: t('fleet.wraith.rentalPackages.daily.price') || 'AED 3,500',
      includes: getTranslatedArray('fleet.wraith.rentalPackages.daily.includes', [
        '250 km daily allowance',
        'Professional chauffeur',
        'Comprehensive insurance',
        'Complimentary fuel'
      ])
    },
    {
      duration: t('fleet.wraith.rentalPackages.weekend.duration') || 'Weekend',
      price: t('fleet.wraith.rentalPackages.weekend.price') || 'AED 8,000',
      includes: getTranslatedArray('fleet.wraith.rentalPackages.weekend.includes', [
        '600 km total allowance',
        'Friday to Sunday',
        'Airport transfers',
        'Concierge service'
      ])
    },
    {
      duration: t('fleet.wraith.rentalPackages.weekly.duration') || 'Weekly',
      price: t('fleet.wraith.rentalPackages.weekly.price') || 'AED 21,000',
      includes: getTranslatedArray('fleet.wraith.rentalPackages.weekly.includes', [
        '1,500 km weekly allowance',
        'Dedicated chauffeur',
        'VIP parking access',
        'Weekly maintenance'
      ])
    },
    {
      duration: t('fleet.wraith.rentalPackages.monthly.duration') || 'Monthly',
      price: t('fleet.wraith.rentalPackages.monthly.price') || 'AED 75,000',
      includes: getTranslatedArray('fleet.wraith.rentalPackages.monthly.includes', [
        '5,000 km monthly allowance',
        'Flexible chauffeur hours',
        'Premium insurance',
        'Monthly detailing'
      ])
    }
  ]

  const drivingExperiences = [
    {
      icon: '🏎️',
      title: t('fleet.wraith.drivingExperiences.grandTouring.title'),
      description: t('fleet.wraith.drivingExperiences.grandTouring.description'),
      route: t('fleet.wraith.drivingExperiences.grandTouring.route')
    },
    {
      icon: '🌃',
      title: t('fleet.wraith.drivingExperiences.nightCruising.title'),
      description: t('fleet.wraith.drivingExperiences.nightCruising.description'),
      route: t('fleet.wraith.drivingExperiences.nightCruising.route')
    },
    {
      icon: '🏜️',
      title: t('fleet.wraith.drivingExperiences.desertHighway.title'),
      description: t('fleet.wraith.drivingExperiences.desertHighway.description'),
      route: t('fleet.wraith.drivingExperiences.desertHighway.route')
    },
    {
      icon: '🏁',
      title: t('fleet.wraith.drivingExperiences.trackExperience.title'),
      description: t('fleet.wraith.drivingExperiences.trackExperience.description'),
      route: t('fleet.wraith.drivingExperiences.trackExperience.route')
    }
  ]

  return (
    <>
      <SEO pageKey="fleet.wraith" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/videos/Rolls-royce-phantom.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-rolls-black/30 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                WRAITH
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                The Most Powerful Rolls-Royce Ever
              </p>
              
              {/* Power Indicator */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-rolls-gold">624</div>
                  <div className="text-sm text-gray-400 uppercase">Horsepower</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-rolls-gold">4.4s</div>
                  <div className="text-sm text-gray-400 uppercase">0-100 km/h</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-rolls-gold">V12</div>
                  <div className="text-sm text-gray-400 uppercase">Twin-Turbo</div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Reserve Wraith Now
                </motion.button>
                <Link href="#black-badge" className="btn-secondary">
                  Explore Black Badge
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Selector */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Discover Wraith Excellence
            </h2>
            
            {/* Feature Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {['performance', 'design', 'technology', 'experience'].map((feature) => (
                <button
                  key={feature}
                  onClick={() => setSelectedFeature(feature)}
                  className={`px-6 py-3 rounded-full capitalize transition-all ${
                    selectedFeature === feature
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {selectedFeature === 'performance' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Unmatched Power Delivery</h3>
                    <p className="text-gray-300 mb-6">
                      The Wraith's 6.6-liter twin-turbocharged V12 produces 624 horsepower, making it the most powerful Rolls-Royce in the lineup. The Satellite Aided Transmission uses GPS data to pre-select the optimal gear for upcoming terrain.
                    </p>
                    <div className="space-y-4">
                      {specifications.performance.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center bg-rolls-black/30 p-3 rounded">
                          <span className="text-gray-400">{spec.label}</span>
                          <span className="text-rolls-gold font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src="/images/Rolls-Royce-front.jpg"
                      alt={t('fleet.wraith.images.performanceAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {selectedFeature === 'design' && (
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Fastback Elegance</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    The Wraith's sweeping fastback silhouette represents the most dynamic design in Rolls-Royce history. Coach doors provide theatrical entry, while the pillarless design creates an airy, open cabin.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-rolls-gold">2</div>
                      <div className="text-sm text-gray-400">Coach Doors</div>
                    </div>
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-rolls-gold">Fastback</div>
                      <div className="text-sm text-gray-400">Roofline</div>
                    </div>
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-rolls-gold">4</div>
                      <div className="text-sm text-gray-400">Seats</div>
                    </div>
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-rolls-gold">Pillarless</div>
                      <div className="text-sm text-gray-400">Design</div>
                    </div>
                  </div>
                </div>
              )}

              {selectedFeature === 'technology' && (
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Advanced Technology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-rolls-gold mb-4">Satellite Aided Transmission</h4>
                      <p className="text-gray-300">
                        Uses GPS data to predict the road ahead and pre-selects the optimal gear for corners, hills, and motorway junctions.
                      </p>
                    </div>
                    <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-rolls-gold mb-4">Starlight Headliner</h4>
                      <p className="text-gray-300">
                        1,340 fiber optic lights hand-woven into the roof lining create a stunning celestial display unique to each car.
                      </p>
                    </div>
                    <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-rolls-gold mb-4">Bespoke Audio</h4>
                      <p className="text-gray-300">
                        18-speaker system precisely tuned to the Wraith's unique cabin acoustics for an unparalleled audio experience.
                      </p>
                    </div>
                    <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-rolls-gold mb-4">Night Vision</h4>
                      <p className="text-gray-300">
                        Thermal imaging camera detects pedestrians and animals up to 300 meters away, even in complete darkness.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedFeature === 'experience' && (
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Driving Experiences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {drivingExperiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{exp.icon}</div>
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                            <p className="text-gray-300 mb-2">{exp.description}</p>
                            <p className="text-rolls-gold text-sm">{exp.route}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Black Badge Section */}
        <section id="black-badge" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                {blackBadge.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl text-gray-300 mb-8">{blackBadge.description}</p>
                  <ul className="space-y-4">
                    {blackBadge.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-rolls-gold rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="btn-primary mt-8">
                    Inquire About Black Badge
                  </button>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/Rolls-Royce-black.jpg"
                    alt={t('fleet.wraith.images.blackBadgeAlt')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Black Badge</p>
                    <p className="text-gray-300">The Alter Ego of Rolls-Royce</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Complete Specifications
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">Exclusive Features</h3>
                <ul className="space-y-3">
                  {specifications.exclusive.map((feature, index) => (
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
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Wraith Rental Packages
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
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              360° Wraith Tour
            </h2>
            <VirtualTour />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Command the Most Powerful Rolls-Royce
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the Wraith's perfect balance of luxury and performance. Book now for exclusive track day access.
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
                Configure Your Wraith
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