/**
 * Performance Monitor Utility
 * Tracks and reports Core Web Vitals and custom performance metrics
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      FCP: null,  // First Contentful Paint
      LCP: null,  // Largest Contentful Paint
      FID: null,  // First Input Delay
      CLS: null,  // Cumulative Layout Shift
      TTFB: null, // Time to First Byte
      TTI: null,  // Time to Interactive
      TBT: null,  // Total Blocking Time
      INP: null,  // Interaction to Next Paint
      custom: {}
    };
    
    this.observers = [];
    this.initializeObservers();
  }

  initializeObservers() {
    if (typeof window === 'undefined') return;

    // Observe paint timing
    this.observePaintTiming();
    
    // Observe largest contentful paint
    this.observeLCP();
    
    // Observe first input delay
    this.observeFID();
    
    // Observe cumulative layout shift
    this.observeCLS();
    
    // Observe interaction to next paint
    this.observeINP();
    
    // Measure TTFB
    this.measureTTFB();
    
    // Measure TTI
    this.measureTTI();
  }

  observePaintTiming() {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = Math.round(entry.startTime);
            this.reportMetric('FCP', this.metrics.FCP);
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (e) {
      console.error('Failed to observe paint timing:', e);
    }
  }

  observeLCP() {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = Math.round(lastEntry.startTime);
        this.reportMetric('LCP', this.metrics.LCP);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (e) {
      console.error('Failed to observe LCP:', e);
    }
  }

  observeFID() {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            this.metrics.FID = Math.round(entry.processingStart - entry.startTime);
            this.reportMetric('FID', this.metrics.FID);
            observer.disconnect();
          }
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (e) {
      console.error('Failed to observe FID:', e);
    }
  }

  observeCLS() {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    let clsEntries = [];
    let sessionValue = 0;
    let sessionEntries = [];

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Only count layout shifts without user input
          if (!entry.hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            // If the entry occurred less than 1 second after the previous entry
            // and less than 5 seconds after the first entry in the session,
            // include the entry in the current session. Otherwise, start a new session.
            if (sessionValue &&
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }

            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (sessionValue > clsValue) {
              clsValue = sessionValue;
              clsEntries = sessionEntries;
              this.metrics.CLS = Math.round(clsValue * 1000) / 1000;
              this.reportMetric('CLS', this.metrics.CLS);
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (e) {
      console.error('Failed to observe CLS:', e);
    }
  }

  observeINP() {
    if (!('PerformanceObserver' in window) || !('PerformanceEventTiming' in window)) return;

    let maxDuration = 0;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > maxDuration) {
            maxDuration = entry.duration;
            this.metrics.INP = Math.round(maxDuration);
            this.reportMetric('INP', this.metrics.INP);
          }
        }
      });
      
      observer.observe({ entryTypes: ['event'] });
      this.observers.push(observer);
    } catch (e) {
      console.error('Failed to observe INP:', e);
    }
  }

  measureTTFB() {
    if (!window.performance || !window.performance.timing) return;

    const timing = window.performance.timing;
    
    window.addEventListener('load', () => {
      const ttfb = timing.responseStart - timing.navigationStart;
      this.metrics.TTFB = Math.round(ttfb);
      this.reportMetric('TTFB', this.metrics.TTFB);
    });
  }

  measureTTI() {
    if (!window.performance) return;

    // Simple TTI approximation
    window.addEventListener('load', () => {
      setTimeout(() => {
        const tti = performance.now();
        this.metrics.TTI = Math.round(tti);
        this.reportMetric('TTI', this.metrics.TTI);
      }, 0);
    });
  }

  // Custom metric tracking
  trackCustomMetric(name, value) {
    this.metrics.custom[name] = value;
    this.reportMetric(name, value, true);
  }

  // Mark performance timing
  mark(name) {
    if (window.performance && window.performance.mark) {
      window.performance.mark(name);
    }
  }

  // Measure between marks
  measure(name, startMark, endMark) {
    if (window.performance && window.performance.measure) {
      try {
        window.performance.measure(name, startMark, endMark);
        const measures = window.performance.getEntriesByName(name);
        if (measures.length > 0) {
          const duration = measures[measures.length - 1].duration;
          this.trackCustomMetric(name, Math.round(duration));
          return duration;
        }
      } catch (e) {
        console.error(`Failed to measure ${name}:`, e);
      }
    }
    return null;
  }

  // Report metric (can be sent to analytics)
  reportMetric(name, value, isCustom = false) {
    const metric = {
      name,
      value,
      timestamp: Date.now(),
      url: window.location.href,
      isCustom
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // Send to analytics (implement based on your analytics provider)
    this.sendToAnalytics(metric);
  }

  // Send metrics to analytics service
  sendToAnalytics(metric) {
    // Check if Google Analytics is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: metric.value,
        non_interaction: true
      });
    }

    // Custom analytics endpoint
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      // Use sendBeacon for reliability
      if (navigator.sendBeacon) {
        const data = JSON.stringify({
          metrics: [metric],
          userAgent: navigator.userAgent,
          timestamp: Date.now()
        });
        navigator.sendBeacon(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, data);
      }
    }
  }

  // Get all metrics
  getMetrics() {
    return {
      ...this.metrics,
      timestamp: Date.now(),
      url: window.location.href
    };
  }

  // Get metric thresholds for evaluation
  getThresholds() {
    return {
      FCP: { good: 1800, needsImprovement: 3000 },
      LCP: { good: 2500, needsImprovement: 4000 },
      FID: { good: 100, needsImprovement: 300 },
      CLS: { good: 0.1, needsImprovement: 0.25 },
      TTFB: { good: 800, needsImprovement: 1800 },
      TTI: { good: 3800, needsImprovement: 7300 },
      INP: { good: 200, needsImprovement: 500 }
    };
  }

  // Evaluate metric performance
  evaluateMetric(metricName, value) {
    const thresholds = this.getThresholds();
    const threshold = thresholds[metricName];
    
    if (!threshold) return 'unknown';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  // Generate performance report
  generateReport() {
    const metrics = this.getMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      url: metrics.url,
      metrics: {},
      score: 0
    };

    const weights = {
      FCP: 0.15,
      LCP: 0.25,
      FID: 0.15,
      CLS: 0.25,
      TTFB: 0.1,
      TTI: 0.1
    };

    let totalWeight = 0;
    let weightedScore = 0;

    Object.keys(weights).forEach(metric => {
      if (metrics[metric] !== null) {
        const evaluation = this.evaluateMetric(metric, metrics[metric]);
        report.metrics[metric] = {
          value: metrics[metric],
          evaluation,
          weight: weights[metric]
        };

        // Calculate score
        let score = 0;
        if (evaluation === 'good') score = 100;
        else if (evaluation === 'needs-improvement') score = 50;
        
        weightedScore += score * weights[metric];
        totalWeight += weights[metric];
      }
    });

    report.score = totalWeight > 0 ? Math.round(weightedScore / totalWeight) : 0;
    
    return report;
  }

  // Cleanup observers
  disconnect() {
    this.observers.forEach(observer => {
      try {
        observer.disconnect();
      } catch (e) {
        console.error('Failed to disconnect observer:', e);
      }
    });
    this.observers = [];
  }
}

// Singleton instance
let monitorInstance = null;

// Get or create monitor instance
export function getPerformanceMonitor() {
  if (typeof window === 'undefined') return null;
  
  if (!monitorInstance) {
    monitorInstance = new PerformanceMonitor();
  }
  
  return monitorInstance;
}

// Initialize Web Vitals reporting
export function initWebVitals(callback) {
  const monitor = getPerformanceMonitor();
  
  if (monitor && callback) {
    // Report metrics when available
    const reportVital = (metric) => {
      callback({
        name: metric.name,
        value: metric.value,
        rating: monitor.evaluateMetric(metric.name, metric.value)
      });
    };

    // Set up reporting interval
    setInterval(() => {
      const metrics = monitor.getMetrics();
      Object.keys(metrics).forEach(key => {
        if (metrics[key] !== null && key !== 'custom' && key !== 'timestamp' && key !== 'url') {
          reportVital({ name: key, value: metrics[key] });
        }
      });
    }, 10000); // Report every 10 seconds
  }
}

// Export for use in _app.tsx
export default {
  getPerformanceMonitor,
  initWebVitals
};