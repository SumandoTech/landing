<template>
  <section id="programas" class="section-padding bg-white dark:bg-gray-900 relative">
    <div class="container-custom relative z-10">
      <!-- Grid de 2 columnas: Contenido a la izquierda, Título a la derecha -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- Columna Izquierda: Programas apilados -->
        <div class="order-2 lg:order-1 space-y-6">

          <!-- Programa 1 -->
          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center">
              <svg class="w-14 h-14 text-blue-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Evaluación y Diagnóstico</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Sistemas de evaluación formativa y sumativa</p>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Pruebas diagnósticas personalizadas</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Análisis en tiempo real</li>
              </ul>
            </div>
          </div>

          <!-- Programa 2 -->
          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-purple-100/50 dark:bg-purple-900/20 flex items-center justify-center">
              <svg class="w-14 h-14 text-purple-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Capacitación Docente</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Desarrollo profesional continuo</p>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-purple-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Talleres presenciales y online</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-purple-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Certificación de competencias</li>
              </ul>
            </div>
          </div>

          <!-- Programa 3 -->
          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-pink-500 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-pink-100/50 dark:bg-pink-900/20 flex items-center justify-center">
              <svg class="w-14 h-14 text-pink-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Plataforma Tecnológica</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Herramientas digitales intuitivas</p>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-pink-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Sistema de gestión de aprendizaje</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-pink-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Analíticas de aprendizaje</li>
              </ul>
            </div>
          </div>

          <!-- Programa 4 -->
          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-green-100/50 dark:bg-green-900/20 flex items-center justify-center">
              <svg class="w-14 h-14 text-green-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Asesoría Curricular</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Diseño e implementación curricular</p>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Diseño de programas de estudio</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Evaluación de programas</li>
              </ul>
            </div>
          </div>

          <!-- Programa 5 -->
          <div
            class="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 flex items-center justify-center">
              <svg class="w-14 h-14 text-indigo-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Gestión Institucional</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Optimización de procesos</p>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-indigo-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Planificación estratégica</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-indigo-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Indicadores de gestión</li>
              </ul>
            </div>
          </div>

          <!-- Programa 6 - Destacado -->
          <div
            class="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-600 hover:shadow-xl transition-all overflow-hidden">
            <div
              class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-orange-200/50 dark:bg-orange-900/30 flex items-center justify-center">
              <svg class="w-14 h-14 text-orange-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Programa de Examinadores</h3>
                <span class="px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">DESTACADO</span>
              </div>
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Únete a nuestro equipo de examinadores
                certificados</p>
              <ul class="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-orange-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Formación especializada</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-orange-500" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>Certificación oficial</li>
              </ul>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Header Sticky -->
        <div class="order-1 lg:order-2 lg:sticky lg:top-32">
          <span
            class="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Nuestros Programas
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Programas y Proyectos
          </h2>
          <div class="w-24 h-1 bg-yellow-500 mb-6 rounded-full"></div>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Soluciones integrales diseñadas para transformar la experiencia educativa en tu institución
          </p>

          <!-- CTA -->
          <a href="#contacto"
            class="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl">
            Solicita información
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
