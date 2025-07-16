import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import { translateSpec } from '@/utils/translations'

export default function PhantomPage() {
  const { t } = useTranslation('common')
  const features = t('fleet.phantom.features', { returnObjects: true }) as { title: string; desc: string; icon: string }[];
  const specs = t('fleet.phantom.specs', { returnObjects: true }) as Record<string, string>;

  return (
    <>
      <SEO pageKey="fleet.phantom" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-phantom.jpg"
              alt="Rolls-Royce Phantom Dubai"
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
                {t('fleet.phantom.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('fleet.phantom.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.rentNow')}
                </motion.a>
                <Link href="/fleet" className="btn-secondary">
                  {t('nav.fleet')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price & Availability */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 5,800</h3>
                    <p className="text-gray-400">{t('pricing.daily')}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 34,800</h3>
                    <p className="text-gray-400">{t('pricing.weekly')}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 116,000</h3>
                    <p className="text-gray-400">{t('pricing.monthly')}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-green-400 mb-4">✓ {t('checkAvailability.title')}</p>
                  <a href="#booking" className="btn-primary">{t('checkAvailability.title')}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.featuresTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(features) && features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.specsTitle')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-rolls-black/30 rounded-lg border border-rolls-gold/10"
                  >
                    <span className="text-gray-400 capitalize">{translateSpec(key, t)}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 md:col-span-2">
                <Image
                  src="/images/Rolls-royce-phantom.jpg"
                  alt={t('fleet.phantom.gallery.exteriorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/inside-Rolls-Royce.jpg"
                  alt={t('fleet.phantom.gallery.interiorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('fleet.phantom.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleet.phantom.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971558164922" className="btn-primary">
                {t('footer.call')}: +971 55 816 4922
              </a>
              <a href="#booking" className="btn-secondary">
                {t('nav.bookingLink')}
              </a>
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