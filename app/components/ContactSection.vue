<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    institution: '',
    message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const errorMessage = ref('');

const handleSubmit = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    submitStatus.value = 'idle';
    errorMessage.value = '';

    try {
        const response = await $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: formData.value.name,
                email: formData.value.email,
                message: formData.value.message,
                institution: formData.value.institution || undefined
            }
        });

        submitStatus.value = 'success';

        // Resetear formulario
        formData.value = {
            name: '',
            email: '',
            institution: '',
            message: ''
        };

        // Limpiar mensaje de éxito después de 5 segundos
        setTimeout(() => {
            submitStatus.value = 'idle';
        }, 5000);

    } catch (error: any) {
        console.error('Error al enviar el formulario:', error);
        submitStatus.value = 'error';
        errorMessage.value = error.data?.statusMessage || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';

        // Limpiar mensaje de error después de 5 segundos
        setTimeout(() => {
            submitStatus.value = 'idle';
            errorMessage.value = '';
        }, 5000);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <section id="contacto" class="section-padding bg-gray-50 dark:bg-gray-800">
        <div class="container-custom">
            <!-- Grid de 2 columnas -->
            <div class="grid lg:grid-cols-2 gap-12 items-start">

                <!-- Columna Izquierda: Formulario -->
                <div class="order-2 lg:order-1">
                    <div
                        class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un mensaje</h3>

                        <!-- Mensaje de éxito -->
                        <div v-if="submitStatus === 'success'"
                            class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <p class="text-green-800 dark:text-green-200 font-medium">
                                    ¡Mensaje enviado correctamente! Te contactaremos pronto.
                                </p>
                            </div>
                        </div>

                        <!-- Mensaje de error -->
                        <div v-if="submitStatus === 'error'"
                            class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                <p class="text-red-800 dark:text-red-200 font-medium">
                                    {{ errorMessage }}
                                </p>
                            </div>
                        </div>

                        <!-- Formulario con Brevo -->
                        <form @submit.prevent="handleSubmit" class="space-y-5">
                            <div>
                                <label for="name"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Nombre completo
                                </label>
                                <input type="text" id="name" v-model="formData.name" required :disabled="isSubmitting"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Tu nombre" />
                            </div>

                            <div>
                                <label for="email"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input type="email" id="email" v-model="formData.email" required
                                    :disabled="isSubmitting"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="tu@email.com" />
                            </div>

                            <div>
                                <label for="institution"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Institución
                                </label>
                                <input type="text" id="institution" v-model="formData.institution"
                                    :disabled="isSubmitting"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Nombre de tu institución" />
                            </div>

                            <div>
                                <label for="message"
                                    class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Mensaje
                                </label>
                                <textarea id="message" v-model="formData.message" rows="4" required
                                    :disabled="isSubmitting"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Cuéntanos cómo podemos ayudarte..."></textarea>
                            </div>

                            <button type="submit" :disabled="isSubmitting"
                                class="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span>{{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}</span>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Columna Derecha: Header Sticky + Info -->
                <div class="order-1 lg:order-2 lg:sticky lg:top-32 space-y-8">
                    <!-- Header -->
                    <div>
                        <span
                            class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                            Contacto
                        </span>
                        <h2
                            class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            ¿Listo para Transformar la Educación?
                        </h2>
                        <div class="w-24 h-1 bg-blue-600 mb-6 rounded-full"></div>
                        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos educativos
                        </p>
                    </div>

                    <!-- Info de Contacto - Una sola card -->
                    <div
                        class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                        <!-- Email -->
                        <div class="flex items-center gap-4 p-5">
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</div>
                                <a href="mailto:contacto@fundacionsumando.cl"
                                    class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                    contacto@fundacionsumando.cl
                                </a>
                            </div>
                        </div>

                        <!-- Teléfono -->
                        <div class="flex items-center gap-4 p-5">
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-sm font-semibold text-gray-500 dark:text-gray-400">Teléfono</div>
                                <a href="tel:+56944531543"
                                    class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                    +56 9 4453 1543
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Redes Sociales -->
                    <div v-if="false" class="flex gap-3">
                        <a href="#"
                            class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#"
                            class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="#"
                            class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
