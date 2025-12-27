<template>
    <!-- Patrón de fondo - Se renderiza solo sobre las secciones (después del hero) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <!-- Patrón de puntos -->
        <div class="absolute inset-0 opacity-[0.08] dark:opacity-[0.08]"
            style="background-image: radial-gradient(circle, #3b82f6 2px, transparent 2px); background-size: 40px 40px;">
        </div>

        <!-- Círculos flotantes - distribuidos en toda la altura -->
        <div
            class="absolute top-[5%] -left-32 w-80 h-80 rounded-full border-2 border-blue-400/25 dark:border-blue-400/10">
        </div>
        <div
            class="absolute top-[25%] -right-40 w-[450px] h-[450px] rounded-full border-2 border-blue-500/20 dark:border-blue-500/08">
        </div>
        <div
            class="absolute top-[45%] -left-20 w-72 h-72 rounded-full border-2 border-blue-300/25 dark:border-blue-300/10">
        </div>
        <div
            class="absolute top-[65%] right-[10%] w-64 h-64 rounded-full border-2 border-blue-400/20 dark:border-blue-400/08">
        </div>
        <div
            class="absolute top-[85%] -left-24 w-56 h-56 rounded-full border-2 border-blue-500/25 dark:border-blue-500/10">
        </div>

        <!-- Isologos rotados y tenues -->
        <img src="/isologo_sumando.png" alt=""
            class="absolute top-[15%] right-[8%] w-32 h-32 opacity-[0.08] dark:opacity-[0.06] rotate-12"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
        <img src="/isologo_sumando.png" alt=""
            class="absolute top-[40%] left-[5%] w-28 h-28 opacity-[0.08] dark:opacity-[0.06] -rotate-6"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
        <img src="/isologo_sumando.png" alt=""
            class="absolute top-[60%] right-[12%] w-24 h-24 opacity-[0.08] dark:opacity-[0.06] rotate-[20deg]"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
        <img src="/isologo_sumando.png" alt=""
            class="absolute top-[80%] left-[15%] w-20 h-20 opacity-[0.08] dark:opacity-[0.06] -rotate-12"
            style="filter: brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1000%) hue-rotate(200deg);" />
    </div>
</template>

<script setup>
// Componente de patrón de fondo
// Se usa dentro de contenedores con position: relative
// Queda detrás del contenido con z-index: 1
</script>
