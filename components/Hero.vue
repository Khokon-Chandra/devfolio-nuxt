<script setup>

const scroll = useScrollStore();

</script>

<template>
    <section class="relative py-28 md:py-52">

        <div class="main-container flex flex-col justify-center items-center gap-12">
            <div class="max-w-xl text-center">
                <h1 class="font-black text-4xl text-gray-500 dark:text-gray-400 mb-4">Hi. I'm Khokon.</h1>
                <h4 class="font-normal text-lg leading-8 text-gray-700 dark:text-gray-300 text-wrap">Full-Stack
                    Developer. PHP |
                    Laravel |
                    MySql | Vue, Nuxt |
                    Tailwind
                    Building
                    Scalable Web Apps.
                    <br class="inline xs:hidden sm:inline md:hidden">
                    If you are looking <br class="hidden md:inline">for capable developer.<br class="inline md:hidden">
                    get in touch.
                </h4>
            </div>

            <button @click.prevent="scroll.scrollToSection('Contact')"
                class="bg-red-500 px-8 py-2 rounded-full font-semibold text-white hover:bg-red-600/80 focus:outline-none ring-offset-1 ring-offset-transparent focus:ring-2 focus:ring-red-700/80">
                Get
                In Touch</button>

            <div class="flex items-center gap-8">
                <a class="cursor-pointer" target="_blank" href="https://github.com/Khokon-Chandra">
                    <IconsGithub class="size-8 text-gray-600 dark:text-gray-400" />
                </a>

                <a class="cursor-pointer" target="_blank" href="https://linkedin.com/in/khokonchandra">
                    <IconsLinkedin class="size-8 text-gray-600 dark:text-gray-400" />
                </a>

                <a class="cursor-pointer" target="_blank" href="https://x.com/KhokonChandra12">
                    <IconsTwitter class="size-8 text-gray-600 dark:text-gray-400" />
                </a>

                <a class="cursor-pointer" target="_blank" href="https://leetcode.com/u/khokonchandra/">
                    <IconsLeetCode class="size-8 text-gray-600 dark:text-gray-400" />
                </a>

            </div>
        </div>

    </section>
</template>