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

export default function BirthdayServicePage() {
  const { t } = useTranslation('common')

  const silverFeatures = (t('birthdayPage.silverFeatures', { returnObjects: true }) || []) as string[]
  const goldFeatures = (t('birthdayPage.goldFeatures', { returnObjects: true }) || []) as string[]
  const platinumFeatures = (t('birthdayPage.platinumFeatures', { returnObjects: true }) || []) as string[]

  const packages = [
    {
      name: t('birthdayPage.packages.silver.name'),
      duration: t('birthdayPage.packages.silver.duration'),
      vehicles: ['Ghost'],
      features: silverFeatures,
      price: t('birthdayPage.packages.silver.price')
    },
    {
      name: t('birthdayPage.packages.gold.name'),
      duration: t('birthdayPage.packages.gold.duration'),
      vehicles: ['Phantom', 'Ghost'],
      features: goldFeatures,
      price: t('birthdayPage.packages.gold.price')
    },
    {
      name: t('birthdayPage.packages.platinum.name'),
      duration: t('birthdayPage.packages.platinum.duration'),
      vehicles: ['Full Fleet Available'],
      features: platinumFeatures,
      price: t('birthdayPage.packages.platinum.price')
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a Rolls-Royce birthday car rental cost in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "Birthday packages start from AED 3,500 for 4 hours with a Ghost, including chauffeur, decoration, and champagne. Premium full-day packages with photographer from AED 12,000." }
      },
      {
        "@type": "Question",
        "name": "Can you decorate the Rolls-Royce for a birthday surprise?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, all birthday packages include custom decoration: birthday banners, balloons, flowers, and champagne setup inside the vehicle. We can also arrange a surprise pickup for the birthday person." }
      },
      {
        "@type": "Question",
        "name": "Which Rolls-Royce is best for a birthday celebration?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Phantom is our most popular birthday car due to its dramatic presence and Starlight Headliner. The Dawn convertible is perfect for daytime celebrations with open-air luxury. The Cullinan is ideal for group celebrations." }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rolls-Royce Birthday Car Rental Dubai",
    "description": "Luxury Rolls-Royce birthday car rental in Dubai with custom decoration, chauffeur, and celebration packages from AED 3,500.",
    "provider": { "@type": "Organization", "name": "Rolls Roycers Dubai", "telephone": "+971558164922", "url": "https://rollsroycers.com" },
    "areaServed": { "@type": "City", "name": "Dubai" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "lowPrice": "3500",
      "highPrice": "12000",
      "offerCount": "3"
    }
  }

  return (
    <>
      <SEO pageKey="other.booking" />
      <GEOOptimizer
        pageKey="other.booking"
        title="Rolls-Royce Birthday Car Rental Dubai 2026"
        description="Celebrate in a Rolls-Royce! Birthday car packages from AED 3,500 with decoration, chauffeur & champagne."
        entityType="Service"
        primaryTopic="Rolls-Royce Birthday Car Rental Dubai"
        contentSummary="Luxury Rolls-Royce birthday car rental in Dubai. Custom birthday decoration, professional chauffeur, champagne, and photographer packages. Phantom, Ghost, Cullinan, Dawn available. Surprise pickup arrangements. From AED 3,500."
        facts={['Birthday packages from AED 3,500', 'Custom car decoration included', 'Surprise pickup available', 'Professional photographer option', 'Full fleet available', '6 Rolls-Royce models to choose']}
      />
      <EntitySchema pageType="service" serviceType="events" />
      <Script id="birthday-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="birthday-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-white.jpg"
              alt="Rolls-Royce Birthday Car Rental Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="inline-block bg-rolls-gold/20 border border-rolls-gold/40 text-rolls-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wider">{t('birthdayPage.badge')}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('birthdayPage.title')} <span className="text-rolls-gold">{t('birthdayPage.titleHighlight')}</span> {t('birthdayPage.titleSuffix')}
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">{t('birthdayPage.subtitle')}</p>
              <p className="text-3xl font-bold text-rolls-gold mb-8">{t('birthdayPage.price')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a {...createWhatsAppLinkProps('phantom')} className="btn-primary">{t('birthdayPage.bookBtn')}</a>
                <Link href="/booking" className="btn-secondary">{t('birthdayPage.customBtn')}</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-gradient-to-b from-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">{t('birthdayPage.packages.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('birthdayPage.packages.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`bg-white/5 border rounded-xl p-8 ${index === 1 ? 'border-rolls-gold/50 scale-105' : 'border-white/10'}`}
                >
                  {index === 1 && <span className="inline-block bg-rolls-gold text-black text-xs font-bold px-3 py-1 rounded-full mb-4">{t('birthdayPage.packages.mostPopular')}</span>}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-rolls-gold text-sm mb-1">{pkg.duration}</p>
                  <p className="text-gray-400 text-sm mb-4">{t('birthdayPage.packages.vehicles')}: {pkg.vehicles.join(', ')}</p>
                  <p className="text-3xl font-bold text-rolls-gold mb-6">{pkg.price}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-rolls-gold mt-0.5">&#10003;</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a {...createWhatsAppLinkProps('phantom')} className="btn-primary w-full text-center block">{t('birthdayPage.packages.bookNow')}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">{t('birthdayPage.howItWorks.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '1', title: t('birthdayPage.howItWorks.step1.title'), desc: t('birthdayPage.howItWorks.step1.desc') },
                { step: '2', title: t('birthdayPage.howItWorks.step2.title'), desc: t('birthdayPage.howItWorks.step2.desc') },
                { step: '3', title: t('birthdayPage.howItWorks.step3.title'), desc: t('birthdayPage.howItWorks.step3.desc') },
                { step: '4', title: t('birthdayPage.howItWorks.step4.title'), desc: t('birthdayPage.howItWorks.step4.desc') },
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

        {/* Recommended Models & Related Services */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('birthdayPage.bestModels.title')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('birthdayPage.bestModels.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/fleet/phantom', name: 'Phantom', desc: t('birthdayPage.bestModels.phantom.desc'), price: t('birthdayPage.bestModels.phantom.price') },
                { href: '/fleet/dawn', name: 'Dawn', desc: t('birthdayPage.bestModels.dawn.desc'), price: t('birthdayPage.bestModels.dawn.price') },
                { href: '/fleet/cullinan', name: 'Cullinan', desc: t('birthdayPage.bestModels.cullinan.desc'), price: t('birthdayPage.bestModels.cullinan.price') },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{model.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{model.desc}</p>
                  <p className="text-rolls-gold font-semibold text-sm">{model.price}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('birthdayPage.relatedServices')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/services/photoshoot', name: 'Photoshoot' },
                { href: '/services/tours', name: 'Dubai Tours' },
                { href: '/services/events', name: 'Events & Galas' },
                { href: '/services/wedding', name: 'Wedding Service' },
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
