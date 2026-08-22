/**
 * ─────────────────────────────────────────────────────────────────────────
 *  FIVERR GIGS — EDIT THIS FILE
 * ─────────────────────────────────────────────────────────────────────────
 *  Fiverr blocks automated reads, so `title`, `price` and `days` below are
 *  placeholders. Open your gig on Fiverr and copy the real values in.
 *
 *  To add another gig:  copy a block, paste your gig's share link into `url`
 *  (Fiverr gig page → Share → Copy link).
 *
 *  `featured: true` pins a gig to the top and gives it the accent border.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Gig = {
  title: string
  summary: string
  url: string
  price: number
  days: number
  revisions: string
  tags: string[]
  includes: string[]
  featured?: boolean
}

export const gigs: Gig[] = [
  {
    // ✅ real link, supplied by you
    url: 'https://www.fiverr.com/s/9d2jGPE',

    // ⚠️ replace with the exact wording + price from your Fiverr gig
    title: 'I will develop and fix your Laravel PHP web application and REST API',
    summary:
      'Backend work done properly: clean Eloquent models, validated request layers, versioned REST endpoints and tests that actually run in CI.',
    price: 60,
    days: 3,
    revisions: 'Unlimited revisions',

    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    includes: [
      'Clean, reviewable PSR-12 code',
      'REST API with request validation',
      'PHPUnit test coverage for new logic',
      'Deployment help & handover notes',
    ],
    featured: true,
  },

  // ── Add more gigs below. Duplicate the block above and edit. ──────────
  // {
  //   url: 'https://www.fiverr.com/s/xxxxxxx',
  //   title: 'I will build a responsive Vue 3 / Nuxt 3 frontend with Tailwind CSS',
  //   summary: '...',
  //   price: 80,
  //   days: 4,
  //   revisions: '3 revisions',
  //   tags: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind'],
  //   includes: ['Pixel-accurate responsive UI', 'Typed Pinia stores', 'Lighthouse 90+ scores'],
  // },
]

/**
 * Services shown on the site. These are capability statements drawn from the
 * CV — they are not tied to a specific Fiverr listing, so they stay accurate
 * even when gigs change.
 */
export const services = [
  {
    icon: 'IconsLaravel',
    title: 'Laravel Backends & REST APIs',
    body:
      'Multi-tenant applications, OAuth2/JWT auth, queued jobs and REST APIs built to hold up under real traffic — I have shipped endpoints serving 10,000+ calls a day.',
    points: ['Eloquent & schema design', 'OAuth2 / JWT auth', 'Queues, cron & Supervisord', 'PHPUnit + TDD'],
  },
  {
    icon: 'IconsNuxt',
    title: 'Vue 3 & Nuxt 3 Frontends',
    body:
      'Type-safe interfaces with Pinia, PrimeVue and Tailwind. I currently build the front end of a 30+ module CRM/ERP suite under a zero-warning ESLint policy.',
    points: ['Vue 3 + TypeScript', 'Pinia state management', 'Tailwind design systems', 'i18n & SSR/SSG'],
  },
  {
    icon: 'IconsMySql',
    title: 'Database & Performance Work',
    body:
      'Slow queries, N+1s and bloated tables. I have cut page loads by ~40% with indexing, caching and partitioning, and modelled datasets past 50,000 records.',
    points: ['Query & index tuning', 'Redis caching layers', 'Partitioning & sharding', 'Migration to scale'],
  },
  {
    icon: 'IconsCICD',
    title: 'Deployment & CI/CD',
    body:
      'Dockerised environments and GitLab CI/CD pipelines shipping to Cloudflare Pages, Vercel, AWS and DigitalOcean — with Sentry wired in before launch.',
    points: ['Docker & Nginx', 'GitLab CI/CD pipelines', 'AWS / DigitalOcean / Vercel', 'Monitoring with Sentry'],
  },
]

/** How an engagement actually runs — sets expectations before someone messages. */
export const process = [
  {
    step: '01',
    title: 'Tell me the problem',
    body: 'Send the brief through the form, Fiverr or email. Screenshots, a repo link or a rough sketch is plenty to start.',
  },
  {
    step: '02',
    title: 'Scope & fixed quote',
    body: 'Within 24 hours you get a written scope, a delivery date and a fixed price — no open-ended hourly surprises.',
  },
  {
    step: '03',
    title: 'Build in the open',
    body: 'Work lands in small reviewable commits on a branch you can see, with a staging URL updated as it goes.',
  },
  {
    step: '04',
    title: 'Handover & support',
    body: 'You get deployment notes, tests and 14 days of free bug fixes on everything I shipped.',
  },
]
