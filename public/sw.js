// Service Worker for Rolls-Royce Dubai
const CACHE_NAME = 'rolls-royce-dubai-v1';
const urlsToCache = [
  '/',
  '/offline',
  '/manifest.json',
  '/images/Rolls-Royce-car-icon.jpg',
  '/images/logo.jpg',
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http(s) URLs
  if (!event.request.url.startsWith('http://') && !event.request.url.startsWith('https://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Add to cache for future use
          caches.open(CACHE_NAME)
            .then((cache) => {
              // Cache images, fonts, and static assets
              if (event.request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|woff|woff2|ttf|eot|css|js)$/)) {
                cache.put(event.request, responseToCache);
              }
            })
            .catch((error) => {
              console.log('Cache put error:', error);
            });

          return response;
        });
      })
      .catch(() => {
        // If offline and request fails, return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/offline');
        }
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'booking-sync') {
    event.waitUntil(syncBookingData());
  }
});

async function syncBookingData() {
  // Implement background sync for booking forms
  console.log('Syncing booking data...');
}