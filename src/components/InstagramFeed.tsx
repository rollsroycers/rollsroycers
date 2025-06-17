import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  hashtags: string[]
  carModel?: string
  location?: string
}

export default function InstagramFeed() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null)

  // Simulated Instagram posts
  const posts: InstagramPost[] = [
    {
      id: '1',
      image: '/images/Rolls-royce-dubai.jpg',
      caption: t('loyalty.tiers.silver.instagram.post1'),
      likes: 1234,
      hashtags: ['#RollsRoyceDubai', '#LuxuryLifestyle', '#DubaiLife'],
      carModel: 'Phantom',
      location: 'Burj Khalifa, Dubai'
    },
    {
      id: '2',
      image: '/images/Rolls-Royce-white.jpg',
      caption: t('loyalty.tiers.silver.instagram.post2'),
      likes: 987,
      hashtags: ['#RollsRoyceDawn', '#ConvertibleLife', '#DubaiSunset'],
      carModel: 'Dawn',
      location: 'Jumeirah Beach, Dubai'
    },
    {
      id: '3',
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      caption: t('loyalty.tiers.silver.instagram.post3'),
      likes: 1567,
      hashtags: ['#RollsRoyceCullinan', '#LuxurySUV', '#DesertDubai'],
      carModel: 'Cullinan',
      location: 'Dubai Desert'
    },
    {
      id: '4',
      image: '/images/Rolls-Royce-black.jpg',
      caption: t('loyalty.tiers.silver.instagram.post4'),
      likes: 892,
      hashtags: ['#RollsRoyceGhost', '#BusinessClass', '#DIFC'],
      carModel: 'Ghost',
      location: 'DIFC, Dubai'
    },
    {
      id: '5',
      image: '/images/Rolls-Royce-front.jpg',
      caption: t('loyalty.tiers.silver.instagram.post5'),
      likes: 1123,
      hashtags: ['#RollsRoyceWraith', '#LuxuryCoupe', '#DubaiCars'],
      carModel: 'Wraith',
      location: 'Dubai Autodrome'
    },
    {
      id: '6',
      image: '/images/Rolls-royce-with-blan.jpg',
      caption: t('loyalty.tiers.silver.instagram.post6'),
      likes: 2345,
      hashtags: ['#DubaiWedding', '#LuxuryWedding', '#RollsRoyceFleet'],
      location: 'Atlantis The Palm'
    }
  ]

  const socialStats = {
    instagram: { followers: '125K', engagement: '8.5%' },
    facebook: { followers: '89K', engagement: '6.2%' },
    twitter: { followers: '45K', engagement: '4.8%' },
    youtube: { subscribers: '32K', views: '2.1M' }
  }

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
          <h2 className="heading-2 text-white mb-4">{t('loyalty.tiers.silver.instagram.followJourney')}</h2>
          <p className="text-xl text-rolls-gold mb-6">{t('loyalty.tiers.silver.instagram.account')}</p>
          
          {/* Social Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {Object.entries(socialStats).map(([platform, stats]) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg px-6 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    {platform === 'instagram' && '📷'}
                    {platform === 'facebook' && '👤'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'youtube' && '📺'}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">
                      {'followers' in stats ? stats.followers : stats.subscribers}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">{platform}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {post.likes.toLocaleString()}
                    </span>
                    {post.carModel && (
                      <span className="text-sm bg-rolls-gold/20 px-2 py-1 rounded">
                        {post.carModel}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Instagram icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('loyalty.tiers.silver.instagram.joinCommunity')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('loyalty.tiers.silver.instagram.communityDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://instagram.com/rollsroycers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
                </svg>
                {t('loyalty.tiers.silver.instagram.follow')}
              </motion.a>
              <button className="btn-secondary flex items-center gap-2">
                <span className="text-xl">🔔</span>
                {t('loyalty.tiers.silver.instagram.notifications')}
              </button>
            </div>
            
            {/* Hashtag Cloud */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['#RollsRoyceDubai', '#LuxuryCarRental', '#DubaiLuxury', '#RollsRoyceLife'].map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-rolls-black/50 text-rolls-gold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-rolls-black border border-rolls-gold/30 rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-96 md:h-full object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">@rollsroycers</h3>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-300">{selectedPost.caption}</p>
                  
                  {selectedPost.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedPost.location}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.hashtags.map((tag) => (
                      <span key={tag} className="text-sm text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-rolls-gold/20">
                    <button className="flex items-center gap-2 text-white hover:text-rolls-gold transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{selectedPost.likes.toLocaleString()}</span>
                    </button>
                    <button className="text-white hover:text-rolls-gold transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-rolls-gold transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  
                  {selectedPost.carModel && (
                    <motion.a
                      href="#fleet"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full text-center mt-4"
                      onClick={() => setSelectedPost(null)}
                    >
                      {t('loyalty.tiers.silver.instagram.bookNow', { carModel: selectedPost.carModel })}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}