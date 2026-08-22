/**
 * Single source of truth for identity, contact details and social profiles.
 * Edit here — every component reads from this file.
 */

export const profile = {
  name: 'Khokon Chandra',
  firstName: 'Khokon',
  role: 'Full-Stack Developer',
  headline: 'Laravel · Vue 3 · Nuxt 3 · TypeScript',
  email: 'khokonchandra4@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6',
  overlap: '4–6 h daily overlap with CET / 3+ h with EST',
  // Self-hosted so the share card, the hero and the JSON-LD all agree.
  avatar: '/khokon-chandra.jpg',
  site: 'https://khokon.vercel.app',

  /** Set to false when you stop taking new client work. */
  available: true,
  availabilityNote: 'Available for remote work',

  summary:
    'Remote full-stack developer with 4+ years building and scaling web applications in Laravel and Vue/Nuxt. Currently on a distributed engineering team for a European SaaS product, and open to freelance and contract work.',

  /** Remote-work signals — the questions every client asks before hiring. */
  remote: [
    { label: 'Time zone', value: 'Dhaka, UTC+6' },
    { label: 'Overlap', value: '4–6 h with CET · 3+ h with EST' },
    { label: 'Working language', value: 'English, async-first' },
    { label: 'Reply time', value: 'Within 24 hours' },
  ],
}

export const stats = [
  { value: '4+', label: 'Years building for the web' },
  { value: '100%', label: 'Remote, across time zones' },
  { value: '10k+', label: 'Daily API calls served' },
  { value: '90k+', label: 'Platform users supported' },
]

/** Freelance marketplaces — shown as "Hire me on" cards. */
export const platforms = [
  {
    key: 'fiverr',
    name: 'Fiverr',
    handle: 'khokon_chandra4',
    url: 'https://www.fiverr.com/users/khokon_chandra4',
    tagline: 'Fixed-price gigs with a clear scope and delivery date.',
    cta: 'View my gigs',
    color: '#1DBF73',
  },
  {
    key: 'upwork',
    name: 'Upwork',
    handle: 'Khokon C.',
    url: 'https://www.upwork.com/freelancers/~01c86bd8b12be68342',
    tagline: 'Hourly or milestone contracts for longer engagements.',
    cta: 'View profile',
    color: '#14A800',
  },
  {
    key: 'freelancer',
    name: 'Freelancer',
    handle: 'khokonchandra4',
    url: 'https://www.freelancer.com/u/khokonchandra4',
    tagline: 'Post a project and I will send you a scoped proposal.',
    cta: 'View profile',
    color: '#29B2FE',
  },
]

export const socials = [
  { name: 'GitHub', icon: 'IconsGithub', url: 'https://github.com/Khokon-Chandra' },
  { name: 'LinkedIn', icon: 'IconsLinkedin', url: 'https://linkedin.com/in/khokonchandra' },
  { name: 'X', icon: 'IconsTwitter', url: 'https://x.com/KhokonChandra12' },
  { name: 'LeetCode', icon: 'IconsLeetCode', url: 'https://leetcode.com/u/khokonchandra/' },
]

export const languages = [
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Bengali', level: 'Native' },
]

export const education = {
  degree: 'Diploma in Computer Science & Engineering',
  school: 'RPI Rangpur, Bangladesh',
  period: '2017 – 2022',
  grade: 'CGPA 3.72 / 4.00',
}
