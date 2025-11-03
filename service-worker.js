const CACHE_NAME = 'cse-renault-trucks-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  // Logo et images principales
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/terroir.png',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/enfants.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/services.png',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/financement.webp',
  // Ici tu peux ajouter toutes les images partenaires si nécessaire
];

// Installation du SW et mise en cache
self.addEventListener('install', event => {
  console.log('[Service Worker] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching assets...');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activation...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse; // renvoyer depuis le cache si disponible
      }
      return fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            // Ne pas mettre en cache les requêtes non-GET ou externes
            if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          // Optionnel : fallback pour les pages hors-ligne
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
