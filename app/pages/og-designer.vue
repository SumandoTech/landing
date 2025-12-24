<template>
    <div class="min-h-screen bg-gray-300 flex items-center justify-center p-8">
        <!-- Instrucciones -->
        <div class="fixed top-4 left-4 bg-white p-4 rounded-lg shadow-lg text-sm z-50 max-w-xs">
            <p class="font-bold mb-2 text-gray-800">📸 Para capturar:</p>
            <p class="text-gray-600">Click derecho → Inspeccionar → Capture node screenshot</p>
        </div>

        <!-- OG Image Container - 1200x630 -->
        <div id="og-image" class="relative overflow-hidden"
            style="width: 1200px; height: 630px; background-color: #ffffff;">
            <!-- Patrón de puntos -->
            <div class="absolute inset-0"
                style="background-image: radial-gradient(circle, rgba(59, 130, 246, 0.07) 2px, transparent 2px); background-size: 40px 40px;">
            </div>

            <!-- Círculos decorativos -->
            <div class="absolute"
                style="top: 40px; left: 40px; width: 160px; height: 160px; border-radius: 50%; border: 2px solid rgba(59, 130, 246, 0.12);">
            </div>
            <div class="absolute"
                style="top: -60px; right: 200px; width: 200px; height: 200px; border-radius: 50%; border: 2px solid rgba(59, 130, 246, 0.10);">
            </div>
            <div class="absolute"
                style="bottom: 60px; left: 150px; width: 120px; height: 120px; border-radius: 50%; border: 2px solid rgba(59, 130, 246, 0.12);">
            </div>
            <div class="absolute"
                style="bottom: -40px; right: 100px; width: 180px; height: 180px; border-radius: 50%; border: 2px solid rgba(59, 130, 246, 0.10);">
            </div>

            <!-- Logo principal CENTRO -->
            <div class="absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                <img src="/logo_sumando_1.png" alt="Sumando Fundación Educacional"
                    style="height: 120px; width: auto; margin-bottom: 12px;" />
                <p style="color: #6b7280; font-size: 36px; font-weight: 500;">
                    Líderes en transformación educativa
                </p>
            </div>

            <!-- Tags con posición absoluta en píxeles -->

            <!-- ARRIBA FILA 1 -->
            <span class="tag"
                style="top: 30px; left: 80px; background: #eff6ff; color: #2563eb; border-color: rgba(59, 130, 246, 0.3);">
                Evaluación y Diagnóstico
            </span>
            <span class="tag"
                style="top: 30px; left: 340px; background: #faf5ff; color: #9333ea; border-color: rgba(147, 51, 234, 0.3);">
                Capacitación Docente
            </span>
            <span class="tag"
                style="top: 30px; right: 320px; background: #f0fdf4; color: #16a34a; border-color: rgba(34, 197, 94, 0.3);">
                Asesoría Curricular
            </span>
            <span class="tag"
                style="top: 30px; right: 80px; background: #fdf2f8; color: #db2777; border-color: rgba(236, 72, 153, 0.3);">
                Plataforma Tecnológica
            </span>

            <!-- ARRIBA FILA 2 -->
            <span class="tag"
                style="top: 90px; left: 200px; background: #eef2ff; color: #4f46e5; border-color: rgba(99, 102, 241, 0.3);">
                Gestión Institucional
            </span>
            <span class="tag"
                style="top: 90px; right: 200px; background: #fff7ed; color: #ea580c; border-color: rgba(249, 115, 22, 0.3);">
                Programa de Examinadores
            </span>

            <!-- IZQUIERDA -->
            <span class="tag"
                style="top: 280px; left: 40px; background: #f0fdfa; color: #0d9488; border-color: rgba(20, 184, 166, 0.3);">
                Innovación Educativa
            </span>

            <!-- DERECHA -->
            <span class="tag"
                style="top: 280px; right: 40px; background: #ecfeff; color: #0891b2; border-color: rgba(6, 182, 212, 0.3);">
                Formación Continua
            </span>

            <!-- ABAJO FILA 1 -->
            <span class="tag"
                style="bottom: 90px; left: 200px; background: #fefce8; color: #ca8a04; border-color: rgba(245, 158, 11, 0.3);">
                Transformación Digital
            </span>
            <span class="tag"
                style="bottom: 90px; right: 200px; background: #fdf4ff; color: #a855f7; border-color: rgba(168, 85, 247, 0.3);">
                Desarrollo Profesional
            </span>

            <!-- ABAJO FILA 2 -->
            <span class="tag"
                style="bottom: 30px; left: 80px; background: #fff1f2; color: #e11d48; border-color: rgba(244, 63, 94, 0.3);">
                Excelencia Académica
            </span>
            <span class="tag"
                style="bottom: 30px; left: 340px; background: #f5f3ff; color: #7c3aed; border-color: rgba(139, 92, 246, 0.3);">
                Consultoría Educativa
            </span>
            <span class="tag"
                style="bottom: 30px; right: 320px; background: #f0f9ff; color: #0284c7; border-color: rgba(14, 165, 233, 0.3);">
                Análisis de Datos
            </span>
            <span class="tag"
                style="bottom: 30px; right: 80px; background: #fef3c7; color: #d97706; border-color: rgba(217, 119, 6, 0.3);">
                Mejora Continua
            </span>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'OG Image Designer | Fundación Sumando',
});
</script>

<style scoped>
#og-image {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.tag {
    position: absolute;
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 500;
    border-width: 1px;
    border-style: solid;
    white-space: nowrap;
}
</style>
