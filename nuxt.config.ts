// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'es-CL'
      },
      title: 'Sumando | Fundación Educacional - Líderes en Transformación Educativa',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO Meta Tags
        { name: 'description', content: 'Desde 2010 desarrollamos herramientas innovadoras que facilitan el trabajo docente y optimizan los aprendizajes, elevando la calidad educativa en cada institución.' },
        { name: 'keywords', content: 'educación, fundación educacional, transformación educativa, capacitación docente, innovación educativa, Chile' },
        { name: 'author', content: 'Fundación Sumando' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook / WhatsApp / LinkedIn
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fundacionsumando.cl/' },
        { property: 'og:title', content: 'Sumando | Fundación Educacional - Líderes en Transformación Educativa' },
        { property: 'og:description', content: 'Desde 2010 desarrollamos herramientas innovadoras que facilitan el trabajo docente y optimizan los aprendizajes, elevando la calidad educativa en cada institución.' },
        { property: 'og:image', content: 'https://fundacionsumando.cl/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Sumando Fundación Educacional - Líderes en Transformación Educativa' },
        { property: 'og:locale', content: 'es_CL' },
        { property: 'og:site_name', content: 'Fundación Sumando' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://fundacionsumando.cl/' },
        { name: 'twitter:title', content: 'Sumando | Fundación Educacional - Líderes en Transformación Educativa' },
        { name: 'twitter:description', content: 'Desde 2010 desarrollamos herramientas innovadoras que facilitan el trabajo docente y optimizan los aprendizajes, elevando la calidad educativa en cada institución.' },
        { name: 'twitter:image', content: 'https://fundacionsumando.cl/og-image.png' },
        { name: 'twitter:image:alt', content: 'Sumando Fundación Educacional' },

        // Tema y colores
        { name: 'theme-color', content: '#1e3a8a' },
        { name: 'msapplication-TileColor', content: '#1e3a8a' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://fundacionsumando.cl/' },
        // Apple Touch Icon (para cuando guardan como bookmark en iOS)
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      script: [
        { src: '/init-theme.js', type: 'text/javascript' }
      ]
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image'],
})