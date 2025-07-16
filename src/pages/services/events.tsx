import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import PriceCalculator from '@/components/PriceCalculator'
import SEO from '@/components/SEO'

export default function EventsServicePage() {
  const eventTypes = [
    {
      title: 'Gala Dinners',
      description: 'Make a grand entrance at prestigious gala events',
      image: '/images/gala-event.jpg',
      features: [
        'Red carpet arrivals',
        'Coordinated fleet options',
        'Professional chauffeurs in formal attire',
        'VIP valet service'
      ]
    },
    {
      title: 'Product Launches',
      description: 'Elevate your brand with luxury transportation',
      image: '/images/product-launch.jpg',
      features: [
        'Brand coordination',
        'Multiple vehicle arrangements',
        'Media-ready presentation',
        'Timed arrivals'
      ]
    },
    {
      title: 'Film & TV Productions',
      description: 'Premium vehicles for productions and shoots',
      image: '/images/film-production.jpg',
      features: [
        'Flexible scheduling',
        'Multiple takes accommodation',
        'Production insurance coverage',
        'Specialized drivers'
      ]
    },
    {
      title: 'Fashion Shows',
      description: 'Complement haute couture with ultimate luxury',
      image: '/images/fashion-show.jpg',
      features: [
        'Model transportation',
        'VIP guest shuttles',
        'Backstage accessibility',
        'Style coordination'
      ]
    },
    {
      title: 'Award Ceremonies',
      description: 'Arrive like a star at prestigious ceremonies',
      image: '/images/award-ceremony.jpg',
      features: [
        'Celebrity transportation',
        'Paparazzi-ready arrivals',
        'Security coordination',
        'After-party transfers'
      ]
    },
    {
      title: 'Private Parties',
      description: 'Exclusive transportation for intimate gatherings',
      image: '/images/private-party.jpg',
      features: [
        'Birthday celebrations',
        'Anniversary parties',
        'Yacht transfers',
        'Night club arrivals'
      ]
    }
  ]

  const eventPackages = [
    {
      name: 'Single Vehicle',
      price: 'From AED 8,000',
      duration: 'Per Event',
      features: [
        'One Rolls-Royce of choice',
        'Professional chauffeur',
        '4-hour minimum',
        'Red carpet service'
      ]
    },
    {
      name: 'Fleet Package',
      price: 'From AED 24,000',
      duration: 'Per Event',
      features: [
        '3-5 vehicles',
        'Coordinated arrivals',
        'Lead car designation',
        'Event coordinator'
      ]
    },
    {
      name: 'Premium Production',
      price: 'From AED 35,000',
      duration: 'Per Project',
      features: [
        'Unlimited vehicles',
        'Flexible scheduling',
        'Production support',
        'Dedicated account manager'
      ]
    }
  ]

  const pastEvents = [
    {
      event: 'Dubai International Film Festival',
      role: 'Official Transportation Partner',
      vehicles: '12 Rolls-Royce vehicles'
    },
    {
      event: 'Fashion Forward Dubai',
      role: 'VIP Guest Transportation',
      vehicles: '8 vehicles including Phantom & Ghost'
    },
    {
      event: 'Emirates Golf Club Gala',
      role: 'Exclusive Vehicle Provider',
      vehicles: '6 Rolls-Royce Dawn convertibles'
    },
    {
      event: 'Burj Al Arab Private Event',
      role: 'Guest Shuttle Service',
      vehicles: '10 vehicle rotating fleet'
    }
  ]

  const eventFeatures = [
    {
      icon: '🎭',
      title: 'Event Coordination',
      description: 'Dedicated event manager for seamless execution'
    },
    {
      icon: '⏰',
      title: 'Precise Timing',
      description: 'Choreographed arrivals and departures'
    },
    {
      icon: '🎬',
      title: 'Media Ready',
      description: 'Vehicles prepared for photography and filming'
    },
    {
      icon: '👥',
      title: 'Fleet Options',
      description: 'Multiple vehicles for large group transportation'
    },
    {
      icon: '🌟',
      title: 'VIP Treatment',
      description: 'Red carpet service and special arrangements'
    },
    {
      icon: '🔒',
      title: 'Discretion',
      description: 'Complete confidentiality for high-profile events'
    }
  ]

  return (
    <>
      <SEO pageKey="services.events" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/rolls-royce-event.jpg"
              alt="Rolls-Royce Event Service Dubai"
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
                Event Excellence
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Elevate Your Special Occasions with Rolls-Royce
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From red carpet galas to exclusive product launches, make every arrival unforgettable 
                with our premium event transportation service in Dubai.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Book Event Service
                </Link>
                <a href="#packages" className="btn-secondary">
                  View Packages
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Rolls-Royce for Your Event
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Events We Specialize In
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <ul className="space-y-2">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Event Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {eventPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border ${
                    index === 1 ? 'border-rolls-gold border-2' : 'border-rolls-gold/30'
                  } rounded-lg p-8 text-center relative`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-rolls-gold mb-2">{pkg.price}</p>
                  <p className="text-gray-400 mb-6">{pkg.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/booking" 
                    className={index === 1 ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    Select Package
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Trusted by Dubai's Premier Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{event.event}</h3>
                  <p className="text-rolls-gold mb-1">{event.role}</p>
                  <p className="text-gray-400">{event.vehicles}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Process */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Your Event, Perfectly Executed
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Initial Consultation',
                    description: 'Discuss your event requirements, vehicle preferences, and logistics'
                  },
                  {
                    step: '02',
                    title: 'Custom Proposal',
                    description: 'Receive a tailored package with vehicle selection and pricing'
                  },
                  {
                    step: '03',
                    title: 'Event Coordination',
                    description: 'Work with our event manager to plan every detail'
                  },
                  {
                    step: '04',
                    title: 'Vehicle Preparation',
                    description: 'Cars detailed and prepared to perfection for your event'
                  },
                  {
                    step: '05',
                    title: 'Flawless Execution',
                    description: 'Professional chauffeurs deliver exceptional service on event day'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-rolls-gold rounded-full flex items-center justify-center">
                      <span className="text-rolls-black font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-12"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl text-gray-300 mb-6 italic">
                  "The Rolls-Royce fleet made our product launch absolutely spectacular. 
                  The coordination was flawless and our guests were thoroughly impressed. 
                  It added the perfect touch of luxury to our event."
                </p>
                <p className="text-xl text-white font-semibold">Alexandra Chen</p>
                <p className="text-gray-400">Marketing Director, Luxury Fashion House</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Event Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: num * 0.05 }}
                  className="aspect-square relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/images/event-gallery-8.jpg`}
                    alt={`Event ${num}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="text-rolls-gold hover:text-white transition-colors">
                View Full Gallery →
              </Link>
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
                Make Your Event Unforgettable
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how Rolls-Royce can elevate your next special occasion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Start Planning Your Event
                </Link>
                <a
                  href="https://wa.me/971558164922?text=I'm interested in Rolls-Royce event services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Consultation
                </a>
              </div>
              
              <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">500+</p>
                  <p className="text-gray-400">Events Serviced</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">98%</p>
                  <p className="text-gray-400">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">24/7</p>
                  <p className="text-gray-400">Event Support</p>
                </div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","services"])),
    },
  }
}