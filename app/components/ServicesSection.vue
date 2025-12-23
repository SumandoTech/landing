<template>
    <section id="servicios"
        class="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div class="container-custom">
            <!-- Grid de 2 columnas: Título a la izquierda, Cards a la derecha -->
            <div class="grid lg:grid-cols-2 gap-12 items-start">

                <!-- Columna Izquierda: Header -->
                <div class="lg:sticky lg:top-32">
                    <span
                        class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                        Nuestros Servicios
                    </span>
                    <h2
                        class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Soluciones Educativas Integrales
                    </h2>
                    <div class="w-24 h-1 bg-blue-600 mb-6 rounded-full"></div>
                    <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Transformamos la educación con herramientas innovadoras y metodologías probadas
                    </p>
                </div>

                <!-- Columna Derecha: Cards en vertical -->
                <div class="space-y-6">

                    <!-- Card 1: Capacitación -->
                    <div
                        class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                        <div class="flex items-start gap-6">
                            <!-- Icono -->
                            <div
                                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>

                            <!-- Contenido -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Capacitación Docente
                                </h3>
                                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Programas de desarrollo profesional continuo que fortalecen las competencias
                                    pedagógicas y tecnológicas.
                                </p>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Talleres presenciales y online</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Acompañamiento en aula</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Certificación de competencias</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Evaluación -->
                    <div
                        class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                        <div class="flex items-start gap-6">
                            <!-- Icono -->
                            <div
                                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>

                            <!-- Contenido -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Evaluación de
                                    Aprendizaje</h3>
                                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Sistemas de evaluación formativa y sumativa que permiten identificar fortalezas y
                                    áreas de mejora.
                                </p>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Pruebas diagnósticas personalizadas</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Análisis de resultados en tiempo real</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Informes detallados por estudiante</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Talleres -->
                    <div
                        class="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                        <div class="flex items-start gap-6">
                            <!-- Icono -->
                            <div
                                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>

                            <!-- Contenido -->
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Talleres de
                                    Reforzamiento</h3>
                                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Programas especializados de reforzamiento en áreas fundamentales para potenciar el
                                    desarrollo académico.
                                </p>
                                <ul class="space-y-2">
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span><strong class="text-gray-900 dark:text-white">Lectura:</strong>
                                            Comprensión y velocidad</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span><strong class="text-gray-900 dark:text-white">Matemática:</strong>
                                            Razonamiento lógico</span>
                                    </li>
                                    <li class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Metodologías adaptadas a cada nivel</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
