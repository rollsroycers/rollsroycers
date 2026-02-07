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

export default function CullinanBlackBadgePage() {
  const { t } = useTranslation(['fleet', 'common'])

  const specs = [
    { label: t('cullinanBlackBadge.specs.engine'), value: t('cullinanBlackBadge.specs.engineVal') },
    { label: t('cullinanBlackBadge.specs.power'), value: t('cullinanBlackBadge.specs.powerVal') },
    { label: t('cullinanBlackBadge.specs.torque'), value: t('cullinanBlackBadge.specs.torqueVal') },
    { label: t('cullinanBlackBadge.specs.accel'), value: t('cullinanBlackBadge.specs.accelVal') },
    { label: t('cullinanBlackBadge.specs.drive'), value: t('cullinanBlackBadge.specs.driveVal') },
    { label: t('cullinanBlackBadge.specs.seats'), value: t('cullinanBlackBadge.specs.seatsVal') },
    { label: t('cullinanBlackBadge.specs.trans'), value: t('cullinanBlackBadge.specs.transVal') },
    { label: t('cullinanBlackBadge.specs.topSpeed'), value: t('cullinanBlackBadge.specs.topSpeedVal') },
  ]

  const bbFeatures = (t('cullinanBlackBadge.features', { returnObjects: true }) || []) as Array<{title: string; desc: string}>

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Cullinan Black Badge Rental Dubai",
    "image": ["https://rollsroycers.com/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg"],
    "description": "Rent the Rolls-Royce Cullinan Black Badge in Dubai from AED 8,500/day. The darkest, most powerful Cullinan ever. 600 HP, all-wheel drive luxury SUV with professional chauffeur.",
    "brand": { "@type": "Brand", "name": "Rolls-Royce" },
    "model": "Cullinan Black Badge",
    "vehicleConfiguration": "Black Badge Luxury SUV",
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://rollsroycers.com/fleet/cullinan-black-badge",
      "priceCurrency": "AED",
      "lowPrice": "8500",
      "highPrice": "170000",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Rolls Roycers Dubai", "telephone": "+971558164922" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "312", "bestRating": "5" }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the Rolls-Royce Cullinan Black Badge cost to rent in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Cullinan Black Badge starts from AED 8,500/day. Weekly rates from AED 49,000 and monthly from AED 170,000. Includes insurance and 250km/day." }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Cullinan and Cullinan Black Badge?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Black Badge adds 29 HP (total 600 HP), darker exterior chrome, bespoke 22-inch dark wheels, carbon fibre interior, enhanced exhaust note, and the iconic darkened Spirit of Ecstasy. It is the most powerful and exclusive Cullinan variant." }
      },
      {
        "@type": "Question",
        "name": "Is the Cullinan Black Badge available with a chauffeur in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, chauffeur service is available for an additional AED 800/day. Our professional, multilingual drivers are trained specifically on the Black Badge models." }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.cullinan" />
      <GEOOptimizer
        pageKey="fleet.cullinan"
        title="Rolls-Royce Cullinan Black Badge Rental Dubai 2026"
        description="Rent the darkest Rolls-Royce ever. Cullinan Black Badge from AED 8,500/day. 600 HP, dark chrome, bespoke interior."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Cullinan Black Badge Rental Dubai"
        contentSummary="Rent the Rolls-Royce Cullinan Black Badge in Dubai. The most powerful and exclusive Cullinan variant with 600 HP, darkened Spirit of Ecstasy, carbon fibre interior, and 22-inch dark wheels. From AED 8,500/day with chauffeur option."
        facts={['600 HP Twin-Turbo V12', 'Dark chrome exterior', 'Carbon fibre interior', 'From AED 8,500/day', '22-inch dark forged wheels', 'Enhanced exhaust note']}
      />
      <EntitySchema pageType="fleet" />
      <Script id="cullinan-bb-product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="cullinan-bb-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg"
              alt="Rolls-Royce Cullinan Black Badge for Rent in Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="inline-block bg-rolls-gold/20 border border-rolls-gold/40 text-rolls-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wider">{t('cullinanBlackBadge.badge')}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('cullinanBlackBadge.title')} <span className="text-rolls-gold">{t('cullinanBlackBadge.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('cullinanBlackBadge.subtitle')}</p>
              <p className="text-3xl font-bold text-rolls-gold mb-8">{t('cullinanBlackBadge.price')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('cullinan')} className="btn-primary">{t('cullinanBlackBadge.bookBtn')}</a>
                <Link href="/fleet/cullinan" className="btn-secondary">{t('cullinanBlackBadge.compareBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Black Badge */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">{t('cullinanBlackBadge.whatIs.title')}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('cullinanBlackBadge.whatIs.desc')}
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
            <h2 className="text-4xl font-bold text-white text-center mb-12">{t('cullinanBlackBadge.specs.title')}</h2>
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
            <h2 className="text-4xl font-bold text-white mb-12">{t('cullinanBlackBadge.pricing.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { period: t('cullinanBlackBadge.pricing.daily'), price: t('cullinanBlackBadge.pricing.dailyPrice'), note: t('cullinanBlackBadge.pricing.dailyNote') },
                { period: t('cullinanBlackBadge.pricing.weekly'), price: t('cullinanBlackBadge.pricing.weeklyPrice'), note: t('cullinanBlackBadge.pricing.weeklyNote') },
                { period: t('cullinanBlackBadge.pricing.monthly'), price: t('cullinanBlackBadge.pricing.monthlyPrice'), note: t('cullinanBlackBadge.pricing.monthlyNote') },
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
              <a {...createWhatsAppLinkProps('cullinan')} className="btn-primary text-lg px-8 py-4">{t('cullinanBlackBadge.pricing.bookBtn')}</a>
            </div>
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('cullinanBlackBadge.related.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('cullinanBlackBadge.related.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/events', title: t('cullinanBlackBadge.related.events.title'), desc: t('cullinanBlackBadge.related.events.desc') },
                { href: '/services/corporate', title: t('cullinanBlackBadge.related.corporate.title'), desc: t('cullinanBlackBadge.related.corporate.desc') },
                { href: '/services/photoshoot', title: t('cullinanBlackBadge.related.photoshoot.title'), desc: t('cullinanBlackBadge.related.photoshoot.desc') },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('cullinanBlackBadge.related.exploreMore')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { href: '/fleet/cullinan', name: 'Cullinan Standard', price: 'AED 6,500/day' },
                { href: '/fleet/phantom', name: 'Phantom', price: 'AED 5,800/day' },
                { href: '/fleet/ghost', name: 'Ghost', price: 'AED 3,800/day' },
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
