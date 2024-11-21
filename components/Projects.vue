<script setup>

const projects = [
    {
        title: 'Real-Time Communication',
        subtitle: 'WeMeet - RTC web application',
        slug: '#',
        image: '/wemeet.png'
    },

    {
        title: 'AlgoCode Online judge',
        subtitle: 'Inspired by leetcode.com',
        slug: '#',
        image: '/leetcode.png'
    },

    {
        title: '1tool CRM contest',
        subtitle: 'CRM - 1tool vue/nuxt',
        slug: '#',
        image: '/1tool.png'
    }
]

</script>

<template>
    <section>

        <div v-for="project in projects" :key="project"
            class="main-container py-16 md:py-28 flex flex-col gap-8 lg:flex-row items-center justify-between">

            <div class="w-full lg:w-[40%] text-center lg:text-left flex justify-center lg:inline-block">
                <div class="max-w-md">
                    <h5 class="font-semibold text-lg text-gray-400">{{ project.subtitle }}</h5>
                    <h1 class="font-black text-5xl leading-tight text-gray-400 text-wrap mb-8">{{ project.title }}</h1>

                    <button class="btn-primary">See this project</button>
                </div>
            </div>

            <div class="flex-1 flex justify-center">
                <img class="max-w-full h-auto object-contain shadow-2xl" :src="project.image" :alt="project.title">
            </div>

        </div>

    </section>
</template>