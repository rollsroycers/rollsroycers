import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import ServiceStructuredData from '@/components/ServiceStructuredData'
import { useState } from 'react'

export default function ServicesPage() {
  const { t } = useTranslation('services')
  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    {
      id: 'wedding',
      category: 'events',
      icon: '💒',
      title: t('services.wedding.title'),
      description: t('services.wedding.description'),
      image: '/images/Rolls-Royce-white.jpg',
      link: '/services/wedding',
      features: [
        t('services.wedding.features.decoration'),
        t('services.wedding.features.photography'),
        t('services.wedding.features.redCarpet')
      ],
      price: t('services.wedding.price')
    },
    {
      id: 'corporate',
      category: 'business',
      icon: '💼',
      title: t('services.corporate.title'),
      description: t('services.corporate.description'),
      image: '/images/Rolls-Royce-black.jpg',
      link: '/services/corporate',
      features: [
        t('services.corporate.features.professional'),
        t('services.corporate.features.flexible'),
        t('services.corporate.features.billing')
      ],
      price: t('services.corporate.price')
    },
    {
      id: 'airport',
      category: 'transfer',
      icon: '✈️',
      title: t('services.airport.title'),
      description: t('services.airport.description'),
      image: '/images/Rolls-oyce-air-port.jpg',
      link: '/services/airport-transfer',
      features: [
        t('services.airport.features.meetGreet'),
        t('services.airport.features.flightTracking'),
        t('services.airport.features.availability')
      ],
      price: t('services.airport.price')
    },
    {
      id: 'chauffeur',
      category: 'luxury',
      icon: '🤵',
      title: t('services.chauffeur.title'),
      description: t('services.chauffeur.description'),
      image: '/images/Rolls-royce-with-chauffeur.jpg',
      link: '/services/chauffeur',
      features: [
        t('services.chauffeur.features.professional'),
        t('services.chauffeur.features.multilingual'),
        t('services.chauffeur.features.hourly')
      ],
      price: t('services.chauffeur.price')
    },
    {
      id: 'events',
      category: 'events',
      icon: '🎭',
      title: t('services.events.title'),
      description: t('services.events.description'),
      image: '/images/event-gallery-1.jpg',
      link: '/services/events',
      features: [
        t('services.events.features.galas'),
        t('services.events.features.premieres'),
        t('services.events.features.coordination')
      ],
      price: t('services.events.price')
    },
    {
      id: 'photoshoot',
      category: 'media',
      icon: '📸',
      title: t('services.photoshoot.title'),
      description: t('services.photoshoot.description'),
      image: '/images/lifestyle-shoot.jpg',
      link: '/services/photoshoot',
      features: [
        t('services.photoshoot.features.locations'),
        t('services.photoshoot.features.permits'),
        t('services.photoshoot.features.styling')
      ],
      price: t('services.photoshoot.price')
    },
    {
      id: 'tours',
      category: 'luxury',
      icon: '🗺️',
      title: t('services.tours.title'),
      description: t('services.tours.description'),
      image: '/images/palm-hero.jpg',
      link: '/services/tours',
      features: [
        t('services.tours.features.custom'),
        t('services.tours.features.guide'),
        t('services.tours.features.refreshments')
      ],
      price: t('services.tours.price')
    }
  ]

  const categories = [
    { id: 'all', label: t('services.categories.all'), icon: '🌟' },
    { id: 'events', label: t('services.categories.events'), icon: '🎉' },
    { id: 'business', label: t('services.categories.business'), icon: '💼' },
    { id: 'transfer', label: t('services.categories.transfer'), icon: '🚗' },
    { id: 'luxury', label: t('services.categories.luxury'), icon: '💎' },
    { id: 'media', label: t('services.categories.media'), icon: '🎬' }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const stats = [
    { value: '10,000+', label: t('services.stats.clients'), icon: '👥' },
    { value: '500+', label: t('services.stats.events'), icon: '🎭' },
    { value: '24/7', label: t('services.stats.support'), icon: '📞' },
    { value: '98%', label: t('services.stats.satisfaction'), icon: '⭐' }
  ]

  return (
    <>
      <SEO pageKey="services.main" />
      <ServiceStructuredData
        serviceName="Premium Rolls-Royce Services Dubai"
        serviceType="main"
        description="Premium Rolls-Royce services in Dubai including wedding cars, corporate packages, airport transfers, chauffeur services, event transportation, photoshoots, and luxury tours."
        image="/images/Rolls-royce-official.jpg"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Services Dubai"
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
                {t('services.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('services.hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                {t('services.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('services.hero.exploreServices')}
                </motion.a>
                <a href="tel:+971558164922" className="btn-secondary">
                  {t('services.hero.callNow')}: +971 55 816 4922
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

        {/* Service Categories */}
        <section className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${
                    activeCategory === category.id
                      ? 'bg-rolls-gold text-rolls-black border-rolls-gold'
                      : 'bg-transparent text-white border-rolls-gold/50 hover:border-rolls-gold'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('services.grid.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group hover:border-rolls-gold/50 transition-all"
                >
                  <Link href={service.link}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                      <div className="absolute top-4 right-4 text-5xl">{service.icon}</div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rolls-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-rolls-gold">{service.price}</span>
                        <span className="text-rolls-gold group-hover:translate-x-2 transition-transform">
                          {t('services.grid.learnMore')} →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('services.whyUs.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  👑
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('services.whyUs.premium.title')}
                </h3>
                <p className="text-gray-400">
                  {t('services.whyUs.premium.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  🛡️
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('services.whyUs.reliability.title')}
                </h3>
                <p className="text-gray-400">
                  {t('services.whyUs.reliability.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  🌟
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('services.whyUs.experience.title')}
                </h3>
                <p className="text-gray-400">
                  {t('services.whyUs.experience.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-rolls-gold/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('services.whyUs.customized.title')}
                </h3>
                <p className="text-gray-400">
                  {t('services.whyUs.customized.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Special Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('services.packages.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('services.packages.daily.title')}
                </h3>
                <div className="text-3xl font-bold text-rolls-gold mb-6">
                  {t('services.packages.daily.price')}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">✓ {t('services.packages.daily.feature1')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.daily.feature2')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.daily.feature3')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.daily.feature4')}</li>
                </ul>
                <button className="btn-secondary w-full">
                  {t('services.packages.bookNow')}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border-2 border-rolls-gold rounded-lg p-8 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-semibold">
                  {t('services.packages.popular')}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('services.packages.weekly.title')}
                </h3>
                <div className="text-3xl font-bold text-rolls-gold mb-6">
                  {t('services.packages.weekly.price')}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">✓ {t('services.packages.weekly.feature1')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.weekly.feature2')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.weekly.feature3')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.weekly.feature4')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.weekly.feature5')}</li>
                </ul>
                <button className="btn-primary w-full">
                  {t('services.packages.bookNow')}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('services.packages.monthly.title')}
                </h3>
                <div className="text-3xl font-bold text-rolls-gold mb-6">
                  {t('services.packages.monthly.price')}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature1')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature2')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature3')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature4')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature5')}</li>
                  <li className="text-gray-300">✓ {t('services.packages.monthly.feature6')}</li>
                </ul>
                <button className="btn-secondary w-full">
                  {t('services.packages.contactUs')}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('services.process.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: '📞', title: t('services.process.step1.title'), description: t('services.process.step1.description') },
                { icon: '🚗', title: t('services.process.step2.title'), description: t('services.process.step2.description') },
                { icon: '📅', title: t('services.process.step3.title'), description: t('services.process.step3.description') },
                { icon: '✨', title: t('services.process.step4.title'), description: t('services.process.step4.description') }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-rolls-gold font-semibold mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('services.testimonials.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: t('services.testimonials.client1.name'),
                  role: t('services.testimonials.client1.role'),
                  text: t('services.testimonials.client1.text'),
                  service: t('services.testimonials.client1.service'),
                  rating: 5
                },
                {
                  name: t('services.testimonials.client2.name'),
                  role: t('services.testimonials.client2.role'),
                  text: t('services.testimonials.client2.text'),
                  service: t('services.testimonials.client2.service'),
                  rating: 5
                },
                {
                  name: t('services.testimonials.client3.name'),
                  role: t('services.testimonials.client3.role'),
                  text: t('services.testimonials.client3.text'),
                  service: t('services.testimonials.client3.service'),
                  rating: 5
                }
              ].map((testimonial, index) => (
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
                    <p className="text-rolls-gold font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs mt-1">{testimonial.service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971558164922" className="btn-primary">
                {t('services.cta.call')}: +971 55 816 4922
              </a>
              <a href="https://wa.me/971558164922" className="btn-secondary">
                {t('services.cta.whatsapp')}
              </a>
              <Link href="/booking" className="btn-secondary">
                {t('services.cta.bookOnline')}
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <p className="text-gray-400">{t('services.cta.features.global')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <p className="text-gray-400">{t('services.cta.features.availability')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💳</div>
                <p className="text-gray-400">{t('services.cta.features.payment')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-gray-400">{t('services.cta.features.insurance')}</p>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","services"])),
    },
  }
}