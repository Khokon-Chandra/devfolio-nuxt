<script setup>
import IconsPHP from '~/components/icons/PHP.vue'
import IconsLaravel from '~/components/icons/Laravel.vue'
import IconsMySql from '~/components/icons/MySql.vue'
import IconsSqlite from '~/components/icons/Sqlite.vue'
import IconsJavascript from '~/components/icons/Javascript.vue'
import IconsVue from '~/components/icons/Vue.vue'
import IconsNuxt from '~/components/icons/Nuxt.vue'
import IconsTailwind from '~/components/icons/Tailwind.vue'
import IconsDocker from '~/components/icons/Docker.vue'
import IconsGit from '~/components/icons/Git.vue'
import IconsPostman from '~/components/icons/Postman.vue'
import IconsPHPUnit from '~/components/icons/PHPUnit.vue'
import IconsCICD from '~/components/icons/CICD.vue'
import IconsTypescript from '~/components/icons/Typescript.vue'

const groups = [
    {
        title: 'Frontend',
        blurb: 'Type-safe interfaces that stay maintainable as the app grows.',
        icons: [
            { label: 'Vue 3', component: IconsVue },
            { label: 'Nuxt 3', component: IconsNuxt },
            { label: 'TypeScript', component: IconsTypescript },
            { label: 'JavaScript', component: IconsJavascript },
            { label: 'Tailwind CSS', component: IconsTailwind },
        ],
        more: ['Pinia', 'PrimeVue', 'Inertia.js', 'Vite', 'Nuxt i18n'],
    },
    {
        title: 'Backend',
        blurb: 'APIs and data models built to survive real production traffic.',
        icons: [
            { label: 'PHP', component: IconsPHP },
            { label: 'Laravel', component: IconsLaravel },
            { label: 'MySQL', component: IconsMySql },
            { label: 'SQLite', component: IconsSqlite },
            { label: 'PHPUnit', component: IconsPHPUnit },
        ],
        more: ['Redis', 'REST APIs', 'Eloquent ORM', 'OAuth2 / JWT', 'TDD'],
    },
    {
        title: 'DevOps & Tools',
        blurb: 'Shipping pipelines, containers and the monitoring around them.',
        icons: [
            { label: 'Docker', component: IconsDocker },
            { label: 'GitLab CI/CD', component: IconsCICD },
            { label: 'Git', component: IconsGit },
            { label: 'Postman', component: IconsPostman },
        ],
        more: ['AWS', 'DigitalOcean', 'Cloudflare Pages', 'Nginx', 'Sentry', 'Jira', 'Claude Code', 'Cursor'],
    },
]
</script>

<template>
    <section id="Skills" class="section">
        <div class="main-container space-y-14">
            <SectionHeading eyebrow="Toolkit" title="Skills & technology"
                lead="The stack I reach for daily. Everything listed here is something I've shipped to production, not just read about." />

            <div class="grid gap-6 lg:grid-cols-3">
                <div v-for="group in groups" :key="group.title" class="card p-7">
                    <h3 class="font-black text-xl text-gray-800 dark:text-gray-100">{{ group.title }}</h3>
                    <p class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{{ group.blurb }}</p>

                    <ul class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-3">
                        <li v-for="skill in group.icons" :key="skill.label"
                            class="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3 transition hover:border-gray-200 hover:bg-white dark:border-gray-800 dark:bg-gray-800/50 dark:hover:bg-gray-800">
                            <component :is="skill.component" class="size-8" />
                            <span
                                class="text-center text-[11px] font-bold leading-tight text-gray-600 dark:text-gray-300">
                                {{ skill.label }}
                            </span>
                        </li>
                    </ul>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="item in group.more" :key="item" class="pill">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
