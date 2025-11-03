// Nom du cache et version
const CACHE_NAME = 'cse-renault-cache-v1';

// Fichiers à mettre en cache
const urlsToCache = [
  '/', // start_url
  '/index.html',
  '/manifest.json',
  '/assets/icons/icon-72.png',
  '/assets/icons/icon-96.png',
  '/assets/icons/icon-128.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  // ajoute ici toutes tes images, CSS, JS essentiels
];

// Installation du service worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Mise en cache des fichiers essentiels');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activation');
  // Supprimer les anciens caches
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Suppression ancien cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Retourner la ressource depuis le cache
        return response;
      }
      // Sinon, récupérer depuis le réseau
      return fetch(event.request).catch(() => {
        // Optionnel : on peut mettre une page fallback en cas d'échec
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
