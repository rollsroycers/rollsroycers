import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface BookingStep {
  id: number
  question: string
  field: string
  type: 'select' | 'date' | 'text' | 'number'
  options?: { value: string; label: string }[]
}

interface BookingData {
  vehicle?: string
  startDate?: string
  duration?: string
  pickupLocation?: string
  occasion?: string
  budget?: string
  extras?: string[]
  name?: string
  email?: string
  phone?: string
}

export default function BookingAssistant() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [bookingData, setBookingData] = useState<BookingData>({})
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Array<{ type: 'bot' | 'user'; text: string }>>([
    { type: 'bot', text: "Hello! I'm your personal booking assistant. I'll help you reserve the perfect Rolls-Royce for your needs. Shall we begin?" }
  ])

  const bookingSteps: BookingStep[] = [
    {
      id: 0,
      question: "Which Rolls-Royce model interests you?",
      field: 'vehicle',
      type: 'select',
      options: [
        { value: 'phantom', label: 'Phantom - Ultimate Luxury' },
        { value: 'cullinan', label: 'Cullinan - Luxury SUV' },
        { value: 'ghost', label: 'Ghost - Modern Elegance' },
        { value: 'dawn', label: 'Dawn - Convertible Beauty' },
        { value: 'wraith', label: 'Wraith - Grand Tourer' },
        { value: 'any', label: 'Help me choose' }
      ]
    },
    {
      id: 1,
      question: "When would you like to start your rental?",
      field: 'startDate',
      type: 'date'
    },
    {
      id: 2,
      question: "How many days will you need the vehicle?",
      field: 'duration',
      type: 'select',
      options: [
        { value: '1', label: '1 day' },
        { value: '2-3', label: '2-3 days' },
        { value: '4-7', label: '4-7 days (Weekly rate)' },
        { value: '8-30', label: '8-30 days (Monthly rate)' },
        { value: '30+', label: 'More than 30 days' }
      ]
    },
    {
      id: 3,
      question: "Where would you like the car delivered?",
      field: 'pickupLocation',
      type: 'select',
      options: [
        { value: 'hotel', label: 'My Hotel (Free delivery)' },
        { value: 'airport', label: 'Dubai Airport (DXB)' },
        { value: 'abudhabi', label: 'Abu Dhabi' },
        { value: 'other', label: 'Other location' }
      ]
    },
    {
      id: 4,
      question: "What's the occasion for your rental?",
      field: 'occasion',
      type: 'select',
      options: [
        { value: 'business', label: 'Business/Corporate' },
        { value: 'wedding', label: 'Wedding' },
        { value: 'tourism', label: 'Tourism/Vacation' },
        { value: 'special', label: 'Special Event' },
        { value: 'personal', label: 'Personal Use' }
      ]
    }
  ]

  const handleAnswer = (answer: string) => {
    const step = bookingSteps[currentStep]
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: answer }])
    
    // Update booking data
    setBookingData(prev => ({ ...prev, [step.field]: answer }))
    
    // Show typing indicator
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      
      if (currentStep < bookingSteps.length - 1) {
        // Move to next step
        setCurrentStep(currentStep + 1)
        const nextStep = bookingSteps[currentStep + 1]
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: nextStep.question 
        }])
      } else {
        // Complete booking
        completeBooking()
      }
    }, 1000)
  }

  const completeBooking = () => {
    const summary = generateBookingSummary()
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text: summary 
    }])
  }

  const generateBookingSummary = () => {
    const vehicle = bookingData.vehicle === 'any' 
      ? 'our luxury collection' 
      : `Rolls-Royce ${bookingData.vehicle?.charAt(0).toUpperCase()}${bookingData.vehicle?.slice(1)}`
    
    return `Perfect! I've prepared your booking summary:

🚗 Vehicle: ${vehicle}
📅 Start Date: ${bookingData.startDate || 'To be confirmed'}
⏱️ Duration: ${bookingData.duration} day(s)
📍 Delivery: ${bookingData.pickupLocation}
🎯 Occasion: ${bookingData.occasion}

Estimated Total: AED ${calculateEstimate()} 

Would you like me to confirm this booking? I just need your contact details to proceed.`
  }

  const calculateEstimate = () => {
    const basePrice = {
      phantom: 2500,
      cullinan: 2800,
      ghost: 2200,
      dawn: 2400,
      wraith: 2300,
      any: 2400
    }
    const days = parseInt(bookingData.duration || '1')
    const price = basePrice[bookingData.vehicle as keyof typeof basePrice] || 2400
    return (price * days).toLocaleString()
  }

  const resetChat = () => {
    setCurrentStep(0)
    setBookingData({})
    setMessages([
      { type: 'bot', text: "Hello! I'm your personal booking assistant. I'll help you reserve the perfect Rolls-Royce for your needs. Shall we begin?" }
    ])
  }

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-32 left-4 z-40 w-16 h-16 bg-gradient-to-r from-rolls-gold to-yellow-600 rounded-full shadow-lg flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-rolls-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </motion.button>

      {/* Assistant Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className="fixed bottom-52 left-4 z-40 w-96 max-w-[calc(100vw-2rem)] bg-rolls-black border border-rolls-gold/30 rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rolls-gold to-yellow-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rolls-black rounded-full flex items-center justify-center">
                  <span className="text-rolls-gold text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-rolls-black">Booking Assistant</h3>
                  <p className="text-xs text-rolls-black/70">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-rolls-black/70 hover:text-rolls-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-rolls-navy/20">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-rolls-gold text-rolls-black'
                        : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-rolls-black/50 text-white border border-rolls-gold/20 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-rolls-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-rolls-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-rolls-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            {currentStep < bookingSteps.length && !isTyping && (
              <div className="p-4 border-t border-rolls-gold/20">
                {bookingSteps[currentStep].type === 'select' ? (
                  <div className="grid grid-cols-1 gap-2">
                    {bookingSteps[currentStep].options?.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.label)}
                        className="text-left px-4 py-2 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg hover:bg-rolls-gold/20 hover:border-rolls-gold transition-all text-sm text-white"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : bookingSteps[currentStep].type === 'date' ? (
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="w-full px-4 py-2 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white focus:border-rolls-gold focus:outline-none"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value) {
                        handleAnswer(e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                    className="w-full px-4 py-2 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white placeholder-gray-500 focus:border-rolls-gold focus:outline-none"
                  />
                )}
              </div>
            )}

            {/* Reset Button */}
            {currentStep === bookingSteps.length && (
              <div className="p-4 border-t border-rolls-gold/20">
                <div className="flex space-x-2">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1 text-center"
                  >
                    Complete Booking
                  </motion.a>
                  <button
                    onClick={resetChat}
                    className="btn-secondary flex-1"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help Text */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-32 left-20 z-30"
        >
          <div className="bg-rolls-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
            💬 Need help booking?
          </div>
        </motion.div>
      )}
    </>
  )
}