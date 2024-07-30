// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/ui'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
      apiKey: process.env.NUXT_API_KEY,
    },
  },

  compatibilityDate: '2024-07-24',
});
