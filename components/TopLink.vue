<script setup>

const route = useRoute();

defineProps({
    links: Array,
    activeId: {
        type: String,
        default: null
    }
})

</script>
<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <NuxtLink :class="{
                'text-sm font-semibold block border-l-2 p-2 w-full': true,
                'border-red-600 bg-red-600/10': activeId == link.id,
                'border-l-transparent' : activeId !== link.id
            }" :to="{ path: route.path, hash: `#${link.id}` }">{{ link.text }}
            </NuxtLink>
            <TopLink class="ml-5" v-if="link.children" :links="link.children" :active-id="activeId" />
        </li>
    </ul>
</template>