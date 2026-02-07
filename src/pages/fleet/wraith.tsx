import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
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
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'
import Script from 'next/script'

export default function WraithPage() {
  const { t } = useTranslation('common')
  const [selectedFeature, setSelectedFeature] = useState('performance')

  type RentalPackage = {
    duration: string;
    price: string;
    includes: string[];
  };

  type DrivingExperience = {
    icon: string;
    title: string;
    description: string;
    route: string;
  };

  type BlackBadge = {
    title: string;
    description: string;
    features: string[];
  };

  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: t('fleet.wraith.images.blackBadgeAlt') },
    { src: '/images/Rolls-Royce-Ride.jpg', alt: t('fleet.wraith.images.grandTourerAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.wraith.images.starlightInteriorAlt') },
    { src: '/images/Rolls-Royce-front.jpg', alt: t('fleet.wraith.images.frontDesignAlt') }
  ]

  const specifications = {
    performance: Object.values(t('fleet.wraith.specs.performance', { returnObjects: true })) as any[],
    dimensions: Object.values(t('fleet.wraith.specs.dimensions', { returnObjects: true })) as any[],
    exclusive: t('fleet.wraith.specs.exclusive', { returnObjects: true }) as string[]
  }

  const blackBadge: BlackBadge = t('fleet.wraith.blackBadge', { returnObjects: true }) as BlackBadge;

  const rentalPackages: RentalPackage[] = Object.values(t('fleet.wraith.rentalPackages', { returnObjects: true }));

  const drivingExperiences: DrivingExperience[] = Object.values(t('fleet.wraith.drivingExperiences', { returnObjects: true }));

  const tourSpots = {
    wraith: [
      {
        id: 'coach-doors',
        name: t('virtualTour.spots.wraith.coachDoors.name'),
        description: t('virtualTour.spots.wraith.coachDoors.description'),
        position: { x: 30, y: 55 },
        details: t('virtualTour.spots.wraith.coachDoors.details', { returnObjects: true }) as string[]
      },
      {
        id: 'infotainment',
        name: t('virtualTour.spots.wraith.infotainment.name'),
        description: t('virtualTour.spots.wraith.infotainment.description'),
        position: { x: 55, y: 48 },
        details: t('virtualTour.spots.wraith.infotainment.details', { returnObjects: true }) as string[]
      },
      {
        id: 'starlight-headliner',
        name: t('virtualTour.spots.wraith.starlightHeadliner.name'),
        description: t('virtualTour.spots.wraith.starlightHeadliner.description'),
        position: { x: 50, y: 25 },
        details: t('virtualTour.spots.wraith.starlightHeadliner.details', { returnObjects: true }) as string[]
      }
    ]
  };

  // Product Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Wraith Rental Dubai",
    "image": [
      "https://www.rollsroycers.com/images/wraith-coupe.jpg",
      "https://www.rollsroycers.com/images/Rolls-Royce-black.jpg"
    ],
    "description": "Rent Rolls-Royce Wraith in Dubai from AED 5,000/day. The most powerful Rolls-Royce with 624hp V12, Starlight headliner, grand tourer coupe.",
    "brand": { "@type": "Brand", "name": "Rolls-Royce" },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.rollsroycers.com/fleet/wraith",
      "priceCurrency": "AED",
      "lowPrice": "5000",
      "highPrice": "100000",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rolls Roycers Dubai",
        "telephone": "+971558164922"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const vehicleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": "Rolls-Royce Wraith",
    "manufacturer": { "@type": "Organization", "name": "Rolls-Royce Motor Cars" },
    "model": "Wraith",
    "vehicleConfiguration": "Grand Tourer Coupe",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": "6.6L V12 Twin-Turbo",
      "enginePower": { "@type": "QuantitativeValue", "value": "624", "unitCode": "HP" }
    },
    "vehicleSeatingCapacity": 4,
    "fuelType": "Petrol",
    "vehicleTransmission": "8-Speed Automatic",
    "speed": { "@type": "QuantitativeValue", "value": "250", "unitCode": "KMH" }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a Rolls-Royce Wraith in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wraith rental starts from AED 5,000 per day. Weekly rates at AED 30,000 and monthly at AED 100,000. All prices include insurance, VAT, and professional chauffeur service."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Wraith the fastest Rolls-Royce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with 624 HP from its 6.6L Twin-Turbo V12, the Wraith is the most powerful and dynamic Rolls-Royce. It reaches 0-100 km/h in 4.6 seconds, making it a true grand tourer."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Wraith good for photoshoots in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Wraith's dramatic fastback coupe silhouette, Starlight headliner with 1,340 fiber optic lights, and coach doors make it one of the most photogenic luxury cars in Dubai. Hourly photoshoot packages available."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.wraith" />
      <GEOOptimizer
        pageKey="fleet.wraith"
        title="Rent Rolls-Royce Wraith Dubai 2026"
        description="Rent Rolls-Royce Wraith in Dubai from AED 5,000/day. The fastest Rolls-Royce with 624hp."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Wraith Rental Dubai"
        contentSummary="The Rolls-Royce Wraith is the most powerful and dynamic Rolls-Royce ever built. Available for rent in Dubai from AED 5,000/day. 624hp grand tourer with Starlight headliner. Perfect for special occasions and photoshoots."
        facts={[
          'Rolls-Royce Wraith rental from AED 5,000/day',
          '6.6L Twin-Turbo V12 with 624 HP — fastest Rolls-Royce',
          'Starlight headliner with 1,340 fiber optic lights',
          'Grand Tourer coupe design',
          'Satellite-aided transmission',
          'Professional chauffeur included'
        ]}
        faqs={[
          { question: 'How much does it cost to rent a Rolls-Royce Wraith in Dubai?', answer: 'The Rolls-Royce Wraith rental starts from AED 5,000 per day. It is the fastest Rolls-Royce with 624 HP, ideal for those who want performance with ultimate luxury.' },
          { question: 'Is the Wraith good for photoshoots?', answer: 'Yes, the Wraith\'s dramatic coupe silhouette, Starlight headliner, and coach doors make it one of the most photogenic luxury cars in Dubai. Hourly photoshoot packages available.' }
        ]}
      />
      <EntitySchema pageType="fleet" carModel="wraith" />

      {/* Structured Data Scripts */}
      <Script id="wraith-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Script id="wraith-vehicle-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleStructuredData) }} />
      <Script id="wraith-faq-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

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
                {t('fleetPage.wraith.heroTitle')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('fleetPage.wraith.heroTagline')}
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
                  <div className="text-sm text-gray-400 uppercase">{t('fleetPage.horsepower')}</div>
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
                  <div className="text-sm text-gray-400 uppercase">{t('fleetPage.twinTurbo')}</div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleetPage.wraith.reserveBtn')}
                </motion.button>
                <Link href="#black-badge" className="btn-secondary">
                  {t('fleetPage.wraith.exploreBlackBadge')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Selector */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleetPage.wraith.discoverTitle')}
            </h2>
            
            {/* Feature Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {(['performance', 'design', 'technology', 'experience'] as const).map((feature) => (
                <button
                  key={feature}
                  onClick={() => setSelectedFeature(feature)}
                  className={`px-6 py-3 rounded-full capitalize transition-all ${
                    selectedFeature === feature
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {t(`fleetPage.wraith.tabs.${feature}`)}
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
                    <h3 className="text-3xl font-bold text-white mb-4">{t('fleet.wraith.featureTabs.performance.title')}</h3>
                    <p className="text-gray-300 mb-6">
                      {t('fleet.wraith.featureTabs.performance.description')}
                    </p>
                    <div className="space-y-4">
                      {specifications.performance.map((spec: any, index: number) => (
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
                      alt={t('fleet.wraith.images.frontDesignAlt')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {selectedFeature === 'design' && (
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">{t('fleet.wraith.featureTabs.design.title')}</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t('fleet.wraith.featureTabs.design.description')}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.values(t('fleet.wraith.featureTabs.design.stats', { returnObjects: true })).map((stat: any, index: number) => (
                      <div key={index} className="bg-rolls-black/50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-rolls-gold">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedFeature === 'technology' && (
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('fleet.wraith.featureTabs.technology.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.values(t('fleet.wraith.featureTabs.technology.items', { returnObjects: true })).map((item: any, index: number) => (
                      <div key={index} className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-rolls-gold mb-4">{item.title}</h4>
                        <p className="text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedFeature === 'experience' && (
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('fleet.wraith.featureTabs.experience.title')}</h3>
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
                    {t('fleetPage.inquireBlackBadge')}
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
                    <p className="text-white font-semibold text-lg">{t('fleetPage.blackBadgeLabel')}</p>
                    <p className="text-gray-300">{t('fleetPage.blackBadgeTagline')}</p>
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
              {t('fleetPage.completeSpecs')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleetPage.performance')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleetPage.dimensions')}</h3>
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
                <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleetPage.exclusiveFeatures')}</h3>
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
              {t('fleetPage.wraith.rentalTitle')}
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
              {t('fleetPage.wraith.tourTitle')}
            </h2>
            <VirtualTour tourSpots={tourSpots} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('fleetPage.wraith.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleetPage.wraith.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                {...createWhatsAppLinkProps('wraith')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('fleetPage.wraith.cta.callBtn')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('fleetPage.wraith.cta.configureBtn')}
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleetPage.compareFleet')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('fleetPage.relatedServices')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('fleetPage.wraith.relatedSubtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/events', title: t('fleetPage.wraith.services.events.title'), desc: t('fleetPage.wraith.services.events.desc') },
                { href: '/services/photoshoot', title: t('fleetPage.wraith.services.photoshoot.title'), desc: t('fleetPage.wraith.services.photoshoot.desc') },
                { href: '/services/chauffeur', title: t('fleetPage.wraith.services.chauffeur.title'), desc: t('fleetPage.wraith.services.chauffeur.desc') },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('fleetPage.exploreModels')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { href: '/fleet/phantom', name: t('fleet.phantom.name'), price: t('fleetPage.wraith.models.phantom.price') },
                { href: '/fleet/ghost', name: t('fleet.ghost.name'), price: t('fleetPage.wraith.models.ghost.price') },
                { href: '/fleet/cullinan', name: t('fleet.cullinan.name'), price: t('fleetPage.wraith.models.cullinan.price') },
                { href: '/fleet/dawn', name: t('fleet.dawn.name'), price: t('fleetPage.wraith.models.dawn.price') },
                { href: '/fleet/spectre', name: t('fleet.spectre.name'), price: t('fleetPage.wraith.models.spectre.price') },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group text-center bg-white/5 border border-white/10 rounded-lg p-4 hover:border-rolls-gold/50 transition-all">
                  <p className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{model.name}</p>
                  <p className="text-rolls-gold/70 text-sm mt-1">{model.price}</p>
                </Link>
              ))}
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