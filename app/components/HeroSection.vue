<template>
  <section class="relative bg-white dark:bg-gray-900 pb-0">
    <!-- Hero Slider -->
    <div class="relative h-[700px] overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900">
      <!-- Slides Container -->
      <div class="relative h-full">
        <!-- Slide 1 -->
        <transition name="slide-fade">
          <div v-show="currentSlide === 0"
            class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95">
            <div class="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
              style="background-image: url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070');">
            </div>

            <div class="container-custom relative h-full flex items-center">
              <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div class="text-white space-y-6">
                  <div class="inline-block">
                    <span
                      class="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-sm font-semibold uppercase tracking-wide">
                      Desde 2010 transformando la educación
                    </span>
                  </div>

                  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Líderes en Transformación Educativa
                  </h1>

                  <p class="text-xl text-blue-100 leading-relaxed">
                    Desarrollamos herramientas innovadoras que facilitan el trabajo docente y optimizan
                    los aprendizajes, elevando la calidad educativa en cada institución.
                  </p>

                  <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="#servicios"
                      class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                      Conoce nuestros programas
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a href="#contacto"
                      class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300">
                      Contáctanos
                    </a>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div class="text-4xl font-bold text-white mb-2">15+</div>
                    <div class="text-blue-100 text-sm font-medium">Años de Experiencia</div>
                  </div>
                  <div
                    class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div class="text-4xl font-bold text-white mb-2">50+</div>
                    <div class="text-blue-100 text-sm font-medium">Instituciones Atendidas</div>
                  </div>
                  <div
                    class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div class="text-4xl font-bold text-white mb-2">10K+</div>
                    <div class="text-blue-100 text-sm font-medium">Estudiantes Impactados</div>
                  </div>
                  <div
                    class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div class="text-4xl font-bold text-white mb-2">2010</div>
                    <div class="text-blue-100 text-sm font-medium">Año de Fundación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Slide 2 -->
        <transition name="slide-fade">
          <div v-show="currentSlide === 1"
            class="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/95 to-blue-900/95">
            <div class="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
              style="background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022');">
            </div>

            <div class="container-custom relative h-full flex items-center">
              <div class="text-white space-y-6 max-w-3xl">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Innovación en Evaluación Educativa
                </h1>

                <p class="text-xl text-blue-100 leading-relaxed">
                  Sistemas de evaluación formativa y sumativa que permiten identificar fortalezas y áreas
                  de mejora en el aprendizaje de los estudiantes.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#servicios"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                    Ver servicios
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Slide 3 -->
        <transition name="slide-fade">
          <div v-show="currentSlide === 2"
            class="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-indigo-900/95">
            <div class="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
              style="background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032');">
            </div>

            <div class="container-custom relative h-full flex items-center">
              <div class="text-white space-y-6 max-w-3xl">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Capacitación Docente de Excelencia
                </h1>

                <p class="text-xl text-blue-100 leading-relaxed">
                  Programas de desarrollo profesional continuo que fortalecen las competencias pedagógicas
                  y tecnológicas de los docentes.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#servicios"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                    Conoce más
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Gradiente de difuminado inferior -->
      <div
        class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-gray-900 via-white/60 dark:via-gray-900/60 to-transparent pointer-events-none z-10">
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots Indicator -->
      <div class="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        <button v-for="(slide, index) in 3" :key="index" @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1;
};

// Auto-advance slides every 5 seconds
onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 1s ease-out;
}

.slide-fade-leave-active {
  transition: opacity 0.8s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
