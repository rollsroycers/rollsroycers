import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Rolls-Royce Rental Dubai. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Show chat widget after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 30000)
    return () => clearTimeout(timer)
  }, [])

  const quickResponses = {
    pricing: "Our Rolls-Royce vehicles start from AED 4,800 per day. Would you like to use our price calculator for a detailed quote?",
    availability: "We have a full fleet available for immediate booking. Which model are you interested in?",
    booking: "You can book directly through our website or call us at +971 55 816 4922. Would you like me to help you start a booking?",
    models: "We offer Phantom, Cullinan, Ghost, Dawn, and Wraith models. Each provides a unique luxury experience. Which would you like to know more about?",
    airport: "Yes, we offer complimentary airport pickup for bookings over 3 days. For shorter rentals, there's a AED 500 delivery fee.",
    chauffeur: "Professional chauffeur service is available at AED 800 per day. All our chauffeurs are certified and speak multiple languages.",
    requirements: "You'll need a valid driving license, passport, and credit card. Minimum age is 25 years. Would you like more details?",
    insurance: "Comprehensive insurance is included in all rentals. Zero-deductible options are available for additional peace of mind."
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase()
      let botResponse = "I'll connect you with our luxury concierge team right away. Meanwhile, is there anything specific I can help you with?"

      // Smart response matching
      if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('rate')) {
        botResponse = quickResponses.pricing
      } else if (lowerInput.includes('available') || lowerInput.includes('book')) {
        botResponse = quickResponses.availability
      } else if (lowerInput.includes('model') || lowerInput.includes('car')) {
        botResponse = quickResponses.models
      } else if (lowerInput.includes('airport')) {
        botResponse = quickResponses.airport
      } else if (lowerInput.includes('driver') || lowerInput.includes('chauffeur')) {
        botResponse = quickResponses.chauffeur
      } else if (lowerInput.includes('requirement') || lowerInput.includes('document')) {
        botResponse = quickResponses.requirements
      } else if (lowerInput.includes('insurance')) {
        botResponse = quickResponses.insurance
      }

      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }])
    }, 1500)
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-40 w-96 max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-rolls-black border border-rolls-gold/30 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-rolls-navy to-rolls-black p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-white">Luxury Concierge</h3>
                    <p className="text-xs text-gray-400">We typically reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-rolls-navy/20">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-rolls-gold text-rolls-black'
                          : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
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
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="p-3 border-t border-rolls-gold/20">
                <div className="flex flex-wrap gap-2 mb-3">
                  <button
                    onClick={() => setInputMessage('What are your rates?')}
                    className="text-xs px-3 py-1 bg-rolls-black/50 text-rolls-gold border border-rolls-gold/30 rounded-full hover:bg-rolls-gold/20 transition-colors"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => setInputMessage('Which cars are available?')}
                    className="text-xs px-3 py-1 bg-rolls-black/50 text-rolls-gold border border-rolls-gold/30 rounded-full hover:bg-rolls-gold/20 transition-colors"
                  >
                    Availability
                  </button>
                  <button
                    onClick={() => setInputMessage('Do you offer airport pickup?')}
                    className="text-xs px-3 py-1 bg-rolls-black/50 text-rolls-gold border border-rolls-gold/30 rounded-full hover:bg-rolls-gold/20 transition-colors"
                  >
                    Airport Service
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-rolls-gold/20">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex space-x-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-rolls-black/50 border border-rolls-gold/20 rounded-lg text-white placeholder-gray-500 focus:border-rolls-gold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rolls-gold text-rolls-black rounded-lg hover:bg-rolls-gold/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 z-40 w-16 h-16 bg-gradient-to-r from-rolls-gold to-yellow-600 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-rolls-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </motion.button>
      )}
    </>
  )
}