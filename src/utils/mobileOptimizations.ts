// Mobile-specific performance optimizations

interface MobilePerformanceConfig {
  connectionType?: string;
  deviceMemory?: number;
  isLowEndDevice?: boolean;
  screenSize?: { width: number; height: number };
}

class MobileOptimizer {
  private config: MobilePerformanceConfig = {};
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.detectDeviceCapabilities();
      this.initialize();
    }
  }

  private detectDeviceCapabilities() {
    // Get connection information
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      this.config.connectionType = connection.effectiveType;
    }

    // Get device memory
    if ('deviceMemory' in navigator) {
      this.config.deviceMemory = (navigator as any).deviceMemory;
    }

    // Detect low-end devices
    this.config.isLowEndDevice = this.isLowEndDevice();

    // Get screen size
    this.config.screenSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private isLowEndDevice(): boolean {
    // Multiple indicators for low-end devices
    const indicators = {
      // Memory-based detection
      lowMemory: this.config.deviceMemory ? this.config.deviceMemory <= 2 : false,
      
      // Connection-based detection
      slowConnection: this.config.connectionType ? ['slow-2g', '2g'].includes(this.config.connectionType) : false,
      
      // Hardware concurrency (rough CPU indicator)
      lowConcurrency: navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 2 : false,
      
      // Screen size indicator (smaller screens often indicate lower-end devices)
      smallScreen: window.screen.width <= 480 || window.screen.height <= 640,
    };

    // Device is considered low-end if 2 or more indicators are true
    const lowEndIndicators = Object.values(indicators).filter(Boolean).length;
    return lowEndIndicators >= 2;
  }

  private initialize() {
    if (this.isInitialized) return;
    
    this.optimizeForMobile();
    this.setupMobileEventOptimizations();
    this.optimizeAnimationsForMobile();
    this.setupMobileImageOptimizations();
    
    this.isInitialized = true;
  }

  private optimizeForMobile() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
      document.documentElement.classList.add('touch-device');
      
      // Add CSS to disable hover effects
      const style = document.createElement('style');
      style.textContent = `
        .touch-device *:hover {
          /* Disable hover styles on touch devices */
        }
        
        /* Optimize tap highlights */
        .touch-device * {
          -webkit-tap-highlight-color: rgba(196, 165, 112, 0.3);
          -webkit-touch-callout: none;
        }
        
        /* Improve scrolling performance */
        .touch-device {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
    }

    // Optimize for low-end devices
    if (this.config.isLowEndDevice) {
      this.applyLowEndOptimizations();
    }

    // Optimize based on connection speed
    if (this.config.connectionType === 'slow-2g' || this.config.connectionType === '2g') {
      this.applySlowConnectionOptimizations();
    }
  }

  private applyLowEndOptimizations() {
    document.documentElement.classList.add('low-end-device');
    
    // Reduce animations and effects
    const style = document.createElement('style');
    style.textContent = `
      .low-end-device * {
        /* Disable expensive CSS effects */
        backdrop-filter: none !important;
        filter: none !important;
        box-shadow: none !important;
        text-shadow: none !important;
        
        /* Simplify transitions */
        transition-duration: 0.1s !important;
        animation-duration: 0.1s !important;
      }
      
      .low-end-device .glass-effect {
        background: rgba(0, 0, 0, 0.8) !important;
        backdrop-filter: none !important;
      }
      
      .low-end-device .luxury-shadow {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      }
    `;
    document.head.appendChild(style);
  }

  private applySlowConnectionOptimizations() {
    document.documentElement.classList.add('slow-connection');
    
    // Delay non-critical content loading
    const nonCriticalImages = document.querySelectorAll('img[data-non-critical]');
    nonCriticalImages.forEach(img => {
      (img as HTMLImageElement).loading = 'lazy';
    });

    // Reduce video autoplay
    const videos = document.querySelectorAll('video[autoplay]');
    videos.forEach(video => {
      (video as HTMLVideoElement).removeAttribute('autoplay');
      (video as HTMLVideoElement).preload = 'none';
    });
  }

  private setupMobileEventOptimizations() {
    // Use passive event listeners for better scrolling performance
    const passiveOptions = { passive: true };
    
    // Override addEventListener for touch events
    const originalAddEventListener = Element.prototype.addEventListener;
    Element.prototype.addEventListener = function(
      type: string, 
      listener: EventListenerOrEventListenerObject, 
      options?: boolean | AddEventListenerOptions
    ) {
      if (['touchstart', 'touchmove', 'touchend', 'wheel', 'scroll'].includes(type)) {
        if (typeof options === 'object') {
          options = { ...options, passive: true };
        } else {
          options = { passive: true };
        }
      }
      return originalAddEventListener.call(this, type, listener, options);
    };

    // Debounce resize events
    let resizeTimeout: NodeJS.Timeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 150);
    }, passiveOptions);

    // Optimize scroll events
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    }, passiveOptions);
  }

  private setupMobileImageOptimizations() {
    // Implement responsive image loading based on device capabilities
    const images = document.querySelectorAll('img[data-mobile-src]');
    
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      const mobileSrc = imgElement.dataset.mobileSrc;
      const desktopSrc = imgElement.dataset.desktopSrc || imgElement.src;
      
      // Use mobile-optimized images on mobile devices
      if (this.isMobileDevice() && mobileSrc) {
        imgElement.src = mobileSrc;
      } else if (desktopSrc) {
        imgElement.src = desktopSrc;
      }
    });

    // Implement adaptive image quality based on connection
    if (this.config.connectionType === 'slow-2g' || this.config.connectionType === '2g') {
      this.loadLowQualityImages();
    }
  }

  private loadLowQualityImages() {
    const images = document.querySelectorAll('img[data-low-quality]');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      const lowQualitySrc = imgElement.dataset.lowQuality;
      if (lowQualitySrc) {
        imgElement.src = lowQualitySrc;
      }
    });
  }

  private optimizeAnimationsForMobile() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || this.config.isLowEndDevice) {
      document.documentElement.classList.add('reduce-motion');
      
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Optimize Framer Motion animations for mobile
    if (this.isMobileDevice()) {
      // Store reference to reduce motion on mobile
      (window as any).optimizeMotionForMobile = true;
    }
  }

  private handleResize() {
    // Update screen size config
    this.config.screenSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Trigger any necessary layout recalculations
    this.optimizeViewportHeight();
  }

  private handleScroll() {
    // Implement scroll-based optimizations
    const scrollY = window.scrollY;
    
    // Hide/show elements based on scroll to improve performance
    if (scrollY > 100) {
      document.documentElement.classList.add('scrolled');
    } else {
      document.documentElement.classList.remove('scrolled');
    }
  }

  private optimizeViewportHeight() {
    // Fix viewport height issues on mobile browsers
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  private isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
  }

  // Public methods
  public getDeviceInfo(): MobilePerformanceConfig {
    return { ...this.config };
  }

  public isLowEndDeviceDetected(): boolean {
    return this.config.isLowEndDevice || false;
  }

  public getConnectionSpeed(): string {
    return this.config.connectionType || 'unknown';
  }

  // Critical resource hints for mobile
  public addMobileResourceHints() {
    const hints = [
      // Preconnect to critical domains
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      
      // DNS prefetch for less critical domains
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });
  }

  // Cleanup method
  public cleanup() {
    this.isInitialized = false;
    // Remove any event listeners or observers if needed
  }
}

// Singleton instance
let mobileOptimizer: MobileOptimizer | null = null;

export const getMobileOptimizer = (): MobileOptimizer => {
  if (!mobileOptimizer && typeof window !== 'undefined') {
    mobileOptimizer = new MobileOptimizer();
  }
  return mobileOptimizer!;
};

// Utility functions for mobile optimization
export const optimizeForMobile = () => {
  const optimizer = getMobileOptimizer();
  optimizer.addMobileResourceHints();
  return optimizer;
};

export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         window.innerWidth <= 768;
};

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  const optimizer = getMobileOptimizer();
  return optimizer.isLowEndDeviceDetected();
};

// CSS custom properties for mobile-safe viewport units
export const setMobileViewportHeight = () => {
  if (typeof window === 'undefined') return;
  
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);
};

export default MobileOptimizer;
