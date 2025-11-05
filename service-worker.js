const CACHE_NAME = "renault-cse-cache-v1";
const urlsToCache = [
  "/", "/index.html", "/manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",

  // Logo et splash
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/electra%20maj.jpg",

  // Restaurants
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/food%20truck%20fermier.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/le%20loft%20pizza.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/WokAna.png",

  // Artisans du goût
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/janny%20fruits.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Les_pepites_bressanes_new.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/lou%20pan.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Monts%20et%20Terroir.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/grain%20dpain.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/boucherie_andré.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Papilles_Ain_solites.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/biocoop.jpg",

  // Automobile
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/123%20parebrise.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/apc.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/auto%20securitas.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/autosur.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/renault.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/speedy.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Vulco.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/0%E2%82%AC_PareBrise.png",

  // Animaux
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/food%20animo.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/espace_passon_new.png",

  // Travaux / Maison
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/ecocuisine.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/schmidt.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/michel%20parisot.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/sikkens.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Les%20coqs%20de%20Bresse.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/habitat%20confort.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Conforama.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/chaleur%20et%20bois.jpg",

  // Terroir
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Cerdon.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/la_cezee.jpg",

  // Financement
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/La_centrale_de_finacement.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/hymosti.jpg",

  // Quotidien
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Salon%20de%20coiffure.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/salondecoiffure.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/a%20fleur%20de%20pot.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/cigusto.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/montbarbon.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/la%20rek1ke.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Librairie_papeterie.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Dessous_dessus.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/ConceptOptique.png",

  // Enfants
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/jouet%20club.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/autour%20de%20bebe.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) return caches.delete(key);
        })
      )
    )
  );
});
