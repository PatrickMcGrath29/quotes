export default defineNuxtConfig({
  devtools: true,
  experimental: {
    viewTransition: true,
  },
  pinia: {
    autoImports: ['defineStore'],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['store'],
  },
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },
})
