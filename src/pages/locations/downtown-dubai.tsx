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

export default function DowntownDubaiPage() {
  const { t } = useTranslation('common')
  const landmarks = [
    { name: 'Burj Khalifa', type: 'Iconic Tower', distance: '2 min' },
    { name: 'Dubai Mall', type: 'Shopping', distance: '3 min' },
    { name: 'Dubai Fountain', type: 'Attraction', distance: '3 min' },
    { name: 'Souk Al Bahar', type: 'Shopping', distance: '5 min' },
    { name: 'Dubai Opera', type: 'Culture', distance: '5 min' },
    { name: 'DIFC', type: 'Business', distance: '7 min' }
  ]

  const hotels = [
    'Armani Hotel Dubai',
    'Address Downtown',
    'Palace Downtown',
    'Vida Downtown',
    'Manzil Downtown',
    'Rove Downtown',
    'Sofitel Dubai Downtown',
    'The Address Sky View'
  ]

  const experiences = [
    {
      title: t('locations.downtown.experiences.burjKhalifa.title'),
      description: t('locations.downtown.experiences.burjKhalifa.description'),
      features: [
        t('locations.downtown.experiences.burjKhalifa.features.0'),
        t('locations.downtown.experiences.burjKhalifa.features.1'),
        t('locations.downtown.experiences.burjKhalifa.features.2'),
        t('locations.downtown.experiences.burjKhalifa.features.3')
      ],
      recommended: t('locations.downtown.experiences.burjKhalifa.recommended')
    },
    {
      title: t('locations.downtown.experiences.dubaiMall.title'),
      description: t('locations.downtown.experiences.dubaiMall.description'),
      features: [
        t('locations.downtown.experiences.dubaiMall.features.0'),
        t('locations.downtown.experiences.dubaiMall.features.1'),
        t('locations.downtown.experiences.dubaiMall.features.2'),
        t('locations.downtown.experiences.dubaiMall.features.3')
      ],
      recommended: t('locations.downtown.experiences.dubaiMall.recommended')
    },
    {
      title: t('locations.downtown.experiences.business.title'),
      description: t('locations.downtown.experiences.business.description'),
      features: [
        t('locations.downtown.experiences.business.features.0'),
        t('locations.downtown.experiences.business.features.1'),
        t('locations.downtown.experiences.business.features.2'),
        t('locations.downtown.experiences.business.features.3')
      ],
      recommended: t('locations.downtown.experiences.business.recommended')
    }
  ]

  const routes = [
    {
      name: t('locations.downtown.routes.fountain.name'),
      stops: ['Dubai Mall Valet', 'Souk Al Bahar', 'Palace Hotel', 'Address Fountain Views'],
      duration: t('locations.downtown.routes.fountain.duration'),
      bestTime: t('locations.downtown.routes.fountain.bestTime')
    },
    {
      name: t('locations.downtown.routes.architecture.name'),
      stops: ['Burj Khalifa', 'Dubai Opera', 'ICD Brookfield', 'Museum of the Future'],
      duration: t('locations.downtown.routes.architecture.duration'),
      bestTime: t('locations.downtown.routes.architecture.bestTime')
    },
    {
      name: t('locations.downtown.routes.dining.name'),
      stops: ['At.mosphere', 'Zuma', 'La Petite Maison', 'Nobu'],
      duration: t('locations.downtown.routes.dining.duration'),
      bestTime: t('locations.downtown.routes.dining.bestTime')
    }
  ]

  const testimonials = [
    {
      name: 'Abdullah Al Rashid',
      location: t('locations.downtown.testimonials.abdullah.location'),
      text: t('locations.downtown.testimonials.abdullah.text'),
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      location: t('locations.downtown.testimonials.sophie.location'),
      text: t('locations.downtown.testimonials.sophie.text'),
      rating: 5
    },
    {
      name: 'David Chen',
      location: t('locations.downtown.testimonials.david.location'),
      text: t('locations.downtown.testimonials.david.text'),
      rating: 5
    }
  ]

  return (
    <>
      <SEO pageKey="locations.downtown-dubai" />

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
                {t('locations.downtown.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('locations.downtown.hero.subtitle')}
              </p>
              
              {/* Location Highlight */}
              <div className="inline-flex items-center gap-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{t('locations.downtown.hero.district')}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('locations.downtown.hero.bookButton')}
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  {t('locations.downtown.hero.exploreButton')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Downtown Advantages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.advantages.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.downtown.advantages.central.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.downtown.advantages.central.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.downtown.advantages.vip.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.downtown.advantages.vip.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.downtown.advantages.delivery.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.downtown.advantages.delivery.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('locations.downtown.advantages.concierge.title')}</h3>
                <p className="text-gray-400">
                  {t('locations.downtown.advantages.concierge.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Landmark Access */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.landmarks.title')}
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{landmark.name}</h3>
                      <span className="text-rolls-gold text-sm">{landmark.distance}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{landmark.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.experiences.title')}
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
                    {exp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-rolls-gold/20">
                    <p className="text-sm text-gray-400">{t('locations.downtown.experiences.recommendedVehicle')}:</p>
                    <p className="text-rolls-gold font-semibold">{exp.recommended}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel Partnerships */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.hotels.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <p className="text-gray-300 mb-6 text-center">
                  {t('locations.downtown.hotels.subtitle')}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-center"
                    >
                      <p className="text-white text-sm">{hotel}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-rolls-gold mt-6">
                  {t('locations.downtown.hotels.additional')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenic Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.routes.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {routes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-4">{route.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t('locations.downtown.routes.stops')}:</p>
                      <ul className="space-y-1">
                        {route.stops.map((stop, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-rolls-gold rounded-full mr-2"></span>
                            {stop}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-rolls-gold/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{t('locations.downtown.routes.duration')}:</span>
                        <span className="text-white">{route.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">{t('locations.downtown.routes.bestTime')}:</span>
                        <span className="text-white">{route.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-rolls-gold text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('locations.downtown.fleet.title')}
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('locations.downtown.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('locations.downtown.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('locations.downtown.cta.callButton')}
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                {t('locations.downtown.cta.bookButton')}
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">1,000+</div>
                <div className="text-sm text-gray-400">{t('locations.downtown.stats.deliveries')}</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">{t('locations.downtown.stats.time')}</div>
                <div className="text-sm text-gray-400">{t('locations.downtown.stats.avgDelivery')}</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">{t('locations.downtown.stats.availability')}</div>
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