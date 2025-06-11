import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-rolls-black z-[100] flex items-center justify-center"
    >
      <div className="relative">
        {/* Rolls-Royce Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          className="relative"
        >
          {/* RR Monogram */}
          <div className="w-32 h-32 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-6xl font-display text-rolls-gold">RR</div>
            </motion.div>
            
            {/* Circular border animation */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle
                cx="64"
                cy="64"
                r="60"
                fill="none"
                stroke="#C4A570"
                strokeWidth="2"
                initial={{ strokeDasharray: '0 377' }}
                animate={{ strokeDasharray: '377 377' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-8"
        >
          <h2 className="text-2xl font-display text-white mb-2">Rolls-Royce Dubai</h2>
          <p className="text-rolls-gold text-sm tracking-widest uppercase">Luxury Redefined</p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-8 space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-rolls-gold rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-rolls-gold/5 to-transparent pointer-events-none" />
    </motion.div>
  )
}