<template>
  <div class="relative min-h-screen">
    <!-- Fondo fijo con patrón -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <!-- Patrón de puntos más visible -->
      <div class="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style="background-image: radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px); background-size: 32px 32px;">
      </div>

      <!-- Formas geométricas flotantes más visibles -->
      <div class="absolute top-20 left-10 w-72 h-72 rounded-full border-2 border-blue-400/30 dark:border-blue-400/20">
      </div>
      <div class="absolute top-1/4 right-20 w-96 h-96 rounded-full border-2 border-blue-500/25 dark:border-blue-500/20">
      </div>
      <div class="absolute top-1/2 left-1/4 w-64 h-64 rounded-full border-2 border-blue-300/30 dark:border-blue-300/15">
      </div>
      <div
        class="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full border-2 border-blue-400/25 dark:border-blue-400/15">
      </div>
      <div
        class="absolute bottom-20 left-20 w-48 h-48 rounded-full border-2 border-blue-500/30 dark:border-blue-500/20">
      </div>
      <div
        class="absolute top-1/3 right-1/4 w-56 h-56 rounded-full border-2 border-blue-300/25 dark:border-blue-300/15">
      </div>

      <!-- Gradiente sutil -->
      <div
        class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/40 dark:from-blue-900/20 to-transparent">
      </div>
      <div
        class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/50 dark:from-blue-900/20 to-transparent">
      </div>
    </div>

    <!-- Contenido -->
    <div class="relative z-10">
      <NuxtRouteAnnouncer />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientCarousel />
        <AboutSection />
        <ProgramsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>

const isDark = useState("isDark", () => false);

// Set page metadata
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  title: 'Fundación Sumando - Transformando la Educación',
  meta: [
    {
      name: 'description',
      content: 'Líderes en transformación educativa. Desarrollamos herramientas innovadoras que facilitan el trabajo docente y optimizan los aprendizajes en instituciones educativas de todo Chile.'
    },
    { property: 'og:title', content: 'Fundación Sumando - Transformando la Educación' },
    { property: 'og:description', content: 'Líderes en transformación educativa con más de 15 años de experiencia.' },
    { property: 'og:type', content: 'website' },
  ]
});

onMounted(() => {
  if (import.meta.client) {
    const savedTheme = localStorage.getItem("hs_theme");
    if (savedTheme === "dark") {
      isDark.value = true;
      document.documentElement.classList.add('dark');
    } else if (savedTheme === "light") {
      isDark.value = false;
      document.documentElement.classList.remove('dark');
    } else {
      // Auto mode - check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      isDark.value = prefersDark;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }
});
</script>
