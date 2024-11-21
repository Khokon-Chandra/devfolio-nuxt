<script lang="ts" setup>

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <div class="bg-gray-50 dark:bg-gray-900 h-screen overflow-hidden overflow-y-auto">
        <Header />

        <Hero />

        <section class="">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <h1 class="font-black text-4xl text-gray-500 dark:text-gray-400 text-center">
                    Skills and Tools
                </h1>
            </div>
        </section>
    </div>
</template>
