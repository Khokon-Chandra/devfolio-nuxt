<script setup lang="ts">
import Error404 from '~/components/error/404.vue';
import Error500 from '~/components/error/500.vue';

const props = defineProps({
    error: Object as () => NuxtError
})

const pages = [
    { statusCode: 404, component: Error404 },
    { statusCode: 500, component: Error500 }
]

const handleError = () => clearError({ redirect: '/' })

const currentPage = computed(() => {
    return pages.find(page => page.statusCode == props.error.statusCode)?.component;
})
</script>

<template>
    <section>
        <component :is="currentPage" />
    </section>
</template>
