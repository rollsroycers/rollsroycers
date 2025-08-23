import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

export default function ChauffeurServicesPage() {
  const [selectedService, setSelectedService] = useState('hourly')
  
  const chauffeurServices = {
    hourly: {
      name: 'Hourly Chauffeur',
      description: 'Flexible hourly service for multiple stops and waiting time',
      features: [
        'Minimum 4 hours booking',
        'Professional uniformed chauffeur',
        'Unlimited stops within Dubai',
        'Waiting time included',
        'Multilingual drivers available',
        'Real-time itinerary changes',
        'Complimentary refreshments',
        'WiFi & device charging'
      ],
      pricing: 'From AED 800/hour',
      ideal: 'Shopping trips, business meetings, city tours'
    },
    daily: {
      name: 'Full Day Chauffeur',
      description: 'Dedicated chauffeur service for 12 hours',
      features: [
        '12-hour service window',
        'Elite professional chauffeur',
        'Unlimited mileage in Dubai',
        'VIP meet & greet service',
        'Route planning assistance',
        'Restaurant reservations',
        'Personal shopping assistance',
        'Discrete security-trained drivers'
      ],
      pricing: 'From AED 6,500/day',
      ideal: 'Business delegations, tourist groups, special events'
    },
    transfer: {
      name: 'Point-to-Point Transfer',
      description: 'Direct transfer service between locations',
      features: [
        'Fixed route pricing',
        'No hidden charges',
        'Flight monitoring (airports)',
        'Meet & greet included',
        '15 minutes free waiting',
        'Luggage assistance',
        'Child seats available',
        'Pet-friendly options'
      ],
      pricing: 'From AED 600',
      ideal: 'Airport transfers, hotel transfers, event transportation'
    },
    events: {
      name: 'Event Chauffeur',
      description: 'Specialized service for weddings and special occasions',
      features: [
        'Red carpet service',
        'Formal attire chauffeurs',
        'Decoration coordination',
        'Multiple vehicle sync',
        'Photography assistance',
        'Guest transportation',
        'Overnight availability',
        'Emergency backup vehicles'
      ],
      pricing: 'From AED 8,000',
      ideal: 'Weddings, galas, corporate events, premieres'
    }
  }

  const chauffeurQualities = [
    {
      icon: '👔',
      title: 'Professional Excellence',
      points: [
        'Minimum 5 years luxury driving experience',
        'Advanced defensive driving certification',
        'Impeccable presentation and grooming',
        'Cultural awareness training'
      ]
    },
    {
      icon: '🌐',
      title: 'Language Skills',
      points: [
        'English (mandatory)',
        'Arabic speakers available',
        'Hindi/Urdu speakers',
        'Russian, French, Chinese on request'
      ]
    },
    {
      icon: '🛡️',
      title: 'Security & Discretion',
      points: [
        'Background verified drivers',
        'Confidentiality agreements',
        'VIP protection training',
        'Emergency response protocols'
      ]
    },
    {
      icon: '📱',
      title: 'Technology Enabled',
      points: [
        'GPS tracked vehicles',
        'Real-time communication',
        'Digital trip reports',
        'Mobile app connectivity'
      ]
    }
  ]

  const popularRoutes = [
    {
      route: 'Dubai Mall → Gold Souk → Dubai Marina',
      duration: '4 hours',
      type: 'Shopping Tour',
      price: 'AED 3,200'
    },
    {
      route: 'Hotel → DIFC → Business Bay → Airport',
      duration: '6 hours',
      type: 'Business Circuit',
      price: 'AED 4,800'
    },
    {
      route: 'Full Day Dubai Highlights Tour',
      duration: '10 hours',
      type: 'Tourist Special',
      price: 'AED 7,200'
    },
    {
      route: 'Dubai → Abu Dhabi → Dubai',
      duration: '8 hours',
      type: 'Inter-Emirate',
      price: 'AED 8,000'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Fernandez',
      role: 'CEO, Fashion House',
      text: 'Our chauffeur Ahmed was exceptional. Professional, punctual, and knew Dubai inside out. Made my business trip seamless.',
      service: 'Daily Chauffeur'
    },
    {
      name: 'Sheikh Mohammed',
      role: 'Local Business Owner',
      text: 'I use their hourly service regularly. The flexibility and professionalism are unmatched. Highly recommend!',
      service: 'Hourly Service'
    },
    {
      name: 'Alexandra Petrova',
      role: 'Tourist from Russia',
      text: 'Our Russian-speaking chauffeur made our Dubai vacation perfect. He was like a personal tour guide!',
      service: 'Full Day Tour'
    }
  ]

  return (
    <>
      <SEO pageKey="services.chauffeur" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-with-chauffeur.jpg"
              alt="Rolls-Royce Chauffeur Service Dubai"
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
                Professional Chauffeur Service
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Experience Dubai with Elite Professional Drivers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Chauffeur Now
                </motion.button>
                <a href="#services" className="btn-secondary">
                  View Services
                </a>
              </div>
              
              {/* Quick Features */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span>Background Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                  </svg>
                  <span>Multilingual</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Types */}
        <section id="services" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Chauffeur Service Options
            </h2>
            
            {/* Service Selector */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {Object.keys(chauffeurServices).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedService === key
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {chauffeurServices[key as keyof typeof chauffeurServices].name}
                </button>
              ))}
            </div>

            {/* Selected Service Details */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {chauffeurServices[selectedService as keyof typeof chauffeurServices].name}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {chauffeurServices[selectedService as keyof typeof chauffeurServices].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-4">Service Features:</h4>
                    <ul className="space-y-3">
                      {chauffeurServices[selectedService as keyof typeof chauffeurServices].features.map((feature, index) => (
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
                    <div className="bg-rolls-black/30 rounded-lg p-6">
                      <h4 className="text-rolls-gold font-semibold mb-4">Pricing & Details</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-gray-400">Starting From:</p>
                          <p className="text-2xl font-bold text-rolls-gold">
                            {chauffeurServices[selectedService as keyof typeof chauffeurServices].pricing}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Ideal For:</p>
                          <p className="text-white">
                            {chauffeurServices[selectedService as keyof typeof chauffeurServices].ideal}
                          </p>
                        </div>
                        <button className="btn-primary w-full mt-6">
                          Book This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chauffeur Qualities */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Elite Chauffeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chauffeurQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="text-4xl mb-4 text-center">{quality.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{quality.title}</h3>
                  <ul className="space-y-2">
                    {quality.points.map((point, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-rolls-gold mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes & Pricing */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Popular Chauffeur Routes
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>Route</div>
                  <div>Duration</div>
                  <div>Type</div>
                  <div>Price</div>
                </div>
                {popularRoutes.map((route, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-4 gap-4 p-4 border-t border-rolls-gold/10"
                  >
                    <div className="text-gray-300">{route.route}</div>
                    <div className="text-gray-300">{route.duration}</div>
                    <div className="text-gray-300">{route.type}</div>
                    <div className="text-rolls-gold font-semibold">{route.price}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-4">
                * Prices include vehicle, chauffeur, fuel, and basic refreshments
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Choose Your Service</h3>
                    <p className="text-gray-300">Select from hourly, daily, transfer, or event chauffeur services based on your needs</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Select Your Vehicle</h3>
                    <p className="text-gray-300">Choose from our fleet of Phantom, Ghost, Cullinan, Dawn, or Wraith</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meet Your Chauffeur</h3>
                    <p className="text-gray-300">Your professional chauffeur arrives 10 minutes early, impeccably dressed and ready</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center text-rolls-black font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enjoy the Journey</h3>
                    <p className="text-gray-300">Relax in ultimate luxury while your chauffeur handles everything</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Client Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-rolls-gold text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm mt-1">Service: {testimonial.service}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Elite Chauffeur Service
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional chauffeurs available 24/7. Book now and travel Dubai in unparalleled comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                {...createWhatsAppLinkProps('chauffeur')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call: +971 55 816 4922
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                Book Chauffeur Online
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rolls-gold">500+</div>
                <div className="text-sm text-gray-400">Professional Chauffeurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rolls-gold">10,000+</div>
                <div className="text-sm text-gray-400">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rolls-gold">4.9/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
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