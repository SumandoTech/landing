<template>
  <section
    class="section-padding bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 text-white relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10">
      </div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-x-2 bg-white/20 backdrop-blur-sm text-white p-2 px-4 rounded-full text-sm font-semibold">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Únete a Nosotros
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight dark:text-white">
          Sé parte del cambio que quieres ver en el mundo
        </h2>

        <p class="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto dark:text-gray-400">
          Tu apoyo hace la diferencia. Ya sea como voluntario, donante o socio, juntos podemos transformar más vidas.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a href="#voluntario"
            class="inline-flex items-center justify-center gap-x-2 px-8 py-4 text-base font-semibold rounded-lg bg-white text-secondary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 group">
            Hazte voluntario
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#donar"
            class="inline-flex items-center justify-center gap-x-2 px-8 py-4 text-base font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-secondary-600 transition-all duration-200">
            Hacer una donación
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">95%</div>
            <div class="text-white/80">De satisfacción de voluntarios</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">1,200+</div>
            <div class="text-white/80">Horas de voluntariado al mes</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div class="text-4xl font-bold mb-2">100%</div>
            <div class="text-white/80">Transparencia en el uso de fondos</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
