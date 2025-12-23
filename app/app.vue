<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navigation />
    <main>
      <HeroSection />
      <ServicesSection />
      <ClientCarousel />
      <AboutSection />
      <VisionMissionSection />
      <ProgramsSection />
      <ContactSection />
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
