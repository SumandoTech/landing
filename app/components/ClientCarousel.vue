<template>
  <section
    class="bg-white dark:bg-gray-900 section-padding border-y border-gray-200 dark:border-gray-700 dark:text-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
          Instituciones que Confían en Nosotros
        </h2>
        <div class="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
          Colaboramos con las instituciones educativas más prestigiosas del país
        </p>
      </div>

      <!-- Logos Carousel -->
      <div class="relative overflow-hidden">
        <!-- Gradient overlays para efecto fade -->
        <div
          class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none">
        </div>
        <div
          class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none">
        </div>

        <!-- Scrolling container -->
        <div class="flex animate-scroll-slow">
          <!-- First set of logos -->
          <div class="flex items-center gap-8 px-6">
            <div v-for="(client, index) in clients" :key="`client-1-${index}`"
              class="flex-shrink-0 w-56 h-48 flex items-center justify-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group">
              <img :src="client.logo" :alt="client.name"
                class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>

          <!-- Duplicate set for seamless loop -->
          <div class="flex items-center gap-8 px-6">
            <div v-for="(client, index) in clients" :key="`client-2-${index}`"
              class="flex-shrink-0 w-56 h-48 flex items-center justify-center p-8 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group">
              <img :src="client.logo" :alt="client.name"
                class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      <!-- Grid de Clientes (Nuevo estilo Preline) -->
      <div class="mt-20">
        <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 class="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-neutral-200">
            Colaboramos con las instituciones educativas más prestigiosas del país
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-6xl mx-auto">
          <div v-for="(client, index) in clients.slice(0, 8)" :key="`grid-${index}`"
            class="p-6 md:p-8 bg-white dark:bg-white rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
            <img :src="client.logo" :alt="client.name"
              class="w-full h-auto min-h-32 max-h-40 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const clients = [
  { name: 'Colegio San Ignacio', logo: '/clientes/san_ignacio.png' },
  { name: 'Colegio San Cristóbal', logo: '/clientes/san_cristobal.png' },
  { name: 'Colegio San Diego', logo: '/clientes/san_diego.png' },
  { name: 'Colegio San Damián', logo: '/clientes/san_damian.png' },
  { name: 'Colegio Jorge Huneeus', logo: '/clientes/jorge_huneeus.png' },
  { name: 'Colegio Lenka Franulic', logo: '/clientes/lenka_franulic.png' },
  { name: 'Municipalidad de Ñuñoa', logo: '/clientes/nunoa.png' },
  { name: 'Colegio Siria', logo: '/clientes/siria.png' },
];
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-slow {
  animation: scroll 40s linear infinite;
}

.animate-scroll-slow:hover {
  animation-play-state: paused;
}
</style>
