<template>
  <section id="programas" class="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
    <DecorativeBackground />
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
          Nuestros Servicios
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
          Programas y Proyectos
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
          Soluciones integrales diseñadas para transformar la experiencia educativa en tu institución
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Program 1: Evaluación y Diagnóstico -->
        <div class="card card-hover group">
          <div class="p-8">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Evaluación y Diagnóstico</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Sistemas de evaluación formativa y sumativa que permiten identificar fortalezas y áreas de mejora
              en el aprendizaje de los estudiantes.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Pruebas diagnósticas personalizadas
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Análisis de resultados en tiempo real
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Informes detallados por estudiante
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
              Más información
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Program 2: Capacitación Docente -->
        <div class="card card-hover group">
          <div class="p-8">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Capacitación Docente</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Programas de desarrollo profesional continuo que fortalecen las competencias pedagógicas
              y tecnológicas de los docentes.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Talleres presenciales y online
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Acompañamiento en aula
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Certificación de competencias
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300">
              Más información
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Program 3: Plataforma Tecnológica -->
        <div class="card card-hover group">
          <div class="p-8">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:shadow-xl group-hover:shadow-pink-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Plataforma Tecnológica</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Herramientas digitales intuitivas que facilitan la gestión educativa y potencian
              el aprendizaje personalizado.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Sistema de gestión de aprendizaje
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Recursos educativos digitales
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Analíticas de aprendizaje
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-pink-600 font-semibold hover:gap-3 transition-all duration-300">
              Más información
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Program 4: Asesoría Curricular -->
        <div class="card card-hover group">
          <div class="p-8">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Asesoría Curricular</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Acompañamiento experto en el diseño e implementación de programas curriculares
              alineados con estándares nacionales.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Diseño de programas de estudio
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Planificación de clases
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Evaluación de programas
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-300">
              Más información
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Program 5: Gestión Institucional -->
        <div class="card card-hover group">
          <div class="p-8">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:shadow-xl group-hover:shadow-indigo-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestión Institucional</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Optimización de procesos administrativos y de gestión para mejorar la eficiencia
              operativa de la institución.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Planificación estratégica
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Mejora de procesos
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Indicadores de gestión
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300">
              Más información
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Program 6: Programa de Examinadores -->
        <div class="card card-hover group border-2 border-blue-200">
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">DESTACADO</span>
            </div>
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:shadow-xl group-hover:shadow-orange-500/40 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Programa de Examinadores</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Únete a nuestro equipo de examinadores certificados y contribuye a mejorar
              la calidad educativa en todo el país.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Formación especializada
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Certificación oficial
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Oportunidades de colaboración
              </li>
            </ul>
            <a href="#contacto"
              class="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300">
              Postula ahora
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
        <h3 class="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu institución?</h3>
        <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
          Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos educativos
        </p>
        <a href="#contacto"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
          Solicita una consulta gratuita
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
