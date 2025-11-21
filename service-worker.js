// CHANGE LA VERSION ICI à chaque déploiement
const CACHE_NAME = 'renault-trucks-cse-v2.7'; 
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/style.css',
  './assets/app.js',
  './assets/Header.webp',
  './assets/elecctra.webp'
];

// Installation : pré-cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .catch(err => console.error('SW: Erreur pré-cache', err))
  );
  self.skipWaiting(); // active le SW immédiatement
});

// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch : network-first pour fichiers critiques, cache-first pour les autres
self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.destination === 'document' || request.url.endsWith('index.html') || request.url.endsWith('app.js')) {
    event.respondWith(
      fetch(request)
        .then(networkResponse => {
          caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse.clone()));
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
  } else {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});

// Gestion du message pour forcer update
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
