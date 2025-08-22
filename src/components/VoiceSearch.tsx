import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'

declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

interface VoiceCommand {
  command: string
  action: string
  keywords: string[]
}

export default function VoiceSearch() {
  const { t } = useTranslation('common')
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const recognitionRef = useRef<any>(null)

  const voiceCommands: VoiceCommand[] = [
    {
      command: 'book',
      action: 'Navigate to booking',
      keywords: ['book', 'reserve', 'rent', 'booking']
    },
    {
      command: 'price',
      action: 'Show price calculator',
      keywords: ['price', 'cost', 'how much', 'rate', 'pricing']
    },
    {
      command: 'phantom',
      action: 'Show Phantom details',
      keywords: ['phantom', 'show phantom', 'phantom car']
    },
    {
      command: 'cullinan',
      action: 'Show Cullinan details',
      keywords: ['cullinan', 'suv', 'show cullinan']
    },
    {
      command: 'available',
      action: 'Check availability',
      keywords: ['available', 'availability', 'free', 'when']
    },
    {
      command: 'contact',
      action: 'Show contact information',
      keywords: ['contact', 'call', 'phone', 'email', 'reach']
    },
    {
      command: 'offers',
      action: 'Show special offers',
      keywords: ['offers', 'deals', 'discount', 'promotion', 'special']
    }
  ]

  useEffect(() => {
    // Check if speech recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true)
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex
        const transcript = event.results[current][0].transcript.toLowerCase()
        setTranscript(transcript)

        if (event.results[current].isFinal) {
          processVoiceCommand(transcript)
        }
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const processVoiceCommand = (text: string) => {
    let commandFound = false

    for (const cmd of voiceCommands) {
      const hasKeyword = cmd.keywords.some(keyword => text.includes(keyword))
      if (hasKeyword) {
        executeCommand(cmd)
        commandFound = true
        break
      }
    }

    if (!commandFound) {
      setResult("I didn't understand that. Try saying 'book a car' or 'show prices'")
    }
  }

  const executeCommand = (command: VoiceCommand) => {
    setResult(`Executing: ${command.action}`)
    
    // Navigate based on command
    switch (command.command) {
      case 'book':
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'price':
        document.querySelector('#price-calculator')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'phantom':
      case 'cullinan':
        document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'available':
        document.querySelector('#availability')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'offers':
        document.querySelector('#offers')?.scrollIntoView({ behavior: 'smooth' })
        break
    }

    // Clear result after 3 seconds
    setTimeout(() => {
      setResult(null)
      setTranscript('')
    }, 3000)
  }

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
    } else {
      setTranscript('')
      setResult(null)
      recognitionRef.current?.start()
      setIsListening(true)
    }
  }

  if (!isSupported) return null

  return (
    <>
      {/* Voice Search Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        className={`fixed bottom-48 right-4 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isListening 
            ? 'bg-red-500 animate-pulse' 
            : 'bg-gradient-to-r from-rolls-gold to-yellow-600'
        }`}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </motion.button>

      {/* Voice Interface Modal */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 right-4 z-40 bg-rolls-black/90 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-6 w-80 shadow-2xl"
          >
            <div className="text-center">
              <div className="mb-4">
                <div className="w-20 h-20 mx-auto bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-white font-semibold mb-2">Listening...</h3>
              
              {transcript && (
                <div className="mb-4 p-3 bg-rolls-navy/50 rounded-lg">
                  <p className="text-sm text-gray-300 italic">"{transcript}"</p>
                </div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-rolls-gold/20 rounded-lg"
                >
                  <p className="text-sm text-rolls-gold">{result}</p>
                </motion.div>
              )}

              <div className="text-xs text-gray-400 space-y-1">
                <p>{t('voice.examples.title')}</p>
                <p className="text-rolls-gold">"{t('voice.examples.bookPhantom')}"</p>
                <p className="text-rolls-gold">"{t('voice.examples.showPrices')}"</p>
                <p className="text-rolls-gold">"{t('voice.examples.checkAvailability')}"</p>
              </div>

              <button
                onClick={toggleListening}
                className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Click to stop
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice Command Help */}
      {!isListening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-48 right-20 z-30"
        >
          <div className="bg-rolls-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
            🎤 {t('voiceSearch.button')}
          </div>
        </motion.div>
      )}
    </>
  )
}