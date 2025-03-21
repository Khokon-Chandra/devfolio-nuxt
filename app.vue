<script setup>

const config = useRuntimeConfig();


useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon_io/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon_io/favicon-32x32.png'
    },

    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon_io/favicon-16x16.png'
    },

    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/favicon_io/apple-touch-icon.png'
    },

    {
      rel: 'manifest',
      type: 'webmanifest',
      href: '/favicon_io/site.webmanifest'
    },

  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Khokon Chandra",
        "url": "https://khokon.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/khokonchandra",
          "https://github.com/Khokon-Chandra",
          "https://x.com/KhokonChandra12"
        ],
        "jobTitle": "Senior Laravel & Vue Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Open Source"
        }
      })
    }
  ]
})

useSeoMeta({
  title: 'Khokon Chandra | Full-Stack Laravel Developer | PHP, Vue.js, Nuxt.js Expert',
  meta: [
    { name: "author", content: "Khokon Chandra" },
    { name: 'description', content: 'Portfolio of Khokon Chandra, a skilled Laravel and Nuxt.js developer. Expertise in PHP, MySQL, Vue.js, Tailwind CSS, and JavaScript for building scalable web applications.' },
    { name: 'keywords', content: 'Full-stack web developer, Backend Developer, Laravel developer, Laravel, PHP, MySQL, Vue.js, Nuxt.js, Tailwind CSS, JavaScript' },
    { property: 'og:title', content: 'Khokon Chandra | Laravel and Full-Stack Developer' },
    { property: 'og:description', content: 'Explore the portfolio of Khokon Chandra, showcasing innovative solutions and expertise in full-stack development with Laravel, PHP, and Vue.js.' },
    { property: 'og:url', content: 'https://khokon.vercel.app/' },
    { property: 'og:image', content: 'https://khokon.vercel.app/hero.png' },

    { name: 'twitter:title', content: 'Khokon Chandra – Full Stack Web Developer' },
    { name: 'twitter:description', content: 'Expert in PHP, Laravel, MySQL, API development, Vue.js, and scalable web solutions. Check out my portfolio for modern, high-performance applications.' },
    { name: 'twitter:image', content: 'twitter title goes here' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: "@khokonchandra12" },

    { name: 'linkedin:title', content: 'Khokon Chandra – Full Stack Web Developer & Problem Solve' },
    { name: 'linkedin:description', content: 'With expertise in PHP Laravel, AWS, Docker, and Vue.js, I build scalable web solutions tailored to modern needs. Discover more on my portfolio site.' },
    { name: 'linkedin:image', content: 'bannerimage' },
    { name: 'linkedin:url', content: 'https://www.linkedin.com/in/khokonchandra/' },
  ],

});


const router = useRouter();
const isLoading = ref(true);

watchEffect(() => {
  isLoading.value = false;
  router.beforeEach(() => {
    isLoading.value = true;
  });
  router.afterEach(() => {
    setTimeout(() => (isLoading.value = false), 500); // Simulate loading delay
  });
});


</script>
<template>
  <NuxtLayout name="default">
    <div v-if="isLoading"
      class="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-500">
      <div class="relative flex space-x-2">
        <div class="w-4 h-4 bg-gray-800 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:0.1s]"></div>
        <div class="w-4 h-4 bg-gray-800 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div class="w-4 h-4 bg-gray-800 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:0.3s]"></div>
      </div>
    </div>
    <NuxtPage class="page-enter" :key="config.public.version" />
  </NuxtLayout>
</template>
<style>
/* Fade In-Out Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}


@keyframes bounce {

  0%,
  80%,
  100% {
    transform: scale(0);
    opacity: 0.3;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-bounce {
  animation: bounce 1.2s infinite ease-in-out;
}
</style>