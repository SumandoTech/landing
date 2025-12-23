<template>
  <section class="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            Impacto Real
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            Transformando vidas a través de la educación
          </h2>
          
          <p class="text-xl text-white/90 leading-relaxed">
            Cada año impactamos la vida de miles de niños y familias, brindándoles acceso a educación de calidad, alimentación saludable y oportunidades de desarrollo.
          </p>
          
          <div class="grid grid-cols-2 gap-6 pt-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div class="text-4xl font-bold mb-2">10,000+</div>
              <div class="text-white/80">Niños beneficiados</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div class="text-4xl font-bold mb-2">500+</div>
              <div class="text-white/80">Voluntarios activos</div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#donar" class="inline-flex items-center justify-center gap-x-2 px-6 py-3 text-sm font-semibold rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-all duration-200">
              Únete a nuestra causa
            </a>
            <a href="#programas" class="inline-flex items-center justify-center gap-x-2 px-6 py-3 text-sm font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-200">
              Ver programas
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/banner-education.jpg"
              alt="Educación de calidad"
              class="w-full h-auto object-cover"
              @error="handleImageError"
            />
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -top-4 -right-4 bg-secondary-500 text-white rounded-2xl p-6 shadow-xl hidden lg:block">
            <div class="text-3xl font-bold">15+</div>
            <div class="text-sm">Años de experiencia</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = '/images/hero-image.jpg'; // Fallback to hero image
};
</script>
