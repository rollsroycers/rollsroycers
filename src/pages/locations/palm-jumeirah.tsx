import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import WeatherRecommendations from '@/components/WeatherRecommendations'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'

export default function PalmJumeirahPage() {
  const { t } = useTranslation('common')
  const luxuryHotels = [
    { name: 'Atlantis The Palm', category: t('locations.palmJumeirah.partnerHotels.atlantis.category'), feature: t('locations.palmJumeirah.partnerHotels.atlantis.feature') },
    { name: 'One&Only The Palm', category: t('locations.palmJumeirah.partnerHotels.oneAndOnly.category'), feature: t('locations.palmJumeirah.partnerHotels.oneAndOnly.feature') },
    { name: 'Waldorf Astoria', category: t('locations.palmJumeirah.partnerHotels.waldorf.category'), feature: t('locations.palmJumeirah.partnerHotels.waldorf.feature') },
    { name: 'FIVE Palm Jumeirah', category: t('locations.palmJumeirah.partnerHotels.five.category'), feature: t('locations.palmJumeirah.partnerHotels.five.feature') },
    { name: 'Anantara The Palm', category: t('locations.palmJumeirah.partnerHotels.anantara.category'), feature: t('locations.palmJumeirah.partnerHotels.anantara.feature') },
    { name: 'W Dubai - The Palm', category: t('locations.palmJumeirah.partnerHotels.w.category'), feature: t('locations.palmJumeirah.partnerHotels.w.feature') }
  ]

  const attractions = [
    {
      name: 'The Pointe',
      description: t('locations.palmJumeirah.attractions.thePointe.description'),
      distance: t('locations.palmJumeirah.attractions.thePointe.distance'),
      bestTime: t('locations.palmJumeirah.attractions.thePointe.bestTime')
    },
    {
      name: 'Nakheel Mall',
      description: t('locations.palmJumeirah.attractions.nakheelMall.description'),
      distance: t('locations.palmJumeirah.attractions.nakheelMall.distance'),
      bestTime: t('locations.palmJumeirah.attractions.nakheelMall.bestTime')
    },
    {
      name: 'Palm West Beach',
      description: t('locations.palmJumeirah.attractions.palmWestBeach.description'),
      distance: t('locations.palmJumeirah.attractions.palmWestBeach.distance'),
      bestTime: t('locations.palmJumeirah.attractions.palmWestBeach.bestTime')
    },
    {
      name: 'The View at The Palm',
      description: t('locations.palmJumeirah.attractions.theView.description'),
      distance: t('locations.palmJumeirah.attractions.theView.distance'),
      bestTime: t('locations.palmJumeirah.attractions.theView.bestTime')
    }
  ]

  const drivingRoutes = [
    {
      name: t('locations.palmJumeirah.drivingRoutes.crescent.name'),
      description: t('locations.palmJumeirah.drivingRoutes.crescent.description'),
      highlights: [
        t('locations.palmJumeirah.drivingRoutes.crescent.highlights.0'),
        t('locations.palmJumeirah.drivingRoutes.crescent.highlights.1'),
        t('locations.palmJumeirah.drivingRoutes.crescent.highlights.2')
      ],
      duration: '30 minutes',
      bestCar: 'Dawn Convertible'
    },
    {
      name: t('locations.palmJumeirah.drivingRoutes.full.name'),
      description: t('locations.palmJumeirah.drivingRoutes.full.description'),
      highlights: [
        t('locations.palmJumeirah.drivingRoutes.full.highlights.0'),
        t('locations.palmJumeirah.drivingRoutes.full.highlights.1'),
        t('locations.palmJumeirah.drivingRoutes.full.highlights.2')
      ],
      duration: '45 minutes',
      bestCar: 'Phantom'
    },
    {
      name: t('locations.palmJumeirah.drivingRoutes.night.name'),
      description: t('locations.palmJumeirah.drivingRoutes.night.description'),
      highlights: [
        t('locations.palmJumeirah.drivingRoutes.night.highlights.0'),
        t('locations.palmJumeirah.drivingRoutes.night.highlights.1'),
        t('locations.palmJumeirah.drivingRoutes.night.highlights.2')
      ],
      duration: '40 minutes',
      bestCar: 'Ghost'
    }
  ]

  const exclusiveExperiences = [
    {
      title: t('locations.palmJumeirah.exclusiveExperiences.beachClub.title'),
      description: t('locations.palmJumeirah.exclusiveExperiences.beachClub.description'),
      includes: [
        t('locations.palmJumeirah.exclusiveExperiences.beachClub.includes.0'),
        t('locations.palmJumeirah.exclusiveExperiences.beachClub.includes.1'),
        t('locations.palmJumeirah.exclusiveExperiences.beachClub.includes.2'),
        t('locations.palmJumeirah.exclusiveExperiences.beachClub.includes.3')
      ],
      price: t('locations.palmJumeirah.exclusiveExperiences.beachClub.price')
    },
    {
      title: t('locations.palmJumeirah.exclusiveExperiences.atlantis.title'),
      description: t('locations.palmJumeirah.exclusiveExperiences.atlantis.description'),
      includes: [
        t('locations.palmJumeirah.exclusiveExperiences.atlantis.includes.0'),
        t('locations.palmJumeirah.exclusiveExperiences.atlantis.includes.1'),
        t('locations.palmJumeirah.exclusiveExperiences.atlantis.includes.2'),
        t('locations.palmJumeirah.exclusiveExperiences.atlantis.includes.3')
      ],
      price: t('locations.palmJumeirah.exclusiveExperiences.atlantis.price')
    },
    {
      title: t('locations.palmJumeirah.exclusiveExperiences.villa.title'),
      description: t('locations.palmJumeirah.exclusiveExperiences.villa.description'),
      includes: [
        t('locations.palmJumeirah.exclusiveExperiences.villa.includes.0'),
        t('locations.palmJumeirah.exclusiveExperiences.villa.includes.1'),
        t('locations.palmJumeirah.exclusiveExperiences.villa.includes.2'),
        t('locations.palmJumeirah.exclusiveExperiences.villa.includes.3')
      ],
      price: t('locations.palmJumeirah.exclusiveExperiences.villa.price')
    }
  ]

  const stats = [
    { number: '500+', label: t('locations.palmJumeirah.stats.deliveries') },
    { number: '15 min', label: t('locations.palmJumeirah.stats.deliveryTime') },
    { number: '24/7', label: t('locations.palmJumeirah.stats.concierge') },
    { number: '95%', label: t('locations.palmJumeirah.stats.satisfaction') }
  ]

  return (
    <>
      <SEO pageKey="locations.palm-jumeirah" />
      <GEOOptimizer
        pageKey="locations.palm-jumeirah"
        title="Rolls-Royce Rental Palm Jumeirah 2026"
        description="Rent Rolls-Royce on Palm Jumeirah. Delivery to Atlantis, Royal Atlantis, One&Only. Premium resort service."
        entityType="LocalBusiness"
        primaryTopic="Rolls-Royce Rental Palm Jumeirah"
        contentSummary="Luxury Rolls-Royce rental on Palm Jumeirah. Free delivery to Atlantis, Royal Atlantis, One&Only, and all Palm hotels. Perfect for resort guests and tourists."
        facts={['Free delivery to Palm Jumeirah hotels', 'Atlantis and resort service', 'Dawn convertible for island drives', '24/7 availability', 'Tourist-friendly service']}
      />
      <EntitySchema pageType="location" locationName="palm-jumeirah" />
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
              <source src="/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-rolls-black/30 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('locations.palmJumeirah.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('locations.palmJumeirah.hero.subtitle')}
              </p>
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{t('locations.palmJumeirah.hero.badge')}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('locations.palmJumeirah.hero.bookButton')}
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  {t('locations.palmJumeirah.hero.exploreButton')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Palm Jumeirah */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.whyChoose.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-rolls-gold mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.palmJumeirah.whyChoose.beach.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.palmJumeirah.whyChoose.beach.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.palmJumeirah.whyChoose.hotels.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.palmJumeirah.whyChoose.hotels.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.palmJumeirah.whyChoose.villas.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.palmJumeirah.whyChoose.villas.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Luxury Hotels */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.partnerHotels.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {luxuryHotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{hotel.name}</h3>
                  <p className="text-rolls-gold text-sm mb-2">{hotel.category}</p>
                  <p className="text-gray-400 text-sm">✓ {hotel.feature}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              {t('locations.palmJumeirah.partnerHotels.additional')}
            </p>
          </div>
        </section>

        {/* Driving Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.drivingRoutes.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {drivingRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-3">{route.name}</h3>
                  <p className="text-gray-300 mb-4">{route.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t('locations.palmJumeirah.drivingRoutes.highlights')}:</p>
                      <div className="flex flex-wrap gap-2">
                        {route.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-rolls-gold/10 text-rolls-gold px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-rolls-gold/10 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('locations.palmJumeirah.drivingRoutes.duration')}:</span>
                      <span className="text-white">{route.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('locations.palmJumeirah.drivingRoutes.bestCar')}:</span>
                      <span className="text-rolls-gold">{route.bestCar}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.exclusiveExperiences.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {exclusiveExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-rolls-gold mb-4">{exp.price}</div>
                  <button className="btn-primary w-full">
                    {t('locations.palmJumeirah.exclusiveExperiences.bookButton')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.attractions.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{attraction.name}</h3>
                  <p className="text-gray-300 mb-3">{attraction.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">
                      <span className="text-rolls-gold">{t('locations.palmJumeirah.attractions.distance')}:</span> {attraction.distance}
                    </p>
                    <p className="text-gray-400">
                      <span className="text-rolls-gold">{t('locations.palmJumeirah.attractions.bestTime')}:</span> {attraction.bestTime}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Recommendations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.weather.title')}
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.palmJumeirah.fleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('locations.palmJumeirah.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('locations.palmJumeirah.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('locations.palmJumeirah.cta.callButton')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('locations.palmJumeirah.cta.bookButton')}
              </Link>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-white text-sm">{t('locations.palmJumeirah.cta.freeDelivery')}</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className="text-white text-sm">{t('locations.palmJumeirah.cta.response')}</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-white text-sm">{t('locations.palmJumeirah.cta.support')}</p>
              </div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
