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

  // Catégories images
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Restaurant.webp',
  'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/maison_travaux.jpg',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/futuristic-black-glowing-car-desktop-wallpaper-preview.jpg',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Pretaporter.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Beaut%C3%A9-bien.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/LogoCulture.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/services.png',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/enfants.webp',
  'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/financement.webp',

  // PARTENAIRES RESTAURANTS
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/food%20truck%20fermier.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/LeLoft.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/La-Paella.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Pasta%26Pizza.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Rods.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/WokAna.webp',

  // PARTENAIRES ARTISANS DU GOÛT
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/biocoop.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/boucherie_andré.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Cerdon.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/grain%20dpain.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/janny%20fruits.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/la_cezee.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Les_pepites_bressanes_new.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/lou%20pan.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Monts%20et%20Terroir.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Papilles_Ain_solites.webp',

  // PARTENAIRES TRAVAUX
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Arbres_Co.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/AfrEnergie.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/chaleur%20et%20bois.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Conforama.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Cuisinella.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/DSCV.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/ecocuisine.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/habitat%20confort.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Les%20coqs%20de%20Bresse.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/MirePoix.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/michel%20parisot.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/schmidt.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/sikkens.webp',

  // PARTENAIRES AUTOMOBILE
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/0%E2%82%AC_PareBrise.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/123%20parebrise.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/apc.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/auto%20securitas.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Autosur_new.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/CtEasy.com.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/renault.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/RJAuto.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/speedy.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Vulco.webp',

  // PARTENAIRES PRET A PORTER
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Dessous_dessus.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Gambetta.webp',

  // PARTENAIRES BEAUTE / BIEN-ETRE
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/15ThAvenue.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Gallerie%20102.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/LeSalondeshommes.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Renaissance.webp',

  // PARTENAIRES CULTURE
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/declic-ludik.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Librairie_papeterie.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/montbarbon.webp',

  // PARTENAIRES QUOTIDIEN
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/a%20fleur%20de%20pot.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Ca-cree-.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/cigusto.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/ConceptOptique.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/la%20rek1ke.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Shivaa.webp',

  // PARTENAIRES ENFANTS
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/autour%20de%20bebe.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/KingJouet.webp',

  // PARTENAIRES ANIMAL
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/espace_passon_new.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/food%20animo.webp',

  // PARTENAIRES FINANCEMENT
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/hymosti.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/La_centrale_de_finacement.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Meilleur-taux.webp'
]

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
