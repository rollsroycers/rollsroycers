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

export default function AirportTransferPage() {
  const { t } = useTranslation('services')
  const [selectedAirport, setSelectedAirport] = useState('DXB')
  
  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };
  
  const airports = {
    DXB: {
      name: t('servicesPages.airportTransfer.airportSelector.dxb.name'),
      terminals: getTranslatedArray('servicesPages.airportTransfer.airportSelector.dxb.terminals'),
      distance: t('servicesPages.airportTransfer.airportSelector.dxb.distance'),
      transferTime: t('servicesPages.airportTransfer.airportSelector.dxb.transferTime')
    },
    DWC: {
      name: t('servicesPages.airportTransfer.airportSelector.dwc.name'),
      terminals: getTranslatedArray('servicesPages.airportTransfer.airportSelector.dwc.terminals'),
      distance: t('servicesPages.airportTransfer.airportSelector.dwc.distance'),
      transferTime: t('servicesPages.airportTransfer.airportSelector.dwc.transferTime')
    },
    AUH: {
      name: t('servicesPages.airportTransfer.airportSelector.auh.name'),
      terminals: getTranslatedArray('servicesPages.airportTransfer.airportSelector.auh.terminals'),
      distance: t('servicesPages.airportTransfer.airportSelector.auh.distance'),
      transferTime: t('servicesPages.airportTransfer.airportSelector.auh.transferTime')
    },
    SHJ: {
      name: t('servicesPages.airportTransfer.airportSelector.shj.name'),
      terminals: getTranslatedArray('servicesPages.airportTransfer.airportSelector.shj.terminals'),
      distance: t('servicesPages.airportTransfer.airportSelector.shj.distance'),
      transferTime: t('servicesPages.airportTransfer.airportSelector.shj.transferTime')
    }
  }

  const transferPackages = [
    {
      type: t('servicesPages.airportTransfer.packages.oneWay.name'),
      airports: getTranslatedArray('servicesPages.airportTransfer.packages.oneWay.airports'),
      vehicles: getTranslatedArray('servicesPages.airportTransfer.packages.oneWay.vehicles'),
      features: getTranslatedArray('servicesPages.airportTransfer.packages.oneWay.features'),
      price: t('servicesPages.airportTransfer.packages.oneWay.price')
    },
    {
      type: t('servicesPages.airportTransfer.packages.roundTrip.name'),
      airports: getTranslatedArray('servicesPages.airportTransfer.packages.roundTrip.airports'),
      vehicles: getTranslatedArray('servicesPages.airportTransfer.packages.roundTrip.vehicles'),
      features: getTranslatedArray('servicesPages.airportTransfer.packages.roundTrip.features'),
      price: t('servicesPages.airportTransfer.packages.roundTrip.price')
    },
    {
      type: t('servicesPages.airportTransfer.packages.business.name'),
      airports: getTranslatedArray('servicesPages.airportTransfer.packages.business.airports'),
      vehicles: getTranslatedArray('servicesPages.airportTransfer.packages.business.vehicles'),
      features: getTranslatedArray('servicesPages.airportTransfer.packages.business.features'),
      price: t('servicesPages.airportTransfer.packages.business.price')
    }
  ]

  const whyChooseUs = [
    {
      icon: '✈️',
      title: t('servicesPages.airportTransfer.whyChoose.flightTracking.title'),
      description: t('servicesPages.airportTransfer.whyChoose.flightTracking.description')
    },
    {
      icon: '👔',
      title: t('servicesPages.airportTransfer.whyChoose.professional.title'),
      description: t('servicesPages.airportTransfer.whyChoose.professional.description')
    },
    {
      icon: '🛡️',
      title: t('servicesPages.airportTransfer.whyChoose.reliability.title'),
      description: t('servicesPages.airportTransfer.whyChoose.reliability.description')
    },
    {
      icon: '🎯',
      title: t('servicesPages.airportTransfer.whyChoose.pricing.title'),
      description: t('servicesPages.airportTransfer.whyChoose.pricing.description')
    }
  ]

  const popularRoutes = t('servicesPages.airportTransfer.popularRoutes.routes', { returnObjects: true }) as Array<{
    from: string;
    to: string;
    time: string;
    price: string;
  }>;

  return (
    <>
      <SEO pageKey="services.airport-transfer" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-Ride.jpg"
              alt="Rolls-Royce Airport Transfer Dubai"
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
                {t('servicesPages.airportTransfer.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                {t('servicesPages.airportTransfer.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('servicesPages.airportTransfer.hero.bookTransfer')}
                </motion.button>
                <a href="tel:+971558164922" className="btn-secondary">
                  {t('servicesPages.airportTransfer.hero.hotline')}
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">
                    {t('servicesPages.airportTransfer.hero.stats.transfers')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('servicesPages.airportTransfer.hero.stats.transfersLabel')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">
                    {t('servicesPages.airportTransfer.hero.stats.availability')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('servicesPages.airportTransfer.hero.stats.availabilityLabel')}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">
                    {t('servicesPages.airportTransfer.hero.stats.onTime')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('servicesPages.airportTransfer.hero.stats.onTimeLabel')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Airport Selector */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.airportTransfer.airportSelector.title')}
            </h2>
            
            {/* Airport Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(airports).map(([code, airport]) => (
                <button
                  key={code}
                  onClick={() => setSelectedAirport(code)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedAirport === code
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Airport Details */}
            <motion.div
              key={selectedAirport}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {airports[selectedAirport as keyof typeof airports].name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-rolls-gold mb-2">
                    {t('servicesPages.airportTransfer.airportSelector.terminals')}
                  </h4>
                  <ul className="space-y-1">
                    {airports[selectedAirport as keyof typeof airports].terminals.map((terminal, index) => (
                      <li key={index} className="text-gray-300">{terminal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-rolls-gold mb-2">
                    {t('servicesPages.airportTransfer.airportSelector.transferInfo')}
                  </h4>
                  <p className="text-gray-300">
                    {t('servicesPages.airportTransfer.airportSelector.distance')}: {airports[selectedAirport as keyof typeof airports].distance}
                  </p>
                  <p className="text-gray-300">
                    {t('servicesPages.airportTransfer.airportSelector.travelTime')}: {airports[selectedAirport as keyof typeof airports].transferTime}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.airportTransfer.whyChoose.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transfer Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.airportTransfer.packages.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {transferPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.type}</h3>
                  <div className="text-3xl font-bold text-rolls-gold mb-4">{pkg.price}</div>
                  <p className="text-gray-400 mb-4">
                    {t('servicesPages.airportTransfer.packages.availableAt')}: {pkg.airports.join(', ')}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {t('servicesPages.airportTransfer.packages.vehicles')}: {pkg.vehicles.join(', ')}
                  </p>
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
                    {t('servicesPages.airportTransfer.packages.selectPackage')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.airportTransfer.popularRoutes.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>{t('servicesPages.airportTransfer.popularRoutes.from')}</div>
                  <div>{t('servicesPages.airportTransfer.popularRoutes.to')}</div>
                  <div>{t('servicesPages.airportTransfer.popularRoutes.duration')}</div>
                  <div>{t('servicesPages.airportTransfer.popularRoutes.startingPrice')}</div>
                </div>
                {popularRoutes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-4 gap-4 p-4 border-t border-rolls-gold/10 text-gray-300"
                  >
                    <div>{route.from}</div>
                    <div>{route.to}</div>
                    <div>{route.time}</div>
                    <div className="text-rolls-gold font-semibold">{route.price}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('servicesPages.airportTransfer.howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('servicesPages.airportTransfer.howItWorks.step1.title')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('servicesPages.airportTransfer.howItWorks.step1.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('servicesPages.airportTransfer.howItWorks.step2.title')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('servicesPages.airportTransfer.howItWorks.step2.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('servicesPages.airportTransfer.howItWorks.step3.title')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('servicesPages.airportTransfer.howItWorks.step3.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('servicesPages.airportTransfer.howItWorks.step4.title')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('servicesPages.airportTransfer.howItWorks.step4.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('servicesPages.airportTransfer.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('servicesPages.airportTransfer.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971558164922" className="btn-primary">
                {t('servicesPages.airportTransfer.cta.call')}
              </a>
              <Link href="/booking" className="btn-secondary">
                {t('servicesPages.airportTransfer.cta.onlineBooking')}
              </Link>
            </div>
            <p className="text-gray-400 mt-6">
              {t('servicesPages.airportTransfer.cta.waitingTime')}
            </p>
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