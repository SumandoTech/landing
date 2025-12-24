<template>
  <div class="relative min-h-screen">
    <NuxtRouteAnnouncer />
    <Navigation />
    <main>
      <HeroSection />

      <!-- Contenedor de secciones con patrón -->
      <div class="relative">
        <!-- Patrón de fondo sobre las secciones (no hero ni header) -->
        <div class="absolute inset-0 pointer-events-none z-[100] overflow-hidden">
          <!-- Patrón de puntos -->
          <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
            style="background-image: radial-gradient(circle, #3b82f6 2px, transparent 2px); background-size: 40px 40px;">
          </div>

          <!-- Círculos flotantes -->
          <div
            class="absolute -top-20 -left-20 w-96 h-96 rounded-full border-2 border-blue-400/20 dark:border-blue-400/15">
          </div>
          <div
            class="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full border-2 border-blue-500/15 dark:border-blue-500/10">
          </div>
          <div
            class="absolute top-1/2 -left-24 w-80 h-80 rounded-full border-2 border-blue-300/20 dark:border-blue-300/15">
          </div>
          <div
            class="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full border-2 border-blue-400/15 dark:border-blue-400/10">
          </div>
          <div
            class="absolute bottom-1/3 -left-16 w-64 h-64 rounded-full border-2 border-blue-500/20 dark:border-blue-500/15">
          </div>

          <!-- Isologos rotados y tenues en azul -->
          <img src="/isologo_sumando.png" alt=""
            class="absolute top-[10%] right-[5%] w-40 h-40 opacity-[0.06] dark:opacity-[0.08] rotate-12"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
          <img src="/isologo_sumando.png" alt=""
            class="absolute top-[35%] left-[8%] w-32 h-32 opacity-[0.06] dark:opacity-[0.08] -rotate-6"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
          <img src="/isologo_sumando.png" alt=""
            class="absolute top-[55%] right-[15%] w-36 h-36 opacity-[0.06] dark:opacity-[0.08] rotate-[20deg]"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
          <img src="/isologo_sumando.png" alt=""
            class="absolute top-[75%] left-[20%] w-28 h-28 opacity-[0.06] dark:opacity-[0.08] -rotate-12"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
          <img src="/isologo_sumando.png" alt=""
            class="absolute bottom-[15%] right-[8%] w-44 h-44 opacity-[0.06] dark:opacity-[0.08] rotate-[15deg]"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
        </div>

        <!-- Secciones -->
        <ServicesSection />
        <ClientCarousel />
        <AboutSection />
        <ProgramsSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
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
