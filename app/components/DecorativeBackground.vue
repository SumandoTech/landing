<template>
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-3">
        <!-- Círculos decorativos -->
        <div class="absolute top-20 left-10 w-64 h-64 border-2 border-blue-500 rounded-full"></div>
        <div class="absolute bottom-40 right-20 w-48 h-48 border-2 border-blue-400 rounded-full"></div>
        <div class="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-blue-300 rounded-full"></div>

        <!-- Libro (outline) -->
        <svg class="absolute top-40 right-10 w-24 h-24 text-blue-500" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>

        <!-- Lápiz (outline) -->
        <svg class="absolute bottom-20 left-1/4 w-20 h-20 text-blue-400 transform rotate-45" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>

        <!-- Graduación (outline) -->
        <svg class="absolute top-1/3 left-1/3 w-28 h-28 text-blue-300" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>

        <!-- Calculadora (outline) -->
        <svg class="absolute bottom-1/3 right-1/3 w-20 h-20 text-blue-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>

        <!-- Formas geométricas adicionales -->
        <div class="absolute top-1/4 right-1/2 w-40 h-40 border-2 border-blue-200 transform rotate-45"></div>
        <div class="absolute bottom-1/4 left-1/2 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
    </div>
</template>
