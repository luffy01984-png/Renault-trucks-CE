const CACHE_NAME = "renault-cse-cache-v3"; // Incrémentez à chaque mise à jour
const urlsToCache = [
  "/", 
  "/index.html", 
  "/manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",

  // Splash + Header
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/elecctra.webp",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Header.webp",

  // RESTAURANTS
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/food%20truck%20fermier.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/le%20loft%20pizza.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/WokAna.png",

  // ARTISANS DU GOÛT
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/janny%20fruits.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Les_pepites_bressanes_new.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/lou%20pan.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Monts%20et%20Terroir.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/grain%20dpain.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/boucherie_andré.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Papilles_Ain_solites.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/biocoop.jpg",

  // AUTOMOBILE
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/123%20parebrise.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/apc.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/auto%20securitas.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Autosur_new.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/renault.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/speedy.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Vulco.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/0€_PareBrise.webp",

  // ANIMAUX
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/food%20animo.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/espace_passon_new.png",

  // TRAVAUX / MAISON
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/ecocuisine.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/schmidt.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/michel%20parisot.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/sikkens.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Les%20coqs%20de%20Bresse.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/habitat%20confort.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Conforama.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/chaleur%20et%20bois.jpg",

  // TERROIR
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Cerdon.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/la_cezee.jpg",

  // FINANCEMENT
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/La_centrale_de_finacement.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/hymosti.jpg",

  // QUOTIDIEN
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Salon%20de%20coiffure.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/salondecoiffure.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/a%20fleur%20de%20pot.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/cigusto.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/montbarbon.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/la%20rek1ke.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Librairie_papeterie.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/Dessous_dessus.png",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/ConceptOptique.png",

  // ENFANTS
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/jouet%20club.jpg",
  "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/autour%20de%20bebe.jpg"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// FETCH
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// ACTIVATE
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
