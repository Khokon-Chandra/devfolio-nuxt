<script setup>
const sidebarStore = useSidebarStore();

const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible)


</script>
<template>
    <Transition name="slide-over-left">
        <div v-if="isSidebarVisible"
            class="fixed z-30 top-0 h-screen w-full bg-gray-50 dark:bg-gray-900 px-4 py-2 space-y-6">
            <div class="flex items-center justify-between">
                <NuxtLink to="/">
                    <Logo></Logo>
                </NuxtLink>

                <div>
                    <IconsClose @click="sidebarStore.closeSidebar()"
                        class="cursor-pointer size-8 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 duration-100" />
                </div>
            </div>

            <div>
                <Menu />
            </div>
        </div>
    </Transition>
</template>

<style scoped>
/* Transition styles */
.slide-over-left-enter-active,
.slide-over-left-leave-active {
    transition: transform 0.3s ease;
}

.slide-over-left-enter-from {
    transform: translateX(-100%);
}

.slide-over-left-leave-to {
    transform: translateX(-100%);
}
</style>