import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Notification {
  id: number
  type: 'booking' | 'view' | 'inquiry' | 'review'
  message: string
  location: string
  time: string
  car?: string
}

export default function SocialProofNotifications() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const notifications: Notification[] = [
    {
      id: 1,
      type: 'booking',
      message: 'Someone just booked a',
      car: 'Rolls-Royce Phantom',
      location: 'Business Bay, Dubai',
      time: '2 minutes ago'
    },
    {
      id: 2,
      type: 'view',
      message: '15 people are viewing',
      car: 'Rolls-Royce Cullinan',
      location: 'Dubai Marina',
      time: 'Just now'
    },
    {
      id: 3,
      type: 'inquiry',
      message: 'New inquiry received for',
      car: 'Wedding Package',
      location: 'Jumeirah, Dubai',
      time: '5 minutes ago'
    },
    {
      id: 4,
      type: 'review',
      message: 'Ahmed left a 5-star review for',
      car: 'Rolls-Royce Ghost',
      location: 'Downtown Dubai',
      time: '10 minutes ago'
    },
    {
      id: 5,
      type: 'booking',
      message: 'Luxury package booked for',
      car: '3 days',
      location: 'Palm Jumeirah',
      time: '3 minutes ago'
    },
    {
      id: 6,
      type: 'view',
      message: '8 people viewing',
      car: 'Special Offers',
      location: 'UAE',
      time: 'Right now'
    },
    {
      id: 7,
      type: 'booking',
      message: 'VIP client reserved',
      car: 'Rolls-Royce Dawn',
      location: 'DIFC, Dubai',
      time: '7 minutes ago'
    },
    {
      id: 8,
      type: 'inquiry',
      message: 'Corporate inquiry for',
      car: 'Fleet Rental',
      location: 'Abu Dhabi',
      time: '15 minutes ago'
    }
  ]

  useEffect(() => {
    // Start showing notifications after 10 seconds
    const startDelay = setTimeout(() => {
      showRandomNotification()
    }, 10000)

    return () => clearTimeout(startDelay)
  }, [])

  const showRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * notifications.length)
    const notification = notifications[randomIndex]
    
    setCurrentNotification(notification)
    setIsVisible(true)

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false)
      
      // Show next notification after 15-30 seconds
      const nextDelay = 15000 + Math.random() * 15000
      setTimeout(showRandomNotification, nextDelay)
    }, 5000)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'view':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        )
      case 'inquiry':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'review':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      default:
        return null
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'from-green-500 to-green-600'
      case 'view':
        return 'from-blue-500 to-blue-600'
      case 'inquiry':
        return 'from-purple-500 to-purple-600'
      case 'review':
        return 'from-yellow-500 to-yellow-600'
      default:
        return 'from-rolls-gold to-yellow-600'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: 50 }}
          className="fixed bottom-32 right-4 z-30 max-w-sm"
        >
          <div className="bg-rolls-black/90 backdrop-blur-sm border border-rolls-gold/30 rounded-lg shadow-2xl overflow-hidden">
            <div className={`h-1 bg-gradient-to-r ${getTypeColor(currentNotification.type)}`} />
            
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-gradient-to-r ${getTypeColor(currentNotification.type)} rounded-full text-white flex-shrink-0`}>
                  {getIcon(currentNotification.type)}
                </div>
                
                <div className="flex-1">
                  <p className="text-white text-sm">
                    {currentNotification.message}
                    {currentNotification.car && (
                      <span className="font-semibold text-rolls-gold"> {currentNotification.car}</span>
                    )}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {currentNotification.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {currentNotification.time}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}