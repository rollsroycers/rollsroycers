import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import SEO from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import AvailabilityCalendar from '@/components/AvailabilityCalendar'
import PriceCalculator from '@/components/PriceCalculator'

export default function BookingPage() {
  const { t } = useTranslation('common')
  const [selectedVehicle, setSelectedVehicle] = useState('')
  const [selectedService, setSelectedService] = useState('self-drive')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')
  
  // Helper function to ensure array safety
  const ensureArray = (arr: any): any[] => {
    return Array.isArray(arr) ? arr : [];
  };
  
  const vehicles = ensureArray([
    { id: 'phantom', name: t('booking.vehicles.phantom'), price: 'AED 5,800/day' },
    { id: 'ghost', name: t('booking.vehicles.ghost'), price: 'AED 4,800/day' },
    { id: 'cullinan', name: t('booking.vehicles.cullinan'), price: 'AED 6,500/day' },
    { id: 'dawn', name: t('booking.vehicles.dawn'), price: 'AED 5,500/day' },
    { id: 'wraith', name: t('booking.vehicles.wraith'), price: 'AED 5,000/day' }
  ]);

  const services = ensureArray([
    { id: 'self-drive', name: t('booking.services.selfDrive.name'), description: t('booking.services.selfDrive.description') },
    { id: 'chauffeur', name: t('booking.services.chauffeur.name'), description: t('booking.services.chauffeur.description') },
    { id: 'hourly', name: t('booking.services.hourly.name'), description: t('booking.services.hourly.description') },
    { id: 'wedding', name: t('booking.services.wedding.name'), description: t('booking.services.wedding.description') },
    { id: 'corporate', name: t('booking.services.corporate.name'), description: t('booking.services.corporate.description') }
  ]);

  const locations = ensureArray([
    t('booking.locations.downtownDubai'),
    t('booking.locations.dubaiMarina'),
    t('booking.locations.palmJumeirah'),
    t('booking.locations.businessBay'),
    t('booking.locations.jbr'),
    t('booking.locations.difc'),
    t('booking.locations.dxbAirport'),
    t('booking.locations.dwcAirport'),
    t('booking.locations.hotelPickup'),
    t('booking.locations.customLocation')
  ]);

  const bookingSteps = ensureArray([
    { number: 1, title: t('booking.steps.vehicle'), icon: '🚗' },
    { number: 2, title: t('booking.steps.service'), icon: '🎯' },
    { number: 3, title: t('booking.steps.dates'), icon: '📅' },
    { number: 4, title: t('booking.steps.confirm'), icon: '✅' }
  ]);

  const requirements = ensureArray([
    t('booking.requirements.items.license'),
    t('booking.requirements.items.age'),
    t('booking.requirements.items.credit'),
    t('booking.requirements.items.passport'),
    t('booking.requirements.items.residence')
  ]);

  return (
    <>
      <SEO pageKey="other.booking" />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Book Rolls-Royce Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t('booking.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold">
                {t('booking.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center space-x-4 md:space-x-8 flex-wrap">
              {bookingSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 mb-4 md:mb-0"
                >
                  <div className="w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold">
                    {step.icon}
                  </div>
                  <div className="text-white">
                    <p className="text-xs text-gray-400">{t('booking.steps.step')} {step.number}</p>
                    <p className="font-semibold">{step.title}</p>
                  </div>
                  {index < bookingSteps.length - 1 && (
                    <svg className="w-6 h-6 text-rolls-gold hidden md:block ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <form className="space-y-8">
                {/* Vehicle Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{t('booking.vehicleSelection.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicles.map((vehicle) => (
                      <label
                        key={vehicle.id}
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          selectedVehicle === vehicle.id
                            ? 'border-rolls-gold bg-rolls-gold/10'
                            : 'border-rolls-gold/20 hover:border-rolls-gold/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="vehicle"
                          value={vehicle.id}
                          checked={selectedVehicle === vehicle.id}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <p className="text-white font-semibold">{vehicle.name}</p>
                          <p className="text-rolls-gold mt-2">{vehicle.price}</p>
                        </div>
                        {selectedVehicle === vehicle.id && (
                          <div className="absolute top-2 right-2">
                            <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/fleet" className="text-rolls-gold hover:text-white transition-colors">
                      {t('booking.vehicleSelection.viewDetails')}
                    </Link>
                  </div>
                </motion.div>

                {/* Service Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{t('booking.serviceSelection.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all ${
                          selectedService === service.id
                            ? 'border-rolls-gold bg-rolls-gold/10'
                            : 'border-rolls-gold/20 hover:border-rolls-gold/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={selectedService === service.id}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="sr-only"
                        />
                        <div>
                          <p className="text-white font-semibold">{service.name}</p>
                          <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                        </div>
                        {selectedService === service.id && (
                          <div className="absolute top-2 right-2">
                            <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Date & Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{t('booking.locationDates.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">{t('booking.locationDates.pickupLocation')}</label>
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                      >
                        <option value="">{t('booking.locationDates.selectLocation')}</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('booking.locationDates.pickupDateTime')}</label>
                      <input
                        type="datetime-local"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('booking.locationDates.returnLocation')}</label>
                      <select
                        value={dropoffLocation}
                        onChange={(e) => setDropoffLocation(e.target.value)}
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                      >
                        <option value="">{t('booking.locationDates.sameAsPickup')}</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('booking.locationDates.returnDateTime')}</label>
                      <input
                        type="datetime-local"
                        value={dropoffDate}
                        onChange={(e) => setDropoffDate(e.target.value)}
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Personal Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">{t('booking.personalInfo.title')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">{t('contact.form.name.label')}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                        placeholder={t('booking.placeholders.johnDoe')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('contact.form.email.label')}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('contact.form.phone.label')}</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                        placeholder="+971 55 816 4922"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white mb-2">{t('booking.personalInfo.nationality')}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                        placeholder={t('booking.placeholders.country')}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-white mb-2">{t('contact.form.message.label')}</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:outline-none focus:border-rolls-gold"
                      placeholder={t('booking.personalInfo.specialRequests')}
                    ></textarea>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <button type="submit" className="btn-primary text-lg px-12 py-4">
                    {t('booking.submit.button')}
                  </button>
                  <p className="text-gray-400 mt-4">
                    {t('booking.submit.redirect')}
                  </p>
                </motion.div>
              </form>
            </div>
          </div>
        </section>

        {/* Availability Calendar */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('booking.availability.title')}
            </h2>
            <AvailabilityCalendar />
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('booking.calculator.title')}
            </h2>
            <PriceCalculator />
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('booking.requirements.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <svg className="w-6 h-6 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/terms" className="text-rolls-gold hover:text-white transition-colors">
                  {t('booking.requirements.viewTerms')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Alternative */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('booking.phoneBooking.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('booking.phoneBooking.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                {t('booking.phoneBooking.callButton')}
              </motion.a>
              <a
                href="https://wa.me/971558164922"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t('booking.phoneBooking.whatsappButton')}
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}