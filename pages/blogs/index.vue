<script setup>
const posts = ref([
    {
        id: 1,
        slug: 'I Stopped Using Kubernetes. Our DevOps Team Is Happier Than Ever',
        title: "What's new in PHP 8.4?",
        meta_description: 'PHP 8.4, scheduled for release on November 21, 2024, introduces several notable features and improvements to enhance developer experience and language capabilities. Key additions include',
        description: '',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*PfLq6jxjln-ckhj8cQG_Pw.png'
    },
    {
        id: 1,
        slug: 'whats-new-in-php-8.4',
        title: "What's new in PHP 8.4?",
        meta_description: 'PHP 8.4, scheduled for release on November 21, 2024, introduces several notable features and improvements to enhance developer experience and language capabilities. Key additions include',
        description: '',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZAGNGv8VTwazXrAlgjfzEw.png'
    },
    {
        id: 1,
        slug: 'I Stopped Using Kubernetes. Our DevOps Team Is Happier Than Ever',
        title: "What's new in PHP 8.4?",
        meta_description: 'PHP 8.4, scheduled for release on November 21, 2024, introduces several notable features and improvements to enhance developer experience and language capabilities. Key additions include',
        description: '',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*PfLq6jxjln-ckhj8cQG_Pw.png'
    },
    {
        id: 1,
        slug: 'whats-new-in-php-8.4',
        title: "Simplify External API Integrations in Laravel Using Service Modules",
        meta_description: 'PHP 8.4, scheduled for release on November 21, 2024, introduces several notable features and improvements to enhance developer experience and language capabilities. Key additions include',
        description: '',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZAGNGv8VTwazXrAlgjfzEw.png'
    }
])


const { data } = await useAsyncData('blog-post-list', () => queryContent('/blogs').find())

console.log(data._value);

</script>
<template>
    <section>
        <div class="text-center max-w-lg py-4 mb-4 mx-auto">
            <p class="text-semibold text-gray-800 dark:text-gray-300">Empowering Self-Taught Coders: Free Resources,
                Full-Stack Insights, and Passionate Teaching for a Brighter Tech Future!</p>
        </div>
        <div
            class="main-container pb-12 flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-8">
            <div v-for="post in posts" :key="post.id" class="max-w-sm rounded overflow-hidden space-y-4">
                <div class="w-full max-h-[270px] overflow-hidden">
                    <NuxtImg sizes="100vw sm:50vw md:384px" densities="x1" :src="post.image"
                        :placeholder="[300, 300, 75, 5]" alt="Sunset in the mountains" />
                </div>
                <div class="py-2">
                    <h1 class="font-bold text-3xl text-wrap text-gray-800 dark:text-gray-300">{{ post.title }}</h1>
                </div>
                <div class="py-2">
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>

        </div>
    </section>
</template>