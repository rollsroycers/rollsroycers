import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import WeatherRecommendations from '@/components/WeatherRecommendations'
import SEO from '@/components/SEO'

export default function JBRPage() {
  const beachClubs = [
    { name: 'Zero Gravity', type: 'Beach Club', feature: 'VIP Cabanas' },
    { name: 'Nikki Beach', type: 'Luxury Beach Club', feature: 'Valet Service' },
    { name: 'Barasti Beach', type: 'Beach Bar', feature: 'Direct Access' },
    { name: 'Cove Beach', type: 'Day Club', feature: 'Reserved Parking' },
    { name: 'Azure Beach', type: 'Premium Beach', feature: 'VIP Entrance' },
    { name: 'The Beach at JBR', type: 'Public Beach', feature: 'Multiple Access Points' }
  ]

  const restaurants = [
    { name: 'Zuma', cuisine: 'Japanese', location: 'DIFC (10 min)' },
    { name: 'La Petite Maison', cuisine: 'French', location: 'Gate Village' },
    { name: 'STK', cuisine: 'Steakhouse', location: 'JBR Walk' },
    { name: 'Seafire Steakhouse', cuisine: 'American', location: 'Atlantis (15 min)' },
    { name: 'Il Borro', cuisine: 'Italian', location: 'JBR' },
    { name: 'Nobu', cuisine: 'Japanese Fusion', location: 'Atlantis (15 min)' }
  ]

  const experiences = [
    {
      title: 'Sunset Beach Drive',
      description: 'Cruise along JBR beach during golden hour',
      highlights: [
        'Perfect lighting for photos',
        'Beach boulevard cruise',
        'Stop at scenic viewpoints',
        'Professional photography available'
      ],
      bestCar: 'Dawn Convertible',
      price: 'From AED 7,000'
    },
    {
      title: 'Beach Club Circuit',
      description: 'VIP arrivals at Dubai\'s top beach clubs',
      highlights: [
        'Skip-the-line access',
        'Reserved VIP parking',
        'Club table reservations',
        'Chauffeur standby service'
      ],
      bestCar: 'Cullinan',
      price: 'From AED 8,500'
    },
    {
      title: 'Night Life Experience',
      description: 'Evening entertainment in style',
      highlights: [
        'Restaurant valet service',
        'Bar hopping coordination',
        'Late night chauffeur',
        'Safe luxury transport'
      ],
      bestCar: 'Ghost',
      price: 'From AED 6,200'
    }
  ]

  const attractions = [
    { name: 'The Walk JBR', distance: 'On location', type: 'Shopping & Dining' },
    { name: 'Dubai Marina', distance: '5 minutes', type: 'Waterfront District' },
    { name: 'Ain Dubai', distance: '10 minutes', type: 'Observation Wheel' },
    { name: 'Palm Jumeirah', distance: '15 minutes', type: 'Iconic Island' },
    { name: 'Skydive Dubai', distance: '3 minutes', type: 'Adventure Sport' },
    { name: 'Dubai Marina Mall', distance: '7 minutes', type: 'Shopping' }
  ]

  const residences = [
    'Amwaj Suites',
    'Bahar Towers',
    'Rimal Towers',
    'Shams Towers',
    'Murjan Towers',
    'Sadaf Towers'
  ]

  const stats = [
    { number: '300+', label: 'Monthly JBR Deliveries' },
    { number: '10 min', label: 'Beach Arrival Time' },
    { number: '24/7', label: 'Beachside Service' },
    { number: '5 ⭐', label: 'Customer Rating' }
  ]

  return (
    <>
      <SEO pageKey="locations.jbr" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-rolls-black/30 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                JBR Beach Luxury
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Where Beach Life Meets Rolls-Royce Excellence
              </p>
              
              {/* Beach Badge */}
              <div className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <span className="text-2xl">🏖️</span>
                <span className="text-white">Dubai's Premier Beach Destination</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Beach Delivery
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  Beach Experiences
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why JBR */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Rolls-Royce at JBR?
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-rolls-gold mb-2">{stat.number}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Beachfront Paradise</h3>
                <p className="text-gray-400">
                  Direct access to Dubai's most vibrant beach with premium parking at all venues
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍹</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Beach Club VIP</h3>
                <p className="text-gray-400">
                  Skip the lines at exclusive beach clubs with our VIP coordination service
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌅</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Sunset Drives</h3>
                <p className="text-gray-400">
                  Experience magical sunset cruises along the beach boulevard in convertible luxury
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Beach Clubs */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Direct Access to Premium Beach Clubs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {beachClubs.map((club, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{club.name}</h3>
                  <p className="text-rolls-gold text-sm mb-2">{club.type}</p>
                  <p className="text-gray-400 text-sm">✓ {club.feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Exclusive JBR Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">Recommended:</p>
                    <p className="text-rolls-gold font-semibold">{exp.bestCar}</p>
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">{exp.price}</div>
                  <button className="btn-primary w-full">
                    Book Experience
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dining & Entertainment */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Fine Dining Destinations
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>Restaurant</div>
                  <div>Cuisine</div>
                  <div>Location</div>
                </div>
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-3 gap-4 p-4 border-t border-rolls-gold/10"
                  >
                    <div className="text-gray-300">{restaurant.name}</div>
                    <div className="text-rolls-gold">{restaurant.cuisine}</div>
                    <div className="text-gray-400 text-sm">{restaurant.location}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-4">
                Valet parking coordination at all premium restaurants
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Explore Beyond JBR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{attraction.name}</h3>
                  <p className="text-rolls-gold text-sm mb-1">{attraction.distance}</p>
                  <p className="text-gray-400 text-sm">{attraction.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Recommendations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Best Times for Beach Cruising
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Residential Delivery */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              JBR Tower Residents
            </h2>
            <div className="max-w-4xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
              <p className="text-gray-300 text-center mb-8">
                Complimentary delivery to all JBR residential towers including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {residences.map((residence, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-center bg-rolls-black/30 rounded p-3"
                  >
                    <p className="text-white">{residence}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-rolls-gold mt-6">
                + All JBR towers with basement parking access
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Choose Your Beach Companion
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience JBR in Rolls-Royce Style
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From sunrise beach drives to sunset dinner arrivals, make every moment at JBR extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call JBR Team
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                Book Online
              </Link>
            </div>
            
            {/* Location Info */}
            <div className="max-w-2xl mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">JBR Pickup Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-300">
                  <p className="text-rolls-gold mb-1">Beach Access</p>
                  <p>The Walk Main Entrance</p>
                </div>
                <div className="text-gray-300">
                  <p className="text-rolls-gold mb-1">Tower Delivery</p>
                  <p>All JBR Basement Parking</p>
                </div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}