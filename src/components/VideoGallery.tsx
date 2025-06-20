import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface Video {
  id: number
  title: string
  thumbnail: string
  videoUrl: string
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
      id: 1,
      title: t('videoGallery.phantom.title'),
      thumbnail: "/images/Rolls-royce-phantom.jpg",
      videoUrl: "/images/videos/Rolls-royce-phantom.mp4",
      duration: "2:45",
      category: "exterior"
    },
    {
      id: 2,
      title: t('videoGallery.cullinan.title'),
      thumbnail: "/images/Rolls-Royce-Cullinan_.jpg",
      videoUrl: "/images/videos/Rolls-Royce-Cullinan_.mp4",
      duration: "3:12",
      category: "exterior"
    },
    {
      id: 3,
      title: t('videoGallery.interior.title'),
      thumbnail: "/images/inside-Rolls-Royce.jpg",
      videoUrl: "/images/videos/Rolls-royce-phantom.mp4",
      duration: "4:30",
      category: "interior"
    },
    {
      id: 4,
      title: t('videoGallery.dubai.title'),
      thumbnail: "/images/Rolls-royce-dubai.jpg",
      videoUrl: "/images/videos/Rolls-Royce-Cullinan_.mp4",
      duration: "5:00",
      category: "experience"
    },
    {
      id: 5,
      title: t('videoGallery.showroom.title'),
      thumbnail: "/images/Rolls-royce-official.jpg",
      videoUrl: "/images/videos/Rolls-royce-phantom.mp4",
      duration: "6:15",
      category: "tour"
    },
    {
      id: 6,
      title: t('videoGallery.night.title'),
      thumbnail: "/images/Rolls-Royce-black.jpg",
      videoUrl: "/images/videos/Rolls-Royce-Cullinan_.mp4",
      duration: "3:45",
      category: "experience"
    }
  ]

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
                src={playingVideo.videoUrl}
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