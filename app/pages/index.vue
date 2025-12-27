<template>
    <div class="relative">
        <!-- Fondo con patrón que está DETRÁS de todo -->
        <div class="absolute inset-0 bg-white dark:bg-gray-900">
            <BackgroundPattern />
        </div>

        <!-- Hero Section (encima del patrón) -->
        <div class="relative z-30">
            <HeroSection />
        </div>

        <!-- Secciones (encima del patrón) -->
        <div class="relative z-10">
            <ServicesSection />
            <ClientCarousel />
            <AboutSection />
            <ProgramsSection />
            <ContactSection />
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Fundación Sumando - Líderes en Transformación Educativa',
});
</script>
