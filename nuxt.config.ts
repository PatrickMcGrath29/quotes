export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
  pwa: {
    registerWebManifestInRouteRules: true,
    manifest: {
      lang: "en",
      short_name: "Quotes",
      name: "Quotes",
      start_url: "/?source=pwa",
      display: "fullscreen",
    },
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
