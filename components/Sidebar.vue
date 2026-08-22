<script setup>
import { navLinks } from '~/data/nav'
import { platforms } from '~/data/profile'

const sidebarStore = useSidebarStore()
const isOpen = computed(() => sidebarStore.isSidebarVisible)
const close = () => sidebarStore.closeSidebar()

const fiverr = platforms.find(p => p.key === 'fiverr')

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark'
}

// Freeze the page behind the panel so it can't scroll away underneath.
const isLocked = useScrollLock(import.meta.client ? document.body : null)
watch(isOpen, open => { isLocked.value = open })
onBeforeUnmount(() => { isLocked.value = false })

onKeyStroke('Escape', () => { if (isOpen.value) close() })

// Crossing into the desktop breakpoint leaves the panel orphaned — close it.
const { width } = useWindowSize()
watch(width, w => { if (w >= 768) close() })

// Any navigation closes the panel, including same-page hash jumps.
const route = useRoute()
watch(() => route.fullPath, close)
</script>

<template>
    <Transition name="panel">
        <!--
          Sits ABOVE the sticky header (z-50 vs z-40) and repeats the header bar
          verbatim, so the bar appears to stay put while the hamburger becomes
          an X — the Apple behaviour. Without this the header would render over
          the panel and you'd see two logos.
        -->
        <div v-if="isOpen" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu"
            class="fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900 md:hidden">

            <div class="main-container flex w-full shrink-0 items-center justify-between py-2">
                <NuxtLink to="/" aria-label="Home" @click="close">
                    <Logo />
                </NuxtLink>

                <button type="button" aria-label="Close menu" class="-mr-1 p-1" @click="close">
                    <IconsClose
                        class="size-8 cursor-pointer text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
                </button>
            </div>

            <nav class="main-container w-full flex-1 overflow-y-auto pb-10">
                <ul class="divide-y divide-gray-200/80 dark:divide-gray-800">
                    <li v-for="(link, i) in navLinks" :key="link.label" class="panel-item"
                        :style="{ '--i': i }">
                        <NuxtLink :to="link.to" @click="close"
                            class="block py-4 text-2xl font-semibold tracking-tight text-gray-800 transition active:opacity-60 dark:text-gray-100">
                            {{ link.label }}
                        </NuxtLink>
                    </li>
                </ul>

                <div class="panel-item mt-8 space-y-3" :style="{ '--i': navLinks.length }">
                    <a :href="fiverr.url" target="_blank" rel="noopener noreferrer" class="btn-market w-full"
                        @click="close">
                        <IconsFiverr class="size-5" />
                        Hire me on Fiverr
                    </a>

                    <button type="button" class="btn-outline w-full" @click="toggleDark">
                        <IconsSun v-if="!isDark" class="size-4" />
                        <IconsMoon v-else class="size-4" />
                        {{ isDark ? 'Light mode' : 'Dark mode' }}
                    </button>
                </div>
            </nav>
        </div>
    </Transition>
</template>

<style scoped>
.panel-enter-active {
    transition: opacity .25s ease, transform .35s cubic-bezier(.32, .72, 0, 1);
}

.panel-leave-active {
    transition: opacity .2s ease, transform .28s cubic-bezier(.32, .72, 0, 1);
}

.panel-enter-from,
.panel-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Items settle in just behind the panel, the way Apple's list does. */
.panel-enter-active .panel-item {
    animation: panel-item .4s cubic-bezier(.32, .72, 0, 1) both;
    animation-delay: calc(var(--i) * 40ms + 90ms);
}

@keyframes panel-item {
    from {
        opacity: 0;
        transform: translateY(12px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

@media (prefers-reduced-motion: reduce) {

    .panel-enter-active,
    .panel-leave-active,
    .panel-enter-active .panel-item {
        transition: none;
        animation: none;
    }
}
</style>
