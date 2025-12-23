<template>
    <section id="quienes-somos"
        class="section-padding bg-white dark:bg-gray-900 dark:text-white relative overflow-hidden">
        <DecorativeBackground />
        <div class="container-custom relative z-10">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <span
                    class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-semibold mb-4 uppercase tracking-wide">
                    Nuestra Historia
                </span>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                    ¿Quiénes Somos?
                </h2>
                <div class="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-400">
                    Una fundación comprometida con la excelencia educativa y el desarrollo integral
                </p>
            </div>

            <!-- Historia -->
            <div class="max-w-4xl mx-auto mb-20">
                <div class="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
                    <div class="prose prose-lg max-w-none text-gray-700">
                        <p class="mb-4 text-lg">
                            Fundación Sumando nació en <strong class="text-blue-700">2010</strong> con una visión clara:
                            transformar la educación chilena a través de la innovación y el compromiso con la
                            excelencia.
                            Desde nuestros inicios, hemos trabajado incansablemente para desarrollar herramientas y
                            metodologías
                            que faciliten el trabajo docente y potencien el aprendizaje de los estudiantes.
                        </p>
                        <p class="mb-4 text-lg">
                            A lo largo de más de <strong class="text-blue-700">15 años</strong>, hemos crecido junto a
                            las
                            instituciones educativas que confían en nosotros, adaptándonos constantemente a los desafíos
                            del
                            sistema educativo moderno y manteniéndonos a la vanguardia de las mejores prácticas
                            pedagógicas.
                        </p>
                        <p class="text-lg">
                            Hoy, somos un referente en <strong class="text-blue-700">transformación educativa</strong>,
                            trabajando con más de 50 instituciones y impactando positivamente la vida de miles de
                            estudiantes
                            y docentes en todo el país.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Valores -->
            <div class="mb-16">
                <div class="text-center mb-12">
                    <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">Nuestros Valores</h3>
                    <div class="w-24 h-1 bg-blue-700 mx-auto mb-4 dark:bg-blue-500"></div>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                        Los principios que guían cada una de nuestras acciones
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Valor 1: Innovación -->
                    <div
                        class="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Innovación</h4>
                        <p class="text-gray-600">
                            Buscamos constantemente nuevas formas de mejorar la educación
                        </p>
                    </div>

                    <!-- Valor 2: Excelencia -->
                    <div
                        class="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Excelencia</h4>
                        <p class="text-gray-600">
                            Compromiso con los más altos estándares de calidad
                        </p>
                    </div>

                    <!-- Valor 3: Compromiso Social -->
                    <div
                        class="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Compromiso Social</h4>
                        <p class="text-gray-600">
                            Educación como motor de cambio social y equidad
                        </p>
                    </div>

                    <!-- Valor 4: Colaboración -->
                    <div
                        class="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Colaboración</h4>
                        <p class="text-gray-600">
                            Trabajo en equipo para lograr objetivos comunes
                        </p>
                    </div>
                </div>
            </div>

            <!-- Enfoque Pedagógico -->
            <div class="max-w-5xl mx-auto">
                <div class="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg shadow-xl p-8 md:p-12 text-white">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 class="text-3xl md:text-4xl font-bold mb-6">Nuestro Enfoque Pedagógico</h3>
                            <p class="text-lg text-blue-50 leading-relaxed mb-6">
                                Implementamos metodologías basadas en evidencia científica y mejores prácticas
                                internacionales.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-blue-50">Aprendizaje activo y centrado en el estudiante</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-blue-50">Evaluación formativa y retroalimentación continua</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-blue-50">Desarrollo de habilidades del siglo XXI</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-blue-50">Integración efectiva de tecnología educativa</span>
                                </li>
                            </ul>
                        </div>
                        <div class="hidden md:flex items-center justify-center">
                            <div
                                class="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center">
                                <svg class="w-32 h-32 text-white/30" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
