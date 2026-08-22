/** Work history — kept in sync with khokon_chandra_cv.html */

export const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Körbler GmbH — 1Tool',
    location: 'Wagna, Austria · Remote',
    context: 'CRM/ERP software (1tool.com)',
    date: 'Apr 2025 – Present',
    current: true,
    stack: ['Nuxt 3', 'TypeScript', 'PrimeVue', 'Pinia', 'Tailwind', 'Laravel'],
    lists: [
      'Develop the front end of 1Tool Suite, a large-scale multi-tenant CRM/ERP platform with 30+ modules, using Nuxt 3, TypeScript, PrimeVue, Pinia and Tailwind CSS.',
      'Build and maintain the calendar & scheduling module — multi-view calendars and recurring events, integrated with the Laravel REST API backend.',
      'Work daily with AI-assisted tooling (Claude Code, Cursor) in production — reviewing, validating and shipping output under a zero-warning ESLint policy.',
      'Collaborate async in English with the Austrian team through GitLab merge requests and code reviews.',
      'Ship via GitLab CI/CD to Cloudflare Pages and maintain German/English localization with Nuxt i18n.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Cikatech',
    location: 'Remote',
    context: 'Gaming platform with 90,000+ active members',
    date: 'Oct 2023 – Sept 2024',
    stack: ['Laravel', 'MySQL', 'Redis', 'mPDF'],
    lists: [
      'Optimized a cron-based task pipeline processing 1,000+ jobs per hour through smarter scheduling and load balancing.',
      'Cut page load times by ~40% with MySQL query optimization, caching and database partitioning.',
      'Built high-volume reporting with mPDF and Laravel-Excel, halving report generation time.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'SpaGreen Creative',
    location: 'Dhaka, Bangladesh',
    context: 'Products sold on CodeCanyon',
    date: 'June 2023 – Sept 2023',
    stack: ['Laravel', 'PHP', 'MySQL', 'Supervisord'],
    lists: [
      'Engineered a Learning Management System sold on CodeCanyon, supporting 10,000+ users.',
      'Developed a courier management system, cutting parcel-tracking errors by 20% with automated workflows.',
      'Improved background-task reliability by 30% using schedulers, cron jobs and Supervisord.',
    ],
  },
  {
    title: 'Application Developer',
    company: 'Zit Solution Ltd',
    location: 'Dhaka, Bangladesh',
    context: 'Electricity bill payment system',
    date: 'May 2022 – June 2023',
    stack: ['Laravel', 'REST API', 'Redis', 'MySQL'],
    lists: [
      'Built secure, scalable RESTful APIs handling 10,000+ daily calls for an electricity bill payment system.',
      'Improved server-to-database response times by ~35% with Redis caching, indexing and normalization.',
      'Optimized large-scale query performance by 40% through indexing, eager loading and progressive loading.',
      'Designed a scalable database model improving data integrity across 50,000+ records.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Legend IT Solution',
    location: 'Rangpur, Bangladesh',
    context: 'ERP for cold storage & accounting',
    date: 'Nov 2021 – May 2022',
    stack: ['Laravel', 'PHP', 'MySQL'],
    lists: [
      'Enhanced Laravel-based ERP systems for cold storage and accounting, improving efficiency by 25%.',
      'Streamlined backend workflows and gathered requirements directly with clients, lifting throughput by 20%.',
    ],
  },
]
