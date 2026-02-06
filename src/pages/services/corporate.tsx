import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'

export default function CorporateServicesPage() {
  const { t } = useTranslation('services')
  const [selectedPackage, setSelectedPackage] = useState('executive')

  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };
  
  const corporatePackages = {
    executive: {
      name: t('servicesPages.corporate.packages.executive.name'),
      description: t('servicesPages.corporate.packages.executive.description'),
      features: getTranslatedArray('servicesPages.corporate.packages.executive.features'),
      vehicles: getTranslatedArray('servicesPages.corporate.packages.executive.vehicles'),
      startingPrice: t('servicesPages.corporate.packages.executive.price')
    },
    conference: {
      name: t('servicesPages.corporate.packages.conference.name'),
      description: t('servicesPages.corporate.packages.conference.description'),
      features: getTranslatedArray('servicesPages.corporate.packages.conference.features'),
      vehicles: getTranslatedArray('servicesPages.corporate.packages.conference.vehicles'),
      startingPrice: t('servicesPages.corporate.packages.conference.price')
    },
    roadshow: {
      name: t('servicesPages.corporate.packages.roadshow.name'),
      description: t('servicesPages.corporate.packages.roadshow.description'),
      features: getTranslatedArray('servicesPages.corporate.packages.roadshow.features'),
      vehicles: getTranslatedArray('servicesPages.corporate.packages.roadshow.vehicles'),
      startingPrice: t('servicesPages.corporate.packages.roadshow.price')
    },
    partnership: {
      name: t('servicesPages.corporate.packages.partnership.name'),
      description: t('servicesPages.corporate.packages.partnership.description'),
      features: getTranslatedArray('servicesPages.corporate.packages.partnership.features'),
      vehicles: getTranslatedArray('servicesPages.corporate.packages.partnership.vehicles'),
      startingPrice: t('servicesPages.corporate.packages.partnership.price')
    }
  }

  const clientLogos = [
    { name: t('servicesPages.corporate.clients.emiratesNBD'), sector: t('servicesPages.corporate.clients.banking') },
    { name: t('servicesPages.corporate.clients.damac'), sector: t('servicesPages.corporate.clients.realEstate') },
    { name: t('servicesPages.corporate.clients.dubaiHolding'), sector: t('servicesPages.corporate.clients.investment') },
    { name: t('servicesPages.corporate.clients.emaar'), sector: t('servicesPages.corporate.clients.development') }
  ]

  const benefits = [
    {
      icon: '🏢',
      title: t('servicesPages.corporate.whyChoose.image.title'),
      description: t('servicesPages.corporate.whyChoose.image.description')
    },
    {
      icon: '📊',
      title: t('servicesPages.corporate.whyChoose.productivity.title'),
      description: t('servicesPages.corporate.whyChoose.productivity.description')
    },
    {
      icon: '🔒',
      title: t('servicesPages.corporate.whyChoose.privacy.title'),
      description: t('servicesPages.corporate.whyChoose.privacy.description')
    },
    {
      icon: '🌍',
      title: t('servicesPages.corporate.whyChoose.standards.title'),
      description: t('servicesPages.corporate.whyChoose.standards.description')
    }
  ]

  const caseStudies = [
    {
      client: t('servicesPages.corporate.caseStudies.bank.client'),
      challenge: t('servicesPages.corporate.caseStudies.bank.challengeText'),
      solution: t('servicesPages.corporate.caseStudies.bank.solutionText'),
      result: t('servicesPages.corporate.caseStudies.bank.resultText')
    },
    {
      client: t('servicesPages.corporate.caseStudies.tech.client'),
      challenge: t('servicesPages.corporate.caseStudies.tech.challengeText'),
      solution: t('servicesPages.corporate.caseStudies.tech.solutionText'),
      result: t('servicesPages.corporate.caseStudies.tech.resultText')
    }
  ]

  return (
    <>
      <SEO pageKey="services.corporate" />
      <GEOOptimizer
        pageKey="services.corporate"
        title="Corporate Rolls-Royce Service Dubai 2026"
        description="Executive Rolls-Royce corporate transportation in Dubai from AED 1,200/day. CEO transfers, client entertainment, business events."
        entityType="Service"
        primaryTopic="Corporate Rolls-Royce Dubai"
        contentSummary="Executive Rolls-Royce corporate transportation for Dubai businesses. Ghost and Phantom for CEO transfers, client entertainment, and corporate events. Monthly packages available. Multilingual chauffeurs."
        facts={['Corporate packages from AED 1,200/day', 'Monthly executive packages available', 'Multilingual professional chauffeurs', 'DIFC and Business Bay specialist', 'Corporate account billing']}
        faqs={[
          { question: 'Do you offer corporate monthly packages?', answer: 'Yes, we offer corporate monthly packages with dedicated vehicles and chauffeurs. Packages include priority booking, corporate billing, and customized reporting.' },
          { question: 'Which Rolls-Royce is best for corporate use?', answer: 'The Ghost Series II is our most popular corporate vehicle — it combines understated elegance with supreme comfort. The Phantom is ideal for VIP client entertainment.' }
        ]}
      />
      <EntitySchema pageType="service" serviceType="corporate" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-front.jpg"
              alt="Rolls-Royce Corporate Services Dubai"
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
                {t('servicesPages.corporate.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('servicesPages.corporate.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('servicesPages.corporate.hero.getQuote')}
                </motion.button>
                <a href="#packages" className="btn-secondary">
                  {t('servicesPages.corporate.hero.viewPackages')}
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">500+</div>
                  <div className="text-sm text-gray-400">{t('servicesPages.corporate.hero.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">98%</div>
                  <div className="text-sm text-gray-400">{t('servicesPages.corporate.hero.stats.retention')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">24/7</div>
                  <div className="text-sm text-gray-400">{t('servicesPages.corporate.hero.stats.support')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.corporate.whyChoose.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.corporate.packages.title')}
            </h2>
            
            {/* Package Selector */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {Object.keys(corporatePackages).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedPackage === key
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {corporatePackages[key as keyof typeof corporatePackages].name}
                </button>
              ))}
            </div>

            {/* Selected Package Details */}
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {corporatePackages[selectedPackage as keyof typeof corporatePackages].name}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {corporatePackages[selectedPackage as keyof typeof corporatePackages].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-4">Features Included:</h4>
                    <ul className="space-y-3">
                      {corporatePackages[selectedPackage as keyof typeof corporatePackages].features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-4">Package Details:</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400">Available Vehicles:</p>
                        <p className="text-white font-medium">
                          {corporatePackages[selectedPackage as keyof typeof corporatePackages].vehicles.join(', ')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Starting From:</p>
                        <p className="text-2xl font-bold text-rolls-gold">
                          {corporatePackages[selectedPackage as keyof typeof corporatePackages].startingPrice}
                        </p>
                      </div>
                      <button className="btn-primary w-full mt-6">
                        {t('servicesPages.corporate.packages.requestQuote')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.corporate.clients.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 rounded-lg p-6 text-center"
                >
                  <p className="text-white font-semibold">{client.name}</p>
                  <p className="text-rolls-gold text-sm mt-1">{client.sector}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              {t('servicesPages.corporate.clients.more')}
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.corporate.caseStudies.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-4">{study.client}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 uppercase">{t('servicesPages.corporate.caseStudies.bank.challenge')}</p>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase">{t('servicesPages.corporate.caseStudies.bank.solution')}</p>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase">{t('servicesPages.corporate.caseStudies.bank.result')}</p>
                      <p className="text-white font-medium">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Benefits Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.corporate.benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">{t('servicesPages.corporate.benefits.financial.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('servicesPages.corporate.benefits.financial.items').map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
              
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">{t('servicesPages.corporate.benefits.operational.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('servicesPages.corporate.benefits.operational.items').map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
              
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">{t('servicesPages.corporate.benefits.service.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('servicesPages.corporate.benefits.service.items').map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('servicesPages.corporate.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('servicesPages.corporate.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('servicesPages.corporate.cta.speakToTeam')}
              </motion.a>
              <button className="btn-secondary">
                {t('servicesPages.corporate.cta.downloadBrochure')}
              </button>
            </div>
            
            {/* Contact Form Preview */}
            <div className="max-w-md mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">{t('servicesPages.corporate.quickInquiry.title')}</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t('placeholders.companyName')}
                  className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder={t('placeholders.businessEmail')}
                  className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white placeholder-gray-500"
                />
                <select className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white">
                  <option>{t('servicesPages.corporate.quickInquiry.selectPackage')}</option>
                  <option>{t('servicesPages.corporate.quickInquiry.packages.executive')}</option>
                  <option>{t('servicesPages.corporate.quickInquiry.packages.conference')}</option>
                  <option>{t('servicesPages.corporate.quickInquiry.packages.roadshow')}</option>
                  <option>{t('servicesPages.corporate.quickInquiry.packages.partnership')}</option>
                </select>
                <button type="submit" className="btn-primary w-full">
                  {t('servicesPages.corporate.quickInquiry.submitInquiry')}
                </button>
              </form>
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
