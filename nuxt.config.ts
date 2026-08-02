export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      version: '1.0.1' // Change this manually on each release
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // Full static output: no server, CDN-only on Vercel (set Vercel output to .output/public if needed)
  nitro: {
    preset: 'static',
    compressPublicAssets: true
  },
  build: {
    terserOptions: { compress: { drop_console: true } },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
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
    display: 'swap', // Show text immediately with fallback, then swap when font loads
    download: false
  },

  image: {
    // Static preset = no server on Vercel; IPX would 404. Use 'none' so NuxtImg outputs plain img src.
    provider: 'none',
    domains: ['avatars.githubusercontent.com'],
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