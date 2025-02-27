<script setup>

const projects = [
    {
        title: 'AlgoCode Online judge',
        subtitle: 'Inspired by leetcode.com',
        slug: 'https://github.com/Khokon-Chandra/algoleetcode',
        image: '/leetcode.png'
    },

    {
        title: '1tool CRM contest',
        subtitle: 'CRM - 1tool vue/nuxt',
        slug: 'https://1tool-one.vercel.app/',
        image: '/1tool.png'
    },

    {
        title: 'Real-Time Communication',
        subtitle: 'WeMeet - RTC web application',
        slug: 'https://github.com/Source-Of-Code',
        image: '/wemeet.png'
    }

]

</script>

<template>
    <section id="Portfolio">

        <div v-for="project in projects" :key="project"
            class="main-container py-16 md:py-28 flex flex-col gap-8 lg:flex-row items-center justify-between">

            <div class="w-full lg:w-[40%] text-center lg:text-left">
                <div class="max-w-md mx-auto ">
                    <h5 class="font-semibold text-lg text-gray-400">{{ project.subtitle }}</h5>
                    <h1 class="font-black text-5xl leading-tight text-gray-400 text-wrap mb-8">{{ project.title }}</h1>

                    <a :href="project.slug" target="_blank" class="btn-primary">See this project</a>
                </div>
            </div>

            <div class="flex-1 flex justify-center">
                <NuxtImg format="webp" sizes="xs:100vw sm:100vw lg:600px" densities="x1"
                    :placeholder="[600, 316, 75, 5]" class="shadow-2xl" :src="project.image" :alt="project.title" />
            </div>

        </div>

    </section>
</template>