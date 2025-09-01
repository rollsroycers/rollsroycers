import React, { useState, useEffect, useRef } from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  priority?: boolean
  lazyBoundary?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  lazyBoundary = '200px',
  placeholder = 'blur',
  quality = 75,
  ...props
}) => {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: lazyBoundary,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, lazyBoundary])

  // Generate blur placeholder
  const blurDataURL = typeof src === 'string' && src.startsWith('/') 
    ? `data:image/svg+xml;base64,${btoa(
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <filter id="blur">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <rect width="100" height="100" fill="#C4A570" filter="url(#blur)" />
        </svg>`
      )}`
    : undefined

  return (
    <div ref={imgRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isInView ? (
        <Image
          src={src}
          alt={alt}
          quality={quality}
          loading={priority ? 'eager' : 'lazy'}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          {...props}
        />
      ) : (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span style={{ color: '#999', fontSize: '12px' }}>Loading...</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage