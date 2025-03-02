export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  robots: {
    UserAgent: '*',
    Disallow: ['/admin', '/login', '/api', '/private'],
    Allow: '/',
    Sitemap: 'https://khokon.vercel.app/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://khokon.vercel.app',
    gzip: true,
    routes: async () => {
      return [
        { url: '/', priority: 1.0 },
        { url: '/blogs', priority: 0.8 },
      ];
    }
  },

  colorMode: {
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.js',
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
  },

  content: {
    highlight: {
      langs: [
        'php',
        'javascript',
        'c',
        'cpp',
        'java',
        'bash',
        'sql'
      ],
      theme: {
        default: 'github-light',
        dark: 'min-dark',
        light: 'min-light'
      }
    }
  }
})