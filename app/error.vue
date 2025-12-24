<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <!-- Background decoration -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-bg-1 absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div class="floating-bg-2 absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl">
            </div>
        </div>

        <div class="relative text-center max-w-2xl mx-auto">
            <!-- Logo -->
            <div class="mb-8">
                <img src="/logo_sumando_1.png" alt="Fundación Sumando" class="h-16 mx-auto" />
            </div>

            <!-- Error Code -->
            <div class="relative mb-6">
                <h1 class="text-[150px] md:text-[200px] font-bold text-white/10 leading-none select-none">
                    {{ statusCode }}
                </h1>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-6xl md:text-8xl font-bold text-white">
                        {{ statusCode }}
                    </span>
                </div>
            </div>

            <!-- Error Message -->
            <h2 class="text-2xl md:text-3xl font-semibold text-white mb-4">
                {{ errorTitle }}
            </h2>

            <p class="text-lg text-blue-100/80 mb-8 max-w-md mx-auto">
                {{ errorDescription }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Volver al Inicio
                </a>

                <a href="/#contacto"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contáctanos
                </a>
            </div>

            <!-- Helpful Links -->
            <div class="mt-12 pt-8 border-t border-white/10">
                <p class="text-sm text-blue-100/60 mb-4">¿Buscabas algo específico?</p>
                <div class="flex flex-wrap justify-center gap-4 text-sm">
                    <a href="/#servicios" class="text-blue-300 hover:text-white transition-colors">Nuestros
                        Servicios</a>
                    <span class="text-white/20">•</span>
                    <a href="/#nosotros" class="text-blue-300 hover:text-white transition-colors">Sobre Nosotros</a>
                    <span class="text-white/20">•</span>
                    <a href="/#programas" class="text-blue-300 hover:text-white transition-colors">Programas</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
    error: NuxtError | null
}>()

const statusCode = computed(() => props.error?.statusCode || 404)

const errorTitle = computed(() => {
    switch (statusCode.value) {
        case 404:
            return '¡Página no encontrada!'
        case 500:
            return '¡Error del servidor!'
        case 403:
            return '¡Acceso denegado!'
        default:
            return '¡Algo salió mal!'
    }
})

const errorDescription = computed(() => {
    switch (statusCode.value) {
        case 404:
            return 'Lo sentimos, la página que buscas no existe o ha sido movida.'
        case 500:
            return 'Ha ocurrido un error en el servidor. Por favor, intenta más tarde.'
        case 403:
            return 'No tienes permiso para acceder a esta página.'
        default:
            return 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'
    }
})

// SEO para la página de error
useHead({
    title: `Error ${statusCode.value} | Fundación Sumando`,
})
</script>

<style scoped>
/* Animación sutil para el fondo */
@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-20px) scale(1.05);
    }
}

.floating-bg-1 {
    animation: float 8s ease-in-out infinite;
}

.floating-bg-2 {
    animation: float 8s ease-in-out infinite reverse;
}
</style>
