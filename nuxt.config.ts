export default defineNuxtConfig({
  runtimeConfig: {
    /**
     * Server-only. Set these in Vercel → Settings → Environment Variables.
     * Nuxt maps NUXT_RESEND_API_KEY → runtimeConfig.resendApiKey automatically.
     */
    resendApiKey: '',
    contactTo: 'khokonchandra4@gmail.com',
    contactFrom: 'Portfolio <onboarding@resend.dev>',

    public: {
      version: '1.1.0' // Change this manually on each release
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  /**
   * Vercel preset: static pages are prerendered to the CDN, while /api/*
   * runs as a serverless function so the contact form can send email.
   */
  nitro: {
    preset: 'vercel',
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blogs', '/sitemap.xml']
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/blogs/**': { prerender: true },
    '/api/**': { prerender: false }
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

  // Shared site config consumed by @nuxtjs/sitemap and @nuxtjs/robots (v5+).
  site: {
    url: 'https://khokon.vercel.app',
    name: 'Khokon Chandra — Full-Stack Laravel & Nuxt Developer'
  },

  robots: {
    disallow: ['/admin', '/login', '/dashboard', '/api', '/private']
  },

  sitemap: {
    defaults: { changefreq: 'weekly', priority: 0.7 },
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/blogs', priority: 0.8, changefreq: 'weekly' }
    ]
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
    // Provider 'none' emits plain <img src>, which avoids IPX 404s on Vercel.
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
