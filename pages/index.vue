<script setup>
import { profile } from '~/data/profile'

/**
 * Precise metadata for the 1200x630 social card. Scoped to the homepage so
 * blog posts, which supply their own og:image, don't inherit these numbers.
 * Width/height let Facebook and LinkedIn render the card on first scrape
 * without waiting to fetch and measure the file.
 */
const ogImage = `${profile.site}/og-image.jpg`

useSeoMeta({
    ogImageSecureUrl: ogImage,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterImageAlt: `${profile.name} — Remote Full-Stack Developer`,
})
</script>

<template>
    <div class="overflow-x-hidden">
        <Hero />
        <LazyServices />
        <LazyGigs />
        <LazyProjects />
        <LazySkill />
        <LazyExperience />
        <LazyProcess />
        <LazyAbout />
        <LazyContact />
    </div>
</template>
