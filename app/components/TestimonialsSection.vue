<template>
  <section class="section-padding bg-white dark:bg-gray-900">
    <div class="container-custom">

      <!-- Header -->
      <div class="max-w-3xl mb-12">
        <span
          class="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
          Testimonios
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Lo que dicen nuestros clientes
        </h2>
        <div class="w-24 h-1 bg-green-600 mb-6 rounded-full"></div>
        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Directores y equipos técnicos de instituciones educativas comparten el impacto de trabajar con Fundación Sumando
        </p>
      </div>

      <!-- Carrusel -->
      <div class="relative" @mouseenter="pause" @mouseleave="resume">

        <!-- Tarjeta de testimonio -->
        <div
          class="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 md:p-12 lg:px-20 min-h-[26rem] flex items-center">

          <Transition :name="direction === 'next' ? 'slide-next' : 'slide-prev'" mode="out-in">
            <div :key="current" class="w-full">

              <!-- Ícono de comillas -->
              <svg class="w-12 h-12 text-green-600/30 dark:text-green-400/30 mb-6" fill="currentColor"
                viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>

              <!-- Badge de resultado destacado -->
              <span
                class="inline-block px-4 py-1.5 bg-green-600 text-white rounded-full text-sm font-bold mb-6 shadow-sm">
                {{ testimonials[current].result }}
              </span>

              <!-- Cita -->
              <blockquote
                class="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 font-light">
                "{{ testimonials[current].quote }}"
              </blockquote>

              <!-- Autor -->
              <footer class="border-t border-gray-100 dark:border-gray-700 pt-6">
                <p class="text-lg font-bold text-gray-900 dark:text-white">
                  {{ testimonials[current].name }}
                </p>
                <p class="text-green-700 dark:text-green-400 font-medium">
                  {{ testimonials[current].role }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ testimonials[current].location }}<span v-if="testimonials[current].period"> · {{ testimonials[current].period }}</span>
                </p>
              </footer>

            </div>
          </Transition>

          <!-- Flechas -->
          <button @click="prev" aria-label="Testimonio anterior"
            class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-md transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="next" aria-label="Testimonio siguiente"
            class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-md transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Controles móviles + puntos -->
        <div class="flex items-center justify-center gap-6 mt-8">
          <button @click="prev" aria-label="Testimonio anterior"
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Puntos -->
          <div class="flex items-center gap-2">
            <button v-for="(t, index) in testimonials" :key="`dot-${index}`" @click="goTo(index)"
              :aria-label="`Ir al testimonio ${index + 1}`"
              class="h-2.5 rounded-full transition-all"
              :class="index === current ? 'w-8 bg-green-600' : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'">
            </button>
          </div>

          <button @click="next" aria-label="Testimonio siguiente"
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-green-600 hover:text-white transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const testimonials = [
  {
    quote: 'Lo que más destaco es el enfoque sistemático hacia los docentes que les corresponde rendir SIMCE y la entrega de estrategias remediales, que fue sin duda lo que permitió asegurar los aprendizajes de nuestros estudiantes. Al Equipo Directivo le ha permitido monitorear las habilidades de los estudiantes, como las remediales que han debido aplicar los docentes, lo que impacta en una mejora de nuestras prácticas pedagógicas.',
    name: 'María Elena Silva',
    role: 'Directora, Colegio San Cristóbal College',
    location: 'San Miguel',
    result: 'Mejora resultados SIMCE'
  },
  {
    quote: 'Es importante destacar que el Liceo República de Siria, según el ranking de los mejores colegios municipales del país, está en 3er lugar por sus resultados PAES, donde rindieron la prueba 133 estudiantes obteniendo a su vez 8 puntajes nacionales. Se valora el aporte de SUMANDO en estos logros.',
    name: 'Óscar Vilches Santibáñez',
    role: 'Director, Liceo República de Siria',
    location: 'Ñuñoa',
    period: '2012 – 2025',
    result: '3er lugar nacional municipal · 8 puntajes nacionales PAES'
  },
  {
    quote: 'Desde el año 2023 a la fecha, en nuestra institución se ha desarrollado un completo plan de asesoría académica, obteniendo excelentes resultados que han impactado positivamente en el aprendizaje de nuestros estudiantes. A consecuencia de ello, nuestro Liceo Lenka Franulic está dentro de los mejores colegios con dependencia municipal en todo el país según la prueba PAES 2025, obteniendo resultados sobre 730 puntos PAES y 310 puntos SIMCE.',
    name: 'Jennifer Morris Peralta',
    role: 'Directora, Liceo Lenka Franulic',
    location: 'Ñuñoa',
    period: '2005 – 2026',
    result: '+730 pts PAES · 310 pts SIMCE'
  },
  {
    quote: 'Cabe destacar el apoyo constante de la Fundación Sumando, que ha fortalecido la capacidad de superación personal de nuestros alumnos y ha fomentado un modelo pedagógico sostenible. Este modelo se basa en el trabajo en equipo, el análisis de resultados y un seguimiento constante.',
    name: 'Isabel Ibarra Silva',
    role: 'Directora, Colegio San Damián',
    location: 'La Florida',
    result: 'Modelo pedagógico sostenible'
  },
  {
    quote: 'Se ha implementado un sistema robusto de evaluaciones y monitoreo de habilidades, que ha promovido la confianza personal de nuestros alumnos y profesores. Asimismo, su enfoque sistemático hacia los docentes que les corresponde rendir SIMCE este año 2024 ha permitido la creación de estrategias remediales, asegurando aprendizajes significativos dentro de nuestra comunidad educativa.',
    name: 'Jessica Alvear Godoy',
    role: 'Jefa Técnica, Liceo José Victorino Lastarria',
    location: 'Providencia',
    result: 'Estrategias remediales SIMCE'
  }
];

const current = ref(0);
const direction = ref('next');
let timer = null;
const INTERVAL = 6000;

function goTo(index) {
  direction.value = index > current.value ? 'next' : 'prev';
  current.value = index;
  restart();
}

function next() {
  direction.value = 'next';
  current.value = (current.value + 1) % testimonials.length;
  restart();
}

function prev() {
  direction.value = 'prev';
  current.value = (current.value - 1 + testimonials.length) % testimonials.length;
  restart();
}

function start() {
  timer = setInterval(() => {
    direction.value = 'next';
    current.value = (current.value + 1) % testimonials.length;
  }, INTERVAL);
}

function restart() {
  pause();
  start();
}

function pause() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

function resume() {
  if (!timer) start();
}

onMounted(start);
onBeforeUnmount(pause);
</script>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
