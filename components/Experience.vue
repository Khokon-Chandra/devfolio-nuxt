<script setup>
import { experiences } from '~/data/experience'
</script>

<template>
    <section id="Experience" class="section bg-gray-50/70 dark:bg-gray-800/20">
        <div class="main-container space-y-14">
            <SectionHeading eyebrow="Experience" title="Professional experience"
                lead="Four-plus years across CRM/ERP, fintech, e-learning and high-traffic consumer platforms — the last of them fully remote with a European team." />

            <!-- timeline -->
            <ol class="relative mx-auto max-w-3xl border-l border-gray-200 pl-8 dark:border-gray-800 sm:pl-10">
                <li v-for="job in experiences" :key="job.company" class="relative pb-12 last:pb-0">
                    <!-- node -->
                    <span aria-hidden="true"
                        class="absolute -left-[41px] top-1.5 grid size-[18px] place-items-center rounded-full border-2 bg-gray-50 dark:bg-gray-900 sm:-left-[49px]"
                        :class="job.current
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-700'">
                        <span v-if="job.current" class="size-2 rounded-full bg-red-500" />
                    </span>

                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <p class="text-sm font-bold text-gray-500 dark:text-gray-400">{{ job.date }}</p>
                        <span v-if="job.current"
                            class="rounded-full bg-red-500/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-red-500">
                            Current
                        </span>
                    </div>

                    <h3 class="mt-2 font-black text-xl text-gray-800 dark:text-gray-100">{{ job.title }}</h3>
                    <p class="font-bold text-red-500">{{ job.company }}</p>
                    <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                        {{ job.location }} · {{ job.context }}
                    </p>

                    <ul class="mt-4 space-y-2">
                        <li v-for="item in job.lists" :key="item"
                            class="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            <span aria-hidden="true" class="mt-2 size-1.5 shrink-0 rounded-full bg-red-500/50" />
                            <span>{{ item }}</span>
                        </li>
                    </ul>

                    <div class="mt-4 flex flex-wrap gap-2">
                        <span v-for="tech in job.stack" :key="tech" class="pill">{{ tech }}</span>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
