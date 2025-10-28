self.addEventListener('install', event => {
  console.log('✅ Service Worker installé');
});

self.addEventListener('fetch', event => {
  // Ici, tu pourrais ajouter de la mise en cache plus tard si tu veux
});
