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

export default function GhostPage() {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState('overview');

  type RentalPackage = {
    duration: string;
    price: string;
    includes: string[];
  };

  type BusinessFeature = {
    icon: string;
    title: string;
    description: string;
  };

  const images = [
    { src: '/images/Rolls-Royce-black.jpg', alt: t('fleet.ghost.images.blackAlt') },
    { src: '/images/Rolls-royce-dubai.jpg', alt: t('fleet.ghost.images.chauffeurAlt') },
    { src: '/images/inside-Rolls-Royce.jpg', alt: t('fleet.ghost.images.interiorAlt') },
    { src: '/images/Rolls-Royce-front.jpg', alt: t('fleet.ghost.images.frontGrilleAlt') }
  ];

  const specifications = {
    performance: Object.values(t('fleet.ghost.specs.performance', { returnObjects: true })) as any[],
    dimensions: Object.values(t('fleet.ghost.specs.dimensions', { returnObjects: true })) as any[],
    technology: t('fleet.ghost.specs.technology', { returnObjects: true }) as string[]
  };

  const rentalPackages: RentalPackage[] = Object.values(t('fleet.ghost.rentalPackages', { returnObjects: true }));

  const businessFeatures: BusinessFeature[] = Object.values(t('fleet.ghost.businessFeatures', { returnObjects: true }));

  // Product Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Ghost Rental Dubai",
    "image": [
      "https://www.rollsroycers.com/images/Rolls-Royce_Ghost_Black_Badge.jpg",
      "https://www.rollsroycers.com/images/Black_Rolls_Royce_Ghost.jpg"
    ],
    "description": "Rent Rolls-Royce Ghost in Dubai from AED 3,800/day. 2026 Series II & Black Badge available with professional chauffeur. Planar suspension, illuminated fascia.",
    "brand": { "@type": "Brand", "name": "Rolls-Royce" },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.rollsroycers.com/fleet/ghost",
      "priceCurrency": "AED",
      "lowPrice": "3800",
      "highPrice": "76000",
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
    "name": "Rolls-Royce Ghost Series II",
    "manufacturer": { "@type": "Organization", "name": "Rolls-Royce Motor Cars" },
    "model": "Ghost",
    "vehicleConfiguration": "Series II",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": "6.75L V12 Twin-Turbo",
      "enginePower": { "@type": "QuantitativeValue", "value": "563", "unitCode": "HP" }
    },
    "vehicleSeatingCapacity": 5,
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
        "name": "How much does it cost to rent a Rolls-Royce Ghost in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ghost rental starts from AED 3,800 per day, making it the most affordable Rolls-Royce in our fleet. Weekly rates at AED 22,800 and monthly at AED 76,000. All prices include insurance, VAT, and chauffeur service."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the Ghost and Ghost Black Badge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Black Badge is the darker, more powerful variant with enhanced performance, blacked-out chrome, and exclusive interior finishes. It costs approximately 20% more than the standard Ghost."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Ghost good for business trips in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Ghost is the perfect business Rolls-Royce. With its refined character, Planar suspension, and illuminated fascia, it combines executive presence with supreme comfort for corporate meetings and client entertainment."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.ghost" />
      <GEOOptimizer
        pageKey="fleet.ghost"
        title="Rent Rolls-Royce Ghost Dubai 2026"
        description="Rent Rolls-Royce Ghost in Dubai from AED 3,800/day. Series II & Black Badge available with professional chauffeur."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Ghost Rental Dubai"
        contentSummary="The Rolls-Royce Ghost is the perfect balance of luxury and driving dynamics. Available for rent in Dubai from AED 3,800/day. Series II with Planar suspension, illuminated fascia. Ideal for business meetings and leisure drives."
        facts={[
          'Rolls-Royce Ghost rental from AED 3,800/day',
          '6.75L Twin-Turbo V12 with 563 HP',
          'Planar suspension system',
          'Illuminated fascia dashboard',
          'Black Badge edition available',
          'Professional chauffeur included'
        ]}
        faqs={[
          { question: 'How much does it cost to rent a Rolls-Royce Ghost in Dubai?', answer: 'The Rolls-Royce Ghost rental starts from AED 3,800 per day, making it the most affordable Rolls-Royce in our fleet. Weekly and monthly rates available with significant discounts.' },
          { question: 'What is the difference between Ghost and Ghost Black Badge?', answer: 'The Black Badge is the darker, more powerful variant with enhanced performance, blacked-out chrome, and exclusive interior finishes. It costs approximately 20% more than the standard Ghost.' }
        ]}
      />
      <EntitySchema pageType="fleet" carModel="ghost" />

      {/* Structured Data Scripts */}
      <Script id="ghost-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Script id="ghost-vehicle-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleStructuredData) }} />
      <Script id="ghost-faq-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

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
                {t('fleet.ghost.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('fleet.ghost.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.ghost.heroButtons.reserve')}
                </motion.button>
                <a href="#business" className="btn-secondary">
                  {t('fleet.ghost.heroButtons.business')}
                </a>
              </div>
              
              {/* Key Highlights */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('fleet.ghost.highlights.acceleration')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('fleet.ghost.highlights.quiet')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('fleet.ghost.highlights.engine')}</span>
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
                  {t(`fleet.ghost.tabs.${tab}`)}
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
                    {t('fleet.ghost.overview.title')}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {t('fleet.ghost.overview.p1')}
                  </p>
                  <p className="text-gray-300 mb-6">
                    {t('fleet.ghost.overview.p2')}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-rolls-gold">{t('fleet.ghost.overview.stat1.value')}</div>
                      <div className="text-sm text-gray-400">{t('fleet.ghost.overview.stat1.label')}</div>
                    </div>
                    <div className="bg-rolls-black/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-rolls-gold">{t('fleet.ghost.overview.stat2.value')}</div>
                      <div className="text-sm text-gray-400">{t('fleet.ghost.overview.stat2.label')}</div>
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
                {t('fleet.ghost.specs.title')}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.ghost.specs.performanceTitle')}</h3>
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
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.ghost.specs.dimensionsTitle')}</h3>
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
                  <h3 className="text-2xl font-semibold text-rolls-gold mb-6">{t('fleet.ghost.specs.technologyTitle')}</h3>
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
                {t('fleet.ghost.business.title')}
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
                  {t('fleet.ghost.business.corporateSolutions')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-3">{t('fleet.ghost.business.executivePackage.title')}</h4>
                    <ul className="space-y-2 text-gray-300">
                      {(t('fleet.ghost.business.executivePackage.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-3">{t('fleet.ghost.business.vipServices.title')}</h4>
                    <ul className="space-y-2 text-gray-300">
                      {(t('fleet.ghost.business.vipServices.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
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
                {t('fleet.ghost.gallery.title')}
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
                {t('fleet.ghost.booking.title')}
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
                      {pkg.includes.map((item: string, idx: number) => (
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
                  {t('fleet.ghost.booking.readyToExperience')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a {...createWhatsAppLinkProps('ghost')} className="btn-primary">
                    Chat: +971 55 816 4922
                  </a>
                  <Link href="/booking" className="btn-secondary">
                    {t('fleet.ghost.booking.bookOnlineButton')}
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
              {t('compareFleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('fleetPage.relatedServices')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('fleetPage.ghost.relatedSubtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/corporate', title: t('fleetPage.ghost.services.corporate.title'), desc: t('fleetPage.ghost.services.corporate.desc') },
                { href: '/services/chauffeur', title: t('fleetPage.ghost.services.chauffeur.title'), desc: t('fleetPage.ghost.services.chauffeur.desc') },
                { href: '/services/airport-transfer', title: t('fleetPage.ghost.services.airport.title'), desc: t('fleetPage.ghost.services.airport.desc') },
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
                { href: '/fleet/phantom', name: t('fleet.phantom.name'), price: t('fleetPage.ghost.models.phantom.price') },
                { href: '/fleet/cullinan', name: t('fleet.cullinan.name'), price: t('fleetPage.ghost.models.cullinan.price') },
                { href: '/fleet/dawn', name: t('fleet.dawn.name'), price: t('fleetPage.ghost.models.dawn.price') },
                { href: '/fleet/wraith', name: t('fleet.wraith.name'), price: t('fleetPage.ghost.models.wraith.price') },
                { href: '/fleet/spectre', name: t('fleet.spectre.name'), price: t('fleetPage.ghost.models.spectre.price') },
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