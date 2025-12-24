<template>
  <section class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">
      <!-- Grid de 2 columnas: Grid de clientes a la izquierda, Título sticky a la derecha -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- Columna Izquierda: Grid de Clientes (2x4) -->
        <div class="order-2 lg:order-1">
          <div class="grid grid-cols-2 gap-4 lg:gap-6 max-w-2xl">
            <div v-for="(client, index) in clients" :key="`grid-${index}`"
              class="p-2 md:p-8 lg:p-1 bg-white rounded-xl border border-gray-200 hover:border-green-600 hover:shadow-lg transition-all">
              <img :src="client.logo" :alt="client.name"
                class="w-full h-auto min-h-40 max-h-40 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Header Sticky -->
        <div class="order-1 lg:order-2 lg:sticky lg:top-32">
          <span
            class="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Nuestros Clientes
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Instituciones que Confían en Nosotros
          </h2>
          <div class="w-24 h-1 bg-green-600 mb-6 rounded-full"></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Colaboramos con las instituciones educativas más prestigiosas del país
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: 'Colegio San Ignacio', logo: '/clientes/san_ignacio.png' },
  { name: 'Colegio San Diego', logo: '/clientes/san_diego.png' },
  { name: 'Colegio San Cristóbal', logo: '/clientes/san_cristobal.png' },
  { name: 'Colegio San Damián', logo: '/clientes/san_damian.png' },
  { name: 'Colegio Jorge Huneeus', logo: '/clientes/jorge_huneeus.png' },
  { name: 'Colegio Lenka Franulic', logo: '/clientes/lenka_franulic.png' },
  { name: 'Colegio Ñuñoa', logo: '/clientes/nunoa.png' },
  { name: 'Colegio Siria', logo: '/clientes/siria.png' }
];
</script>
