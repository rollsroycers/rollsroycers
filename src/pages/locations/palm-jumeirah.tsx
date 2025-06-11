import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import WeatherRecommendations from '@/components/WeatherRecommendations'

export default function PalmJumeirahPage() {
  const luxuryHotels = [
    { name: 'Atlantis The Palm', category: '5-Star Resort', feature: 'Valet Service' },
    { name: 'One&Only The Palm', category: 'Ultra-Luxury', feature: 'Private Beach' },
    { name: 'Waldorf Astoria', category: '5-Star Hotel', feature: 'VIP Entrance' },
    { name: 'FIVE Palm Jumeirah', category: 'Beach Resort', feature: 'Beach Club' },
    { name: 'Anantara The Palm', category: 'Resort & Spa', feature: 'Lagoon Access' },
    { name: 'W Dubai - The Palm', category: 'Lifestyle Hotel', feature: 'Rooftop Bar' }
  ]

  const attractions = [
    {
      name: 'The Pointe',
      description: 'Waterfront dining and entertainment',
      distance: '5 min from Atlantis',
      bestTime: 'Evening for fountain shows'
    },
    {
      name: 'Nakheel Mall',
      description: 'Premium shopping destination',
      distance: '10 min drive',
      bestTime: 'Afternoon shopping'
    },
    {
      name: 'Palm West Beach',
      description: 'Pristine beach with luxury amenities',
      distance: '15 min drive',
      bestTime: 'Sunset hours'
    },
    {
      name: 'The View at The Palm',
      description: '360° observation deck',
      distance: '8 min drive',
      bestTime: 'Golden hour photography'
    }
  ]

  const drivingRoutes = [
    {
      name: 'Palm Crescent Drive',
      description: 'Atlantis → Crescent Road → Luxury Villas → Return',
      highlights: ['Ocean views', 'Exclusive villas', 'Sunset spots'],
      duration: '30 minutes',
      bestCar: 'Dawn Convertible'
    },
    {
      name: 'Full Palm Circuit',
      description: 'Complete loop around Palm Jumeirah',
      highlights: ['All hotels', 'Beach clubs', 'Marina views'],
      duration: '45 minutes',
      bestCar: 'Phantom'
    },
    {
      name: 'Night Lights Tour',
      description: 'Evening drive with illuminated landmarks',
      highlights: ['Atlantis lights', 'The Pointe fountains', 'City skyline'],
      duration: '40 minutes',
      bestCar: 'Ghost'
    }
  ]

  const exclusiveExperiences = [
    {
      title: 'Beach Club Arrival',
      description: 'Make a grand entrance at exclusive beach clubs',
      includes: [
        'VIP parking coordination',
        'Beach club reservations',
        'Photographer arrangements',
        'Sunset timing optimization'
      ],
      price: 'From AED 8,000'
    },
    {
      title: 'Atlantis Experience',
      description: 'Complete luxury package at Atlantis The Palm',
      includes: [
        'Hotel valet service',
        'Aquaventure access',
        'Restaurant bookings',
        'Chauffeur standby service'
      ],
      price: 'From AED 9,500'
    },
    {
      title: 'Villa Collection Service',
      description: 'Exclusive service for Palm villa residents',
      includes: [
        'Monthly packages available',
        'Dedicated account manager',
        'Multiple vehicle options',
        '24/7 availability'
      ],
      price: 'From AED 12,000'
    }
  ]

  const stats = [
    { number: '500+', label: 'Palm Deliveries Monthly' },
    { number: '15 min', label: 'Average Delivery Time' },
    { number: '24/7', label: 'Concierge Service' },
    { number: '95%', label: 'Client Satisfaction' }
  ]

  return (
    <>
      <Head>
        <title>Rolls-Royce Rental Palm Jumeirah Dubai | Luxury Cars at The Palm</title>
        <meta name="description" content="Premium Rolls-Royce rental in Palm Jumeirah Dubai. Free delivery to Atlantis, luxury hotels, and villas. Experience The Palm in ultimate style with our fleet." />
        <meta name="keywords" content="Rolls Royce Palm Jumeirah, luxury car rental Palm Dubai, Atlantis car rental, Palm Jumeirah chauffeur service, villa car rental Dubai" />
        <link rel="canonical" href="https://rollsroycers.com/locations/palm-jumeirah" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rolls-Royce Palm Jumeirah",
              "description": "Luxury Rolls-Royce rental service in Palm Jumeirah Dubai",
              "image": "/images/Rolls-Royce-white.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palm Jumeirah",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.1124",
                "longitude": "55.1390"
              },
              "openingHours": "Mo-Su 00:00-24:00",
              "telephone": "+971558164922",
              "priceRange": "AED 5,500 - AED 8,500 per day"
            })
          }}
        />
      </Head>

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
              <source src="/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4" type="video/mp4" />
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
                Palm Jumeirah Luxury
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Experience The Palm in Rolls-Royce Excellence
              </p>
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">The 8th Wonder of the World</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Palm Delivery
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  Exclusive Experiences
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Palm Jumeirah */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Rolls-Royce at The Palm?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏖️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Beach Paradise</h3>
                <p className="text-gray-400">
                  Perfect for beach club arrivals and sunset drives along pristine coastlines
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Iconic Hotels</h3>
                <p className="text-gray-400">
                  Direct access to Atlantis and world-class resorts with VIP valet service
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Exclusive Villas</h3>
                <p className="text-gray-400">
                  Serving Palm's elite villa community with personalized luxury service
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Luxury Hotels */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Partner Hotels & Resorts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {luxuryHotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{hotel.name}</h3>
                  <p className="text-rolls-gold text-sm mb-2">{hotel.category}</p>
                  <p className="text-gray-400 text-sm">✓ {hotel.feature}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              Complimentary pickup and delivery to all Palm Jumeirah hotels and residences
            </p>
          </div>
        </section>

        {/* Driving Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Scenic Palm Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {drivingRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-3">{route.name}</h3>
                  <p className="text-gray-300 mb-4">{route.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Route Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {route.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-rolls-gold/10 text-rolls-gold px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-rolls-gold/10 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{route.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Best Car:</span>
                      <span className="text-rolls-gold">{route.bestCar}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Exclusive Palm Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {exclusiveExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">{exp.title}</h3>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-rolls-gold mb-4">{exp.price}</div>
                  <button className="btn-primary w-full">
                    Book Experience
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Palm Attractions Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{attraction.name}</h3>
                  <p className="text-gray-300 mb-3">{attraction.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">
                      <span className="text-rolls-gold">Distance:</span> {attraction.distance}
                    </p>
                    <p className="text-gray-400">
                      <span className="text-rolls-gold">Best Time:</span> {attraction.bestTime}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Recommendations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Best Times to Cruise The Palm
            </h2>
            <WeatherRecommendations />
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Choose Your Palm Companion
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience The Palm in Ultimate Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From Atlantis arrivals to sunset beach drives, make every moment on The Palm unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call Palm Concierge
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                Book Online Now
              </Link>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p className="text-white text-sm">Free Villa Delivery</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className="text-white text-sm">15 Min Response</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-white text-sm">24/7 Support</p>
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
