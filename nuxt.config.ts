// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image'
  ],

  colorMode: {
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          screens: {
            'xs': '480px',  // Extra small devices (e.g., small smartphones)
          },
        },
      },
      plugins: [
        require('@tailwindcss/typography')
      ]
    },
    editorSupport: true
  },


  googleFonts: {
    families: {
      'Nunito Sans': {
        wght: '200..900',
        ital: '200..700',
      },
      Roboto: true

    },
    download: false
  }
})