<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 pt-32">
      <div class="container-custom">
        <span class="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
          Nuestros Servicios
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Soluciones Educativas Integrales
        </h1>
        <p class="text-xl text-blue-100 max-w-2xl leading-relaxed">
          Transformamos la educación chilena con herramientas innovadoras y metodologías probadas. Cada servicio está diseñado para fortalecer a docentes, instituciones y estudiantes.
        </p>
      </div>
    </section>

    <!-- Servicios -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom max-w-5xl">

        <!-- Servicio 1: Capacitación Docente -->
        <div class="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Capacitación Docente</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Los docentes son el corazón del proceso educativo. Nuestros programas de desarrollo profesional continuo fortalecen las competencias pedagógicas y tecnológicas de los profesores, entregándoles herramientas prácticas que pueden aplicar de inmediato en el aula.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">¿Qué incluye?</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Talleres presenciales y en modalidad online
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Acompañamiento y coaching en el aula
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Certificación de competencias pedagógicas
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Comunidades de práctica docente
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">Áreas de formación</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Didáctica y metodologías activas de enseñanza
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Integración de tecnología en el aula
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Evaluación formativa y retroalimentación efectiva
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Servicio 2: Evaluación de Aprendizaje -->
        <div class="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Evaluación de Aprendizaje</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Nuestro servicio de evaluación entrega a las instituciones educativas una visión clara y precisa del nivel de aprendizaje de sus estudiantes. A través de herramientas de evaluación formativa y sumativa, los docentes pueden tomar decisiones pedagógicas informadas y oportunas.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">¿Qué incluye?</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Pruebas diagnósticas personalizadas por asignatura y nivel
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Análisis de resultados en tiempo real con dashboard interactivo
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Informes detallados por estudiante, curso e institución
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Seguimiento longitudinal del progreso de aprendizaje
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">Beneficios</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Identificación temprana de estudiantes en riesgo
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Decisiones pedagógicas basadas en datos concretos
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Mejora medible en los resultados académicos
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Servicio 3: Talleres de Reforzamiento -->
        <div class="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Talleres de Reforzamiento</h2>
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Programas especializados de reforzamiento en áreas fundamentales para potenciar el desarrollo académico de los estudiantes. Trabajamos con metodologías adaptadas a cada nivel y contexto educativo.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">Áreas de reforzamiento</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong class="text-gray-900 dark:text-white">Lectura:</strong> Comprensión y velocidad lectora</span>
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong class="text-gray-900 dark:text-white">Matemática:</strong> Razonamiento lógico y cálculo</span>
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Escritura y expresión oral
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-3">Características</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Metodologías adaptadas a cada nivel educativo
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Grupos reducidos para atención personalizada
                </li>
                <li class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  Seguimiento y reporte de avances a la institución
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Por qué elegirnos -->
        <div class="mb-16 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">¿Por qué elegir Fundación Sumando?</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong class="text-gray-900 dark:text-white">Más de 15 años de experiencia</strong>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Trayectoria probada en transformación educativa en Chile.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong class="text-gray-900 dark:text-white">Basado en evidencia científica</strong>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Metodologías respaldadas por investigación educativa internacional.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong class="text-gray-900 dark:text-white">Más de 50 instituciones atendidas</strong>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Experiencia en colegios y establecimientos de todo Chile.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong class="text-gray-900 dark:text-white">Soluciones a medida</strong>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Adaptamos cada servicio a la realidad particular de tu institución.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center bg-blue-600 rounded-2xl p-10 text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">¿Listo para transformar tu institución?</h2>
          <p class="text-blue-100 mb-8 max-w-xl mx-auto">
            Contáctanos y un especialista de Fundación Sumando te ayudará a identificar el servicio más adecuado para las necesidades de tu comunidad educativa.
          </p>
          <NuxtLink
            to="/#contacto"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            Solicitar información
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuestros Servicios - Fundación Sumando',
  meta: [
    {
      name: 'description',
      content: 'Conoce los servicios de Fundación Sumando: Capacitación Docente, Evaluación de Aprendizaje y Talleres de Reforzamiento. Soluciones integrales para transformar la educación chilena.',
    },
  ],
});
</script>
