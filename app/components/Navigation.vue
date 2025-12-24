<template>
  <header :class="[
    'sticky top-0 z-50 w-full border-b transition-all duration-300',
    'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
  ]">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/logo_sumando_1.png" alt="Fundación Sumando" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ item.name }}
          </a>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" type="button"
            class="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" type="button"
          class="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-gray-200 dark:border-gray-700">
        <div class="container-custom py-4 space-y-1">
          <a v-for="item in navigation" :key="item.name" :href="item.href" @click="closeMobileMenu"
            class="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ item.name }}
          </a>

          <!-- Theme toggle in mobile -->
          <button @click="toggleTheme"
            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>{{ isDark ? 'Modo claro' : 'Modo oscuro' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isDark = useState('isDark', () => false);
const isMobileMenuOpen = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (import.meta.client) {
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem('hs_theme', isDark.value ? 'dark' : 'light');
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Cerrar menú al cambiar de tamaño a desktop
onMounted(() => {
  if (import.meta.client) {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        isMobileMenuOpen.value = false;
      }
    };
    window.addEventListener('resize', handleResize);

    // Limpiar al desmontar
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
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

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
