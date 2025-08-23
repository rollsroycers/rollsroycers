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
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

import { useTranslation } from 'next-i18next'

export default function DawnPage() {
  const { t } = useTranslation('common')
  const [roofStatus, setRoofStatus] = useState<'open' | 'closed'>('closed')

  type RentalPackage = {
    duration: string;
    price: string;
    includes: string[];
  };

  type IdealOccasion = {
    icon: string;
    title: string;
    description: string;
  };
  
  const images = [
    { src: '/images/Rolls-royce-dawn-series-2.jpg', alt: t('fleet.dawn.images.convertibleAlt') },
    { src: '/images/Rolls-Royce-Ride-2.jpg', alt: t('fleet.dawn.images.drivingAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.dawn.images.interiorAlt') },
    { src: '/images/Rolls-Royce-white.jpg', alt: t('fleet.dawn.images.whiteAlt') }
  ]

  const specifications = {
    performance: Object.values(t('fleet.dawn.specs.performance', { returnObjects: true })),
    convertible: Object.values(t('fleet.dawn.specs.convertible', { returnObjects: true })),
    features: t('fleet.dawn.specs.features', { returnObjects: true }) as string[]
  }

  const idealOccasions: IdealOccasion[] = Object.values(t('fleet.dawn.idealOccasions', { returnObjects: true }));

  const rentalPackages: RentalPackage[] = Object.values(t('fleet.dawn.rentalPackages', { returnObjects: true }));

  const keyFeatures = Object.values(t('fleet.dawn.keyFeatures', { returnObjects: true }));

  const routes = Object.values(t('fleet.dawn.routes', { returnObjects: true }));
  const tourSpots = t('virtualTourSpots', { returnObjects: true }) as Record<string, any[]>;

  return (
    <>
      <SEO pageKey="fleet.dawn" />
      <Layout>
        {/* Hero Section with Roof Animation */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce_Dawn.jpg"
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
                {t('fleet.dawn.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('fleet.dawn.hero.subtitle')}
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
                  {t('fleet.dawn.hero.roofStatus.label')}: {roofStatus === 'open' ? t('fleet.dawn.hero.roofStatus.open') : t('fleet.dawn.hero.roofStatus.closed')}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.dawn.hero.cta.experience')}
                </motion.button>
                <Link href="#weather" className="btn-secondary">
                  {t('fleet.dawn.hero.cta.weather')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.dawn.sections.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                    {/* You can add icons here if you have them in your translation file */}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Occasions */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.dawn.sections.perfectMoments.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {idealOccasions.map((occasion: IdealOccasion, index: number) => (
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
              {t('fleet.dawn.sections.weatherDriving.title')}
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.dawn.sections.technicalExcellence.title')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.performance')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.convertibleTech')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.luxuryFeatures')}</h3>
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
            <VirtualTour tourSpots={tourSpots} />
          </div>
        </section>

        {/* Dubai Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Recommended Dubai Routes
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {routes.map((route: any, index: number) => (
                <div key={index} className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-rolls-gold mb-4">{route.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {route.path}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Distance: {route.distance}</li>
                    <li>• Duration: {route.duration}</li>
                    <li>• Best Time: {route.bestTime}</li>
                    <li>• Highlights: {route.highlights}</li>
                  </ul>
                </div>
              ))}
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
                {...createWhatsAppLinkProps('dawn')}
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","fleet"])),
    },
  }
}