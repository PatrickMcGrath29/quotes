export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
  pwa: {
    registerWebManifestInRouteRules: true,
  },
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
  ],
});
