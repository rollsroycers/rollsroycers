import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function ToursServicePage() {
  const tourPackages = [
    {
      title: 'Dubai City Tour',
      duration: '4 Hours',
      price: 'AED 5,500',
      image: '/images/Rolls-royce-dubai.jpg',
      highlights: [
        'Burj Khalifa photo stop',
        'Dubai Mall visit',
        'Palm Jumeirah drive',
        'Burj Al Arab viewing',
        'Dubai Marina cruise'
      ],
      description: 'Experience Dubai\'s iconic landmarks in ultimate luxury'
    },
    {
      title: 'Desert Safari Luxury',
      duration: '6 Hours',
      price: 'AED 8,500',
      image: '/images/Rolls-Royce_Cullinan_.jpg',
      highlights: [
        'Private desert experience',
        'Sunset photography',
        'Gourmet dinner setup',
        'Falconry demonstration',
        'Stargazing session'
      ],
      description: 'Combine desert adventure with Rolls-Royce elegance'
    },
    {
      title: 'Abu Dhabi Day Trip',
      duration: '8 Hours',
      price: 'AED 12,000',
      image: '/images/Rolls-Royce-white.jpg',
      highlights: [
        'Sheikh Zayed Mosque',
        'Emirates Palace',
        'Louvre Abu Dhabi',
        'Corniche drive',
        'Yas Island visit'
      ],
      description: 'Luxury journey to the UAE capital'
    },
    {
      title: 'East Coast Explorer',
      duration: '10 Hours',
      price: 'AED 15,000',
      image: '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
      highlights: [
        'Fujairah Fort',
        'Khorfakkan Beach',
        'Mountain scenery',
        'Traditional markets',
        'Coastal dining'
      ],
      description: 'Scenic mountain and coastal adventure'
    },
    {
      title: 'Dubai Night Tour',
      duration: '3 Hours',
      price: 'AED 4,500',
      image: '/images/Black_Rolls_Royce_Ghost.jpg',
      highlights: [
        'Illuminated skyline',
        'Dubai Fountain show',
        'Night photography',
        'Rooftop lounges',
        'City lights cruise'
      ],
      description: 'See Dubai sparkle under the stars'
    },
    {
      title: 'Heritage & Culture',
      duration: '5 Hours',
      price: 'AED 6,500',
      image: '/images/Rolls-royce-phantom.jpg',
      highlights: [
        'Dubai Museum',
        'Gold & Spice Souks',
        'Al Fahidi District',
        'Traditional Abra ride',
        'Cultural exhibitions'
      ],
      description: 'Discover Dubai\'s rich heritage in style'
    }
  ]

  const customTourOptions = [
    {
      title: 'Romance Package',
      features: [
        'Sunset beach drive',
        'Private dinner setup',
        'Champagne service',
        'Rose petals decoration',
        'Professional photographer'
      ]
    },
    {
      title: 'VIP Shopping Tour',
      features: [
        'Personal shopper',
        'Exclusive boutiques',
        'Private showrooms',
        'Luxury mall access',
        'Concierge service'
      ]
    },
    {
      title: 'Adventure Seeker',
      features: [
        'Helicopter tour combo',
        'Yacht charter option',
        'Desert activities',
        'Water sports',
        'Extreme experiences'
      ]
    }
  ]

  const includedAmenities = [
    'Professional chauffeur guide',
    'Complimentary refreshments',
    'WiFi connectivity',
    'Photography assistance',
    'Multilingual service',
    'Flexible itinerary',
    'VIP access where applicable',
    'Travel insurance'
  ]

  const tourHighlights = [
    {
      stat: '5000+',
      label: 'Tours Completed'
    },
    {
      stat: '4.9/5',
      label: 'Average Rating'
    },
    {
      stat: '50+',
      label: 'Destinations'
    },
    {
      stat: '10',
      label: 'Languages'
    }
  ]

  const tourGuideLanguages = [
    'English', 'Arabic', 'French', 'German', 
    'Spanish', 'Italian', 'Russian', 'Chinese', 
    'Japanese', 'Hindi'
  ]

  return (
    <>
      <SEO pageKey="services.tours" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-front.jpg"
              alt="Rolls-Royce Tours Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/40 via-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Discover Dubai in Style
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Luxury Tours with Rolls-Royce
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the best of Dubai and beyond from the comfort of a Rolls-Royce. 
                Our curated tours combine iconic destinations with unparalleled luxury.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Book Your Tour
                </Link>
                <a href="#packages" className="btn-secondary">
                  Explore Tours
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tourHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-rolls-gold">{highlight.stat}</p>
                  <p className="text-gray-300">{highlight.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Signature Tour Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tourPackages.map((tour, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group hover:border-rolls-gold/40 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-xl">{tour.title}</p>
                      <p className="text-rolls-gold">{tour.duration} • {tour.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{tour.description}</p>
                    <h4 className="text-white font-semibold mb-3">Tour Highlights:</h4>
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link href="/booking" className="btn-primary w-full text-center">
                      Book This Tour
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Tours */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Create Your Perfect Tour
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Design a bespoke tour experience tailored to your interests and preferences
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {customTourOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{option.title}</h3>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/booking" className="btn-secondary">
                Design Custom Tour
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Included in Every Tour
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {includedAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-rolls-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{amenity}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tour Process */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Choose Your Experience',
                    description: 'Select from our signature tours or create a custom itinerary'
                  },
                  {
                    step: '2',
                    title: 'Select Your Rolls-Royce',
                    description: 'Pick the perfect vehicle from our luxury fleet'
                  },
                  {
                    step: '3',
                    title: 'Personalize Details',
                    description: 'Add special requests, preferred language, and timing'
                  },
                  {
                    step: '4',
                    title: 'Enjoy Your Journey',
                    description: 'Relax as our expert chauffeur guides you through Dubai'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-rolls-gold rounded-full flex items-center justify-center">
                      <span className="text-rolls-black font-bold text-lg">{item.step}</span>
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

        {/* Languages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Multilingual Tour Guides
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Our professional chauffeur-guides speak multiple languages to ensure 
              a comfortable and informative experience
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {tourGuideLanguages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-full px-6 py-3"
                >
                  <p className="text-white">{language}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Guest Experiences
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
                  "The Dubai city tour in the Phantom was extraordinary. Our guide was knowledgeable, 
                  the car was immaculate, and we felt like royalty throughout. Highly recommended!"
                </p>
                <p className="text-white font-semibold">James & Emily Thompson</p>
                <p className="text-gray-400 text-sm">London, UK</p>
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
                  "تجربة لا تُنسى! الجولة في دبي بسيارة رولز رويس كانت مذهلة. 
                  المرشد كان يتحدث العربية بطلاقة والخدمة كانت ممتازة."
                </p>
                <p className="text-white font-semibold">محمد الزهراني</p>
                <p className="text-gray-400 text-sm">الرياض، السعودية</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Can we customize the tour itinerary?',
                  a: 'Absolutely! All our tours can be customized to match your interests and schedule.'
                },
                {
                  q: 'Are tours suitable for children?',
                  a: 'Yes, our tours are family-friendly. We provide child seats upon request.'
                },
                {
                  q: 'What about pickup and drop-off?',
                  a: 'We offer complimentary pickup and drop-off from any location in Dubai.'
                },
                {
                  q: 'Can we stop for photos during the tour?',
                  a: 'Of course! Photo stops are encouraged and our chauffeurs know the best spots.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Begin Your Luxury Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover Dubai's wonders from the comfort of a Rolls-Royce
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Book Your Tour Now
                </Link>
                <a
                  href="https://wa.me/971558164922?text=I want to book a Rolls-Royce tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Inquiry
                </a>
              </div>
              
              <div className="mt-12 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Special Offer</h3>
                <p className="text-rolls-gold text-xl mb-2">20% Off Desert Safari Tours</p>
                <p className="text-gray-300">Book before month end and save on our luxury desert experience</p>
                <p className="text-gray-400 text-sm mt-4">Terms and conditions apply</p>
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