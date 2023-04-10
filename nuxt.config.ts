export default defineNuxtConfig({
  app: {
    head: {
      title: "Quotes, for the body of Christ",
    },
  },
  nitro: {
    preset: "node-server",
  },
  ssr: true,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
});
