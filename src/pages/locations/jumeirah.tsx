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

export default function JumeirahPage() {
  const { t } = useTranslation('common')

  const landmarks = [
    { name: 'Burj Al Arab', type: 'Iconic Hotel', distance: '3 min' },
    { name: 'Madinat Jumeirah', type: 'Resort', distance: '5 min' },
    { name: 'Jumeirah Beach', type: 'Beach', distance: '2 min' },
    { name: 'Kite Beach', type: 'Beach', distance: '7 min' },
    { name: 'La Mer', type: 'Lifestyle', distance: '10 min' },
    { name: 'Jumeirah Mosque', type: 'Landmark', distance: '8 min' },
    { name: 'City Walk', type: 'Shopping', distance: '12 min' },
    { name: 'Etihad Museum', type: 'Culture', distance: '10 min' },
  ]

  const hotels = [
    'Burj Al Arab Jumeirah',
    'Madinat Jumeirah',
    'Jumeirah Beach Hotel',
    'Four Seasons Resort Jumeirah',
    'Bvlgari Resort Dubai',
    'One&Only Royal Mirage',
    'Jumeirah Al Qasr',
    'Jumeirah Mina A\'Salam',
  ]

  const experiences = [
    {
      title: t('jumeirahPage.experiences.burjArab.title'),
      description: t('jumeirahPage.experiences.burjArab.desc'),
      recommended: 'Phantom',
      icon: '🏨'
    },
    {
      title: t('jumeirahPage.experiences.beachRoad.title'),
      description: t('jumeirahPage.experiences.beachRoad.desc'),
      recommended: 'Dawn',
      icon: '🌊'
    },
    {
      title: t('jumeirahPage.experiences.madinat.title'),
      description: t('jumeirahPage.experiences.madinat.desc'),
      recommended: 'Ghost',
      icon: '🍽️'
    },
    {
      title: t('jumeirahPage.experiences.kiteBeach.title'),
      description: t('jumeirahPage.experiences.kiteBeach.desc'),
      recommended: 'Cullinan',
      icon: '🌅'
    },
  ]

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rolls Roycers Dubai - Jumeirah",
    "description": "Premium Rolls-Royce rental service in Jumeirah, Dubai. Free delivery to Burj Al Arab, Madinat Jumeirah, and all Jumeirah beach hotels within 15 minutes.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Beach Road",
      "addressLocality": "Jumeirah",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2340 },
    "telephone": "+971558164922",
    "url": "https://rollsroycers.com/locations/jumeirah",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "AED 3,800 - AED 8,500"
  }

  return (
    <>
      <SEO pageKey="locations.palm-jumeirah" />
      <GEOOptimizer
        pageKey="locations.palm-jumeirah"
        title="Rolls-Royce Rental Jumeirah Dubai 2026 | Burj Al Arab Delivery"
        description="Rent Rolls-Royce in Jumeirah near Burj Al Arab. Free delivery in 15 min to all beach hotels. From AED 3,800/day."
        entityType="LocalBusiness"
        primaryTopic="Rolls-Royce Rental Jumeirah Dubai"
        contentSummary="Premium Rolls-Royce rental in Jumeirah, Dubai. Free delivery to Burj Al Arab, Madinat Jumeirah, Four Seasons, Bvlgari Resort, and all Jumeirah beach hotels. All 6 models available 24/7."
        facts={['Free delivery to Jumeirah in 15 min', 'Near Burj Al Arab and Madinat Jumeirah', 'All 6 Rolls-Royce models', '24/7 availability', 'Chauffeur service included']}
      />
      <EntitySchema pageType="location" locationName="jumeirah" />
      <Script id="jumeirah-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-front.jpg"
              alt="Rolls-Royce Rental Jumeirah Dubai"
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
                <span className="text-white">{t('jumeirahPage.location')}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('jumeirahPage.title')} <span className="text-rolls-gold">{t('jumeirahPage.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('jumeirahPage.subtitle')}</p>
              <p className="text-2xl font-bold text-rolls-gold mb-8">{t('jumeirahPage.delivery')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('phantom')} className="btn-primary">{t('jumeirahPage.bookBtn')}</a>
                <Link href="/fleet" className="btn-secondary">{t('jumeirahPage.fleetBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Nearby Landmarks */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('jumeirahPage.landmarks.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('jumeirahPage.landmarks.subtitle')}</p>
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
                  <p className="text-rolls-gold text-sm mt-2">{landmark.distance} {t('jumeirahPage.landmarks.deliverySuffix')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Jumeirah Experiences */}
        <section className="py-20 bg-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('jumeirahPage.experiences.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('jumeirahPage.experiences.subtitle')}</p>
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
                  <p className="text-rolls-gold text-sm font-semibold">{t('jumeirahPage.experiences.recommended')}: {exp.recommended}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels We Serve */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('jumeirahPage.hotels.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('jumeirahPage.hotels.subtitle')}</p>
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
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('jumeirahPage.models.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('jumeirahPage.models.subtitle')}</p>
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
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('jumeirahPage.services')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { href: '/services/chauffeur', name: 'Chauffeur Service' },
                { href: '/services/wedding', name: 'Wedding Cars' },
                { href: '/services/photoshoot', name: 'Photoshoot' },
                { href: '/services/tours', name: 'Dubai Tours' },
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
