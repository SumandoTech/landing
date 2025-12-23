<template>
    <section id="servicios" class="relative -mt-40 z-10 pb-20 bg-transparent">
        <div class="container-custom">
            <!-- Services Grid - Cards con bordes redondeados y elevación -->
            <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <!-- Servicio 1: Capacitación -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                    <!-- Header con color -->
                    <div class="bg-gradient-to-br from-blue-600 to-blue-700 p-8 pb-6">
                        <div
                            class="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Capacitación</h3>
                        <div class="w-16 h-1 bg-white/40 rounded-full"></div>
                    </div>

                    <!-- Contenido -->
                    <div class="p-8 min-h-[320px] flex flex-col">
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Programas de desarrollo profesional continuo que fortalecen las competencias pedagógicas
                            y tecnológicas de los docentes.
                        </p>
                        <ul class="space-y-3 mt-auto">
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Talleres presenciales y online</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Acompañamiento en aula</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Certificación de competencias</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Servicio 2: Evaluación de Aprendizaje -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-slate-500/20 hover:-translate-y-2 transition-all duration-300">
                    <!-- Header con color -->
                    <div class="bg-gradient-to-br from-slate-700 to-slate-800 p-8 pb-6">
                        <div
                            class="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Evaluación de Aprendizaje</h3>
                        <div class="w-16 h-1 bg-white/40 rounded-full"></div>
                    </div>

                    <!-- Contenido -->
                    <div class="p-8 min-h-[320px] flex flex-col">
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Sistemas de evaluación formativa y sumativa que permiten identificar fortalezas y áreas
                            de mejora en el aprendizaje de los estudiantes.
                        </p>
                        <ul class="space-y-3 mt-auto">
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-slate-700 dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Pruebas diagnósticas personalizadas</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-slate-700 dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Análisis de resultados en tiempo real</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-slate-700 dark:text-slate-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Informes detallados por estudiante</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Servicio 3: Talleres de Reforzamiento -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300">
                    <!-- Header con color -->
                    <div class="bg-gradient-to-br from-blue-700 to-blue-800 p-8 pb-6">
                        <div
                            class="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Talleres de Reforzamiento</h3>
                        <div class="w-16 h-1 bg-white/40 rounded-full"></div>
                    </div>

                    <!-- Contenido -->
                    <div class="p-8 min-h-[320px] flex flex-col">
                        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Programas especializados de reforzamiento en áreas fundamentales del aprendizaje
                            para potenciar el desarrollo académico de los estudiantes.
                        </p>
                        <ul class="space-y-3 mt-auto">
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong class="text-gray-900 dark:text-white">Desarrollo de Lectura:</strong>
                                    Comprensión lectora y velocidad</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong class="text-gray-900 dark:text-white">Matemática:</strong> Razonamiento
                                    lógico y resolución de problemas</span>
                            </li>
                            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                <svg class="w-5 h-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
</template>
