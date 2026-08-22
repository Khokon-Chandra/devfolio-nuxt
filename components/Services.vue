<script setup>
import { services } from '~/data/gigs'

import IconsLaravel from '~/components/icons/Laravel.vue'
import IconsNuxt from '~/components/icons/Nuxt.vue'
import IconsMySql from '~/components/icons/MySql.vue'
import IconsCICD from '~/components/icons/CICD.vue'

const serviceIcons = { IconsLaravel, IconsNuxt, IconsMySql, IconsCICD }
</script>

<template>
    <section id="Services" class="section">
        <div class="main-container space-y-14">
            <SectionHeading eyebrow="Services" title="What I can build for you"
                lead="Four things I do often enough to quote them confidently. Every engagement ships with tests, deployment notes and a written handover." />

            <div class="grid gap-6 md:grid-cols-2">
                <article v-for="service in services" :key="service.title" class="card card-hover p-7">
                    <div class="flex items-start gap-4">
                        <div
                            class="grid size-12 shrink-0 place-items-center rounded-xl bg-gray-50 ring-1 ring-gray-200/80 dark:bg-gray-800 dark:ring-gray-700">
                            <component :is="serviceIcons[service.icon]" class="size-7" />
                        </div>

                        <div class="min-w-0 space-y-3">
                            <h3 class="font-black text-xl text-gray-800 dark:text-gray-100">
                                {{ service.title }}
                            </h3>
                            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                {{ service.body }}
                            </p>

                            <ul class="grid gap-x-4 gap-y-1.5 pt-1 sm:grid-cols-2">
                                <li v-for="point in service.points" :key="point"
                                    class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    <IconsCheck class="size-3.5 shrink-0 text-emerald-500" />
                                    {{ point }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
