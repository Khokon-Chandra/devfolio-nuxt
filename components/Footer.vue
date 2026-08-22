<script setup>
import { profile, socials, platforms } from '~/data/profile'

import IconsGithub from '~/components/icons/Github.vue'
import IconsLinkedin from '~/components/icons/Linkedin.vue'
import IconsTwitter from '~/components/icons/Twitter.vue'
import IconsLeetCode from '~/components/icons/LeetCode.vue'
import IconsFiverr from '~/components/icons/Fiverr.vue'
import IconsUpwork from '~/components/icons/Upwork.vue'
import IconsFreelancer from '~/components/icons/Freelancer.vue'

const socialIcons = { IconsGithub, IconsLinkedin, IconsTwitter, IconsLeetCode }
const platformIcons = { fiverr: IconsFiverr, upwork: IconsUpwork, freelancer: IconsFreelancer }

const year = new Date().getFullYear()

const siteLinks = [
    { label: 'Services', to: '/#Services' },
    { label: 'Hire me', to: '/#Hire' },
    { label: 'Work', to: '/#Portfolio' },
    { label: 'Experience', to: '/#Experience' },
    { label: 'About', to: '/#About' },
    { label: 'Blog', to: '/blogs' },
]
</script>

<template>
    <footer class="mt-8 border-t border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-800/20">
        <div class="main-container py-14">
            <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">

                <!-- identity -->
                <div>
                    <Logo />
                    <p class="mt-2 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {{ profile.role }} building Laravel &amp; Nuxt applications from
                        {{ profile.location }}. Open to freelance and contract work.
                    </p>

                    <div class="mt-5 flex items-center gap-4">
                        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                            rel="noopener noreferrer" :aria-label="social.name"
                            class="text-gray-400 transition hover:-translate-y-0.5 hover:text-gray-700 dark:hover:text-gray-200">
                            <component :is="socialIcons[social.icon]" class="size-6" />
                        </a>
                    </div>
                </div>

                <!-- site nav -->
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Explore</h3>
                    <ul class="mt-4 space-y-2.5">
                        <li v-for="link in siteLinks" :key="link.label">
                            <NuxtLink :to="link.to"
                                class="text-sm font-semibold text-gray-600 transition hover:text-red-500 dark:text-gray-400">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- hire -->
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Hire me on</h3>
                    <ul class="mt-4 space-y-3">
                        <li v-for="platform in platforms" :key="platform.key">
                            <a :href="platform.url" target="_blank" rel="noopener noreferrer"
                                class="group inline-flex items-center gap-2.5 text-sm font-semibold text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                <component :is="platformIcons[platform.key]" class="size-5"
                                    :style="platform.key === 'upwork' ? { color: platform.color } : null" />
                                {{ platform.name }}
                                <IconsArrowUpRight
                                    class="size-3.5 opacity-0 transition group-hover:opacity-100" />
                            </a>
                        </li>
                    </ul>

                    <a :href="`mailto:${profile.email}`"
                        class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-red-500 dark:text-gray-400">
                        <IconsEnvelop class="size-4" />
                        {{ profile.email }}
                    </a>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-800">
            <div class="main-container flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    © {{ year }} {{ profile.name }}. All rights reserved.
                </p>
                <p class="text-sm text-gray-400">Built with Nuxt 3 &amp; Tailwind CSS.</p>
            </div>
        </div>
    </footer>
</template>
