/** Selected work — mix of client-facing demos and open source. */

export const projects = [
  {
    title: 'CRM Dashboard',
    subtitle: 'Multi-tenant CRM/ERP interface',
    description:
      'A CRM/ERP dashboard built in Nuxt 3 — multi-view calendars, recurring events and a fully typed Pinia data layer over a Laravel REST API.',
    stack: ['Nuxt 3', 'TypeScript', 'PrimeVue', 'Pinia', 'Tailwind'],
    image: '/1tool.png',
    // NOTE: this demo URL still contains the product name. Rename the Vercel
    // project (or drop the link) if you want it fully anonymous.
    url: 'https://1tool-one.vercel.app/',
    linkLabel: 'View live demo',
    tag: 'Live demo',
  },
  {
    title: 'AlgoCode Online Judge',
    subtitle: 'A LeetCode-style coding platform',
    description:
      'Coding-challenge platform with real-time problem solving, sandboxed submissions, verdict handling and user management — built on Laravel with an Inertia-driven Vue 3 front end.',
    stack: ['Laravel', 'Vue 3', 'Inertia.js', 'Tailwind'],
    image: '/leetcode.png',
    url: 'https://github.com/Khokon-Chandra/algoleetcode',
    linkLabel: 'View source',
    tag: 'Open source',
  },
  {
    title: 'WeeMeet',
    subtitle: 'Real-time messaging & calls',
    description:
      'Real-time messaging platform with audio/video calling, push notifications and Kafka-based message streaming backed by Redis and WebSockets.',
    stack: ['Laravel', 'Vue.js', 'WebSockets', 'Kafka', 'Redis'],
    image: '/wemeet.png',
    url: 'https://github.com/Source-Of-Code',
    linkLabel: 'View source',
    tag: 'Open source',
  },
]

/** Shipped packages — social proof that doesn't need a screenshot. */
export const packages = [
  {
    name: 'Chandra PHP Framework',
    description:
      'A lightweight PHP micro-framework — MVC core, Singleton and Observer patterns, and a PDO layer with migrations. Published as two Packagist packages.',
    stack: ['PHP', 'MVC', 'PDO'],
    url: 'https://packagist.org/packages/khokonc/chandra',
    meta: 'packagist.org/packages/khokonc/chandra',
  },
]
