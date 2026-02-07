import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import SEO from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import Script from 'next/script'

export default function GalleryPage() {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')

  const categories = [
    { id: 'all', name: t('gallery.categories.all'), icon: '🌟' },
    { id: 'exterior', name: t('gallery.categories.exterior'), icon: '🚗' },
    { id: 'interior', name: t('gallery.categories.interior'), icon: '🛋️' },
    { id: 'details', name: t('gallery.categories.details'), icon: '💎' },
    { id: 'events', name: t('gallery.categories.events'), icon: '🎭' },
    { id: 'locations', name: t('gallery.categories.locations'), icon: '📍' },
    { id: 'photoshoot', name: t('gallery.categories.photoshoot'), icon: '📸' },
    { id: 'lifestyle', name: t('gallery.categories.lifestyle'), icon: '✨' }
  ]

  const galleryImages = [
    {
        id: 1,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Rolls Royce Extended Wheelbase Phantom',
        image: '/images/_Rolls-Royce_Extended_Wheelbase_Phantom.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 2,
        category: 'exterior',
        vehicle: t('gallery.vehicles.cullinan'),
        title: '2024 Rolls Royce Cullinan Black Badge',
        image: '/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.cullinan')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 3,
        category: 'exterior',
        vehicle: t('gallery.vehicles.cullinan'),
        title: '2024 Rolls Royce Cullinan',
        image: '/images/2024_Rolls-Royce_Cullinan.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.cullinan')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 4,
        category: 'exterior',
        vehicle: t('gallery.vehicles.spectre'),
        title: '2024 Rolls Royce Spectre',
        image: '/images/2024_Rolls-Royce_Spectre.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.spectre')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 5,
        category: 'exterior',
        vehicle: t('gallery.vehicles.ghost'),
        title: '2025 Rolls Royce Ghost Black Badge Idealist',
        image: '/images/2025_Rolls-Royce_Ghost_Black_Badge_Idealist.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.ghost')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 6,
        category: 'exterior',
        vehicle: t('gallery.vehicles.ghost'),
        title: 'Black Rolls Royce Ghost',
        image: '/images/Black_Rolls_Royce_Ghost.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.ghost')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 7,
        category: 'details',
        vehicle: 'Rolls-Royce',
        title: 'Download Rolls Royce Logo Wallpape',
        image: '/images/Download_Rolls_Royce_Logo_wallpape.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.details')}`
    },
    {
        id: 8,
        category: 'interior',
        vehicle: 'Rolls-Royce',
        title: 'Inside Rolls Royce',
        image: '/images/inside-Rolls-Royce.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.interior')}`
    },
    {
        id: 9,
        category: 'lifestyle',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Luxury Cars Like The Rolls Royce Phantom',
        image: '/images/Luxury_cars_like_the_Rolls-Royce_Phantom.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 10,
        category: 'lifestyle',
        vehicle: 'Rolls-Royce',
        title: 'Luxury Rolls Royce',
        image: '/images/Luxury_Rolls_Royce.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 11,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'New Rolls Royce Extended Wheelbase Phantom',
        image: '/images/new_Rolls-Royce_Extended_Wheelbase_Phantom.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 12,
        category: 'interior',
        vehicle: t('gallery.vehicles.ghost'),
        title: 'New Rolls Royce Ghost Interior',
        image: '/images/New_Rolls-Royce_Ghost_interior_.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.ghost')} - ${t('gallery.descriptions.interior')}`
    },
    {
        id: 13,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Phantom Extended',
        image: '/images/Phantom_Extended.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 14,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Oyce Air Port',
        image: '/images/Rolls-oyce-air-port.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 15,
        category: 'exterior',
        vehicle: t('gallery.vehicles.cullinan'),
        title: 'Rolls Royce Cullinan',
        image: '/images/Rolls-Royce_Cullinan_.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.cullinan')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 16,
        category: 'exterior',
        vehicle: t('gallery.vehicles.cullinan'),
        title: 'Rolls Royce Cullinan Majestic Aurora',
        image: '/images/Rolls-Royce_Cullinan_Majestic_Aurora_.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.cullinan')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 17,
        category: 'exterior',
        vehicle: t('gallery.vehicles.cullinan'),
        title: 'Rolls Royce Cullinan SUV 2',
        image: '/images/Rolls-Royce_Cullinan_SUV-2.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.cullinan')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 18,
        category: 'exterior',
        vehicle: t('gallery.vehicles.dawn'),
        title: 'Rolls Royce Dawn Convertible 2',
        image: '/images/Rolls-Royce_Dawn_Convertible-2.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.dawn')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 19,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Dawn',
        image: '/images/Rolls-Royce_Dawn.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 20,
        category: 'details',
        vehicle: t('gallery.vehicles.ghost'),
        title: 'Rolls Royce Ghost Black Badge',
        image: '/images/Rolls-Royce_Ghost_Black_Badge.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.ghost')} - ${t('gallery.descriptions.details')}`
    },
    {
        id: 21,
        category: 'exterior',
        vehicle: t('gallery.vehicles.ghost'),
        title: 'Rolls Royce Ghost 2',
        image: '/images/Rolls-Royce_Ghost-2.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.ghost')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 22,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Rolls Royce Phantom Extended Magnetism',
        image: '/images/Rolls-Royce_Phantom_Extended_Magnetism.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 23,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Rolls Royce Phantom Extended Series II',
        image: '/images/Rolls-Royce_Phantom_Extended_Series_II.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 24,
        category: 'exterior',
        vehicle: t('gallery.vehicles.spectre'),
        title: 'Rolls Royce Spectre',
        image: '/images/Rolls-Royce_Spectre.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.spectre')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 25,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce 2',
        image: '/images/Rolls-Royce-2.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 26,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Black',
        image: '/images/Rolls-Royce-black.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 27,
        category: 'details',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Car Icon',
        image: '/images/Rolls-Royce-car-icon.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.details')}`
    },
    {
        id: 28,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Cullinan',
        image: '/images/Rolls-Royce-Cullinan_.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 29,
        category: 'locations',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Dubai',
        image: '/images/Rolls-royce-dubai.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 30,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Front',
        image: '/images/Rolls-Royce-front.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 31,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Official',
        image: '/images/Rolls-royce-official.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 32,
        category: 'exterior',
        vehicle: t('gallery.vehicles.phantom'),
        title: 'Rolls Royce Phantom',
        image: '/images/Rolls-royce-phantom.jpg',
        description: `${t('gallery.descriptions.premium')} ${t('gallery.vehicles.phantom')} - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 33,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce White',
        image: '/images/Rolls-Royce-white.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 34,
        category: 'exterior',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce With Blan',
        image: '/images/Rolls-royce-with-blan.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.exterior')}`
    },
    {
        id: 35,
        category: 'details',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Logo',
        image: '/images/logo.jpg',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.details')}`
    },
    {
        id: 36,
        category: 'details',
        vehicle: 'Rolls-Royce',
        title: 'Rolls Royce Red Background',
        image: '/images/Rolls-Royce-red-background_.png',
        description: `${t('gallery.descriptions.premium')} Rolls-Royce - ${t('gallery.descriptions.details')}`
    }
  ];

  const videoGallery = [
    {
        id: 1,
        title: t('gallery.videos.millionaire'),
        video: '/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4',
        thumbnail: '/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle-thumb.jpg',
        description: `${t('gallery.videos.experience')} Rolls-Royce`
    },
    {
        id: 2,
        title: t('gallery.videos.mansory'),
        video: '/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan.mp4',
        thumbnail: '/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan-thumb.jpg',
        description: `${t('gallery.videos.experience')} ${t('gallery.vehicles.cullinan')}`
    },
    {
        id: 3,
        title: `Rolls Royce ${t('gallery.vehicles.cullinan')}`,
        video: '/images/videos/Rolls-Royce-Cullinan_.mp4',
        thumbnail: '/images/videos/Rolls-Royce-Cullinan_-thumb.jpg',
        description: `${t('gallery.videos.experience')} ${t('gallery.vehicles.cullinan')}`
    },
    {
        id: 4,
        title: `Rolls Royce ${t('gallery.vehicles.phantom')}`,
        video: '/images/videos/Rolls-royce-phantom.mp4',
        thumbnail: '/images/videos/Rolls-royce-phantom-thumb.jpg',
        description: `${t('gallery.videos.experience')} ${t('gallery.vehicles.phantom')}`
    },
    {
        id: 5,
        title: t('gallery.videos.defines'),
        video: '/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4',
        thumbnail: '/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean-thumb.jpg',
        description: `${t('gallery.videos.experience')} Rolls-Royce`
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setShowVideoModal(true)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setShowVideoModal(false)
    setSelectedVideo('')
  }

  const instagramPosts = [
    { id: 1, image: '/images/instagram-1.jpg', likes: 1234, comments: 56 },
    { id: 2, image: '/images/instagram-2.jpg', likes: 2341, comments: 89 },
    { id: 3, image: '/images/instagram-3.jpg', likes: 3456, comments: 123 },
    { id: 4, image: '/images/instagram-4.jpg', likes: 4567, comments: 234 },
    { id: 5, image: '/images/instagram-5.jpg', likes: 5678, comments: 345 },
    { id: 6, image: '/images/instagram-6.jpg', likes: 6789, comments: 456 }
  ]

  const videoSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Rolls-Royce Dubai Video Gallery",
    "itemListElement": [
      {
        "@type": "VideoObject",
        "position": 1,
        "name": "Luxury Millionaire Aesthetic Lifestyle - Rolls-Royce Dubai",
        "description": "Experience the ultimate luxury lifestyle with Rolls-Royce in Dubai. Premium car rental showcasing the finest automobiles.",
        "thumbnailUrl": "https://rollsroycers.com/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle-thumb.jpg",
        "contentUrl": "https://rollsroycers.com/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4",
        "uploadDate": "2026-01-15",
        "duration": "PT1M30S"
      },
      {
        "@type": "VideoObject",
        "position": 2,
        "name": "Mansory Black Badge Rolls-Royce Cullinan Dubai",
        "description": "Mansory Black Badge Rolls-Royce Cullinan for rent in Dubai. Custom luxury SUV with exclusive modifications.",
        "thumbnailUrl": "https://rollsroycers.com/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan-thumb.jpg",
        "contentUrl": "https://rollsroycers.com/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan.mp4",
        "uploadDate": "2026-01-15",
        "duration": "PT1M"
      },
      {
        "@type": "VideoObject",
        "position": 3,
        "name": "Rolls-Royce Cullinan Rental Dubai",
        "description": "Rolls-Royce Cullinan luxury SUV available for rent in Dubai. Experience the king of SUVs on Dubai roads.",
        "thumbnailUrl": "https://rollsroycers.com/images/videos/Rolls-Royce-Cullinan_-thumb.jpg",
        "contentUrl": "https://rollsroycers.com/images/videos/Rolls-Royce-Cullinan_.mp4",
        "uploadDate": "2026-01-15",
        "duration": "PT1M"
      },
      {
        "@type": "VideoObject",
        "position": 4,
        "name": "Rolls-Royce Phantom Rental Dubai",
        "description": "The flagship Rolls-Royce Phantom for rent in Dubai. The pinnacle of luxury motoring available for daily and chauffeur hire.",
        "thumbnailUrl": "https://rollsroycers.com/images/videos/Rolls-royce-phantom-thumb.jpg",
        "contentUrl": "https://rollsroycers.com/images/videos/Rolls-royce-phantom.mp4",
        "uploadDate": "2026-01-15",
        "duration": "PT1M"
      },
      {
        "@type": "VideoObject",
        "position": 5,
        "name": "Rolls-Royce Defines What Luxury Cars Mean",
        "description": "Discover what defines true luxury with Rolls-Royce. Available for rent in Dubai with chauffeur and self-drive options.",
        "thumbnailUrl": "https://rollsroycers.com/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean-thumb.jpg",
        "contentUrl": "https://rollsroycers.com/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4",
        "uploadDate": "2026-01-15",
        "duration": "PT1M30S"
      }
    ]
  }

  return (
    <Layout>
      <SEO pageKey="other.gallery" />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Rolls-Royce Dubai Photo Gallery",
            "description": "Premium photo gallery showcasing luxury Rolls-Royce vehicles available for rent in Dubai",
            "url": "https://rollsroycers.com/gallery",
            "about": { "@id": "https://rollsroycers.com/#organization" },
            "numberOfItems": galleryImages.length
          }) }}
        />
      </Head>
      <Script id="gallery-video-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemaData) }} />

      <div className="min-h-screen bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-Royce-front.jpg"
              alt="Rolls-Royce Gallery"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {t('gallery.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                {t('gallery.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image.id)}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.vehicle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-gray-800/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('gallery.videoGallery.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoGallery.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleVideoClick(video.video)}
                >
                  <div className="absolute inset-0 bg-black">
                    <video
                      src={video.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause()
                        e.currentTarget.currentTime = 0
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <h3 className="text-white font-semibold">{video.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{t('gallery.instagram.title')}</h2>
            <p className="text-gray-400">{t('gallery.instagram.handle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.image || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title || ''}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-400">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Video Modal */}
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        <WhatsAppButton />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}
