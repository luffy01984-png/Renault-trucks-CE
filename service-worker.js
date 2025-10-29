<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Avantages Partenaires | Renault Trucks CE Bourg-en-Bresse</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Police Inter -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Inter', sans-serif; }

    /* Splash screen */
    #splashScreen {
      position: fixed;
      inset: 0;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 1;
      transition: opacity 0.8s ease; /* transition pour fondu */
    }
    #splashScreen.hidden { opacity: 0; pointer-events: none; }

    .partner-content { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.5s ease, opacity 0.4s ease, margin-top 0.4s ease; margin-top: 0; }
    .partner-content.active { opacity: 1; margin-top: 1rem; max-height: 600px; }
    input:focus, textarea:focus { border-color: #dc2626 !important; box-shadow: 0 0 0 3px rgba(220,38,38,0.4); }
    .partner-link { display: flex; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; gap: 0.75rem; }
    .partner-link:last-child { border-bottom: none; }
    .partner-logo { height: 30px; width: 30px; object-fit: contain; border-radius: 4px; }
    #installBanner { position: fixed; bottom: 15px; left: 10px; right: 10px; background: #dc2626; color: #fff; padding: 10px 15px; border-radius: 8px; text-align: center; font-family: sans-serif; z-index: 1000; display: flex; justify-content: space-between; align-items: center; }
    #installBanner button { background: #fff; color: #dc2626; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold; }
  </style>

  <!-- Favicon et icônes -->
  <link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg">
  <link rel="icon" type="image/png" sizes="192x192" href="https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg">
  <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#dc2626">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="CE Renault Trucks">

  <script>
    function toggleCategory(id) {
      const section = document.getElementById(id);
      const card = document.querySelector(`[onclick="toggleCategory('${id}')"]`);
      document.querySelectorAll('.partner-content').forEach(item => { if(item.id !== id) item.classList.remove('active'); });
      document.querySelectorAll('.category-card').forEach(cardEl => {
        cardEl.classList.remove("shadow-red-500/50", "shadow-xl");
        cardEl.classList.add("shadow-lg");
      });
      section.classList.toggle('active');
      if(section.classList.contains('active')){
        card.classList.remove("shadow-lg");
        card.classList.add("shadow-xl", "shadow-red-500/50");
      } else {
        card.classList.remove("shadow-xl", "shadow-red-500/50");
        card.classList.add("shadow-lg");
      }
    }

    // Splash screen avec fondu
    window.addEventListener('load', () => {
      setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        splash.classList.add('hidden'); // déclenche le fondu
      }, 2500); // affichage 2,5 secondes
    });

    // PWA install banner
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const banner = document.createElement('div');
      banner.id = 'installBanner';
      banner.innerHTML = `Installer l'application <button id="installBtn">Installer</button>`;
      document.body.appendChild(banner);
      document.getElementById('installBtn').onclick = async () => {
        banner.style.display = 'none';
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
    });

    // Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker enregistré ✅'))
        .catch(err => console.log('Erreur Service Worker:', err));
    }
  </script>
</head>

<body class="bg-gray-50 text-gray-900">

  <!-- SPLASH SCREEN -->
  <div id="splashScreen">
    <img src="https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg" alt="Logo Renault Trucks" class="w-64 md:w-96">
  </div>

  <!-- HEADER -->
  <header class="bg-white shadow-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      <div class="flex items-center space-x-2">
        <img src="https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/1761728183491.jpg" alt="Logo Renault Trucks" class="h-10 rounded-md">
        <span class="text-xs font-bold text-red-600 uppercase tracking-widest hidden sm:inline">CE Bourg-en-Bresse</span>
      </div>
      <nav class="space-x-4 text-sm font-semibold">
        <a href="#categories" class="text-gray-600 hover:text-red-600 transition">Partenaires</a>
        <a href="#contact" class="text-white bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 transition">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Le reste du contenu reste inchangé... -->

</body>
</html>
