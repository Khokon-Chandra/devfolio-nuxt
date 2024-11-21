<script lang="ts" setup>

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <div class="bg-indigo-500/5 dark:bg-gray-900 h-screen overflow-hidden overflow-y-auto">

        <Header />

        <Hero />

        <Skill />

        <Projects />

    </div>
</template>
