export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
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
  ],
  imports: {
    dirs: ["store"],
  },
});
