import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'

export default function DowntownDubaiPage() {
  const landmarks = [
    { name: 'Burj Khalifa', type: 'Iconic Tower', distance: '2 min' },
    { name: 'Dubai Mall', type: 'Shopping', distance: '3 min' },
    { name: 'Dubai Fountain', type: 'Attraction', distance: '3 min' },
    { name: 'Souk Al Bahar', type: 'Shopping', distance: '5 min' },
    { name: 'Dubai Opera', type: 'Culture', distance: '5 min' },
    { name: 'DIFC', type: 'Business', distance: '7 min' }
  ]

  const hotels = [
    'Armani Hotel Dubai',
    'Address Downtown',
    'Palace Downtown',
    'Vida Downtown',
    'Manzil Downtown',
    'Rove Downtown',
    'Sofitel Dubai Downtown',
    'The Address Sky View'
  ]

  const experiences = [
    {
      title: 'Burj Khalifa VIP Experience',
      description: 'Arrive in style at the world\'s tallest building',
      features: [
        'VIP entrance access',
        'Professional photography',
        'Sunset timing recommendations',
        'Reserved parking arrangements'
      ],
      recommended: 'Phantom or Ghost'
    },
    {
      title: 'Dubai Mall Shopping Tour',
      description: 'Luxury shopping with dedicated chauffeur service',
      features: [
        'VIP valet parking',
        'Shopping assistance',
        'Package storage in vehicle',
        'Multi-stop coordination'
      ],
      recommended: 'Cullinan SUV'
    },
    {
      title: 'Business District Circuit',
      description: 'Seamless corporate transportation in Downtown',
      features: [
        'DIFC to Downtown routes',
        'Meeting scheduling support',
        'Mobile office features',
        'Confidential environment'
      ],
      recommended: 'Ghost'
    }
  ]

  const routes = [
    {
      name: 'Fountain Show Circuit',
      stops: ['Dubai Mall Valet', 'Souk Al Bahar', 'Palace Hotel', 'Address Fountain Views'],
      duration: '30 minutes',
      bestTime: 'Evening (6-10 PM)'
    },
    {
      name: 'Architecture Tour',
      stops: ['Burj Khalifa', 'Dubai Opera', 'ICD Brookfield', 'Museum of the Future'],
      duration: '45 minutes',
      bestTime: 'Golden Hour'
    },
    {
      name: 'Luxury Dining Route',
      stops: ['At.mosphere', 'Zuma', 'La Petite Maison', 'Nobu'],
      duration: '20 minutes between venues',
      bestTime: 'Dinner Service'
    }
  ]

  const testimonials = [
    {
      name: 'Abdullah Al Rashid',
      location: 'Downtown Resident',
      text: 'Living in Downtown, I use their Ghost for all my business meetings. The convenience of having a Rolls-Royce ready within minutes is unmatched.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      location: 'French Tourist',
      text: 'We booked the Dawn for our anniversary dinner at At.mosphere. The chauffeur knew exactly where to stop for the best photos with Burj Khalifa.',
      rating: 5
    },
    {
      name: 'David Chen',
      location: 'Business Traveler',
      text: 'Stayed at Armani Hotel and used their Phantom service daily. Perfect for DIFC meetings and evening entertainment.',
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>Rolls-Royce Rental Downtown Dubai | Burj Khalifa Area Luxury Cars</title>
        <meta name="description" content="Rent Rolls-Royce in Downtown Dubai. Free delivery to Burj Khalifa, Dubai Mall, DIFC. Experience luxury car rental in Dubai's premier district. Book now!" />
        <meta name="keywords" content="Rolls Royce rental Downtown Dubai, Burj Khalifa car rental, Dubai Mall luxury car, Downtown Dubai chauffeur, DIFC Rolls Royce" />
        <link rel="canonical" href="https://rollsroycers.com/locations/downtown-dubai" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rolls-Royce Downtown Dubai",
              "description": "Luxury Rolls-Royce rental service in Downtown Dubai",
              "image": "/images/Rolls-Royce-black.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Downtown Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE",
                "streetAddress": "Mohammed Bin Rashid Boulevard"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.1972",
                "longitude": "55.2744"
              },
              "openingHours": "Mo-Su 00:00-24:00",
              "telephone": "+971558164922",
              "priceRange": "AED 5,500 - AED 8,000 per day",
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Downtown Dubai"
                },
                {
                  "@type": "Place", 
                  "name": "Business Bay"
                },
                {
                  "@type": "Place",
                  "name": "DIFC"
                }
              ]
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
                Downtown Dubai Excellence
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Luxury Car Rental at the Heart of Dubai
              </p>
              
              {/* Location Highlight */}
              <div className="inline-flex items-center gap-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Burj Khalifa District</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Downtown Delivery
                </motion.button>
                <a href="#experiences" className="btn-secondary">
                  Explore Experiences
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Downtown Advantages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Rolls-Royce in Downtown Dubai?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Central Location</h3>
                <p className="text-gray-400">
                  Minutes from every major attraction and business district
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">VIP Access</h3>
                <p className="text-gray-400">
                  Priority entrance to Dubai Mall, Burj Khalifa, and hotels
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">10-Min Delivery</h3>
                <p className="text-gray-400">
                  Fastest response time in Downtown area
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Concierge Service</h3>
                <p className="text-gray-400">
                  Restaurant bookings, event tickets, and local insights
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Landmark Access */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Direct Access to Downtown Landmarks
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">{landmark.name}</h3>
                      <span className="text-rolls-gold text-sm">{landmark.distance}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{landmark.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiences" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Curated Downtown Experiences
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
                    {exp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-rolls-gold/20">
                    <p className="text-sm text-gray-400">Recommended Vehicle:</p>
                    <p className="text-rolls-gold font-semibold">{exp.recommended}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel Partnerships */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Partner Hotels in Downtown
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <p className="text-gray-300 mb-6 text-center">
                  Complimentary delivery and pickup service to all Downtown Dubai hotels
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-center"
                    >
                      <p className="text-white text-sm">{hotel}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-rolls-gold mt-6">
                  + All residential towers and serviced apartments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scenic Routes */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Signature Downtown Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {routes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-4">{route.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Route Stops:</p>
                      <ul className="space-y-1">
                        {route.stops.map((stop, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-rolls-gold rounded-full mr-2"></span>
                            {stop}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-rolls-gold/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{route.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">Best Time:</span>
                        <span className="text-white">{route.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Downtown Dubai Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-rolls-gold text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Available Fleet in Downtown
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Downtown Dubai in Ultimate Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              10-minute delivery to any Downtown location. VIP access to all major attractions included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call Downtown Team
              </motion.a>
              <Link href="/booking" className="btn-secondary">
                Book Online Now
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">1,000+</div>
                <div className="text-sm text-gray-400">Downtown Deliveries</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">10 min</div>
                <div className="text-sm text-gray-400">Average Delivery</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
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