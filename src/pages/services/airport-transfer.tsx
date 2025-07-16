import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function AirportTransferPage() {
  const [selectedAirport, setSelectedAirport] = useState('DXB')
  
  const airports = {
    DXB: {
      name: 'Dubai International Airport (DXB)',
      terminals: ['Terminal 1', 'Terminal 2', 'Terminal 3'],
      distance: '15 km from Downtown',
      transferTime: '20-30 minutes'
    },
    DWC: {
      name: 'Al Maktoum International Airport (DWC)',
      terminals: ['Passenger Terminal'],
      distance: '37 km from Downtown',
      transferTime: '35-45 minutes'
    },
    AUH: {
      name: 'Abu Dhabi International Airport (AUH)',
      terminals: ['Terminal 1', 'Terminal 2', 'Terminal 3'],
      distance: '130 km from Dubai',
      transferTime: '90-120 minutes'
    },
    SHJ: {
      name: 'Sharjah International Airport (SHJ)',
      terminals: ['Main Terminal'],
      distance: '28 km from Dubai',
      transferTime: '30-40 minutes'
    }
  }

  const transferPackages = [
    {
      type: 'One-Way Transfer',
      airports: ['DXB', 'DWC'],
      vehicles: ['Phantom', 'Ghost', 'Cullinan'],
      features: [
        'Meet & Greet Service',
        'Flight Monitoring',
        'Luggage Assistance',
        'Complimentary Water & Refreshments',
        'Wi-Fi Available'
      ],
      price: 'From AED 1,200'
    },
    {
      type: 'Round-Trip Package',
      airports: ['DXB', 'DWC', 'AUH'],
      vehicles: ['Full Fleet Available'],
      features: [
        'Priority VIP Service',
        'Dedicated Concierge',
        '24/7 Flight Tracking',
        'Flexible Timing',
        'Multi-stop Options',
        'Premium Amenities'
      ],
      price: 'From AED 2,200'
    },
    {
      type: 'Business Delegation',
      airports: ['All Airports'],
      vehicles: ['Multiple Vehicles'],
      features: [
        'Fleet Coordination',
        'Bilingual Chauffeurs',
        'Corporate Billing',
        'Executive Lounge Access',
        'Meeting Setup in Vehicle',
        'Security Arrangements'
      ],
      price: 'From AED 3,500'
    }
  ]

  const whyChooseUs = [
    {
      icon: '✈️',
      title: 'Real-Time Flight Tracking',
      description: 'We monitor your flight status to ensure timely pickup, even with delays'
    },
    {
      icon: '👔',
      title: 'Professional Chauffeurs',
      description: 'Experienced, multilingual drivers trained in VIP protocol'
    },
    {
      icon: '🛡️',
      title: 'Reliability Guaranteed',
      description: '24/7 availability with backup vehicles for peace of mind'
    },
    {
      icon: '🎯',
      title: 'Fixed Pricing',
      description: 'No surge pricing or hidden fees, transparent rates always'
    }
  ]

  const popularRoutes = [
    { from: 'DXB Terminal 3', to: 'Burj Khalifa/Downtown', time: '25 min', price: 'AED 1,350' },
    { from: 'DXB Terminal 1', to: 'Dubai Marina', time: '35 min', price: 'AED 1,550' },
    { from: 'DWC', to: 'Palm Jumeirah', time: '40 min', price: 'AED 1,800' },
    { from: 'AUH', to: 'Dubai Downtown', time: '90 min', price: 'AED 3,800' }
  ]

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
                Airport Transfer Excellence
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Arrive in Unparalleled Luxury
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Airport Transfer
                </motion.button>
                <a href="tel:+971558164922" className="btn-secondary">
                  24/7 Hotline: +971 55 816 4922
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">5,000+</div>
                  <div className="text-sm text-gray-400">Airport Transfers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">24/7</div>
                  <div className="text-sm text-gray-400">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">98%</div>
                  <div className="text-sm text-gray-400">On-Time Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Airport Selector */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Select Your Airport
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
                  <h4 className="text-rolls-gold mb-2">Terminals</h4>
                  <ul className="space-y-1">
                    {airports[selectedAirport as keyof typeof airports].terminals.map((terminal, index) => (
                      <li key={index} className="text-gray-300">{terminal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-rolls-gold mb-2">Transfer Information</h4>
                  <p className="text-gray-300">
                    Distance: {airports[selectedAirport as keyof typeof airports].distance}
                  </p>
                  <p className="text-gray-300">
                    Travel Time: {airports[selectedAirport as keyof typeof airports].transferTime}
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
              Why Choose Our Airport Service?
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
              Transfer Packages
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
                  <p className="text-gray-400 mb-4">Available at: {pkg.airports.join(', ')}</p>
                  <p className="text-gray-400 mb-6">Vehicles: {pkg.vehicles.join(', ')}</p>
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
                    Select Package
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
              Popular Airport Routes
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>From</div>
                  <div>To</div>
                  <div>Duration</div>
                  <div>Starting Price</div>
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
              How Airport Transfer Works
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
                <h3 className="text-lg font-semibold text-white mb-2">Book Online</h3>
                <p className="text-gray-400 text-sm">Choose your vehicle and provide flight details</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Flight Tracking</h3>
                <p className="text-gray-400 text-sm">We monitor your flight for delays or early arrival</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Meet & Greet</h3>
                <p className="text-gray-400 text-sm">Your chauffeur awaits with a name board</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">Luxury Transfer</h3>
                <p className="text-gray-400 text-sm">Relax as we take you to your destination</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Book Your Airport Transfer Now
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience seamless luxury from touchdown to destination. Available 24/7 for all major airports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971558164922" className="btn-primary">
                Call: +971 55 816 4922
              </a>
              <Link href="/booking" className="btn-secondary">
                Online Booking
              </Link>
            </div>
            <p className="text-gray-400 mt-6">
              Free waiting time: 60 minutes for international flights, 30 minutes for domestic
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