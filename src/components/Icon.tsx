import React from 'react'

interface IconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const ICONS: Record<string, string> = {
  // Transportation Services
  airport: '✈️',
  chauffeur: '🤵',
  transfer: '🚗',
  luxury: '💎',
  
  // Event Types
  wedding: '💒',
  corporate: '💼',
  gala: '🎭',
  fashion: '👗',
  film: '🎬',
  awards: '🏆',
  party: '🎉',
  
  // Vehicle Features
  phantom: '👑',
  ghost: '⚡',
  cullinan: '🏔️',
  dawn: '🌅',
  wraith: '💨',
  
  // Amenities
  wifi: '📶',
  charging: '🔌',
  climate: '❄️',
  sound: '🔊',
  navigation: '🗺️',
  safety: '🛡️',
  
  // Locations
  downtown: '🏙️',
  marina: '⚓',
  palm: '🌴',
  business: '🏢',
  beach: '🏖️',
  mall: '🛍️',
  
  // Time & Distance
  time: '⏰',
  distance: '📍',
  calendar: '📅',
  clock: '🕐',
  
  // Communication
  phone: '📞',
  email: '📧',
  whatsapp: '💬',
  chat: '💭',
  
  // Ratings & Reviews
  star: '⭐',
  review: '📝',
  rating: '📊',
  thumbsup: '👍'
}

const SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}

export default function Icon({ name, className = '', size = 'md' }: IconProps) {
  const icon = ICONS[name] || '❓'
  const sizeClass = SIZES[size]
  
  return (
    <span className={`inline-block ${sizeClass} ${className}`} title={name}>
      {icon}
    </span>
  )
}

export function getIcon(name: string): string {
  return ICONS[name] || '❓'
}

export function getAvailableIcons(): string[] {
  return Object.keys(ICONS)
}
