// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
  },
  modules: [
    '@unocss/nuxt',
  ],
  css: ['~/assets/css/main.css'],
})
