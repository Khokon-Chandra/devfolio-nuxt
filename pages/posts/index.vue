<script setup>
const posts = ref([
    {
        id: 1,
        slug: 'whats-new-in-php-8.4',
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
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*PfLq6jxjln-ckhj8cQG_Pw.png'
    },
    {
        id: 1,
        slug: 'whats-new-in-php-8.4',
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
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*PfLq6jxjln-ckhj8cQG_Pw.png'
    }
])

</script>
<template>
    <section>
        <div class="main-container py-16">
            <div v-for="post in posts" :key="post.id"
                class="flex items-start justify-between p-4 border border-gray-200 dark:bg-gray-800/30 dark:border-gray-800 rounded-lg mb-8">
                <div class="flex-1 space-y-4">
                    <h1 class="font-bold text-2xl text-gray-600 dark:text-gray-300">{{ post.title }}</h1>
                    <p class="font-medium text-lg text-gray-700 dark:text-gray-300">{{ post.meta_description }}</p>
                </div>
                <div class="ms-auto">
                    <img class="size-36" :src="post.image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>