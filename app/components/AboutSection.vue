<template>
    <section id="quienes-somos" class="section-padding bg-gray-50 dark:bg-gray-800 relative">
        <div class="container-custom relative z-10">
            <!-- Grid de 2 columnas -->
            <div class="grid lg:grid-cols-2 gap-12 items-start">

                <!-- Columna Izquierda: Header Sticky -->
                <div class="lg:sticky lg:top-32">
                    <span
                        class="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                        Nuestra Historia
                    </span>
                    <h2
                        class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        ¿Quiénes Somos?
                    </h2>
                    <div class="w-24 h-1 bg-red-600 mb-6 rounded-full"></div>
                    <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        Una fundación comprometida con la excelencia educativa y el desarrollo integral
                    </p>

                    <!-- Stats -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                        </div>
                        <div class="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400">Instituciones</div>
                        </div>
                    </div>
                </div>

                <!-- Columna Derecha: Contenido -->
                <div class="space-y-6">

                    <!-- Historia -->
                    <div
                        class="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <!-- Icono de fondo -->
                        <div
                            class="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center">
                            <svg class="w-16 h-16 text-blue-500/30" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="relative z-10">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Historia</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Fundación Sumando nació en <strong class="text-blue-600">2010</strong> con una visión
                                clara:
                                transformar la educación chilena. Hoy, somos un referente en <strong
                                    class="text-blue-600">transformación educativa</strong>,
                                trabajando con más de 50 instituciones.
                            </p>
                        </div>
                    </div>

                    <!-- Visión -->
                    <div
                        class="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <!-- Icono de fondo -->
                        <div
                            class="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center">
                            <svg class="w-16 h-16 text-blue-500/30" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <div class="relative z-10">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Visión</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Convertirnos en <strong class="text-blue-600">líderes nacionales</strong> en la mejora
                                continua de la educación,
                                asegurando que cada institución y estudiante acceda a un <strong
                                    class="text-blue-600">aprendizaje significativo y sostenible</strong>.
                            </p>
                        </div>
                    </div>

                    <!-- Misión -->
                    <div
                        class="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <!-- Icono de fondo -->
                        <div
                            class="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-slate-100/50 dark:bg-slate-900/20 flex items-center justify-center">
                            <svg class="w-16 h-16 text-slate-500/30" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div class="relative z-10">
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Misión</h3>
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Ser líderes en <strong class="text-slate-700 dark:text-slate-300">transformación
                                    educativa</strong>,
                                desarrollando <strong class="text-slate-700 dark:text-slate-300">herramientas
                                    innovadoras</strong> que faciliten el trabajo docente
                                y <strong class="text-slate-700 dark:text-slate-300">aseguren la calidad
                                    educativa</strong> en cada institución.
                            </p>
                        </div>
                    </div>

                    <!-- Valores -->
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                            <div
                                class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-100/30 dark:bg-blue-900/20">
                            </div>
                            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">Innovación
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 relative z-10">Nuevas formas de mejorar
                            </p>
                        </div>
                        <div
                            class="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                            <div
                                class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-100/30 dark:bg-blue-900/20">
                            </div>
                            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">Excelencia
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 relative z-10">Altos estándares</p>
                        </div>
                        <div
                            class="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                            <div
                                class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-100/30 dark:bg-blue-900/20">
                            </div>
                            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">Compromiso
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 relative z-10">Educación como motor</p>
                        </div>
                        <div
                            class="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                            <div
                                class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-100/30 dark:bg-blue-900/20">
                            </div>
                            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">Colaboración
                            </h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400 relative z-10">Trabajo en equipo</p>
                        </div>
                    </div>

                    <!-- Enfoque Pedagógico -->
                    <div
                        class="bg-red-50/50 dark:bg-red-900/10 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuestro Enfoque Pedagógico
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Implementamos metodologías basadas en evidencia científica y mejores prácticas
                            internacionales.
                        </p>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Aprendizaje activo y centrado en el
                                    estudiante</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Evaluación formativa y retroalimentación
                                    continua</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Desarrollo de habilidades del siglo
                                    XXI</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Integración efectiva de tecnología
                                    educativa</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
