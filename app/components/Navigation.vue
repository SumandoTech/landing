<template>
  <header :class="[
    'sticky top-0 z-50 w-full border-b transition-all duration-300',
    isScrolled
      ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
      : 'bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-900/80 dark:via-gray-900/40 dark:to-transparent dark:backdrop-blur-md border-gray-200 dark:border-white/10'
  ]">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo_sumando_1.png" alt="Fundación Sumando" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-6">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">
            {{ item.name }}
          </a>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" type="button"
            class="size-9.5 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
            <svg v-if="!isDark" class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <svg v-else class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </button>
          <!-- End Theme Toggle -->
        </div>

        <!-- Mobile menu button -->
        <button type="button"
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          data-hs-overlay="#mobile-menu" aria-controls="mobile-menu" aria-label="Toggle navigation">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div id="mobile-menu"
      class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white dark:bg-gray-800 border-e border-gray-200 dark:border-gray-700"
      role="dialog" tabindex="-1" aria-labelledby="mobile-menu-label">
      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 id="mobile-menu-label" class="font-bold text-gray-800 dark:text-white">
          Menú
        </h3>
        <button type="button"
          class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600"
          aria-label="Close" data-hs-overlay="#mobile-menu">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4">
        <nav class="flex flex-col gap-4">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
            data-hs-overlay="#mobile-menu">
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>

const isDark = useState('isDark', () => false);
const isScrolled = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (import.meta.client) {
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem('hs_theme', isDark.value ? 'dark' : 'light');
  }
};

onMounted(() => {
  if (import.meta.client) {
    // Detectar scroll para cambiar estilos del header
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializar

    // Inicializar Preline
    import('preline/preline').then((module) => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });

    // Limpiar backdrop cuando el menú se cierra
    const cleanupBackdrop = () => {
      const backdrop = document.querySelector('.hs-overlay-backdrop');
      if (backdrop && !document.querySelector('.hs-overlay.open')) {
        backdrop.remove();
      }
    };

    // Escuchar eventos de cierre del overlay
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('[data-hs-overlay="#mobile-menu"]')) {
        setTimeout(cleanupBackdrop, 400);
      }
    });

    // También limpiar al presionar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setTimeout(cleanupBackdrop, 400);
      }
    });
  }
});


const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Programas', href: '#programas' },
  { name: 'Contacto', href: '#contacto' },
];
</script>
