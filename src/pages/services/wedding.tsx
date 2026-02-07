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

  const testimonials = [
    {
      name: t('servicesPages.wedding.testimonials.sarah.name'),
      text: t('servicesPages.wedding.testimonials.sarah.text'),
      rating: 5
    },
    {
      name: t('servicesPages.wedding.testimonials.fatima.name'),
      text: t('servicesPages.wedding.testimonials.fatima.text'),
      rating: 5
    }
  ]

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is a Rolls-Royce wedding car in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rolls-Royce wedding car packages start from AED 2,500 including decoration, red carpet, and professional chauffeur. Premium packages with photographer from AED 4,500."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a white Rolls-Royce for my wedding in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have white Phantom and Ghost models specifically maintained for weddings with custom floral arrangements, Just Married signage, and red carpet service."
        }
      },
      {
        "@type": "Question",
        "name": "Which Rolls-Royce is best for weddings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Phantom Extended Wheelbase is the most popular wedding car due to its majestic presence and spacious cabin. The Ghost is ideal for a more intimate affair, while the Dawn convertible is perfect for outdoor celebrations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Indian wedding car packages in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer specialized Indian wedding packages with multiple Rolls-Royce vehicles for baraat procession, traditional decoration, and multi-day event coverage."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="services.wedding" />
      <GEOOptimizer
        pageKey="services.wedding"
        title="Rolls-Royce Wedding Car Dubai 2026"
        description="Luxury Rolls-Royce wedding car rental in Dubai from AED 2,500. White Phantom & Ghost with decoration and professional chauffeur."
        entityType="Service"
        primaryTopic="Rolls-Royce Wedding Car Dubai"
        contentSummary="Premium Rolls-Royce wedding car service in Dubai. White Phantom and Ghost with floral decoration, red carpet, and professional chauffeur. Packages from AED 2,500. Over 500 weddings served."
        facts={['Wedding car packages from AED 2,500', 'White Phantom & Ghost available', 'Floral decoration included', 'Professional chauffeur in formal attire', 'Free photographer for 4+ hour bookings', 'Over 500 weddings served in Dubai']}
        faqs={[
          { question: 'How much is a Rolls-Royce wedding car in Dubai?', answer: 'Rolls-Royce wedding car packages start from AED 2,500 including decoration, red carpet, and professional chauffeur. Premium packages with photographer from AED 4,500.' },
          { question: 'Can I get a white Rolls-Royce for my wedding?', answer: 'Yes, we have white Phantom and Ghost models specifically maintained for weddings with custom floral arrangements and Just Married signage.' }
        ]}
      />
      <EntitySchema pageType="service" serviceType="wedding" />
      <Script id="wedding-faq-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
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
                <a href="tel:+971558164922" className="btn-secondary">
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
                  <button className="btn-primary w-full">
                    {t('servicesPages.wedding.packages.bookPackage')}
                  </button>
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

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.wedding.testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
                  <p className="text-rolls-gold font-semibold">{testimonial.name}</p>
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
              <a href="tel:+971558164922" className="btn-primary">
                {t('servicesPages.wedding.cta.call')}: +971 55 816 4922
              </a>
              <a href="#contact" className="btn-secondary">
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