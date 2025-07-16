import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import SEO from '@/components/SEO'

export default function DubaiMarinaPage() {
  const { t } = useTranslation('common')
  const deliveryLocations = [
    'Marina Mall',
    'JBR Beach',
    'Dubai Marina Walk', 
    'Pier 7',
    'Marina Promenade',
    'The Beach at JBR',
    'Bluewaters Island',
    'Ain Dubai'
  ]

  const popularRoutes = [
    {
      name: t('locations.dubaiMarina.popularRoutes.coastal.name'),
      description: t('locations.dubaiMarina.popularRoutes.coastal.description'),
      distance: '15 km',
      duration: '25 minutes',
      highlights: [
        t('locations.dubaiMarina.popularRoutes.coastal.highlights.0'),
        t('locations.dubaiMarina.popularRoutes.coastal.highlights.1'),
        t('locations.dubaiMarina.popularRoutes.coastal.highlights.2')
      ]
    },
    {
      name: t('locations.dubaiMarina.popularRoutes.city.name'),
      description: t('locations.dubaiMarina.popularRoutes.city.description'),
      distance: '30 km',
      duration: '35 minutes',
      highlights: [
        t('locations.dubaiMarina.popularRoutes.city.highlights.0'),
        t('locations.dubaiMarina.popularRoutes.city.highlights.1'),
        t('locations.dubaiMarina.popularRoutes.city.highlights.2')
      ]
    },
    {
      name: t('locations.dubaiMarina.popularRoutes.shopping.name'),
      description: t('locations.dubaiMarina.popularRoutes.shopping.description'),
      distance: '20 km',
      duration: '30 minutes',
      highlights: [
        t('locations.dubaiMarina.popularRoutes.shopping.highlights.0'),
        t('locations.dubaiMarina.popularRoutes.shopping.highlights.1'),
        t('locations.dubaiMarina.popularRoutes.shopping.highlights.2')
      ]
    }
  ]

  const nearbyAttractions = [
    { name: 'JBR Beach', distance: '2 min', type: 'Beach' },
    { name: 'Ain Dubai', distance: '5 min', type: 'Attraction' },
    { name: 'Marina Mall', distance: '3 min', type: 'Shopping' },
    { name: 'Skydive Dubai', distance: '10 min', type: 'Adventure' },
    { name: 'Dubai Marina Yacht Club', distance: '5 min', type: 'Marina' },
    { name: 'Zero Gravity Beach', distance: '7 min', type: 'Beach Club' }
  ]

  const testimonials = [
    {
      name: 'Sarah Al Maktoum',
      location: t('locations.dubaiMarina.testimonials.sarah.location'),
      text: t('locations.dubaiMarina.testimonials.sarah.text'),
      car: t('locations.dubaiMarina.testimonials.sarah.car')
    },
    {
      name: 'James Mitchell',
      location: t('locations.dubaiMarina.testimonials.james.location'),
      text: t('locations.dubaiMarina.testimonials.james.text'),
      car: t('locations.dubaiMarina.testimonials.james.car')
    },
    {
      name: 'Fatima Ahmed',
      location: t('locations.dubaiMarina.testimonials.fatima.location'),
      text: t('locations.dubaiMarina.testimonials.fatima.text'),
      car: t('locations.dubaiMarina.testimonials.fatima.car')
    }
  ]

  return (
    <>
      <SEO pageKey="locations.dubai-marina" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-Ride-2.jpg"
              alt="Rolls-Royce Dubai Marina"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/50 via-rolls-black/30 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('locations.dubaiMarina.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('locations.dubaiMarina.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('locations.dubaiMarina.hero.bookButton')}
                </motion.button>
                <a href="tel:+971558164922" className="btn-secondary">
                  {t('locations.dubaiMarina.hero.callButton')}
                </a>
              </div>
              
              {/* Quick Info */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span>{t('locations.dubaiMarina.hero.freeDelivery')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{t('locations.dubaiMarina.hero.deliveryTime')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span>{t('locations.dubaiMarina.hero.vipConcierge')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Marina */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.whyChoose.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.dubaiMarina.whyChoose.beachside.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.dubaiMarina.whyChoose.beachside.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌃</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.dubaiMarina.whyChoose.nightlife.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.dubaiMarina.whyChoose.nightlife.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🛥️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.dubaiMarina.whyChoose.yacht.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.dubaiMarina.whyChoose.yacht.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Delivery Locations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.deliveryLocations.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {deliveryLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                  >
                    <svg className="w-6 h-6 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm">{location}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-6">
                {t('locations.dubaiMarina.deliveryLocations.additional')}
              </p>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.popularRoutes.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {popularRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-3">{route.name}</h3>
                  <p className="text-gray-300 mb-4">{route.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>{t('locations.dubaiMarina.popularRoutes.distance')}:</span>
                      <span className="text-white">{route.distance}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>{t('locations.dubaiMarina.popularRoutes.duration')}:</span>
                      <span className="text-white">{route.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-rolls-gold/10">
                    <p className="text-xs text-gray-400 mb-2">{t('locations.dubaiMarina.popularRoutes.highlights')}:</p>
                    <div className="flex flex-wrap gap-2">
                      {route.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-rolls-gold/10 text-rolls-gold px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.nearbyAttractions.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>{t('locations.dubaiMarina.nearbyAttractions.attraction')}</div>
                  <div>{t('locations.dubaiMarina.nearbyAttractions.distance')}</div>
                  <div>{t('locations.dubaiMarina.nearbyAttractions.type')}</div>
                </div>
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-3 gap-4 p-4 border-t border-rolls-gold/10 text-gray-300"
                  >
                    <div>{attraction.name}</div>
                    <div className="text-rolls-gold">{attraction.distance}</div>
                    <div className="text-sm text-gray-400">{attraction.type}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-rolls-gold text-sm">{testimonial.location}</p>
                    <p className="text-gray-400 text-sm mt-1">{t('locations.dubaiMarina.testimonials.rented')}: {testimonial.car}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.dubaiMarina.fleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('locations.dubaiMarina.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('locations.dubaiMarina.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('locations.dubaiMarina.cta.callButton')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('locations.dubaiMarina.cta.bookButton')}
              </Link>
            </div>
            
            {/* Location Map Preview */}
            <div className="max-w-2xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{t('locations.dubaiMarina.cta.pickupPoint')}</h3>
              <p className="text-gray-400 mb-2">{t('locations.dubaiMarina.cta.pickupLocation')}</p>
              <p className="text-sm text-gray-500">{t('locations.dubaiMarina.cta.gps')}</p>
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