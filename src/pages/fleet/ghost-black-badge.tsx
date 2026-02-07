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

export default function GhostBlackBadgePage() {
  const { t } = useTranslation(['fleet', 'common'])

  const specs = [
    { label: t('ghostBlackBadge.specs.engine'), value: t('ghostBlackBadge.specs.engineVal') },
    { label: t('ghostBlackBadge.specs.power'), value: t('ghostBlackBadge.specs.powerVal') },
    { label: t('ghostBlackBadge.specs.torque'), value: t('ghostBlackBadge.specs.torqueVal') },
    { label: t('ghostBlackBadge.specs.accel'), value: t('ghostBlackBadge.specs.accelVal') },
    { label: t('ghostBlackBadge.specs.drive'), value: t('ghostBlackBadge.specs.driveVal') },
    { label: t('ghostBlackBadge.specs.seats'), value: t('ghostBlackBadge.specs.seatsVal') },
    { label: t('ghostBlackBadge.specs.trans'), value: t('ghostBlackBadge.specs.transVal') },
    { label: t('ghostBlackBadge.specs.topSpeed'), value: t('ghostBlackBadge.specs.topSpeedVal') },
  ]

  const bbFeatures = (t('ghostBlackBadge.features', { returnObjects: true }) || []) as Array<{title: string; desc: string}>

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Ghost Black Badge Rental Dubai",
    "image": ["https://rollsroycers.com/images/Rolls-Royce-Ghost-Black-Badge.jpg"],
    "description": "Rent the Rolls-Royce Ghost Black Badge in Dubai from AED 5,500/day. 592 HP, illuminated fascia, carbon fibre wheels, and dark chrome exterior.",
    "brand": { "@type": "Brand", "name": "Rolls-Royce" },
    "model": "Ghost Black Badge",
    "vehicleConfiguration": "Black Badge Sedan",
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://rollsroycers.com/fleet/ghost-black-badge",
      "priceCurrency": "AED",
      "lowPrice": "5500",
      "highPrice": "110000",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Rolls Roycers Dubai", "telephone": "+971558164922" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "287", "bestRating": "5" }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the Rolls-Royce Ghost Black Badge cost to rent in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Ghost Black Badge starts from AED 5,500/day. Weekly rates from AED 32,000 and monthly from AED 110,000. Includes insurance and 250km/day." }
      },
      {
        "@type": "Question",
        "name": "What makes the Ghost Black Badge different from the standard Ghost?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Black Badge adds 29 HP (total 592 HP), illuminated fascia with 850 stars, carbon fibre composite wheels, darker exterior chrome, Black Badge-tuned Planar suspension, and a more assertive exhaust note. It is the most driver-focused Ghost." }
      },
      {
        "@type": "Question",
        "name": "Is the Ghost Black Badge good for corporate use in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Ghost Black Badge is perfect for executives who want to project power and modernity. It combines understated luxury with a bold dark aesthetic, ideal for DIFC, Business Bay, and high-profile client meetings." }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.ghost" />
      <GEOOptimizer
        pageKey="fleet.ghost"
        title="Rolls-Royce Ghost Black Badge Rental Dubai 2026"
        description="Rent the Ghost Black Badge in Dubai from AED 5,500/day. 592 HP, illuminated fascia, carbon fibre wheels."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Ghost Black Badge Rental Dubai"
        contentSummary="Rent the Rolls-Royce Ghost Black Badge in Dubai. The most driver-focused Ghost with 592 HP, illuminated fascia with 850 stars, carbon fibre composite wheels, and dark chrome exterior. From AED 5,500/day."
        facts={['592 HP Twin-Turbo V12', 'Illuminated fascia (850 stars)', 'Carbon fibre composite wheels', 'From AED 5,500/day', 'Black Badge Planar suspension', 'Dark chrome exterior']}
      />
      <EntitySchema pageType="fleet" />
      <Script id="ghost-bb-product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="ghost-bb-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-Ghost-Black-Badge.jpg"
              alt="Rolls-Royce Ghost Black Badge for Rent in Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="inline-block bg-rolls-gold/20 border border-rolls-gold/40 text-rolls-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wider">{t('ghostBlackBadge.badge')}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('ghostBlackBadge.title')} <span className="text-rolls-gold">{t('ghostBlackBadge.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('ghostBlackBadge.subtitle')}</p>
              <p className="text-3xl font-bold text-rolls-gold mb-8">{t('ghostBlackBadge.price')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('ghost')} className="btn-primary">{t('ghostBlackBadge.bookBtn')}</a>
                <Link href="/fleet/ghost" className="btn-secondary">{t('ghostBlackBadge.compareBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Black Badge */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">{t('ghostBlackBadge.whatIs.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('ghostBlackBadge.whatIs.desc')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bbFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-rolls-gold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{t('ghostBlackBadge.specs.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <p className="text-rolls-gold font-bold text-lg mb-1">{spec.value}</p>
                  <p className="text-gray-400 text-sm">{spec.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">{t('ghostBlackBadge.pricing.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { period: t('ghostBlackBadge.pricing.daily'), price: t('ghostBlackBadge.pricing.dailyPrice'), note: t('ghostBlackBadge.pricing.dailyNote') },
                { period: t('ghostBlackBadge.pricing.weekly'), price: t('ghostBlackBadge.pricing.weeklyPrice'), note: t('ghostBlackBadge.pricing.weeklyNote') },
                { period: t('ghostBlackBadge.pricing.monthly'), price: t('ghostBlackBadge.pricing.monthlyPrice'), note: t('ghostBlackBadge.pricing.monthlyNote') },
              ].map((rate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-rolls-gold/30 rounded-xl p-8"
                >
                  <h3 className="text-xl text-gray-300 mb-4">{rate.period}</h3>
                  <p className="text-4xl font-bold text-rolls-gold mb-2">{rate.price}</p>
                  <p className="text-gray-400 text-sm">{rate.note}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
              <a {...createWhatsAppLinkProps('ghost')} className="btn-primary text-lg px-8 py-4">{t('ghostBlackBadge.pricing.bookBtn')}</a>
            </div>
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('ghostBlackBadge.related.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('ghostBlackBadge.related.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/corporate', title: t('ghostBlackBadge.related.corporate.title'), desc: t('ghostBlackBadge.related.corporate.desc') },
                { href: '/services/chauffeur', title: t('ghostBlackBadge.related.chauffeur.title'), desc: t('ghostBlackBadge.related.chauffeur.desc') },
                { href: '/services/airport-transfer', title: t('ghostBlackBadge.related.airport.title'), desc: t('ghostBlackBadge.related.airport.desc') },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('ghostBlackBadge.related.exploreMore')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { href: '/fleet/ghost', name: 'Ghost Standard', price: 'AED 3,800/day' },
                { href: '/fleet/cullinan-black-badge', name: 'Cullinan BB', price: 'AED 8,500/day' },
                { href: '/fleet/phantom', name: 'Phantom', price: 'AED 5,800/day' },
                { href: '/fleet/wraith', name: 'Wraith', price: 'AED 5,000/day' },
                { href: '/fleet/spectre', name: 'Spectre', price: 'AED 7,500/day' },
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
