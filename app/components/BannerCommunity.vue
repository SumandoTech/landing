<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image First on Desktop -->
        <div class="relative order-2 lg:order-1">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/banner-community.jpg"
              alt="Desarrollo comunitario"
              class="w-full h-auto object-cover"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/30 to-transparent"></div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-200 rounded-full -z-10"></div>
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary-200 rounded-full -z-10"></div>
        </div>

        <!-- Content -->
        <div class="space-y-6 order-1 lg:order-2">
          <div class="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
            Desarrollo Comunitario
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Fortaleciendo <span class="text-gradient">comunidades</span> resilientes
          </h2>
          
          <p class="text-xl text-gray-600 leading-relaxed">
            Trabajamos codo a codo con las comunidades para identificar sus necesidades y co-crear soluciones sostenibles que generen impacto duradero.
          </p>
          
          <!-- Features List -->
          <div class="space-y-4 pt-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Participación Activa</h3>
                <p class="text-gray-600">Involucramos a la comunidad en cada etapa del proceso</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Soluciones Sostenibles</h3>
                <p class="text-gray-600">Proyectos diseñados para generar impacto a largo plazo</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Empoderamiento Local</h3>
                <p class="text-gray-600">Desarrollamos capacidades locales para la autogestión</p>
              </div>
            </div>
          </div>
          
          <div class="pt-4">
            <a href="#proyectos" class="btn-primary group">
              Conoce nuestros proyectos
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = '/images/hero-image.jpg'; // Fallback to hero image
};
</script>
