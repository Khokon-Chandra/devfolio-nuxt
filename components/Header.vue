<script lang="ts" setup>
const sidebarStore = useSidebarStore()
const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 12)
</script>

<template>
    <!--
      This <header> must stay the root element. A sticky box can only stick
      inside its parent's box, so wrapping it in a short div (as it was, around
      the fixed Sidebar) let it scroll away and put the menu out of reach.
      Sidebar now lives in layouts/default.vue.
    -->
    <header class="sticky top-0 z-40 transition duration-200" :class="isScrolled
        ? 'border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80'
        : 'border-b border-transparent'">
        <div class="main-container flex items-center justify-between py-2">
            <NuxtLink to="/" aria-label="Home">
                <Logo />
            </NuxtLink>

            <Menu class="hidden md:flex" />

            <button type="button" class="-mr-1 flex p-1 md:hidden" aria-label="Open menu"
                aria-controls="mobile-menu" :aria-expanded="sidebarStore.isSidebarVisible"
                @click="sidebarStore.toggleSidebar()">
                <IconsBars
                    class="size-8 cursor-pointer text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
            </button>
        </div>
    </header>
</template>
