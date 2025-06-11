import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function PhantomPage() {
  const features = [
    { icon: '👑', title: 'Magic Carpet Ride', desc: 'The smoothest ride technology in the world' },
    { icon: '🌟', title: 'Starlight Headliner', desc: '1,340 fiber optic lights creating a celestial scene' },
    { icon: '🎭', title: 'Theatre Configuration', desc: 'Rear seats with entertainment screens' },
    { icon: '🔇', title: 'Silent Chamber', desc: 'The quietest car interior ever created' }
  ]

  const specs = {
    engine: '6.75L V12 Twin-Turbo',
    power: '563 HP',
    torque: '900 Nm',
    acceleration: '0-100 km/h in 5.3s',
    topSpeed: '250 km/h',
    seats: '4-5 passengers',
    transmission: '8-Speed Automatic',
    drivetrain: 'Rear-Wheel Drive'
  }

  return (
    <>
      <Head>
        <title>Rolls-Royce Phantom Rental Dubai | Luxury Car Hire UAE</title>
        <meta name="description" content="Rent Rolls-Royce Phantom in Dubai. Experience the pinnacle of luxury with the flagship sedan. Starting from AED 5,800/day. Book now for immediate delivery." />
        <meta name="keywords" content="Rolls Royce Phantom rental Dubai, Phantom hire Dubai, luxury sedan rental Dubai, Rolls Royce Phantom Dubai price, rent Phantom UAE" />
        <link rel="canonical" href="https://rollsroycers.com/fleet/phantom" />
        
        {/* Schema Markup for Car Rental */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Car",
              "name": "Rolls-Royce Phantom",
              "brand": {
                "@type": "Brand",
                "name": "Rolls-Royce"
              },
              "model": "Phantom",
              "vehicleEngine": {
                "@type": "EngineSpecification",
                "name": "6.75L V12 Twin-Turbo"
              },
              "speed": {
                "@type": "QuantitativeValue",
                "value": "250",
                "unitCode": "KMH"
              },
              "offers": {
                "@type": "Offer",
                "price": "5800",
                "priceCurrency": "AED",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Rolls-Royce Dubai"
                }
              }
            })
          }}
        />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-phantom.jpg"
              alt="Rolls-Royce Phantom Dubai"
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
                Rolls-Royce Phantom
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                The Pinnacle of Luxury Motoring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Phantom Now
                </motion.a>
                <Link href="/fleet" className="btn-secondary">
                  View All Models
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Price & Availability */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 5,800</h3>
                    <p className="text-gray-400">Per Day</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 34,800</h3>
                    <p className="text-gray-400">Per Week</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 116,000</h3>
                    <p className="text-gray-400">Per Month</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-green-400 mb-4">✓ Available for immediate delivery</p>
                  <a href="#booking" className="btn-primary">Check Availability</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Phantom Exclusive Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Technical Specifications
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-rolls-black/30 rounded-lg border border-rolls-gold/10"
                  >
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Phantom Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 md:col-span-2">
                <Image
                  src="/images/Rolls-royce-phantom.jpg"
                  alt="Phantom Exterior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/inside-Rolls-Royce.jpg"
                  alt="Phantom Interior"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Rolls-Royce Phantom Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dubai's most prestigious luxury sedan awaits. Book now for immediate delivery to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971558164922" className="btn-primary">
                Call Now: +971 55 816 4922
              </a>
              <a href="#booking" className="btn-secondary">
                Online Booking
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}