<script lang="ts" setup>
import { platforms } from '~/data/profile'
import { navLinks } from '~/data/nav'

const links = navLinks

const fiverr = platforms.find(p => p.key === 'fiverr')!

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
    <nav class="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
        <ul class="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-7">
            <li v-for="link in links" :key="link.label">
                <NuxtLink :to="link.to"
                    class="relative text-base font-bold text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 md:text-sm
                           after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red-500
                           after:transition-all after:duration-200 hover:after:w-full">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>

        <div class="flex items-center gap-3">
            <a :href="fiverr.url" target="_blank" rel="noopener noreferrer"
                class="btn-soft !px-4 !py-2 !text-xs">
                <IconsFiverr class="size-4" />
                Hire on Fiverr
            </a>

            <button type="button" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                class="rounded-xl border border-gray-200 p-2.5 transition hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800/30 dark:hover:bg-gray-800"
                @click="toggleDark">
                <IconsSun v-show="!isDark" class="text-lg text-gray-600" />
                <IconsMoon v-show="isDark" class="text-lg text-gray-300" />
            </button>
        </div>
    </nav>
</template>
