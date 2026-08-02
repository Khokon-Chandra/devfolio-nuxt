<script setup lang="ts">
const props = defineProps<{
  href?: string
}>()

function isExternal(href: string | undefined): boolean {
  if (!href) return false
  return href.startsWith('http://') || href.startsWith('https://')
}

const external = computed(() => isExternal(props.href))
</script>

<template>
  <a
    v-if="external"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="href ?? '#'"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>
