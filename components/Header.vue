<script lang="ts" setup>

const sidebarStore = useSidebarStore();

</script>

<template>

    <div>

        <header>
            <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between">
                <NuxtLink to="/">
                    <Logo></Logo>
                </NuxtLink>

                <Menu class="hidden md:flex" />

                <div class="flex md:hidden">
                    <IconsBars
                        @click="sidebarStore.toggleSidebar()"
                        class="cursor-pointer size-8 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 duration-100" />
                </div>
            </div>
            <Sidebar class="inline-block md:hidden" />
        </header>


    </div>

</template>
