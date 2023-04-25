export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes for the body of Christ",
    },
  },
  ssr: false,
  experimental: {
    viewTransition: true,
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
