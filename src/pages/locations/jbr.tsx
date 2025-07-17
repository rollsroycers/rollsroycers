import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import WeatherRecommendations from '@/components/WeatherRecommendations'
import SEO from '@/components/SEO'

export default function JBRPage() {
  const { t } = useTranslation('common')
  
  const beachClubs = [
    { 
      name: t('locations.jbr.beachClubs.clubs.zeroGravity.name'), 
      type: t('locations.jbr.beachClubs.clubs.zeroGravity.type'), 
      feature: t('locations.jbr.beachClubs.clubs.zeroGravity.feature') 
    },
    { 
      name: t('locations.jbr.beachClubs.clubs.nikki.name'), 
      type: t('locations.jbr.beachClubs.clubs.nikki.type'), 
      feature: t('locations.jbr.beachClubs.clubs.nikki.feature') 
    },
    { 
      name: t('locations.jbr.beachClubs.clubs.barasti.name'), 
      type: t('locations.jbr.beachClubs.clubs.barasti.type'), 
      feature: t('locations.jbr.beachClubs.clubs.barasti.feature') 
    },
    { 
      name: t('locations.jbr.beachClubs.clubs.cove.name'), 
      type: t('locations.jbr.beachClubs.clubs.cove.type'), 
      feature: t('locations.jbr.beachClubs.clubs.cove.feature') 
    },
    { 
      name: t('locations.jbr.beachClubs.clubs.azure.name'), 
      type: t('locations.jbr.beachClubs.clubs.azure.type'), 
      feature: t('locations.jbr.beachClubs.clubs.azure.feature') 
    },
    { 
      name: t('locations.jbr.beachClubs.clubs.theBeach.name'), 
      type: t('locations.jbr.beachClubs.clubs.theBeach.type'), 
      feature: t('locations.jbr.beachClubs.clubs.theBeach.feature') 
    }
  ]

  const restaurants = [
    { 
      name: t('locations.jbr.dining.restaurants.zuma.name'), 
      cuisine: t('locations.jbr.dining.restaurants.zuma.cuisine'), 
      location: t('locations.jbr.dining.restaurants.zuma.location') 
    },
    { 
      name: t('locations.jbr.dining.restaurants.laPetite.name'), 
      cuisine: t('locations.jbr.dining.restaurants.laPetite.cuisine'), 
      location: t('locations.jbr.dining.restaurants.laPetite.location') 
    },
    { 
      name: t('locations.jbr.dining.restaurants.stk.name'), 
      cuisine: t('locations.jbr.dining.restaurants.stk.cuisine'), 
      location: t('locations.jbr.dining.restaurants.stk.location') 
    },
    { 
      name: t('locations.jbr.dining.restaurants.seafire.name'), 
      cuisine: t('locations.jbr.dining.restaurants.seafire.cuisine'), 
      location: t('locations.jbr.dining.restaurants.seafire.location') 
    },
    { 
      name: t('locations.jbr.dining.restaurants.ilBorro.name'), 
      cuisine: t('locations.jbr.dining.restaurants.ilBorro.cuisine'), 
      location: t('locations.jbr.dining.restaurants.ilBorro.location') 
    },
    { 
      name: t('locations.jbr.dining.restaurants.nobu.name'), 
      cuisine: t('locations.jbr.dining.restaurants.nobu.cuisine'), 
      location: t('locations.jbr.dining.restaurants.nobu.location') 
    }
  ]

  const experiences = [
    {
      title: t('locations.jbr.experiences.sunset.title'),
      description: t('locations.jbr.experiences.sunset.description'),
      highlights: t('locations.jbr.experiences.sunset.highlights', { returnObjects: true }) as string[],
      bestCar: t('locations.jbr.experiences.sunset.bestCar'),
      price: t('locations.jbr.experiences.sunset.price')
    },
    {
      title: t('locations.jbr.experiences.beachClub.title'),
      description: t('locations.jbr.experiences.beachClub.description'),
      highlights: t('locations.jbr.experiences.beachClub.highlights', { returnObjects: true }) as string[],
      bestCar: t('locations.jbr.experiences.beachClub.bestCar'),
      price: t('locations.jbr.experiences.beachClub.price')
    },
    {
      title: t('locations.jbr.experiences.nightLife.title'),
      description: t('locations.jbr.experiences.nightLife.description'),
      highlights: t('locations.jbr.experiences.nightLife.highlights', { returnObjects: true }) as string[],
      bestCar: t('locations.jbr.experiences.nightLife.bestCar'),
      price: t('locations.jbr.experiences.nightLife.price')
    }
  ]

  const attractions = [
    { 
      name: t('locations.jbr.attractions.list.theWalk.name'), 
      distance: t('locations.jbr.attractions.list.theWalk.distance'), 
      type: t('locations.jbr.attractions.list.theWalk.type') 
    },
    { 
      name: t('locations.jbr.attractions.list.marina.name'), 
      distance: t('locations.jbr.attractions.list.marina.distance'), 
      type: t('locations.jbr.attractions.list.marina.type') 
    },
    { 
      name: t('locations.jbr.attractions.list.ainDubai.name'), 
      distance: t('locations.jbr.attractions.list.ainDubai.distance'), 
      type: t('locations.jbr.attractions.list.ainDubai.type') 
    },
    { 
      name: t('locations.jbr.attractions.list.palm.name'), 
      distance: t('locations.jbr.attractions.list.palm.distance'), 
      type: t('locations.jbr.attractions.list.palm.type') 
    },
    { 
      name: t('locations.jbr.attractions.list.skydive.name'), 
      distance: t('locations.jbr.attractions.list.skydive.distance'), 
      type: t('locations.jbr.attractions.list.skydive.type') 
    },
    { 
      name: t('locations.jbr.attractions.list.marinaMall.name'), 
      distance: t('locations.jbr.attractions.list.marinaMall.distance'), 
      type: t('locations.jbr.attractions.list.marinaMall.type') 
    }
  ]

  const residences = t('locations.jbr.residential.towers', { returnObjects: true }) as string[]

  const stats = [
    { number: '300+', label: t('locations.jbr.stats.deliveries') },
    { number: '10 min', label: t('locations.jbr.stats.arrival') },
    { number: '24/7', label: t('locations.jbr.stats.service') },
    { number: '5 ⭐', label: t('locations.jbr.stats.rating') }
  ]

  return (
    <>
      <SEO pageKey="locations.jbr" />
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
              <source src="/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4" type="video/mp4" />
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
                {t('locations.jbr.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('locations.jbr.hero.subtitle')}
              </p>
              
              {/* Beach Badge */}
              <div className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <span className="text-2xl">🏖️</span>
                <span className="text-white">{t('locations.jbr.hero.badge')}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('locations.jbr.hero.cta.book')}
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  {t('locations.jbr.hero.cta.experiences')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why JBR */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.whyChoose.title')}
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
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

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.jbr.whyChoose.features.beachfront.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.jbr.whyChoose.features.beachfront.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍹</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.jbr.whyChoose.features.vip.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.jbr.whyChoose.features.vip.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌅</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.jbr.whyChoose.features.sunset.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.jbr.whyChoose.features.sunset.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beach Clubs */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.beachClubs.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {beachClubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{club.name}</h3>
                  <p className="text-rolls-gold text-sm mb-2">{club.type}</p>
                  <p className="text-gray-400 text-sm">✓ {club.feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.experiences.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">{t('locations.jbr.experiences.recommended')}</p>
                    <p className="text-rolls-gold font-semibold">{exp.bestCar}</p>
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">{exp.price}</div>
                  <button className="btn-primary w-full">
                    {t('locations.jbr.experiences.sunset.cta')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dining & Entertainment */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.dining.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>{t('locations.jbr.dining.headers.restaurant')}</div>
                  <div>{t('locations.jbr.dining.headers.cuisine')}</div>
                  <div>{t('locations.jbr.dining.headers.location')}</div>
                </div>
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-3 gap-4 p-4 border-t border-rolls-gold/10"
                  >
                    <div className="text-gray-300">{restaurant.name}</div>
                    <div className="text-rolls-gold">{restaurant.cuisine}</div>
                    <div className="text-gray-400 text-sm">{restaurant.location}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-4">
                {t('locations.jbr.dining.note')}
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.attractions.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{attraction.name}</h3>
                  <p className="text-rolls-gold text-sm mb-1">{attraction.distance}</p>
                  <p className="text-gray-400 text-sm">{attraction.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Recommendations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.weather.title')}
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Residential Delivery */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.residential.title')}
            </h2>
            <div className="max-w-4xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
              <p className="text-gray-300 text-center mb-8">
                {t('locations.jbr.residential.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {residences.map((residence, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-center bg-rolls-black/30 rounded p-3"
                  >
                    <p className="text-white">{residence}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-rolls-gold mt-6">
                {t('locations.jbr.residential.note')}
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.jbr.fleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('locations.jbr.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('locations.jbr.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('locations.jbr.cta.call')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('locations.jbr.cta.book')}
              </Link>
            </div>
            
            {/* Location Info */}
            <div className="max-w-2xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{t('locations.jbr.cta.pickupPoints.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-300">
                  <p className="text-rolls-gold mb-1">{t('locations.jbr.cta.pickupPoints.beach.title')}</p>
                  <p>{t('locations.jbr.cta.pickupPoints.beach.location')}</p>
                </div>
                <div className="text-gray-300">
                  <p className="text-rolls-gold mb-1">{t('locations.jbr.cta.pickupPoints.tower.title')}</p>
                  <p>{t('locations.jbr.cta.pickupPoints.tower.location')}</p>
                </div>
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