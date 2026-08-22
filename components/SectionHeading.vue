<script setup>
defineProps({
    eyebrow: { type: String, default: '' },
    title: { type: String, required: true },
    lead: { type: String, default: '' },
    align: { type: String, default: 'center' }, // 'center' | 'left'
})
</script>

<template>
    <div :class="[
        'max-w-2xl space-y-4',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
    ]">
        <p v-if="eyebrow" class="eyebrow">
            <span class="h-px w-6 bg-red-500/60" aria-hidden="true" />
            {{ eyebrow }}
        </p>
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="lead" class="section-lead">{{ lead }}</p>
    </div>
</template>
