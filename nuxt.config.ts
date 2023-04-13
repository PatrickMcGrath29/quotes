export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
  experimental: {
    viewTransition: true,
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
