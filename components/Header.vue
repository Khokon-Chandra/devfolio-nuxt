<script lang="ts" setup>
const sidebarStore = useSidebarStore()
const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 12)
</script>

<template>
    <div>
        <header class="sticky top-0 z-40 transition duration-200"
            :class="isScrolled
                ? 'border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80'
                : 'border-b border-transparent'">
            <div class="main-container flex items-center justify-between py-2">
                <NuxtLink to="/" aria-label="Home">
                    <Logo />
                </NuxtLink>

                <Menu class="hidden md:flex" />

                <button type="button" class="flex md:hidden" aria-label="Open menu"
                    @click="sidebarStore.toggleSidebar()">
                    <IconsBars
                        class="size-8 cursor-pointer text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                </button>
            </div>
        </header>

        <Sidebar class="inline-block md:hidden" />
    </div>
</template>
