// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {
      darkMode: 'class'
    },
    editorSupport: true
  },


  googleFonts: {
    families: {
      'Nunito Sans': {
        wght: '200..900',
        ital: '200..700',
      },
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    },
    download: false
  }
})