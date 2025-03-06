<script setup>

const { data: posts } = await useAsyncData('blog-post-list', () => 
  queryContent('/blogs')
    .only(["_path", "title", "image", "published_at"]) // Include published_at for sorting
    .sort({ published_at: -1 }) // Order by published_at descending (latest first)
    .find()
);

</script>
<template>
    <section>
        <div class="text-center max-w-lg py-4 mb-4 mx-auto">
            <p class="text-semibold text-gray-800 dark:text-gray-300">Empowering Self-Taught Coders: Free Resources,
                Full-Stack Insights, and Passionate Teaching for a Brighter Tech Future!</p>
        </div>
        <div
            class="main-container pb-12 flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-8">

            <NuxtLink v-for="post in posts" :key="post" class="max-w-md space-y-2" :to="post._path">
                <div class="w-full max-h-[270px] rounded-lg overflow-hidden">
                    <NuxtImg class="w-full h-auto" sizes="100vw sm:50vw md:384px" densities="x1" :src="post.image.src"
                        :placeholder="[300, 300, 75, 5]" :alt="post.image.alt" format="webp" loading="lazy" />
                </div>
                <div class="py-2">
                    <h1 class="font-bold text-2xl text-wrap text-gray-800 dark:text-gray-300">{{ post.title }}</h1>
                </div>
                <div class="py-2">
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                    <span
                        class="inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySql</span>
                </div>
            </NuxtLink>

        </div>
    </section>
</template>