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

export default function PhotoshootServicePage() {
  const { t } = useTranslation('services')

  const getTranslatedArray = (key: string): any[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };

  const typeImages = [
    '/images/fashion-photoshoot.jpg',
    '/images/wedding-photoshoot.jpg',
    '/images/commercial-shoot.jpg',
    '/images/lifestyle-shoot.jpg',
    '/images/music-video.jpg',
    '/images/corporate-photoshoot.jpg'
  ]
  const photoshootTypes = getTranslatedArray('servicesPages.photoshoot.photoshootTypes.types').map((type: any, i: number) => ({
    ...type,
    image: typeImages[i] || '/images/fashion-photoshoot.jpg'
  }))

  const photoshootPackages = getTranslatedArray('servicesPages.photoshoot.packages.packages')

  const popularLocations = getTranslatedArray('servicesPages.photoshoot.locations.locations')

  const photoTips = getTranslatedArray('servicesPages.photoshoot.photoTips.tips')

  const photographerPartners = getTranslatedArray('servicesPages.photoshoot.partners.partners')

  return (
    <>
      <SEO pageKey="services.photoshoot" />
      <GEOOptimizer
        pageKey="services.photoshoot"
        title="Rolls-Royce Photoshoot Dubai 2026"
        description="Rolls-Royce for fashion shoots, music videos, and Instagram content in Dubai from AED 1,200/hour."
        entityType="Service"
        primaryTopic="Rolls-Royce Photoshoot Dubai"
        contentSummary="Premium Rolls-Royce vehicles for photoshoots in Dubai. Fashion photography, music videos, Instagram content, and commercial shoots. Hourly from AED 1,200. Multiple models and locations available."
        facts={['Photoshoot packages from AED 1,200/hour', 'Fashion, music video, Instagram shoots', 'Multiple Rolls-Royce models available', 'Iconic Dubai location access', 'Flexible timing including sunset shoots']}
      />
      <EntitySchema pageType="service" serviceType="photoshoot" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/photoshoot-hero.jpg"
              alt="Rolls-Royce Photoshoot Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/40 via-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('servicesPages.photoshoot.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('servicesPages.photoshoot.hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {t('servicesPages.photoshoot.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('servicesPages.photoshoot.hero.bookPhotoshoot')}
                </Link>
                <Link href="#packages" className="btn-secondary">
                  {t('servicesPages.photoshoot.hero.viewPackages')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">{t('servicesPages.photoshoot.stats.photoshoots')}</p>
                <p className="text-gray-300">{t('servicesPages.photoshoot.stats.photoshootsLabel')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">{t('servicesPages.photoshoot.stats.magazineFeatures')}</p>
                <p className="text-gray-300">{t('servicesPages.photoshoot.stats.magazineFeaturesLabel')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">{t('servicesPages.photoshoot.stats.brandCollaborations')}</p>
                <p className="text-gray-300">{t('servicesPages.photoshoot.stats.brandCollaborationsLabel')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">{t('servicesPages.photoshoot.stats.availability')}</p>
                <p className="text-gray-300">{t('servicesPages.photoshoot.stats.availabilityLabel')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Photoshoot Types */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.photoshootTypes.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {photoshootTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {(type.features || []).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.packages.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {photoshootPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border ${
                    index === 1 ? 'border-rolls-gold border-2' : 'border-rolls-gold/30'
                  } rounded-lg p-8 text-center relative`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.mostPopular || 'MOST POPULAR'}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.duration}</p>
                  <p className="text-3xl font-bold text-rolls-gold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {(pkg.features || []).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/booking" 
                    className={index === 1 ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    {t('servicesPages.photoshoot.packages.bookThisPackage')}
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              {t('servicesPages.photoshoot.packages.customPackages')}
            </p>
          </div>
        </section>

        {/* Popular Locations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.locations.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {popularLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6 hover:border-rolls-gold/30 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                  <p className="text-gray-300 mb-3">{location.description}</p>
                  <p className="text-rolls-gold text-sm">
                    <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {t('servicesPages.photoshoot.locations.bestTimeLabel')} {location.bestTime}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Tips */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.photoTips.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {photoTips.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="text-rolls-gold mr-2">💡</span> {item.tip}
                  </h3>
                  <p className="text-gray-300">{item.advice}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photographer Partners */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.partners.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-300 mb-8">
                {t('servicesPages.photoshoot.partners.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photographerPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-lg p-4 text-center"
                  >
                    <p className="text-white">{partner}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-6">
                {t('servicesPages.photoshoot.partners.bringYourOwn')}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.photoshoot.gallery.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: num * 0.05 }}
                  className="aspect-square relative rounded-lg overflow-hidden group"
                >
                  <Image
                    src={`/images/photoshoot-gallery-4.jpg`}
                    alt={`Photoshoot ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{t('servicesPages.photoshoot.gallery.viewFullGallery')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl text-gray-300 mb-6 italic">
                  "{t('servicesPages.photoshoot.testimonial.text')}"
                </p>
                <p className="text-xl text-white font-semibold">{t('servicesPages.photoshoot.testimonial.name')}</p>
                <p className="text-gray-400">{t('servicesPages.photoshoot.testimonial.role')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('servicesPages.photoshoot.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('servicesPages.photoshoot.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('servicesPages.photoshoot.cta.bookYourPhotoshoot')}
                </Link>
                <a
                  href="tel:+971558164922"
                  className="btn-secondary"
                >
                  {t('servicesPages.photoshoot.cta.call')}
                </a>
              </div>
              
              <div className="mt-12 p-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">{t('servicesPages.photoshoot.cta.bookingTips.title')}</h3>
                <ul className="text-left space-y-2 text-gray-300">
                  {getTranslatedArray('servicesPages.photoshoot.cta.bookingTips.tips').map((tip: string, i: number) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
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