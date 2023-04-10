export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes, for the body of Christ",
    },
  },
  ssr: false,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
