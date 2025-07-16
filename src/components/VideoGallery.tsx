import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface Video {
  id: string
  title: string
  description?: string
  thumbnail: string
  src: string
  duration: string
  category: 'exterior' | 'interior' | 'experience' | 'tour'
}

import { TFunction } from 'next-i18next'

export default function VideoGallery({ t }: { t: TFunction }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null)

  const videos: Video[] = [
    {
      id: 'luxury-lifestyle',
      title: t('videoGallery.videos.luxury.title'),
      description: t('videoGallery.videos.luxury.description'),
      thumbnail: '/images/Luxury_Rolls_Royce.jpg',
      src: '/images/videos/Luxury_Millionaire_Aesthetic_Lifestyle.mp4',
      duration: '2:30',
      category: 'experience'
    },
    {
      id: 'cullinan-showcase',
      title: t('videoGallery.videos.cullinan.title'),
      description: t('videoGallery.videos.cullinan.description'),
      thumbnail: '/images/Rolls-Royce_Cullinan_.jpg',
      src: '/images/videos/Rolls-Royce-Cullinan_.mp4',
      duration: '1:45',
      category: 'exterior'
    },
    {
      id: 'phantom-experience',
      title: t('videoGallery.videos.phantom.title'),
      description: t('videoGallery.videos.phantom.description'),
      thumbnail: '/images/Rolls-Royce_Phantom_Extended_Series_II.jpg',
      src: '/images/videos/Rolls-royce-phantom.mp4',
      duration: '2:15',
      category: 'exterior'
    },
    {
      id: 'black-badge-cullinan',
      title: t('videoGallery.videos.blackBadge.title'),
      description: t('videoGallery.videos.blackBadge.description'),
      thumbnail: '/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg',
      src: '/images/videos/Mansory_Black_Badge_Rolls_Royce_Cullinan.mp4',
      duration: '3:00',
      category: 'exterior'
    },
    {
      id: 'luxury-definition',
      title: t('videoGallery.videos.definition.title'),
      description: t('videoGallery.videos.definition.description'),
      thumbnail: '/images/inside-Rolls-Royce.jpg',
      src: '/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4',
      duration: '1:30',
      category: 'interior'
    }
  ];

  const categories = [
    { id: 'all', name: t('videoGallery.filters.all'), icon: '🎬' },
    { id: 'exterior', name: t('videoGallery.filters.exterior'), icon: '🚗' },
    { id: 'interior', name: t('videoGallery.filters.interior'), icon: '🪑' },
    { id: 'experience', name: t('videoGallery.filters.experience'), icon: '🌟' },
    { id: 'tour', name: t('videoGallery.filters.virtualTour'), icon: '🎥' }
  ]

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{t('videoGallery.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('videoGallery.subtitle')}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-rolls-gold text-rolls-black'
                  : 'bg-rolls-black/50 text-white border border-rolls-gold/30 hover:bg-rolls-gold/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setPlayingVideo(video)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-full p-6 border-2 border-rolls-gold">
                    <svg className="w-12 h-12 text-rolls-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-rolls-black/70 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Player Modal */}
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-rolls-gold transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                src={playingVideo.src}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">{playingVideo.title}</h3>
            </motion.div>
          </motion.div>
        )}

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('virtualShowroom.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('virtualShowroom.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t('virtualShowroom.cta')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}