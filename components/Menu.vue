<script lang="ts" setup>

const scroll = useScrollStore();


const links = ref([
    {
        label: 'About',
        to: '/#About'
    },

    {
        label: 'Blog',
        to: '/blogs'
    },

    {
        label: 'Portfolio',
        to: '/#Portfolio',
    },

    {
        label: 'Contact',
        to: '/#Contact'
    }
]);

const sidebarStore = useSidebarStore();

const colorMode = useColorMode()

const toggleDark = () => {
    colorMode.preference = colorMode.value == "dark" ? "light" : "dark";
}

const isDark = computed(() => colorMode.value == "dark");

const showToolTip = ref(false);


</script>
<template>
    <nav class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
            @click="sidebarStore.closeSidebar(); scroll.scrollToSection(link.label)">
            <span
                class="text-sm font-bold text-gray-600 dark:text-gray-400 py-1 hover:border-b-2 hover:border-b-gray-500 duration-50">{{
                    link.label }}</span>
        </NuxtLink>

        <div class="relative">

            <button @click="toggleDark" @mouseenter="showToolTip = true" @mouseleave="showToolTip = false"
                class="px-3 py-2 border dark:bg-gray-800/30 border-gray-200 rounded-xl hover:bg-gray-200 duration-75 dark:border-gray-800 dark:hover:bg-gray-800">
                <IconsMoon v-if="isDark" class="text-xl text-gray-300 font-bold" title="switch to dark mode" />
                <IconsSun v-if="!isDark" class="text-xl text-gray-600 font-bold" title="switch to light mode" />
            </button>

            <div v-if="showToolTip"
                class="text-nowrap absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                Toggle dark mode
            </div>

        </div>
    </nav>
</template>