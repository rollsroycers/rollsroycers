import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface SuccessStory {
  id: number
  name: string
  location: string
  occasion: string
  story: string
  rating: number
  image: string
  verified: boolean
}

export default function TestimonialSubmission() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: '',
    rating: 5,
    testimonial: '',
    consent: false
  })
  const [submitted, setSubmitted] = useState(false)

  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: t('testimonialSubmission.stories.story1.name'),
      location: t('testimonialSubmission.stories.story1.location'),
      occasion: t('testimonialSubmission.stories.story1.occasion'),
      story: t('testimonialSubmission.stories.story1.story'),
      rating: 5,
      image: "/images/reviews/mohamed.jpg",
      verified: true
    },
    {
      id: 2,
      name: t('testimonialSubmission.stories.story2.name'),
      location: t('testimonialSubmission.stories.story2.location'),
      occasion: t('testimonialSubmission.stories.story2.occasion'),
      story: t('testimonialSubmission.stories.story2.story'),
      rating: 5,
      image: "/images/reviews/Sergey-Volkov.webp",
      verified: true
    },
    {
      id: 3,
      name: t('testimonialSubmission.stories.story3.name'),
      location: t('testimonialSubmission.stories.story3.location'),
      occasion: t('testimonialSubmission.stories.story3.occasion'),
      story: t('testimonialSubmission.stories.story3.story'),
      rating: 5,
      image: "/images/reviews/Antoine-Lefèvre_.jpg",
      verified: true
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true)
      setShowForm(false)
    }, 1000)
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
          <h2 className="heading-2 text-white mb-4">Success Stories</h2>
          <p className="text-xl text-rolls-gold">Moments that matter, powered by Rolls-Royce</p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 glass-effect"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-rolls-gold"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{story.name}</h3>
                  <p className="text-sm text-gray-400">{story.location}</p>
                  <p className="text-sm text-rolls-gold">{story.occasion}</p>
                </div>
                {story.verified && (
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{story.story}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < story.rating ? 'text-rolls-gold' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{t('common.verifiedCustomer')}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          {!showForm && !submitted && (
            <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {t('testimonialSubmission.shareExperience.title')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('testimonialSubmission.shareExperience.description')}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary"
              >
                {t('common.shareYourStory')}
              </button>
            </div>
          )}

          {/* Testimonial Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-rolls-black/70 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Tell Us Your Story</h3>
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-rolls-gold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-rolls-gold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                    required
                  >
                    <option value="">Select occasion</option>
                    <option value="wedding">Wedding</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business</option>
                    <option value="vacation">Vacation</option>
                    <option value="special-event">Special Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Your Experience
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.testimonial}
                    onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                    placeholder="Share your memorable experience with us..."
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white placeholder-gray-500 focus:border-rolls-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Rating
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({...formData, rating})}
                        className="focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${rating <= formData.rating ? 'text-rolls-gold' : 'text-gray-600'} hover:text-rolls-gold transition-colors`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                      className="mt-1 w-5 h-5 text-rolls-gold bg-rolls-navy border-rolls-gold/20 rounded focus:ring-rolls-gold"
                    />
                    <span className="text-sm text-gray-300">
                      I consent to having my testimonial and first name displayed on the website. My email will remain private.
                    </span>
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary flex-1">
                    Submit Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 max-w-2xl mx-auto"
            >
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Thank You for Sharing!
              </h3>
              <p className="text-gray-300">
                Your story has been submitted successfully. We appreciate you taking the time to share your experience with us.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}