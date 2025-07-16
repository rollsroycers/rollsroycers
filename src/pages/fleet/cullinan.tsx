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

import { useTranslation } from 'next-i18next'

export default function CullinanPage() {
  const { t } = useTranslation('common')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  type RentalPackage = {
    duration: string;
    price: string;
    includes: string[];
  };

  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: t('fleet.cullinan.images.blackAlt') },
    { src: '/images/Rolls-Royce-front.jpg', alt: t('fleet.cullinan.images.frontAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.cullinan.images.interiorAlt') },
    { src: '/images/Rolls-Royce-Cullinan_.jpg', alt: t('fleet.cullinan.images.roadAlt') }
  ]

  const specifications = {
    performance: Object.values(t('fleet.cullinan.specs.performance', { returnObjects: true })),
    dimensions: Object.values(t('fleet.cullinan.specs.dimensions', { returnObjects: true })),
    features: t('fleet.cullinan.specs.features', { returnObjects: true }) as string[]
  }

  const rentalPackagesData = t('fleet.cullinan.rentalPackages', { returnObjects: true });
  const rentalPackages: RentalPackage[] = Object.entries(rentalPackagesData)
    .filter(([key]) => key !== 'title')
    .map(([, value]) => value as RentalPackage);

  const keyFeatures = Object.values(t('fleet.cullinan.keyFeatures', { returnObjects: true }));

  const tourSpots = {
    cullinan: [
      {
        id: 'steering-wheel',
        name: t('virtualTour.spots.cullinan.steeringWheel.name'),
        description: t('virtualTour.spots.cullinan.steeringWheel.description'),
        position: { x: 50, y: 60 },
        details: t('virtualTour.spots.cullinan.steeringWheel.details', { returnObjects: true }) as string[]
      },
      {
        id: 'dashboard',
        name: t('virtualTour.spots.cullinan.dashboard.name'),
        description: t('virtualTour.spots.cullinan.dashboard.description'),
        position: { x: 65, y: 45 },
        details: t('virtualTour.spots.cullinan.dashboard.details', { returnObjects: true }) as string[]
      },
      {
        id: 'starlight-headliner',
        name: t('virtualTour.spots.cullinan.starlightHeadliner.name'),
        description: t('virtualTour.spots.cullinan.starlightHeadliner.description'),
        position: { x: 50, y: 20 },
        details: t('virtualTour.spots.cullinan.starlightHeadliner.details', { returnObjects: true }) as string[]
      }
    ]
  };

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
                {t('fleet.cullinan.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('fleet.cullinan.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.cullinan.hero.bookButton')}
                </motion.button>
                <Link href="#specs" className="btn-secondary">
                  {t('fleet.cullinan.hero.exploreButton')}
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
              {t('fleet.cullinan.whyChoose.title')}
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
                  <h3 className="text-xl font-semibold text-white mb-2">{t(feature.title)}</h3>
                  <p className="text-gray-400">{t(feature.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specs" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.cullinan.specs.title')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.cullinan.specs.performanceTitle')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.cullinan.specs.dimensionsTitle')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.cullinan.specs.featuresTitle')}</h3>
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
              {t('fleet.cullinan.rentalPackages.title')}
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
              {t('virtualShowroom.title')}
            </h2>
            <VirtualTour tourSpots={tourSpots} />
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compareFleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('fleet.cullinan.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleet.cullinan.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('footer.call')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('booking.title')}
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","fleet"])),
    },
  }
}