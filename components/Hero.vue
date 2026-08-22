<script setup>
import { profile, stats, socials, platforms } from '~/data/profile'

import IconsGithub from '~/components/icons/Github.vue'
import IconsLinkedin from '~/components/icons/Linkedin.vue'
import IconsTwitter from '~/components/icons/Twitter.vue'
import IconsLeetCode from '~/components/icons/LeetCode.vue'

const socialIcons = {
    IconsGithub,
    IconsLinkedin,
    IconsTwitter,
    IconsLeetCode,
}

const scroll = useScrollStore()
const fiverr = platforms.find(p => p.key === 'fiverr')
</script>

<template>
    <section class="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <!-- soft background wash -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
            <div class="absolute top-40 -left-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div class="main-container">
            <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">

                <!-- ── Copy ─────────────────────────────────────────── -->
                <div class="animate-fade-up text-center lg:text-left">
                    <p v-if="profile.available"
                        class="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-500" />
                            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        {{ profile.availabilityNote }}
                    </p>

                    <h1
                        class="mt-6 font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl text-gray-800 dark:text-gray-100">
                        Hi, I'm {{ profile.firstName }}.
                    </h1>

                    <p class="mt-3 text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-200">
                        Remote {{ profile.role }}
                    </p>

                    <!-- The palette is the stack: Laravel red + Vue green. -->
                    <p class="mt-2 text-base font-bold sm:text-lg">
                        <span class="text-brand-laravel">Laravel</span>
                        <span class="mx-1.5 text-gray-300 dark:text-gray-600">+</span>
                        <span class="text-brand-vue">Vue&nbsp;3</span>
                        <span class="mx-1.5 text-gray-300 dark:text-gray-600">·</span>
                        <span class="text-gray-500 dark:text-gray-400">Nuxt 3 · TypeScript · MySQL</span>
                    </p>

                    <p class="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        I build and scale web applications end-to-end — from database design and REST APIs
                        to complex, type-safe interfaces. I work fully remote with distributed teams, and
                        take on freelance projects through Fiverr, Upwork and Freelancer.
                    </p>

                    <!-- CTAs -->
                    <div
                        class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
                        <button class="btn-primary w-full sm:w-auto"
                            @click="scroll.scrollToSection('Contact')">
                            Start a project
                        </button>

                        <a :href="fiverr.url" target="_blank" rel="noopener noreferrer"
                            class="btn-soft w-full sm:w-auto">
                            <IconsFiverr class="size-5" />
                            Hire me on Fiverr
                        </a>
                    </div>

                    <!-- Socials -->
                    <div class="mt-8 flex items-center justify-center gap-5 lg:justify-start">
                        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                            rel="noopener noreferrer" :aria-label="social.name"
                            class="text-gray-400 transition hover:-translate-y-0.5 hover:text-gray-700 dark:hover:text-gray-200">
                            <component :is="socialIcons[social.icon]" class="size-6" />
                        </a>
                    </div>
                </div>

                <!-- ── Portrait ─────────────────────────────────────── -->
                <div class="relative flex justify-center lg:justify-end">
                    <div class="relative">
                        <div class="absolute -inset-3 rounded-full bg-gradient-to-tr from-red-500/25 to-indigo-500/25 blur-xl"
                            aria-hidden="true" />
                        <NuxtImg :src="profile.avatar" :alt="`${profile.name} — ${profile.role}`" width="360"
                            height="360" format="webp" loading="eager" fetchpriority="high"
                            class="relative size-56 sm:size-72 lg:size-80 rounded-full object-cover ring-4 ring-white dark:ring-gray-800 shadow-2xl" />

                        <!-- timezone chip -->
                        <div
                            class="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <IconsLocation class="size-4 text-red-500" />
                            <span class="text-xs font-bold text-gray-700 dark:text-gray-200">
                                {{ profile.location }} · {{ profile.timezone }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ── Stats ───────────────────────────────────────────── -->
            <dl class="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-200/80 dark:border-gray-800 dark:bg-gray-800 md:grid-cols-4">
                <div v-for="stat in stats" :key="stat.label"
                    class="bg-white px-5 py-6 text-center dark:bg-gray-900/80">
                    <dt class="font-black text-3xl md:text-4xl text-red-500">{{ stat.value }}</dt>
                    <dd class="mt-1 text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {{ stat.label }}
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>
