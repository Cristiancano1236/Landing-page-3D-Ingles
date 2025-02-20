// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['three', 'gsap']
  },
  ssr: false,
  compatibilityDate: '2024-01-16',
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    prerender: {
      failOnError: false
    }
  },
  vite: {
    optimizeDeps: {
      include: ['three', 'gsap']
    },
    ssr: {
      noExternal: ['three', 'gsap']
    }
  }
})
