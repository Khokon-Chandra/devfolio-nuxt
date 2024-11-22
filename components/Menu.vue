<script lang="ts" setup>

const links = ref([
    "Portfolio",
    "Blog",
    "Contact"
]);

const sidebarStore = useSidebarStore();

const isDark = useDark()

const toggleDark = () => {
    isDark.value = !isDark.value
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

</script>
<template>
    <nav class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">

        <NuxtLink v-for="link in links" :key="link" :to="`#${link}`"
            @click="sidebarStore.closeSidebar(); scrollToSection(link)">
            <span
                class="text-sm font-bold text-gray-600 dark:text-gray-400 py-1 hover:border-b-2 hover:border-b-gray-500 duration-50">{{
                    link }}</span>
        </NuxtLink>

        <button @click="toggleDark"
            class="px-3 py-2 border dark:bg-gray-800/30 border-gray-200 rounded-xl hover:bg-gray-100 duration-75 dark:border-gray-800 dark:hover:bg-gray-800">
            <IconsSun v-if="isDark" class="text-xl text-gray-300 font-bold" title="switch to light mode" />
            <IconsMoon v-if="!isDark" class="text-xl text-gray-600 font-bold" title="switch to dark mode" />
        </button>
    </nav>
</template>