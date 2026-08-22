<script setup>
import { profile, platforms, socials } from '~/data/profile'

const config = useRuntimeConfig()

const ogImage = `${profile.site}/hero.png`

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: `${profile.site}/` },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon_io/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_io/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon_io/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon_io/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon_io/site.webmanifest' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        url: profile.site,
        image: profile.avatar,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        jobTitle: profile.role,
        description: profile.summary,
        // Every profile that proves this is the same person.
        sameAs: [
          ...socials.map(s => s.url),
          ...platforms.map(p => p.url),
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'BD',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Körbler GmbH',
          url: 'https://www.1tool.com',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'RPI Rangpur, Bangladesh',
        },
        knowsAbout: [
          'Laravel', 'PHP', 'Vue.js', 'Nuxt.js', 'TypeScript', 'MySQL',
          'REST API development', 'Redis', 'Docker', 'Tailwind CSS',
        ],
        knowsLanguage: ['English', 'Bengali'],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `${profile.name} — Freelance Web Development`,
        url: `${profile.site}/#Hire`,
        image: profile.avatar,
        description:
          'Freelance Laravel, PHP, Vue 3 and Nuxt 3 development — REST APIs, multi-tenant applications, database performance work and CI/CD setup.',
        provider: { '@type': 'Person', name: profile.name, url: profile.site },
        areaServed: 'Worldwide',
        availableChannel: platforms.map(p => ({
          '@type': 'ServiceChannel',
          name: p.name,
          serviceUrl: p.url,
        })),
      }),
    },
  ],
})

/**
 * Flat keys — useSeoMeta expects them at the top level, not nested in a
 * `meta` array (that shape is silently dropped).
 */
useSeoMeta({
  title: 'Khokon Chandra | Full-Stack Laravel & Nuxt Developer for Hire',
  description:
    'Freelance full-stack developer with 4+ years building Laravel, PHP, Vue 3 and Nuxt 3 applications. Available for REST API, CRM and performance work — hire me on Fiverr, Upwork or Freelancer.',
  author: profile.name,
  keywords:
    'Laravel developer for hire, freelance PHP developer, Vue.js developer, Nuxt.js developer, REST API development, MySQL optimization, full-stack developer Bangladesh, Fiverr Laravel developer',

  ogType: 'website',
  ogSiteName: `${profile.name} — Full-Stack Developer`,
  ogTitle: 'Khokon Chandra | Full-Stack Laravel & Nuxt Developer for Hire',
  ogDescription:
    'Laravel, PHP, Vue 3 and Nuxt 3 developer with 4+ years of experience. Available for freelance and contract work.',
  ogUrl: `${profile.site}/`,
  ogImage: ogImage,
  ogImageAlt: `${profile.name} — Full-Stack Developer`,
  ogLocale: 'en_US',

  twitterCard: 'summary_large_image',
  twitterSite: '@khokonchandra12',
  twitterCreator: '@khokonchandra12',
  twitterTitle: 'Khokon Chandra — Full-Stack Laravel & Nuxt Developer',
  twitterDescription:
    'Expert in PHP, Laravel, MySQL, REST APIs and Vue/Nuxt. Available for freelance projects.',
  twitterImage: ogImage,

  themeColor: '#ef4444',
})
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage class="page-enter" :key="config.public.version" />
  </NuxtLayout>
</template>

<style>
/* Fade In-Out Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
