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

const skills = [
    {
        label: 'PHP',
        component: IconsPHP,
    },
    {
        label: 'Laravel',
        component: IconsLaravel,
    },

    {
        label: 'MySql',
        component: IconsMySql,
    },

    {
        label: 'Sqlite',
        component: IconsSqlite,
    },

    {
        label: 'Javascript',
        component: IconsJavascript,
    },

    {
        label: 'Vue.js',
        component: IconsVue,
    },

    {
        label: 'Nuxt.js',
        component: IconsNuxt,
    },

    {
        label: 'Tailwindcss',
        component: IconsTailwind,
    },

    {
        label: 'Git',
        component: IconsGit,
    },

    {
        label: 'Postman',
        component: IconsPostman,
    },

    {
        label: 'Docker',
        component: IconsDocker,
    },

    {
        label: 'PHPUnit',
        component: IconsPHPUnit
    }
]

</script>
<template>
    <section id="skills">
        <div class="main-container pb-40">
            <h1 class="font-black text-5xl text-gray-400 text-center mb-12">
                Skills and Technology
            </h1>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
                <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-lg shadow-2xl flex flex-col p-4 items-center justify-center gap-4"
                    v-for="skill in skills" :key="skill.label">
                    <div>
                        <component class="size-12" :is="skill.component" />
                    </div>

                    <h5 class="font-semibold font-sm text-gray-600 dark:text-gray-300 text-center">{{ skill.label }}
                    </h5>
                </div>
            </div>
        </div>
    </section>
</template>