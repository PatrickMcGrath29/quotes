export default defineNuxtConfig({
  devtools: true,
  experimental: {
    viewTransition: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
})
