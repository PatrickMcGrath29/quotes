export default defineNuxtConfig({
  devtools: true,
  experimental: {
    viewTransition: true,
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxthq/studio",
  ],
  imports: {
    dirs: ["store"],
  },
});
