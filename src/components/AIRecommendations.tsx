import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Question {
  id: string
  question: string
  options: { value: string; label: string; icon: string }[]
}

interface Recommendation {
  car: string
  score: number
  reasons: string[]
  image: string
  price: number
}

export default function AIRecommendations() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions: Question[] = [
    {
      id: 'purpose',
      question: "What's the primary purpose of your rental?",
      options: [
        { value: 'business', label: 'Business Meeting', icon: '💼' },
        { value: 'wedding', label: 'Wedding/Event', icon: '💒' },
        { value: 'tourism', label: 'Tourism/Sightseeing', icon: '🏖️' },
        { value: 'special', label: 'Special Occasion', icon: '🎉' }
      ]
    },
    {
      id: 'passengers',
      question: 'How many passengers will you typically have?',
      options: [
        { value: '1-2', label: '1-2 People', icon: '👤' },
        { value: '3-4', label: '3-4 People', icon: '👥' },
        { value: '5+', label: '5 or More', icon: '👨‍👩‍👧‍👦' },
        { value: 'varies', label: 'It Varies', icon: '🔄' }
      ]
    },
    {
      id: 'style',
      question: 'Which style appeals to you most?',
      options: [
        { value: 'classic', label: 'Classic Elegance', icon: '🎩' },
        { value: 'modern', label: 'Modern Luxury', icon: '✨' },
        { value: 'sporty', label: 'Dynamic Performance', icon: '🏁' },
        { value: 'versatile', label: 'Versatile Comfort', icon: '🛡️' }
      ]
    },
    {
      id: 'experience',
      question: 'What experience are you seeking?',
      options: [
        { value: 'presence', label: 'Maximum Presence', icon: '👑' },
        { value: 'comfort', label: 'Ultimate Comfort', icon: '🛋️' },
        { value: 'adventure', label: 'Adventure Ready', icon: '🗺️' },
        { value: 'romance', label: 'Romantic Escape', icon: '💝' }
      ]
    }
  ]

  const carDatabase = {
    phantom: {
      name: 'Rolls-Royce Phantom',
      image: '/images/Rolls-royce-phantom.jpg',
      price: 2500,
      traits: {
        purpose: ['business', 'wedding', 'special'],
        passengers: ['3-4', '5+', 'varies'],
        style: ['classic'],
        experience: ['presence', 'comfort']
      }
    },
    cullinan: {
      name: 'Rolls-Royce Cullinan',
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      price: 2800,
      traits: {
        purpose: ['tourism', 'special', 'business'],
        passengers: ['5+', '3-4', 'varies'],
        style: ['modern', 'versatile'],
        experience: ['adventure', 'comfort', 'presence']
      }
    },
    ghost: {
      name: 'Rolls-Royce Ghost',
      image: '/images/Rolls-Royce-black.jpg',
      price: 2200,
      traits: {
        purpose: ['business', 'special'],
        passengers: ['1-2', '3-4'],
        style: ['modern'],
        experience: ['comfort', 'presence']
      }
    },
    dawn: {
      name: 'Rolls-Royce Dawn',
      image: '/images/Rolls-Royce-white.jpg',
      price: 2400,
      traits: {
        purpose: ['tourism', 'special', 'wedding'],
        passengers: ['1-2', '3-4'],
        style: ['sporty', 'modern'],
        experience: ['romance', 'adventure']
      }
    },
    wraith: {
      name: 'Rolls-Royce Wraith',
      image: '/images/Rolls-Royce-front.jpg',
      price: 2300,
      traits: {
        purpose: ['special', 'tourism'],
        passengers: ['1-2', '3-4'],
        style: ['sporty', 'modern'],
        experience: ['adventure', 'romance', 'presence']
      }
    }
  }

  const calculateRecommendations = () => {
    const scores: Record<string, number> = {}
    const reasons: Record<string, string[]> = {}

    Object.entries(carDatabase).forEach(([carKey, carData]) => {
      scores[carKey] = 0
      reasons[carKey] = []

      Object.entries(answers).forEach(([questionId, answer]) => {
        const traits = carData.traits[questionId as keyof typeof carData.traits]
        if (traits.includes(answer)) {
          scores[carKey] += traits.indexOf(answer) === 0 ? 3 : 2
          
          // Add reason
          const question = questions.find(q => q.id === questionId)
          const option = question?.options.find(o => o.value === answer)
          if (option) {
            reasons[carKey].push(`Perfect for ${option.label.toLowerCase()}`)
          }
        }
      })
    })

    const recommendations: Recommendation[] = Object.entries(scores)
      .map(([carKey, score]) => ({
        car: carDatabase[carKey as keyof typeof carDatabase].name,
        score,
        reasons: reasons[carKey].slice(0, 3),
        image: carDatabase[carKey as keyof typeof carDatabase].image,
        price: carDatabase[carKey as keyof typeof carDatabase].price
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)

    setRecommendations(recommendations)
    setShowResults(true)
  }

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value })
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateRecommendations()
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setRecommendations([])
    setShowResults(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">AI-Powered Recommendations</h2>
          <p className="text-xl text-rolls-gold">Let our AI find your perfect Rolls-Royce match</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Question {currentStep + 1} of {questions.length}</span>
                  <span className="text-sm text-rolls-gold">{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-rolls-black/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-rolls-gold to-yellow-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 glass-effect"
              >
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  {questions[currentStep].question}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(option.value)}
                      className="p-6 bg-rolls-navy/50 border border-rolls-gold/20 rounded-lg hover:border-rolls-gold hover:bg-rolls-gold/10 transition-all duration-300 group"
                    >
                      <div className="text-4xl mb-3">{option.icon}</div>
                      <div className="text-white font-semibold group-hover:text-rolls-gold transition-colors">
                        {option.label}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Your Perfect Matches</h3>
                <p className="text-gray-400">Based on your preferences, we recommend:</p>
              </div>

              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.car}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-rolls-black/50 backdrop-blur-sm border ${
                    index === 0 ? 'border-rolls-gold' : 'border-rolls-gold/20'
                  } rounded-lg overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={rec.image}
                        alt={rec.car}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">{rec.car}</h4>
                          <p className="text-rolls-gold">AED {rec.price}/day</p>
                        </div>
                        {index === 0 && (
                          <span className="bg-gradient-to-r from-rolls-gold to-yellow-600 text-rolls-black px-3 py-1 rounded-full text-sm font-semibold">
                            Best Match
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Why this car?</p>
                        <ul className="space-y-1">
                          {rec.reasons.map((reason, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <svg className="w-4 h-4 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-rolls-navy/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-rolls-gold to-yellow-600 h-full rounded-full"
                            style={{ width: `${(rec.score / 12) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-rolls-gold">{Math.round((rec.score / 12) * 100)}% Match</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 text-center"
                >
                  Book {recommendations[0]?.car.split(' ').pop()}
                </motion.a>
                <button
                  onClick={resetQuiz}
                  className="btn-secondary flex-1"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Powered by AI recommendation engine</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}