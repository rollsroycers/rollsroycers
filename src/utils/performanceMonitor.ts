// Performance monitoring and optimization utilities

interface PerformanceMetrics {
  FCP: number | null;  // First Contentful Paint
  LCP: number | null;  // Largest Contentful Paint
  FID: number | null;  // First Input Delay
  CLS: number | null;  // Cumulative Layout Shift
  TTFB: number | null; // Time to First Byte
  TTI: number | null;  // Time to Interactive
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
    TTI: null,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFCP();
    this.observeFID();
    this.observeCLS();
    this.observeTTFB();
    this.observeTTI();

    // Send metrics when page is about to unload
    if ('sendBeacon' in navigator && 'requestIdleCallback' in window) {
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.reportMetrics();
        }
      });
    }
  }

  private observeLCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.metrics.LCP = lastEntry.renderTime || lastEntry.loadTime;
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.error('LCP observation failed:', e);
      }
    }
  }

  private observeFCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.metrics.FCP = fcpEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.error('FCP observation failed:', e);
      }
    }
  }

  private observeFID() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const firstEntry = entries[0] as any;
            this.metrics.FID = firstEntry.processingStart - firstEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.error('FID observation failed:', e);
      }
    }
  }

  private observeCLS() {
    let clsValue = 0;
    let clsEntries: any[] = [];

    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Only count shifts without recent user input
            if (!(entry as any).hadRecentInput) {
              const firstSessionEntry = clsEntries[0];
              const lastSessionEntry = clsEntries[clsEntries.length - 1];

              // If the entry occurred less than 1 second after the previous entry
              // and less than 5 seconds after the first entry in the session,
              // include the entry in the current session. Otherwise, start a new session.
              if (
                entry.startTime - lastSessionEntry?.startTime < 1000 &&
                entry.startTime - firstSessionEntry?.startTime < 5000
              ) {
                clsValue += (entry as any).value;
                clsEntries.push(entry);
              } else {
                clsValue = (entry as any).value;
                clsEntries = [entry];
              }
            }
          }
          this.metrics.CLS = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.error('CLS observation failed:', e);
      }
    }
  }

  private observeTTFB() {
    if ('performance' in window && 'timing' in window.performance) {
      const navTiming = performance.timing;
      this.metrics.TTFB = navTiming.responseStart - navTiming.fetchStart;
    }
  }

  private observeTTI() {
    if ('PerformanceObserver' in window) {
      // Simplified TTI calculation
      window.addEventListener('load', () => {
        setTimeout(() => {
          if ('performance' in window && performance.timing) {
            const navStart = performance.timing.navigationStart;
            this.metrics.TTI = Date.now() - navStart;
          }
        }, 5000); // Wait 5 seconds after load to estimate TTI
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  private reportMetrics() {
    const metrics = this.getMetrics();
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.table(metrics);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && 'sendBeacon' in navigator) {
      const data = JSON.stringify({
        metrics,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      });
      
      // You can send this to your analytics endpoint
      // navigator.sendBeacon('/api/analytics', data);
    }
  }

  // Utility method to measure custom timings
  public measureTiming(name: string, startMark: string, endMark: string) {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name)[0];
        return measure ? measure.duration : null;
      } catch (e) {
        console.error(`Failed to measure ${name}:`, e);
        return null;
      }
    }
    return null;
  }

  // Mark important milestones
  public mark(name: string) {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name);
    }
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export const getPerformanceMonitor = (): PerformanceMonitor => {
  if (!performanceMonitor && typeof window !== 'undefined') {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor!;
};

// Utility function to lazy load components - removed dynamic import to avoid build warnings
export const lazyLoadComponent = (
  componentPath: string,
  options: { delay?: number; prefetch?: boolean } = {}
) => {
  const { delay = 0, prefetch = false } = options;

  if (prefetch && typeof window !== 'undefined') {
    // Prefetch the component
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = componentPath;
    document.head.appendChild(link);
  }

  // Return a promise without dynamic import to avoid critical dependency warning
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(componentPath);
    }, delay);
  });
};

// Debounce utility for scroll/resize events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for high-frequency events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};