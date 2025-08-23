/**
 * WhatsApp Integration Utility
 * Generates contextual WhatsApp links with perfect starter messages
 */

export const WHATSAPP_NUMBER = '971558164922'

// Contextual message templates
export const WhatsAppMessages = {
  // General inquiries
  general: 'Hello! I am interested in renting a Rolls-Royce in Dubai. Could you please provide more information?',
  
  // Fleet-specific messages
  fleet: 'Hello! I would like to inquire about your Rolls-Royce fleet and availability in Dubai.',
  phantom: 'Hello! I am interested in renting the Rolls-Royce Phantom. Could you please share pricing and availability?',
  ghost: 'Hello! I would like to book the Rolls-Royce Ghost. Please provide details on pricing and availability.',
  cullinan: 'Hello! I am interested in the Rolls-Royce Cullinan SUV. Could you share availability and rates?',
  dawn: 'Hello! I would like to rent the Rolls-Royce Dawn convertible. Please provide pricing information.',
  wraith: 'Hello! I am interested in the Rolls-Royce Wraith. Could you please share availability and rates?',
  
  // Service-specific messages
  booking: 'Hello! I would like to make a reservation for a Rolls-Royce rental in Dubai. Please assist me with the booking process.',
  quote: 'Hello! Could you please provide a quote for Rolls-Royce rental in Dubai? I would like to know the pricing options.',
  chauffeur: 'Hello! I am interested in your chauffeur-driven Rolls-Royce service. Could you provide details and pricing?',
  wedding: 'Hello! I need a Rolls-Royce for my wedding in Dubai. Could you please share your wedding packages and availability?',
  corporate: 'Hello! I require Rolls-Royce rental for corporate events in Dubai. Please provide your business packages.',
  airport: 'Hello! I need a Rolls-Royce for airport transfer service in Dubai. Could you share your rates and availability?',
  events: 'Hello! I am looking for Rolls-Royce rental for a special event in Dubai. Please provide your event packages.',
  photoshoot: 'Hello! I need a Rolls-Royce for a photoshoot in Dubai. Could you please share your rates and terms?',
  tours: 'Hello! I am interested in Dubai city tours with Rolls-Royce. Could you provide tour packages and pricing?',
  
  // Location-specific messages
  'business-bay': 'Hello! I need Rolls-Royce pickup/drop-off in Business Bay, Dubai. Could you confirm availability?',
  'dubai-marina': 'Hello! I require Rolls-Royce service in Dubai Marina area. Please share your rates and availability.',
  'downtown-dubai': 'Hello! I need Rolls-Royce rental in Downtown Dubai. Could you provide pricing and pickup options?',
  'palm-jumeirah': 'Hello! I am looking for Rolls-Royce service at Palm Jumeirah. Please share availability and rates.',
  'jbr': 'Hello! I need Rolls-Royce pickup at JBR, Dubai. Could you confirm your service availability in this area?',
  'difc': 'Hello! I require Rolls-Royce service in DIFC area. Please provide your premium service details.',
  
  // Pricing and FAQ
  pricing: 'Hello! I would like to get detailed pricing information for Rolls-Royce rental in Dubai. Could you send me your rate card?',
  faq: 'Hello! I have some questions about your Rolls-Royce rental service in Dubai. Could you please assist me?',
  
  // About and contact
  about: 'Hello! I learned about your luxury Rolls-Royce service. Could you provide more details about your offerings?',
  contact: 'Hello! I would like to get in touch regarding Rolls-Royce rental in Dubai. Please provide assistance.',
  
  // Emergency and support
  support: 'Hello! I need assistance with my Rolls-Royce rental. Could you please help me?',
  emergency: 'Hello! This is regarding an urgent matter with my Rolls-Royce rental. Please assist immediately.',
} as const

export type WhatsAppMessageKey = keyof typeof WhatsAppMessages

/**
 * Generate WhatsApp URL with contextual message
 */
export function generateWhatsAppURL(messageKey: WhatsAppMessageKey = 'general', customMessage?: string): string {
  const message = customMessage || WhatsAppMessages[messageKey]
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Open WhatsApp in new tab with contextual message
 */
export function openWhatsApp(messageKey: WhatsAppMessageKey = 'general', customMessage?: string): void {
  const url = generateWhatsAppURL(messageKey, customMessage)
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Create WhatsApp link attributes for anchor tags
 */
export function createWhatsAppLinkProps(messageKey: WhatsAppMessageKey = 'general', customMessage?: string) {
  return {
    href: generateWhatsAppURL(messageKey, customMessage),
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: (e: React.MouseEvent) => {
      e.preventDefault()
      openWhatsApp(messageKey, customMessage)
    }
  }
}

/**
 * Generate multilingual WhatsApp messages
 */
export function generateLocalizedMessage(
  messageKey: WhatsAppMessageKey,
  locale: string = 'en',
  vehicleName?: string,
  locationName?: string
): string {
  const baseMessage = WhatsAppMessages[messageKey]
  
  // Add localization based on language
  const greetings = {
    en: 'Hello!',
    ar: 'مرحباً!',
    fr: 'Bonjour!',
    ru: 'Здравствуйте!',
    zh: '您好！',
    hi: 'नमस्ते!'
  }
  
  const greeting = greetings[locale as keyof typeof greetings] || greetings.en
  
  // Replace placeholders if provided
  let message = baseMessage.replace('Hello!', greeting)
  
  if (vehicleName) {
    message = message.replace('Rolls-Royce', `${vehicleName}`)
  }
  
  if (locationName) {
    message = message.replace('Dubai', `${locationName}, Dubai`)
  }
  
  return message
}

export default {
  generateWhatsAppURL,
  openWhatsApp,
  createWhatsAppLinkProps,
  generateLocalizedMessage,
  WhatsAppMessages,
  WHATSAPP_NUMBER
}
