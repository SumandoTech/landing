<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12"
    >
      <div class="container-custom">
        <h1 class="text-4xl font-bold mb-4">Política de Privacidad</h1>
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
              1. Introducción
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fundación Sumando (en adelante "nosotros", "nuestro" o "la
              Fundación") se compromete a proteger la privacidad y seguridad de
              los datos personales de nuestros usuarios. Esta Política de
              Privacidad describe cómo recopilamos, usamos, almacenamos y
              protegemos su información personal en cumplimiento con la
              <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong>
              de Chile.
            </p>
          </div>

          <!-- Información que Recopilamos -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Información que Recopilamos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Recopilamos la siguiente información personal cuando usted utiliza
              nuestro sitio web:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                <strong>Datos de contacto:</strong> Nombre completo, dirección
                de correo electrónico, institución educativa (opcional)
              </li>
              <li>
                <strong>Mensajes:</strong> El contenido del mensaje que nos
                envía a través del formulario de contacto
              </li>
              <li>
                <strong>Datos técnicos:</strong> Preferencias de tema visual
                (modo claro/oscuro) almacenadas localmente en su navegador
              </li>
            </ul>
          </div>

          <!-- Cómo Usamos su Información -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Cómo Usamos su Información
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>
                Comunicarnos con usted sobre nuestros programas y servicios
                educativos
              </li>
              <li>
                Mejorar nuestros servicios y la experiencia del usuario en
                nuestro sitio web
              </li>
              <li>Cumplir con nuestras obligaciones legales y regulatorias</li>
            </ul>
          </div>

          <!-- Almacenamiento y Seguridad -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Almacenamiento y Seguridad
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Sus datos personales son procesados y almacenados utilizando:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                <strong>Brevo (Sendinblue):</strong> Servicio de email
                transaccional para el procesamiento de formularios de contacto
              </li>
              <li>
                <strong>Almacenamiento local:</strong> Las preferencias de tema
                se guardan únicamente en su navegador (localStorage)
              </li>
            </ul>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Implementamos medidas de seguridad técnicas y organizativas
              apropiadas para proteger sus datos contra acceso no autorizado,
              pérdida, destrucción o alteración.
            </p>
          </div>

          <!-- Compartir Información -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Compartir Información con Terceros
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              No vendemos, alquilamos ni compartimos su información personal con
              terceros, excepto:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                Proveedores de servicios necesarios para operar nuestro sitio
                web (como Brevo)
              </li>
              <li>Cuando sea requerido por ley o autoridades competentes</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </div>

          <!-- Cookies y Tecnologías Similares -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Cookies y Tecnologías Similares
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nuestro sitio web
              <strong>no utiliza cookies de seguimiento o publicitarias</strong
              >. Únicamente utilizamos
              <strong>localStorage</strong> (almacenamiento local del navegador)
              para guardar sus preferencias de tema visual (modo claro/oscuro).
              Esta información:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4 mt-4"
            >
              <li>Se almacena únicamente en su dispositivo</li>
              <li>No se comparte con terceros</li>
              <li>
                Puede ser eliminada en cualquier momento desde la configuración
                de su navegador
              </li>
            </ul>
          </div>

          <!-- Derechos del Usuario -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Sus Derechos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              De acuerdo con la Ley N° 19.628, usted tiene derecho a:
            </p>
            <ul
              class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4"
            >
              <li>
                <strong>Acceso:</strong> Solicitar información sobre los datos
                personales que tenemos sobre usted
              </li>
              <li>
                <strong>Rectificación:</strong> Corregir datos inexactos o
                incompletos
              </li>
              <li>
                <strong>Cancelación:</strong> Solicitar la eliminación de sus
                datos personales
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse al tratamiento de sus datos
                para fines específicos
              </li>
            </ul>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              Para ejercer estos derechos, puede contactarnos en:
              <a
                href="mailto:contacto@fundacionsumando.cl"
                class="text-blue-600 dark:text-blue-400 hover:underline"
              >
                contacto@fundacionsumando.cl
              </a>
            </p>
          </div>

          <!-- Retención de Datos -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Retención de Datos
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Conservamos sus datos personales solo durante el tiempo necesario
              para cumplir con los propósitos descritos en esta política, salvo
              que la ley requiera o permita un período de retención más
              prolongado.
            </p>
          </div>

          <!-- Menores de Edad -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Menores de Edad
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nuestro sitio web no está dirigido a menores de 14 años. No
              recopilamos conscientemente información personal de menores. Si un
              padre o tutor descubre que su hijo nos ha proporcionado
              información personal sin su consentimiento, debe contactarnos para
              que podamos eliminarla.
            </p>
          </div>

          <!-- Cambios a esta Política -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Cambios a esta Política
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Los cambios serán publicados en esta página
              con una nueva fecha de actualización. Le recomendamos revisar
              periódicamente esta política.
            </p>
          </div>

          <!-- Contacto -->
          <div
            class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Contacto
            </h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Si tiene preguntas sobre esta Política de Privacidad o sobre cómo
              manejamos sus datos personales, puede contactarnos en:
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
  title: "Política de Privacidad - Fundación Sumando",
  meta: [
    {
      name: "description",
      content:
        "Política de Privacidad de Fundación Sumando. Conoce cómo protegemos y manejamos tus datos personales de acuerdo con la legislación chilena.",
    },
  ],
});
</script>
