<script setup>
const slug = useRoute().params.slug;
</script>

<template>
    <div>
        <article class="main-container prose dark:prose-invert py-24">
            <ContentDoc />
        </article>
    </div>
</template>