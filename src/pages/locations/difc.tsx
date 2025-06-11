import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
// import LocationMap from '@/components/LocationMap' - Component will be created later
// import VehicleCard from '@/components/VehicleCard' - Component will be created later

export default function DIFCLocationPage() {
  const featuredVehicles = [
    {
      id: 'phantom',
      name: 'Rolls-Royce Phantom',
      image: '/images/phantom-main.jpg',
      price: 'AED 5,800',
      features: ['Executive sedan', 'CEO transport', 'Board meetings']
    },
    {
      id: 'ghost',
      name: 'Rolls-Royce Ghost',
      image: '/images/ghost-black-badge-2.jpg',
      price: 'AED 4,800',
      features: ['Business class', 'Client meetings', 'Corporate events']
    },
    {
      id: 'cullinan',
      name: 'Rolls-Royce Cullinan',
      image: '/images/cullinan-side.jpg',
      price: 'AED 6,500',
      features: ['Executive SUV', 'Team transport', 'VIP transfers']
    }
  ]

  const nearbyLandmarks = [
    {
      name: 'DIFC Gate Building',
      distance: '0.1 km',
      time: '1 min',
      description: 'Iconic entrance to the financial district'
    },
    {
      name: 'Emirates Towers',
      distance: '0.5 km',
      time: '2 mins',
      description: 'Prestigious business towers'
    },
    {
      name: 'World Trade Centre',
      distance: '1 km',
      time: '3 mins',
      description: 'Major exhibition and conference venue'
    },
    {
      name: 'Four Seasons DIFC',
      distance: '0.3 km',
      time: '1 min',
      description: 'Luxury business hotel'
    },
    {
      name: 'Ritz-Carlton DIFC',
      distance: '0.4 km',
      time: '2 mins',
      description: 'Premium accommodation for executives'
    }
  ]

  const corporateServices = [
    {
      title: 'Executive Transportation',
      description: 'Professional chauffeur service for C-suite executives',
      features: ['Dedicated driver', 'Flexible scheduling', 'Confidential service']
    },
    {
      title: 'Board Meeting Arrivals',
      description: 'Impressive arrivals for board meetings and presentations',
      features: ['Punctual service', 'Professional appearance', 'Discrete handling']
    },
    {
      title: 'Client Entertainment',
      description: 'Impress clients with luxury transportation',
      features: ['Multiple vehicles', 'Coordinated fleet', 'VIP treatment']
    },
    {
      title: 'Corporate Events',
      description: 'Fleet solutions for conferences and corporate gatherings',
      features: ['Event coordination', 'Bulk bookings', 'Custom branding options']
    }
  ]

  const businessAmenities = [
    'WiFi-enabled vehicles',
    'Privacy partitions',
    'Mobile office setup',
    'Refreshments included',
    'Newspaper service',
    'Charging stations',
    'Conference call capability',
    'Document security'
  ]

  return (
    <>
      <Head>
        <title>Rolls-Royce Rental DIFC Dubai | Corporate Luxury Car Service</title>
        <meta name="description" content="Premium Rolls-Royce rental service in DIFC Dubai. Executive transportation for business professionals. Phantom, Ghost, and Cullinan available for corporate needs." />
        <meta name="keywords" content="Rolls Royce DIFC, Dubai financial center car rental, corporate luxury cars, executive transportation DIFC, business car rental Dubai" />
        <link rel="canonical" href="https://rollsroycers.com/locations/difc" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rolls-Royce Rental DIFC",
              "description": "Corporate luxury car rental in Dubai International Financial Centre",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE",
                "streetAddress": "Dubai International Financial Centre"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2110,
                "longitude": 55.2796
              },
              "openingHours": "Mo-Su 00:00-24:00",
              "priceRange": "AED 4,800 - AED 6,500 per day"
            })
          }}
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/difc-skyline.jpg"
              alt="DIFC Dubai Rolls-Royce"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/50 via-rolls-black/70 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                DIFC Dubai
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Executive Transportation in the Financial District
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Premier Rolls-Royce rental service for Dubai's business elite.
                Perfect for corporate meetings, client entertainment, and executive travel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">500+</p>
                <p className="text-gray-300">Corporate Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">24/7</p>
                <p className="text-gray-300">Executive Service</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">15min</p>
                <p className="text-gray-300">Response Time</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-rolls-gold">100%</p>
                <p className="text-gray-300">Confidential</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Corporate Services in DIFC
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored luxury transportation solutions for the business community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {corporateServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Amenities */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Business-Class Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {businessAmenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-lg p-4 text-center"
                >
                  <p className="text-white">{amenity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Executive Fleet for DIFC
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="aspect-video relative">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                      <p className="text-2xl font-bold text-rolls-gold mb-4">{vehicle.price}</p>
                      <ul className="space-y-2">
                        {vehicle.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <svg className="w-4 h-4 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/fleet/${vehicle.id}`} className="btn-primary w-full mt-4 inline-block text-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Landmarks */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              DIFC Location & Nearby Landmarks
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Business Location</h3>
                <p className="text-gray-300 mb-6">
                  Dubai International Financial Centre (DIFC) is the leading financial hub for the Middle East, 
                  Africa, and South Asia. Our Rolls-Royce rental service provides immediate access to this 
                  prestigious business district.
                </p>
                
                <div className="space-y-4">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{landmark.name}</h4>
                        <span className="text-rolls-gold text-sm">{landmark.time}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{landmark.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{landmark.distance} away</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="h-[500px] relative rounded-lg overflow-hidden"
              >
                {/* Map placeholder - LocationMap component to be implemented */}
                <div className="w-full h-full bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-rolls-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-white font-semibold">DIFC, Dubai</p>
                    <p className="text-gray-400 text-sm mt-2">25.2110°N, 55.2796°E</p>
                    <a
                      href="https://maps.google.com/?q=25.2110,55.2796"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rolls-gold hover:text-white transition-colors mt-4 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Corporate Packages
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Executive</h3>
                <p className="text-4xl font-bold text-rolls-gold mb-4">AED 40,000</p>
                <p className="text-gray-300 mb-6">Monthly Package</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    20 days per month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dedicated chauffeur
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Choice of Ghost/Wraith
                  </li>
                </ul>
                <button className="btn-primary w-full mt-6">Select Package</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-b from-rolls-gold/30 to-rolls-gold/20 border-2 border-rolls-gold rounded-lg p-8 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Chairman</h3>
                <p className="text-4xl font-bold text-rolls-gold mb-4">AED 72,000</p>
                <p className="text-gray-300 mb-6">Monthly Package</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Unlimited usage
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    2 dedicated chauffeurs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full fleet access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority booking
                  </li>
                </ul>
                <button className="btn-primary w-full mt-6">Select Package</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <p className="text-4xl font-bold text-rolls-gold mb-4">Custom</p>
                <p className="text-gray-300 mb-6">Tailored Solution</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multiple vehicles
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fleet management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Corporate branding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Account management
                  </li>
                </ul>
                <button className="btn-secondary w-full mt-6">Contact Us</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              What DIFC Executives Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The Phantom is perfect for board meetings. It creates the right impression and 
                  the service is always impeccable. A true business partner."
                </p>
                <p className="text-white font-semibold">Ahmed Al-Rashid</p>
                <p className="text-gray-400 text-sm">CEO, Emirates Investment Group</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Our corporate package with Rolls-Royce Dubai has elevated our client relationships. 
                  The reliability and prestige are unmatched in the region."
                </p>
                <p className="text-white font-semibold">Sarah Mitchell</p>
                <p className="text-gray-400 text-sm">Managing Partner, Global Law Firm</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Elevate Your Business Image in DIFC
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join Dubai's business elite with our exclusive Rolls-Royce corporate services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Book Corporate Service
                </Link>
                <Link href="/services/corporate" className="btn-secondary">
                  Explore Packages
                </Link>
              </div>
              
              <div className="mt-12 text-gray-400">
                <p>Corporate Hotline: +971 55 816 4922</p>
                <p>Email: corporate@rollsroycers.com</p>
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}