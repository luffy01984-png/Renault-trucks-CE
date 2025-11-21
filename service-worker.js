const CACHE_NAME = 'renault-trucks-cse-v2.5';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/style.css',
  './assets/app.js',
  './assets/Header.webp',
  './assets/elecctra.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .catch(err => console.error('SW: Erreur pré-cache', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.destination === 'document' ||
      request.destination === 'script' ||
      request.destination === 'style') {
    // Network-first avec fallback
    event.respondWith(
      fetch(request).then(networkResponse => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        return networkResponse;
      }).catch(() => caches.match(request).catch(() => caches.match('./')))
    );
  } else {
    // Cache-first pour images et fonts
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
