export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
  experimental: {
    viewTransition: true,
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
