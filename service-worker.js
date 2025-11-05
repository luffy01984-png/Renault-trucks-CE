const CACHE_NAME = 'cse-renault-trucks-cache-v1';
const FILES_TO_CACHE = [
  '/cse-renault-trucks/',
  '/cse-renault-trucks/index.html',
  '/cse-renault-trucks/manifest.json',
  '/cse-renault-trucks/assets/icons/icon-192.png',
  '/cse-renault-trucks/assets/icons/icon-512.png',
  '/cse-renault-trucks/assets/icons/icon-1024.png',
  '/cse-renault-trucks/favicon.ico',
  // CSS / JS externes
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// INSTALL
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          // Mise en cache du nouveau fichier
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => {
      // fallback si offline et fichier non en cache
      if (event.request.destination === 'document') {
        return caches.match('/cse-renault-trucks/index.html');
      }
    })
  );
});
