// Global type declarations

interface Window {
  gtag?: (
    command: 'config' | 'event' | 'set',
    targetId: string,
    config?: {
      page_path?: string;
      event_category?: string;
      event_label?: string;
      value?: any;
      non_interaction?: boolean;
      [key: string]: any;
    }
  ) => void;
  dataLayer?: any[];
  __performanceUtils?: {
    memoryManager: any;
    setupLazyLoading: () => void;
    deferNonCriticalScripts: () => void;
  };
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number }
  ) => number;
  cancelIdleCallback?: (id: number) => void;
}

// Performance Observer types
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  duration: number;
  cancelable: boolean;
  target?: EventTarget | null;
}

// Navigation types
declare global {
  interface Navigator {
    connection?: {
      effectiveType?: '4g' | '3g' | '2g' | 'slow-2g';
      saveData?: boolean;
      addEventListener?: (type: string, listener: () => void) => void;
      removeEventListener?: (type: string, listener: () => void) => void;
    };
    mozConnection?: Navigator['connection'];
    webkitConnection?: Navigator['connection'];
  }
}

export {};