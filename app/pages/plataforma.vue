<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12 md:py-16">
      <div class="container-custom">
        <span class="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
          Plataforma de resultados
        </span>
        <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">Ingresa a tu portal</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
          Escribe tu correo y verificamos tu acceso. Si está habilitado, te llevamos a la plataforma para iniciar sesión.
        </p>
      </div>
    </section>

    <section class="py-10 md:py-14">
      <div class="container-custom max-w-xl">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-200 dark:border-gray-700 shadow-sm">
          <!-- Portal -->
          <div class="grid grid-cols-2 gap-2 p-1 rounded-xl bg-gray-100 dark:bg-gray-900" role="tablist" aria-label="Tipo de acceso">
            <button
              v-for="p in portals" :key="p.key" type="button" role="tab" :aria-selected="portal === p.key"
              class="rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
              :class="portal === p.key
                ? 'bg-white dark:bg-gray-700 text-blue-700 dark:text-blue-300 shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'"
              @click="selectPortal(p.key)"
            >
              {{ p.label }}
            </button>
          </div>

          <p class="mt-5 text-sm text-gray-600 dark:text-gray-300">{{ current.help }}</p>

          <form class="mt-6 space-y-4" novalidate @submit.prevent="verify">
            <div>
              <label for="access-email" class="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Correo electrónico</label>
              <input
                id="access-email" v-model="email" type="email" inputmode="email" autocomplete="email" required
                :placeholder="current.placeholder" :disabled="status === 'checking' || status === 'redirecting'"
                class="block w-full rounded-lg border px-4 py-3 text-base bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-60"
                :class="message && status !== 'redirecting' ? 'border-red-400' : 'border-gray-300 dark:border-gray-600'"
                :aria-invalid="!!message && status !== 'redirecting'" aria-describedby="access-message"
                @input="clearMessage"
              >
            </div>

            <p
              v-if="message" id="access-message" role="status" class="text-sm"
              :class="status === 'redirecting' ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'"
            >
              {{ message }}
            </p>

            <button
              type="submit" :disabled="status === 'checking' || status === 'redirecting'"
              class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors disabled:opacity-60"
            >
              <svg v-if="status === 'checking' || status === 'redirecting'" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity=".25" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
              </svg>
              {{ status === 'checking' ? 'Verificando…' : status === 'redirecting' ? 'Abriendo la plataforma…' : 'Verificar' }}
            </button>
          </form>

          <p class="mt-6 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Solo verificamos si tu correo tiene acceso; la sesión se inicia en la plataforma.
            Si crees que deberías tener acceso, escríbenos desde <NuxtLink to="/#contacto" class="text-blue-700 dark:text-blue-400 hover:underline">Contacto</NuxtLink>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type Portal = 'school' | 'examiner'

const portals: { key: Portal; label: string; help: string; placeholder: string; denied: string }[] = [
  {
    key: 'school',
    label: 'Soy de un colegio',
    help: 'Para equipos directivos y docentes que revisan los resultados de las evaluaciones de su colegio.',
    placeholder: 'nombre@colegio.cl',
    denied: 'Este correo no tiene acceso a los resultados de un colegio. Verifícalo con tu colegio o con la Fundación.',
  },
  {
    key: 'examiner',
    label: 'Soy examinador',
    help: 'Para examinadores de la Fundación que aplican evaluaciones e ingresan resultados.',
    placeholder: 'nombre@correo.cl',
    denied: 'Este correo no está registrado como examinador. Verifícalo con la Fundación.',
  },
]

const route = useRoute()
const portal = ref<Portal>(route.query.tipo === 'examinador' ? 'examiner' : 'school')
const current = computed(() => portals.find((p) => p.key === portal.value)!)

const email = ref('')
const status = ref<'idle' | 'checking' | 'redirecting'>('idle')
const message = ref('')

function clearMessage() {
  if (status.value === 'idle') message.value = ''
}
function selectPortal(key: Portal) {
  portal.value = key
  message.value = ''
}

async function verify() {
  const value = email.value.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message.value = 'Escribe un correo válido.'
    return
  }

  status.value = 'checking'
  message.value = ''
  try {
    const res = await $fetch<{ valid: boolean; loginUrl: string | null }>('/api/platform-access', {
      method: 'POST',
      body: { email: value, context: portal.value },
    })
    if (res.valid && res.loginUrl) {
      status.value = 'redirecting'
      message.value = 'Correo verificado. Te llevamos a la plataforma.'
      window.location.assign(res.loginUrl)
      return
    }
    message.value = current.value.denied
  } catch (error: any) {
    message.value = error?.data?.statusMessage || 'No pudimos verificar el correo en este momento. Inténtalo de nuevo.'
  }
  status.value = 'idle'
}

useHead({
  title: 'Plataforma de resultados | Fundación Sumando',
  meta: [
    { name: 'description', content: 'Acceso a la plataforma de resultados de la Fundación Sumando para colegios y examinadores.' },
    { name: 'robots', content: 'noindex' },
  ],
})
</script>
