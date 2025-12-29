<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12"
    >
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">Términos y Condiciones</h1>
        <p class="text-lg text-blue-100">
          Última actualización: {{ lastUpdate }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding">
      <div class="container-custom max-w-4xl">
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-8"
        >
          <!-- Introducción -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Aceptación de los Términos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Bienvenido al sitio web de Fundación Sumando. Al acceder y
              utilizar este sitio web (en adelante, el "Sitio"), usted acepta y
              se compromete a cumplir con estos Términos y Condiciones. Si no
              está de acuerdo con estos términos, le solicitamos que no utilice
              este Sitio.
            </p>
          </div>

          <!-- Sobre Fundación Sumando -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Sobre Fundación Sumando
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundación Sumando es una organización sin fines de lucro dedicada
              a transformar vidas a través de la educación y el desarrollo
              comunitario. Nuestro Sitio tiene como objetivo proporcionar
              información sobre nuestros programas, servicios y actividades
              educativas.
            </p>
          </div>

          <!-- Uso del Sitio Web -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Uso del Sitio Web
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Al utilizar este Sitio, usted se compromete a:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                Utilizar el Sitio únicamente con fines legales y de acuerdo con
                estos Términos
              </li>
              <li>
                No utilizar el Sitio de manera que pueda dañar, deshabilitar,
                sobrecargar o deteriorar cualquier servidor o red
              </li>
              <li>
                No intentar obtener acceso no autorizado a ninguna parte del
                Sitio
              </li>
              <li>
                No recopilar o almacenar datos personales de otros usuarios sin
                su consentimiento
              </li>
              <li>
                Proporcionar información veraz y actualizada en los formularios
                de contacto
              </li>
            </ul>
          </div>

          <!-- Propiedad Intelectual -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Propiedad Intelectual
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Todo el contenido del Sitio, incluyendo pero no limitándose a:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mb-4"
            >
              <li>Textos, gráficos, logotipos, iconos, imágenes</li>
              <li>Software, código fuente</li>
              <li>Diseño y estructura del sitio</li>
              <li>Material educativo y recursos</li>
            </ul>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Es propiedad de Fundación Sumando o de sus licenciantes y está
              protegido por las leyes chilenas e internacionales de propiedad
              intelectual. Está prohibida la reproducción, distribución o
              modificación del contenido sin autorización expresa.
            </p>
          </div>

          <!-- Servicios y Contenido -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Servicios y Contenido
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundación Sumando se esfuerza por mantener la información del
              Sitio actualizada y precisa. Sin embargo, no garantizamos que:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mt-4"
            >
              <li>El contenido esté siempre actualizado, completo o exacto</li>
              <li>
                El Sitio esté disponible en todo momento o libre de errores
              </li>
              <li>Los defectos serán corregidos inmediatamente</li>
            </ul>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Nos reservamos el derecho de modificar, suspender o discontinuar
              cualquier aspecto del Sitio en cualquier momento sin previo aviso.
            </p>
          </div>

          <!-- Enlaces a Terceros -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Enlaces a Sitios de Terceros
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nuestro Sitio puede contener enlaces a sitios web de terceros.
              Estos enlaces se proporcionan únicamente para su conveniencia.
              Fundación Sumando no controla ni respalda estos sitios externos y
              no se hace responsable de su contenido, políticas de privacidad o
              prácticas.
            </p>
          </div>

          <!-- Limitación de Responsabilidad -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              En la máxima medida permitida por la ley chilena, Fundación
              Sumando no será responsable por:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                Daños directos, indirectos, incidentales, especiales o
                consecuentes derivados del uso o imposibilidad de uso del Sitio
              </li>
              <li>Pérdida de datos, información o beneficios</li>
              <li>Interrupciones del servicio o errores técnicos</li>
              <li>Acceso no autorizado a nuestros servidores o información</li>
            </ul>
          </div>

          <!-- Indemnización -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Indemnización
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Usted acepta indemnizar y mantener indemne a Fundación Sumando,
              sus directores, empleados y colaboradores de cualquier
              reclamación, pérdida, responsabilidad, daño, costo o gasto
              (incluyendo honorarios legales razonables) que surjan de su uso
              del Sitio o violación de estos Términos.
            </p>
          </div>

          <!-- Privacidad -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Privacidad y Protección de Datos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              El uso de este Sitio también está sujeto a nuestra
              <NuxtLink
                to="/politica-privacidad"
                class="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Política de Privacidad </NuxtLink
              >, que describe cómo recopilamos, usamos y protegemos su
              información personal de acuerdo con la Ley N° 19.628 de Protección
              de la Vida Privada de Chile.
            </p>
          </div>

          <!-- Modificaciones -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Modificaciones de los Términos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundación Sumando se reserva el derecho de modificar estos
              Términos y Condiciones en cualquier momento. Los cambios entrarán
              en vigencia inmediatamente después de su publicación en el Sitio.
              Le recomendamos revisar periódicamente estos Términos. El uso
              continuado del Sitio después de la publicación de cambios
              constituye su aceptación de dichos cambios.
            </p>
          </div>

          <!-- Ley Aplicable -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Ley Aplicable y Jurisdicción
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Estos Términos y Condiciones se rigen por las leyes de la
              República de Chile. Cualquier controversia que surja en relación
              con estos Términos será sometida a la jurisdicción exclusiva de
              los tribunales ordinarios de justicia de Santiago, Chile.
            </p>
          </div>

          <!-- Divisibilidad -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              12. Divisibilidad
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Si alguna disposición de estos Términos es considerada inválida o
              inexigible por un tribunal competente, dicha disposición se
              modificará e interpretará para lograr los objetivos de dicha
              disposición en la mayor medida posible bajo la ley aplicable, y
              las disposiciones restantes continuarán en pleno vigor y efecto.
            </p>
          </div>

          <!-- Acuerdo Completo -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              13. Acuerdo Completo
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Estos Términos y Condiciones, junto con nuestra Política de
              Privacidad, constituyen el acuerdo completo entre usted y
              Fundación Sumando con respecto al uso del Sitio y reemplazan todos
              los acuerdos anteriores o contemporáneos, escritos u orales,
              relacionados con dicho uso.
            </p>
          </div>

          <!-- Contacto -->
          <div
            class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              14. Contacto
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Si tiene preguntas sobre estos Términos y Condiciones, puede
              contactarnos en:
            </p>
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Fundación Sumando</strong></p>
              <p>
                Email:
                <a
                  href="mailto:contacto@fundacionsumando.cl"
                  class="text-blue-600 dark:text-blue-400 hover:underline"
                  >contacto@fundacionsumando.cl</a
                >
              </p>
              <p>Dirección: Santiago, Chile</p>
            </div>
          </div>

          <!-- Aceptación -->
          <div
            class="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl border-l-4 border-blue-600"
          >
            <p class="text-gray-700 dark:text-gray-200 font-medium">
              Al utilizar este sitio web, usted reconoce haber leído, entendido
              y aceptado estos Términos y Condiciones en su totalidad.
            </p>
          </div>
        </div>

        <!-- Back Button -->
        <div class="mt-8 text-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al Inicio
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const lastUpdate = new Date().toLocaleDateString("es-CL", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// SEO Meta tags
useHead({
  title: "Términos y Condiciones - Fundación Sumando",
  meta: [
    {
      name: "description",
      content:
        "Términos y Condiciones de uso del sitio web de Fundación Sumando. Conoce las normas y condiciones que rigen el uso de nuestros servicios.",
    },
  ],
});
</script>
