import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'
import Script from 'next/script'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

export default function DeiraPage() {
  const { t } = useTranslation('common')

  const landmarks = [
    { name: 'Gold Souk', type: 'Shopping', distance: '5 min' },
    { name: 'Spice Souk', type: 'Shopping', distance: '5 min' },
    { name: 'Dubai Creek', type: 'Heritage', distance: '3 min' },
    { name: 'Al Ghurair Centre', type: 'Mall', distance: '7 min' },
    { name: 'Deira City Centre', type: 'Mall', distance: '10 min' },
    { name: 'Dubai Airport (DXB)', type: 'Airport', distance: '10 min' },
    { name: 'Al Mamzar Beach', type: 'Beach', distance: '12 min' },
    { name: 'Naif Souk', type: 'Market', distance: '8 min' },
  ]

  const hotels = [
    'Hilton Dubai Creek',
    'Sheraton Deira',
    'Hyatt Regency Dubai',
    'Radisson Blu Deira Creek',
    'JW Marriott Marquis',
    'Pullman Dubai Creek',
    'Swissôtel Al Ghurair',
    'Le Méridien Dubai',
  ]

  const experiences = [
    {
      title: t('deiraPage.experiences.goldSouk.title'),
      description: t('deiraPage.experiences.goldSouk.desc'),
      recommended: 'Ghost',
      icon: '✨'
    },
    {
      title: t('deiraPage.experiences.creek.title'),
      description: t('deiraPage.experiences.creek.desc'),
      recommended: 'Dawn',
      icon: '🌅'
    },
    {
      title: t('deiraPage.experiences.dxb.title'),
      description: t('deiraPage.experiences.dxb.desc'),
      recommended: 'Phantom',
      icon: '✈️'
    },
    {
      title: t('deiraPage.experiences.oldDubai.title'),
      description: t('deiraPage.experiences.oldDubai.desc'),
      recommended: 'Wraith',
      icon: '🌙'
    },
  ]

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rolls Roycers Dubai - Deira",
    "description": "Premium Rolls-Royce rental service in Deira, Dubai. Free delivery to Dubai Airport (DXB), Gold Souk, and all Deira hotels within 10-15 minutes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Rigga Road",
      "addressLocality": "Deira",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 25.2697, "longitude": 55.3095 },
    "telephone": "+971558164922",
    "url": "https://rollsroycers.com/locations/deira",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "AED 3,800 - AED 8,500"
  }

  return (
    <>
      <SEO pageKey="locations.downtown-dubai" />
      <GEOOptimizer
        pageKey="locations.downtown-dubai"
        title="Rolls-Royce Rental Deira Dubai 2026 | Near DXB Airport & Gold Souk"
        description="Rent Rolls-Royce in Deira near Dubai Airport. Free delivery in 10 min to DXB, Gold Souk, and Creek. From AED 3,800/day."
        entityType="LocalBusiness"
        primaryTopic="Rolls-Royce Rental Deira Dubai"
        contentSummary="Premium Rolls-Royce rental in Deira, Dubai. Closest to Dubai International Airport. Free delivery to DXB Terminal 1 & 3, Gold Souk, Dubai Creek, and all Deira hotels. All 6 models available 24/7."
        facts={['10 min from Dubai Airport (DXB)', 'Free delivery to Deira', 'Near Gold Souk & Dubai Creek', 'All 6 models available', '24/7 airport pickup']}
      />
      <EntitySchema pageType="location" locationName="downtown-dubai" />
      <Script id="deira-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-dubai.jpg"
              alt="Rolls-Royce Rental Deira Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <div className="inline-flex items-center gap-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-6">
                <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">{t('deiraPage.location')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('deiraPage.title')} <span className="text-rolls-gold">{t('deiraPage.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('deiraPage.subtitle')}</p>
              <p className="text-2xl font-bold text-rolls-gold mb-8">{t('deiraPage.delivery')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('phantom')} className="btn-primary">{t('deiraPage.bookBtn')}</a>
                <Link href="/services/airport-transfer" className="btn-secondary">{t('deiraPage.airportBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Airport Proximity */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">{t('deiraPage.airport.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('deiraPage.airport.desc')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { title: t('deiraPage.airport.terminal1.title'), time: t('deiraPage.airport.terminal1.time'), desc: t('deiraPage.airport.terminal1.desc') },
                { title: t('deiraPage.airport.terminal3.title'), time: t('deiraPage.airport.terminal3.time'), desc: t('deiraPage.airport.terminal3.desc') },
                { title: t('deiraPage.airport.vip.title'), time: t('deiraPage.airport.vip.time'), desc: t('deiraPage.airport.vip.desc') },
              ].map((terminal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-rolls-gold/30 rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{terminal.title}</h3>
                  <p className="text-3xl font-bold text-rolls-gold mb-2">{terminal.time}</p>
                  <p className="text-gray-400 text-sm">{terminal.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="py-20 bg-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('deiraPage.landmarks.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('deiraPage.landmarks.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {landmarks.map((landmark, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <h3 className="text-white font-semibold mb-1">{landmark.name}</h3>
                  <p className="text-gray-400 text-sm">{landmark.type}</p>
                  <p className="text-rolls-gold text-sm mt-2">{landmark.distance} {t('deiraPage.landmarks.deliverySuffix')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deira Experiences */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('deiraPage.experiences.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('deiraPage.experiences.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <span className="text-3xl mb-4 block">{exp.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                  <p className="text-rolls-gold text-sm font-semibold">{t('deiraPage.experiences.recommended')}: {exp.recommended}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels We Serve */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('deiraPage.hotels.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('deiraPage.hotels.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <p className="text-white text-sm font-medium">{hotel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet & Services */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('deiraPage.models.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('deiraPage.models.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
              {[
                { href: '/fleet/phantom', name: 'Phantom', price: 'AED 5,800/day' },
                { href: '/fleet/ghost', name: 'Ghost', price: 'AED 3,800/day' },
                { href: '/fleet/cullinan', name: 'Cullinan', price: 'AED 6,500/day' },
                { href: '/fleet/dawn', name: 'Dawn', price: 'AED 5,500/day' },
                { href: '/fleet/wraith', name: 'Wraith', price: 'AED 5,000/day' },
                { href: '/fleet/spectre', name: 'Spectre', price: 'AED 7,500/day' },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group text-center bg-white/5 border border-white/10 rounded-lg p-4 hover:border-rolls-gold/50 transition-all">
                  <p className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{model.name}</p>
                  <p className="text-rolls-gold/70 text-sm mt-1">{model.price}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('deiraPage.services')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { href: '/services/airport-transfer', name: 'Airport Transfer' },
                { href: '/services/chauffeur', name: 'Chauffeur Service' },
                { href: '/services/tours', name: 'Dubai Tours' },
                { href: '/services/corporate', name: 'Corporate Service' },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group text-center bg-white/5 border border-white/10 rounded-lg p-4 hover:border-rolls-gold/50 transition-all">
                  <p className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{s.name}</p>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
