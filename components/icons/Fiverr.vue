<script setup>
/**
 * `inverted` flips the badge to a white chip with the green "fi", so the mark
 * stays legible when it sits on a green Fiverr-branded button.
 */
defineProps({
    inverted: { type: Boolean, default: false },
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" role="img"
        aria-label="Fiverr">
        <rect width="24" height="24" rx="5" :fill="inverted ? '#fff' : '#1DBF73'" />
        <text x="12" y="17.2" text-anchor="middle" :fill="inverted ? '#1DBF73' : '#fff'"
            font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="13" font-weight="700"
            letter-spacing="-0.5">fi</text>
    </svg>
</template>
