import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import Hero from '@/components/Hero'
import Fleet from '@/components/Fleet'
import Services from '@/components/Services'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import InstagramFeed from '@/components/InstagramFeed'
import WhatsAppButton from '@/components/WhatsAppButton'
import SpecialOffers from '@/components/SpecialOffers'
import FAQ from '@/components/FAQ'
import AvailabilityCalendar from '@/components/AvailabilityCalendar'
import ComparisonTool from '@/components/ComparisonTool'
import VideoGallery from '@/components/VideoGallery'
import TestimonialSubmission from '@/components/TestimonialSubmission'
import LoyaltyProgram from '@/components/LoyaltyProgram'
import PersonalizedOffers from '@/components/PersonalizedOffers'
import TripPlanner from '@/components/TripPlanner'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'

export default function Home() {
  const { t, i18n } = useTranslation('common')
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')

  // Helper function to ensure array safety
  const ensureArray = (arr: any): any[] => {
    return Array.isArray(arr) ? arr : [];
  };

  const featuredServices = ensureArray([
    {
      title: t('services.wedding.title'),
      description: t('services.wedding.description'),
      image: '/images/Rolls-royce-with-blan.jpg',
      href: '/services/wedding'
    },
    {
      title: t('services.corporate.title'),
      description: t('services.corporate.description'),
      image: '/images/Black_Rolls_Royce_Ghost.jpg',
      href: '/services/corporate'
    },
    {
      title: t('services.airport.title'),
      description: t('services.airport.description'),
      image: '/images/Rolls-oyce-air-port.jpg',
      href: '/services/airport-transfer'
    },
    {
      title: t('services.tours.title'),
      description: t('services.tours.description'),
      image: '/images/Rolls-royce-dubai.jpg',
      href: '/services/tours'
    }
  ]);

  const videoShowcase = ensureArray([
    {
      title: t('videoGallery.lifestyle.title'),
      thumbnail: '/images/Rolls-royce-official.jpg',
      video: '/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4',
      duration: '0:45'
    },
    {
      title: t('videoGallery.mansory.title'),
      thumbnail: '/images/Rolls-Royce-Cullinan_.jpg',
      video: '/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan.mp4',
      duration: '1:02'
    },
    {
      title: t('videoGallery.defining.title'),
      thumbnail: '/images/Rolls-Royce-black.jpg',
      video: '/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4',
      duration: '0:58'
    },
    {
      title: t('videoGallery.experience.title'),
      thumbnail: '/images/Rolls-royce-phantom.jpg',
      video: '/images/videos/Rolls-royce-phantom.mp4',
      duration: '1:15'
    }
  ]);

  const latestTestimonials = ensureArray([
    {
      name: t('reviews.review1.name'),
      location: t('reviews.review1.nationality'),
      rating: 5,
      review: t('reviews.review1.review').split('"')[1] || t('reviews.review1.review'),
      image: '/images/reviews/ahmed.webp'
    },
    {
      name: t('reviews.review10.name'),
      location: t('reviews.review10.nationality'),
      rating: 5,
      review: t('reviews.review10.review').split('"')[1] || t('reviews.review10.review'),
      image: '/images/reviews/Wang-Jun_.jpg'
    },
    {
      name: t('reviews.review2.name'),
      location: t('reviews.review2.nationality'),
      rating: 5,
      review: t('reviews.review2.review').split('"')[1] || t('reviews.review2.review'),
      image: '/images/reviews/Dmitry-Ivanov.jpg'
    }
  ]);

  const stats = ensureArray([
    { number: '5000+', label: t('home.stats.happyCustomers') },
    { number: '5', label: t('home.stats.luxuryModels') },
    { number: '24/7', label: t('home.stats.availableService') },
    { number: '100%', label: t('home.stats.satisfactionRate') }
  ]);

  return (
    <>
      <SEO pageKey="home" />
      <GEOOptimizer
        pageKey="home"
        title="Rent Rolls-Royce Dubai 2026"
        description="Premium Rolls-Royce rental service in Dubai from AED 3,800/day. Phantom, Ghost, Cullinan, Dawn, Wraith with professional chauffeur."
        entityType="CarRentalBusiness"
        primaryTopic="Rolls-Royce Rental Dubai"
        contentSummary="Rolls Roycers Dubai is the #1 luxury Rolls-Royce car rental service in Dubai, UAE. Fleet includes Phantom, Ghost, Cullinan, Dawn, and Wraith. Prices start from AED 3,800/day with professional chauffeur. Available 24/7 with free delivery across Dubai."
        facts={[
          'Rolls-Royce Ghost rental from AED 3,800/day',
          'Rolls-Royce Phantom rental from AED 5,800/day',
          'Rolls-Royce Cullinan SUV rental from AED 6,500/day',
          'Professional chauffeur included in all rentals',
          '24/7 availability with 15-minute delivery across Dubai',
          'Over 1,200 five-star reviews',
          'Serving Dubai since 2010'
        ]}
        pricing={{
          currency: 'AED',
          items: [
            { name: 'Rolls-Royce Ghost', price: '3800', unit: 'DAY' },
            { name: 'Rolls-Royce Wraith', price: '5000', unit: 'DAY' },
            { name: 'Rolls-Royce Dawn', price: '5500', unit: 'DAY' },
            { name: 'Rolls-Royce Phantom', price: '5800', unit: 'DAY' },
            { name: 'Rolls-Royce Cullinan', price: '6500', unit: 'DAY' }
          ]
        }}
        howTo={{
          name: 'How to Rent a Rolls-Royce in Dubai',
          steps: [
            { name: 'Choose Your Model', text: 'Browse our fleet of Phantom, Ghost, Cullinan, Dawn, and Wraith models.' },
            { name: 'Select Date & Duration', text: 'Pick your rental dates. Hourly, daily, weekly, and monthly options available.' },
            { name: 'Book Online or Call', text: 'Book instantly at rollsroycers.com or call/WhatsApp +971558164922.' },
            { name: 'Enjoy Free Delivery', text: 'We deliver your Rolls-Royce to any location in Dubai within 15-30 minutes.' }
          ]
        }}
      />
      <EntitySchema pageType="home" />

      <Layout>
        <Hero />
        
        {/* Video Showcase */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('home.video.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('home.video.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {videoShowcase.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    setSelectedVideo(video.video)
                    setShowVideoModal(true)
                  }}
                >
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-rolls-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-rolls-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mt-3 group-hover:text-rolls-gold transition-colors">
                    {video.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rolls-gold mb-1 sm:mb-2">{stat.number}</p>
                  <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Fleet t={t} />
        
        {/* Featured Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
              {t('home.premiumServices.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="group block bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden hover:border-rolls-gold/40 transition-all"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rolls-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-primary">
                {t('home.premiumServices.viewAll')}
              </Link>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Latest Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('reviews.title')}
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white text-xl ml-2">{t('reviews.rating')} (500+ {t('reviews.verified')})</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {latestTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.review}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/testimonials" className="btn-secondary">
                {t('reviews.readMore')}
              </Link>
            </div>
          </div>
        </section>

        <About />
        
        {/* Quick Links to New Pages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('home.explore.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/gallery" className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all text-center group">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{t('home.explore.gallery.title')}</h3>
                <p className="text-gray-400 text-sm mt-2">{t('home.explore.gallery.subtitle')}</p>
              </Link>
              
              <Link href="/faq" className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all text-center group">
                <div className="text-4xl mb-3">❓</div>
                <h3 className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{t('home.explore.faq.title')}</h3>
                <p className="text-gray-400 text-sm mt-2">{t('home.explore.faq.subtitle')}</p>
              </Link>
              
              <Link href="/blog" className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all text-center group">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{t('home.explore.blog.title')}</h3>
                <p className="text-gray-400 text-sm mt-2">{t('home.explore.blog.subtitle')}</p>
              </Link>
              
              <Link href="/compare/rolls-royce-vs-bentley" className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all text-center group">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{t('home.explore.compare.title')}</h3>
                <p className="text-gray-400 text-sm mt-2">{t('home.explore.compare.subtitle')}</p>
              </Link>
            </div>
          </div>
        </section>

        <Reviews />
        <FAQ />
        <SpecialOffers />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('common.readyToExperience')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('common.bookYourRollsRoyce')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/booking" className="btn-primary touch-action-manipulation">
                  {t('common.bookNow')}
                </Link>
                <Link href="/pricing" className="btn-secondary touch-action-manipulation">
                  {t('common.viewPricing')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
        <InstagramFeed />
        
        {/* Video Modal */}
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-rolls-gold transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}

        <WhatsAppButton />
        
        {/* Additional Components */}
        <AvailabilityCalendar />
        <ComparisonTool />
        <VideoGallery t={t} />
        <TestimonialSubmission />
        <LoyaltyProgram />
        <PersonalizedOffers />
        <TripPlanner />
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