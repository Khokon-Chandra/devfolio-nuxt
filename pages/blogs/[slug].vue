<script setup>
const slug = useRoute().params.slug;
</script>

<template>
    <div>
        <article class="
        main-container 
        prose dark:prose-invert
         py-24 prose-h1:text-4xl 
         prose-h1:text-gray-700 
         prose-h1:dark:text-gray-300 
         prose-pre:bg-gray-200
         prose-pre:text-gray-700
         dark:prose-pre:bg-gray-800
         dark:prose-pre:text-gray-300
         ">
            <ContentDoc />
        </article>
    </div>
</template>