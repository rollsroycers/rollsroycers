import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import LocationStructuredData from '@/components/LocationStructuredData'
import { useState } from 'react'

export default function LocationsPage() {
  const { t } = useTranslation('locations')
  const [activeZone, setActiveZone] = useState('all')

  const locations = [
    {
      id: 'downtown',
      zone: 'central',
      name: t('locations.downtown.name'),
      description: t('locations.downtown.description'),
      image: '/images/Rolls-royce-official.jpg',
      link: '/locations/downtown-dubai',
      landmarks: t('locations.downtown.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.downtown.distance'),
      services: ['wedding', 'corporate', 'airport', 'tours'],
      popular: true
    },
    {
      id: 'marina',
      zone: 'coastal',
      name: t('locations.marina.name'),
      description: t('locations.marina.description'),
      image: '/images/marina-hero.jpg',
      link: '/locations/dubai-marina',
      landmarks: t('locations.marina.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.marina.distance'),
      services: ['tours', 'photoshoot', 'events', 'chauffeur']
    },
    {
      id: 'palm',
      zone: 'coastal',
      name: t('locations.palm.name'),
      description: t('locations.palm.description'),
      image: '/images/palm-hero.jpg',
      link: '/locations/palm-jumeirah',
      landmarks: t('locations.palm.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.palm.distance'),
      services: ['wedding', 'photoshoot', 'tours', 'events'],
      luxury: true
    },
    {
      id: 'businessBay',
      zone: 'business',
      name: t('locations.businessBay.name'),
      description: t('locations.businessBay.description'),
      image: '/images/Rolls-Royce-black.jpg',
      link: '/locations/business-bay',
      landmarks: t('locations.businessBay.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.businessBay.distance'),
      services: ['corporate', 'airport', 'chauffeur', 'events']
    },
    {
      id: 'jbr',
      zone: 'coastal',
      name: t('locations.jbr.name'),
      description: t('locations.jbr.description'),
      image: '/images/lifestyle-shoot.jpg',
      link: '/locations/jbr',
      landmarks: t('locations.jbr.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.jbr.distance'),
      services: ['tours', 'photoshoot', 'chauffeur', 'events']
    },
    {
      id: 'difc',
      zone: 'business',
      name: t('locations.difc.name'),
      description: t('locations.difc.description'),
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      link: '/locations/difc',
      landmarks: t('locations.difc.landmarks', { returnObjects: true }) as string[],
      distance: t('locations.difc.distance'),
      services: ['corporate', 'airport', 'chauffeur', 'events'],
      business: true
    }
  ]

  const zones = [
    { id: 'all', label: t('locations.zones.all'), icon: '🌟' },
    { id: 'central', label: t('locations.zones.central'), icon: '🏙️' },
    { id: 'coastal', label: t('locations.zones.coastal'), icon: '🏖️' },
    { id: 'business', label: t('locations.zones.business'), icon: '🏢' }
  ]

  const filteredLocations = activeZone === 'all' 
    ? locations 
    : locations.filter(location => location.zone === activeZone)

  const serviceIcons = {
    wedding: '💒',
    corporate: '💼',
    airport: '✈️',
    chauffeur: '🤵',
    events: '🎭',
    photoshoot: '📸',
    tours: '🗺️'
  }

  const stats = [
    { value: '6', label: t('locations.stats.areas'), icon: '📍' },
    { value: '24/7', label: t('locations.stats.availability'), icon: '⏰' },
    { value: '15 min', label: t('locations.stats.response'), icon: '⚡' },
    { value: '100%', label: t('locations.stats.coverage'), icon: '🗺️' }
  ]

  return (
    <>
      <SEO pageKey="locations.main" />
      <LocationStructuredData
        locationName="Dubai Service Locations"
        locationType="main"
        description="Premium Rolls-Royce service across all Dubai locations including Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JBR, and DIFC with 24/7 availability."
        image="/images/Rolls-royce-official.jpg"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Service Locations Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('locations.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('locations.hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                {t('locations.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#locations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('locations.hero.viewLocations')}
                </motion.a>
                <a href="tel:+971558164922" className="btn-secondary">
                  {t('locations.hero.bookNow')}: +971 55 816 4922
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-rolls-gold mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone Filter */}
        <section className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {zones.map((zone) => (
                <motion.button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    activeZone === zone.id
                      ? 'bg-rolls-gold text-rolls-black border-rolls-gold'
                      : 'bg-transparent text-white border-rolls-gold/50 hover:border-rolls-gold'
                  }`}
                >
                  <span className="mr-2">{zone.icon}</span>
                  {zone.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section id="locations" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.grid.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group hover:border-rolls-gold/50 transition-all relative"
                >
                  {location.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-sm font-semibold">
                      {t('locations.grid.popular')}
                    </div>
                  )}
                  {location.luxury && (
                    <div className="absolute top-4 left-4 z-10 bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-sm font-semibold">
                      {t('locations.grid.luxury')}
                    </div>
                  )}
                  {location.business && (
                    <div className="absolute top-4 left-4 z-10 bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-sm font-semibold">
                      {t('locations.grid.business')}
                    </div>
                  )}
                  
                  <Link href={location.link}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rolls-gold transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {location.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm text-rolls-gold mb-2">{t('locations.grid.nearbyLandmarks')}</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {location.landmarks.slice(0, 3).map((landmark, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-rolls-gold mr-2">•</span>
                              {landmark}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-500">
                          <span className="text-rolls-gold">📍</span> {location.distance}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.services.map((service) => (
                          <span
                            key={service}
                            className="text-2xl"
                            title={service}
                          >
                            {serviceIcons[service as keyof typeof serviceIcons]}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-rolls-gold group-hover:translate-x-2 transition-transform">
                          {t('locations.grid.viewDetails')} →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Coverage Map */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.coverage.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('locations.coverage.subtitle')}
                </h3>
                <p className="text-gray-400 mb-8">
                  {t('locations.coverage.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🚗</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {t('locations.coverage.instant.title')}
                      </h4>
                      <p className="text-gray-400">
                        {t('locations.coverage.instant.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📍</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {t('locations.coverage.strategic.title')}
                      </h4>
                      <p className="text-gray-400">
                        {t('locations.coverage.strategic.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">⚡</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {t('locations.coverage.quick.title')}
                      </h4>
                      <p className="text-gray-400">
                        {t('locations.coverage.quick.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative h-96 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {t('locations.coverage.areas.title')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: t('locations.coverage.areas.downtown'), time: '5-10 min' },
                    { name: t('locations.coverage.areas.marina'), time: '10-15 min' },
                    { name: t('locations.coverage.areas.palm'), time: '15-20 min' },
                    { name: t('locations.coverage.areas.businessBay'), time: '5-10 min' },
                    { name: t('locations.coverage.areas.jbr'), time: '10-15 min' },
                    { name: t('locations.coverage.areas.difc'), time: '5-10 min' },
                    { name: t('locations.coverage.areas.deira'), time: '20-25 min' },
                    { name: t('locations.coverage.areas.jumeirah'), time: '10-15 min' }
                  ].map((area, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{area.name}</span>
                      <span className="text-rolls-gold text-sm">{area.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.routes.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  from: t('locations.routes.route1.from'),
                  to: t('locations.routes.route1.to'),
                  time: '25 min',
                  price: 'AED 450',
                  icon: '✈️'
                },
                {
                  from: t('locations.routes.route2.from'),
                  to: t('locations.routes.route2.to'),
                  time: '15 min',
                  price: 'AED 300',
                  icon: '🏙️'
                },
                {
                  from: t('locations.routes.route3.from'),
                  to: t('locations.routes.route3.to'),
                  time: '20 min',
                  price: 'AED 350',
                  icon: '🏖️'
                },
                {
                  from: t('locations.routes.route4.from'),
                  to: t('locations.routes.route4.to'),
                  time: '10 min',
                  price: 'AED 250',
                  icon: '💼'
                },
                {
                  from: t('locations.routes.route5.from'),
                  to: t('locations.routes.route5.to'),
                  time: '30 min',
                  price: 'AED 500',
                  icon: '🌴'
                },
                {
                  from: t('locations.routes.route6.from'),
                  to: t('locations.routes.route6.to'),
                  time: '35 min',
                  price: 'AED 550',
                  icon: '🛍️'
                }
              ].map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/50 transition-all"
                >
                  <div className="text-3xl mb-4 text-center">{route.icon}</div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <span className="text-rolls-gold mr-2">📍</span>
                      <span className="text-sm">{route.from}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-rolls-gold mr-2">🎯</span>
                      <span className="text-sm">{route.to}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-rolls-gold/20 flex justify-between items-center">
                    <span className="text-gray-400 text-sm">⏱️ {route.time}</span>
                    <span className="text-rolls-gold font-semibold">{route.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Availability */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.availability.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  ⏰
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('locations.availability.hours.title')}
                </h3>
                <p className="text-gray-400">
                  {t('locations.availability.hours.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  📞
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('locations.availability.booking.title')}
                </h3>
                <p className="text-gray-400">
                  {t('locations.availability.booking.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  🚗
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('locations.availability.fleet.title')}
                </h3>
                <p className="text-gray-400">
                  {t('locations.availability.fleet.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('locations.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('locations.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:+971558164922" className="btn-primary">
                {t('locations.cta.call')}: +971 55 816 4922
              </a>
              <a href="https://wa.me/971558164922" className="btn-secondary">
                {t('locations.cta.whatsapp')}
              </a>
              <Link href="/booking" className="btn-secondary">
                {t('locations.cta.bookOnline')}
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-gray-400">{t('locations.cta.features.premium')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-gray-400">{t('locations.cta.features.fast')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-gray-400">{t('locations.cta.features.reliable')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💎</div>
                <p className="text-gray-400">{t('locations.cta.features.luxury')}</p>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","locations"])),
    },
  }
}