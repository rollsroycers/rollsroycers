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
import SeoContentBlock from '@/components/SeoContentBlock'
import EntitySchema from '@/components/EntitySchema'
import { generateWhatsAppURL } from '@/utils/whatsapp'

export default function WeddingServicePage() {
  const { t } = useTranslation('services')

  const packages = [
    {
      name: t('servicesPages.wedding.packages.classic.name'),
      cars: ['Phantom', 'Ghost'],
      duration: t('servicesPages.wedding.packages.classic.duration'),
      features: t('servicesPages.wedding.packages.classic.features', { returnObjects: true }) as string[],
      price: t('servicesPages.wedding.packages.classic.price')
    },
    {
      name: t('servicesPages.wedding.packages.royal.name'),
      cars: ['Phantom', 'Ghost', 'Dawn'],
      duration: t('servicesPages.wedding.packages.royal.duration'),
      features: t('servicesPages.wedding.packages.royal.features', { returnObjects: true }) as string[],
      price: t('servicesPages.wedding.packages.royal.price')
    },
    {
      name: t('servicesPages.wedding.packages.ultimate.name'),
      cars: ['Full Fleet Available'],
      duration: t('servicesPages.wedding.packages.ultimate.duration'),
      features: t('servicesPages.wedding.packages.ultimate.features', { returnObjects: true }) as string[],
      price: t('servicesPages.wedding.packages.ultimate.price')
    }
  ]


  return (
    <>
      <SEO pageKey="services.wedding" />
      <GEOOptimizer
        pageKey="services.wedding"
        title="Rolls-Royce Wedding Car Dubai"
        description="Luxury Rolls-Royce wedding car rental in Dubai — white Ghost from AED 3,800/day or Phantom AED 5,800/day, with floral decoration and a professional chauffeur."
        entityType="Service"
        primaryTopic="Rolls-Royce Wedding Car Dubai"
        contentSummary="Rolls-Royce wedding car service in Dubai: white Ghost (from AED 3,800/day), Phantom, Dawn and Cullinan with floral decoration and a professional chauffeur. Chauffeur-driven or self-drive for qualifying renters, free delivery across Dubai, 24/7 WhatsApp booking."
        facts={['White Rolls-Royce wedding cars: Ghost from AED 3,800/day, Phantom AED 5,800/day', 'Floral decoration included', 'Professional chauffeur in formal attire, or self-drive for qualifying renters', 'Free delivery across Dubai', '24/7 WhatsApp booking +971 55 816 4922', 'Service in English, Arabic and Russian']}
        faqs={[]}
      />
      <EntitySchema pageType="service" serviceType="wedding" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-white.jpg"
              alt="Rolls-Royce Wedding Car Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-rolls-black/40 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('servicesPages.wedding.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('servicesPages.wedding.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#packages"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('servicesPages.wedding.hero.viewPackages')}
                </motion.a>
                <a href={generateWhatsAppURL('booking', 'Hello! I am interested in a Rolls-Royce wedding car package.')} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  {t('servicesPages.wedding.hero.consultation')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.wedding.whyChoose.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">👰</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('servicesPages.wedding.whyChoose.bridal.title')}</h3>
                <p className="text-gray-400">{t('servicesPages.wedding.whyChoose.bridal.description')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('servicesPages.wedding.whyChoose.photo.title')}</h3>
                <p className="text-gray-400">{t('servicesPages.wedding.whyChoose.photo.description')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('servicesPages.wedding.whyChoose.reliability.title')}</h3>
                <p className="text-gray-400">{t('servicesPages.wedding.whyChoose.reliability.description')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wedding Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.wedding.packages.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 relative overflow-hidden"
                >
                  {index === 2 && (
                    <div className="absolute top-0 right-0 bg-rolls-gold text-rolls-black px-4 py-1 text-sm font-semibold">
                      {t('servicesPages.wedding.packages.ultimate.premium')}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-rolls-gold mb-6">{pkg.price}</div>
                  <p className="text-gray-400 mb-4">Duration: {pkg.duration}</p>
                  <p className="text-gray-400 mb-6">Vehicles: {pkg.cars.join(', ')}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={generateWhatsAppURL('booking', `Hello! I would like to book the ${pkg.name} wedding package (${pkg.price}).`)} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary w-full">
                      {t('servicesPages.wedding.packages.bookPackage')}
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.wedding.gallery.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: '/images/Rolls-Royce-white.jpg', alt: 'White Rolls-Royce for weddings' },
                { src: '/images/Rolls-royce-phantom.jpg', alt: 'Phantom wedding car' },
                { src: '/images/Rolls-Royce-black.jpg', alt: 'Black Ghost for groom' },
                { src: '/images/Rolls-royce-with-blan.jpg', alt: 'Decorated wedding Rolls-Royce' },
                { src: '/images/Rolls-Royce-front.jpg', alt: 'Wedding car front view' },
                { src: '/images/inside-Rolls-Royce.jpg', alt: 'Luxury interior for bride' }
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-64 overflow-hidden rounded-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('servicesPages.wedding.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('servicesPages.wedding.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={generateWhatsAppURL('booking', 'Hello! I would like to book a Rolls-Royce for my wedding.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('servicesPages.wedding.cta.call')}: +971 55 816 4922
              </a>
              <a href={generateWhatsAppURL('quote', 'Hello! I would like a wedding car quote.')} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {t('servicesPages.wedding.cta.getQuote')}
              </a>
            </div>
          </div>
        </section>

        {/* Recommended Models & Related Services */}
        <section className="py-20 bg-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Recommended Wedding Cars</h2>
            <p className="text-rolls-gold/70 text-center mb-12">Our most popular models for wedding celebrations</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/fleet/phantom', name: 'Phantom', desc: 'The ultimate wedding car. Extended Wheelbase in Arctic White with Starlight Headliner — the most majestic entrance.', price: 'From AED 5,800/day' },
                { href: '/fleet/ghost', name: 'Ghost', desc: 'Elegant and refined. Perfect for intimate ceremonies. The most affordable Rolls-Royce wedding option.', price: 'From AED 3,800/day' },
                { href: '/fleet/dawn', name: 'Dawn', desc: 'Open-air luxury. The convertible is stunning for outdoor garden and beach weddings in Dubai.', price: 'From AED 5,500/day' },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{model.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{model.desc}</p>
                  <p className="text-rolls-gold font-semibold text-sm">{model.price}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Explore More Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/services/chauffeur', name: 'Chauffeur Service' },
                { href: '/services/events', name: 'Events & Galas' },
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
        <SeoContentBlock blockKey="services-wedding" />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'navigation', 'seo', 'sb_services-wedding', 'services', 'servicespages'])),
    },
  }
}