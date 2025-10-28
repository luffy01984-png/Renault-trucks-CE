const CACHE_NAME = 'ce-renault-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  // Ajoute ici toutes les images / assets que tu veux mettre en cache
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/New_Renault_Trucks_Logo.png',
  'https://cdn.tailwindcss.com'
];

// INSTALLATION - mise en cache des ressources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// ACTIVATION - suppression des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// FETCH - servir les ressources depuis le cache si disponibles
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
