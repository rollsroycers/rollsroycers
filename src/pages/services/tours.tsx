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

export default function ToursServicePage() {
  const { t } = useTranslation('services')

  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };

  const tourPackages = getTranslatedArray('servicesPages.tours.packages.tours').map((tour: any, index: number) => ({
    ...tour,
    image: [
      '/images/Rolls-royce-dubai.jpg',
      '/images/Rolls-Royce_Cullinan_.jpg', 
      '/images/Rolls-Royce-white.jpg',
      '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
      '/images/Black_Rolls_Royce_Ghost.jpg',
      '/images/Rolls-royce-phantom.jpg'
    ][index] || '/images/Rolls-royce-dubai.jpg'
  }))

  const customTourOptions = getTranslatedArray('servicesPages.tours.customOptions.options')

  const includedAmenities = getTranslatedArray('servicesPages.tours.included.amenities')

  const tourHighlights = [
    {
      stat: t('servicesPages.tours.highlights.toursCompleted'),
      label: t('servicesPages.tours.highlights.toursCompletedLabel')
    },
    {
      stat: t('servicesPages.tours.highlights.averageRating'),
      label: t('servicesPages.tours.highlights.averageRatingLabel')
    },
    {
      stat: t('servicesPages.tours.highlights.destinations'),
      label: t('servicesPages.tours.highlights.destinationsLabel')
    },
    {
      stat: t('servicesPages.tours.highlights.languages'),
      label: t('servicesPages.tours.highlights.languagesLabel')
    }
  ]

  const tourGuideLanguages = getTranslatedArray('servicesPages.tours.guides.languages')

  const processSteps = getTranslatedArray('servicesPages.tours.process.steps')

  const faqItems = getTranslatedArray('servicesPages.tours.faq.questions')

  return (
    <>
      <SEO pageKey="services.tours" />
      <GEOOptimizer
        pageKey="services.tours"
        title="Rolls-Royce Dubai City Tours 2026"
        description="Private luxury Dubai tours in Rolls-Royce with chauffeur guide from AED 2,500/4hrs. Custom itineraries."
        entityType="Service"
        primaryTopic="Rolls-Royce Dubai Tours"
        contentSummary="Private luxury Dubai city tours in Rolls-Royce with professional chauffeur guide. Custom itineraries covering Burj Khalifa, Palm Jumeirah, Dubai Marina, and more. From AED 2,500 for 4 hours."
        facts={['City tours from AED 2,500/4hrs', 'Custom itineraries available', 'Professional chauffeur guide', 'All Dubai landmarks covered', 'Multilingual guides available']}
      />
      <EntitySchema pageType="service" serviceType="tours" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-front.jpg"
              alt="Rolls-Royce Tours Dubai"
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
                {t('servicesPages.tours.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('servicesPages.tours.hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {t('servicesPages.tours.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('servicesPages.tours.hero.bookYourTour')}
                </Link>
                <a href="#packages" className="btn-secondary">
                  {t('servicesPages.tours.hero.exploreTours')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tourHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-rolls-gold">{highlight.stat}</p>
                  <p className="text-gray-300">{highlight.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.packages.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tourPackages.map((tour: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group hover:border-rolls-gold/40 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-xl">{tour.title}</p>
                      <p className="text-rolls-gold">{tour.duration} • {tour.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{tour.description}</p>
                    <h4 className="text-white font-semibold mb-3">{t('servicesPages.tours.packages.tourHighlights')}</h4>
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link href="/booking" className="btn-primary w-full text-center">
                      {t('servicesPages.tours.packages.bookThisTour')}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Tours */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.customOptions.title')}
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              {t('servicesPages.tours.customOptions.subtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {customTourOptions.map((option: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{option.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{option.description}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/booking" className="btn-secondary">
                Design Custom Tour
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.included.title')}
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              {t('servicesPages.tours.included.subtitle')}
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {includedAmenities.map((amenity: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-rolls-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{amenity}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tour Process */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.process.title')}
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              {t('servicesPages.tours.process.subtitle')}
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center">
                      <span className="text-rolls-black font-bold text-lg">{step.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.guides.title')}
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              {t('servicesPages.tours.guides.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {tourGuideLanguages.map((language: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-full px-6 py-3"
                >
                  <p className="text-white">{language}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              {t('servicesPages.tours.testimonials.subtitle')}
            </p>
            {/* Testimonials content can be added here */}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.tours.faq.title')}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((faq: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
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
                {t('servicesPages.tours.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('servicesPages.tours.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('servicesPages.tours.cta.bookNow')}
                </Link>
                <a
                  href="https://wa.me/971558164922?text=I want to book a Rolls-Royce tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Inquiry
                </a>
              </div>
              
              <div className="mt-12 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Special Offer</h3>
                <p className="text-rolls-gold text-xl mb-2">{t('servicesPages.tours.cta.specialOffer')}</p>
                <p className="text-gray-300">{t('servicesPages.tours.cta.subtitle')}</p>
                <p className="text-gray-400 text-sm mt-4">Terms and conditions apply</p>
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