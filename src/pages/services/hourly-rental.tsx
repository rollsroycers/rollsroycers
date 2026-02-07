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

export default function HourlyRentalPage() {
  const { t } = useTranslation('common')

  const hourlyRates = [
    { model: 'Ghost', hourly: 'AED 800', min: '2 Hours', daily: 'AED 3,800', image: '/images/Rolls-royce-Ghost.jpg' },
    { model: 'Phantom', hourly: 'AED 1,200', min: '2 Hours', daily: 'AED 5,800', image: '/images/rolls-royce-phantom.jpg' },
    { model: 'Cullinan', hourly: 'AED 1,300', min: '2 Hours', daily: 'AED 6,500', image: '/images/2024_Rolls-Royce_Cullinan.jpg' },
    { model: 'Dawn', hourly: 'AED 1,100', min: '2 Hours', daily: 'AED 5,500', image: '/images/Rolls-Royce-dawn.jpg' },
    { model: 'Wraith', hourly: 'AED 1,000', min: '2 Hours', daily: 'AED 5,000', image: '/images/Rolls-royce-Wraith.jpg' },
    { model: 'Spectre', hourly: 'AED 1,500', min: '2 Hours', daily: 'AED 7,500', image: '/images/2024_Rolls-Royce_Spectre.jpg' },
  ]

  const useCases = [
    { title: t('hourlyPage.useCases.business.title'), desc: t('hourlyPage.useCases.business.desc'), icon: '💼' },
    { title: t('hourlyPage.useCases.restaurant.title'), desc: t('hourlyPage.useCases.restaurant.desc'), icon: '🍽️' },
    { title: t('hourlyPage.useCases.shopping.title'), desc: t('hourlyPage.useCases.shopping.desc'), icon: '🛍️' },
    { title: t('hourlyPage.useCases.date.title'), desc: t('hourlyPage.useCases.date.desc'), icon: '❤️' },
    { title: t('hourlyPage.useCases.social.title'), desc: t('hourlyPage.useCases.social.desc'), icon: '📱' },
    { title: t('hourlyPage.useCases.hotel.title'), desc: t('hourlyPage.useCases.hotel.desc'), icon: '🏨' },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does hourly Rolls-Royce rental cost in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "Hourly Rolls-Royce rental starts from AED 800/hour for the Ghost with a minimum 2-hour booking. Phantom from AED 1,200/hour, Cullinan from AED 1,300/hour, and Spectre Electric from AED 1,500/hour." }
      },
      {
        "@type": "Question",
        "name": "What is the minimum booking time for hourly Rolls-Royce rental?",
        "acceptedAnswer": { "@type": "Answer", "text": "Minimum booking is 2 hours for all models. Chauffeur is included in all hourly rentals. Extended hours available at the hourly rate. Full-day rates apply after 6 hours." }
      },
      {
        "@type": "Question",
        "name": "Does hourly rental include a chauffeur?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, all hourly rentals include a professional multilingual chauffeur. Self-drive is available for daily rentals only. The chauffeur will wait at your destination." }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hourly Rolls-Royce Rental Dubai",
    "description": "Rent a Rolls-Royce by the hour in Dubai from AED 800/hour. All models available with professional chauffeur. Minimum 2-hour booking.",
    "provider": { "@type": "Organization", "name": "Rolls Roycers Dubai", "telephone": "+971558164922", "url": "https://rollsroycers.com" },
    "areaServed": { "@type": "City", "name": "Dubai" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "lowPrice": "800",
      "highPrice": "1500",
      "offerCount": "6"
    }
  }

  return (
    <>
      <SEO pageKey="other.booking" />
      <GEOOptimizer
        pageKey="other.booking"
        title="Hourly Rolls-Royce Rental Dubai 2026 | From AED 800/Hour"
        description="Rent a Rolls-Royce by the hour in Dubai from AED 800/hr. All 6 models with chauffeur. 2-hour minimum."
        entityType="Service"
        primaryTopic="Hourly Rolls-Royce Rental Dubai"
        contentSummary="Hourly Rolls-Royce rental in Dubai. Ghost from AED 800/hr, Phantom AED 1,200/hr, Cullinan AED 1,300/hr. All include professional chauffeur. Minimum 2-hour booking. Perfect for business meetings, restaurant arrivals, date nights, and content creation."
        facts={['Ghost from AED 800/hour', 'Phantom from AED 1,200/hour', 'Minimum 2-hour booking', 'Chauffeur included', '6 models available', 'Available 24/7']}
      />
      <EntitySchema pageType="service" serviceType="chauffeur" />
      <Script id="hourly-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="hourly-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-with-chauffeur.jpg"
              alt="Hourly Rolls-Royce Rental Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="inline-block bg-rolls-gold/20 border border-rolls-gold/40 text-rolls-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wider">{t('hourlyPage.badge')}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('hourlyPage.title')} <span className="text-rolls-gold">{t('hourlyPage.titleHighlight')}</span> {t('hourlyPage.titleSuffix')}
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('hourlyPage.subtitle')}</p>
              <p className="text-3xl font-bold text-rolls-gold mb-8">{t('hourlyPage.price')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('ghost')} className="btn-primary">{t('hourlyPage.bookBtn')}</a>
                <Link href="/pricing" className="btn-secondary">{t('hourlyPage.pricingBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hourly Rates Table */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('hourlyPage.rates.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('hourlyPage.rates.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hourlyRates.map((rate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-rolls-gold/30 transition-all"
                >
                  <div className="relative h-48">
                    <Image src={rate.image} alt={`Rolls-Royce ${rate.model} Hourly Rental Dubai`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{rate.model}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-2xl font-bold text-rolls-gold">{rate.hourly}</p>
                        <p className="text-gray-400 text-sm">{t('hourlyPage.rates.perHour')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 text-sm">{t('hourlyPage.rates.min')}: {rate.min}</p>
                        <p className="text-gray-400 text-xs">{t('hourlyPage.rates.fullDay')}: {rate.daily}</p>
                      </div>
                    </div>
                    <a {...createWhatsAppLinkProps('ghost')} className="btn-primary w-full text-center block text-sm">{t('hourlyPage.rates.book')} {rate.model}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('hourlyPage.useCases.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('hourlyPage.useCases.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <span className="text-3xl mb-4 block">{useCase.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{t('hourlyPage.howItWorks.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '1', title: t('hourlyPage.howItWorks.step1.title'), desc: t('hourlyPage.howItWorks.step1.desc') },
                { step: '2', title: t('hourlyPage.howItWorks.step2.title'), desc: t('hourlyPage.howItWorks.step2.desc') },
                { step: '3', title: t('hourlyPage.howItWorks.step3.title'), desc: t('hourlyPage.howItWorks.step3.desc') },
                { step: '4', title: t('hourlyPage.howItWorks.step4.title'), desc: t('hourlyPage.howItWorks.step4.desc') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-rolls-gold/20 border-2 border-rolls-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-rolls-gold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('hourlyPage.moreServices')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/services/chauffeur', name: 'Daily Chauffeur' },
                { href: '/services/airport-transfer', name: 'Airport Transfer' },
                { href: '/services/corporate', name: 'Corporate Service' },
                { href: '/services/birthday', name: 'Birthday Package' },
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","services"])),
    },
  }
}
