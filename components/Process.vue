<script setup>
import { process } from '~/data/gigs'
</script>

<template>
    <section id="Process" class="section">
        <div class="main-container space-y-14">
            <SectionHeading eyebrow="How it works" title="How we'll work together"
                lead="No vague estimates and no silent weeks. Here is exactly what happens after you send the first message." />

            <ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <li v-for="(item, i) in process" :key="item.step" class="relative card p-6">
                    <!-- connector on wide screens -->
                    <span v-if="i < process.length - 1" aria-hidden="true"
                        class="absolute right-0 top-11 hidden h-px w-6 translate-x-full bg-gray-200 dark:bg-gray-800 lg:block" />

                    <span class="font-black text-4xl text-gray-200 dark:text-gray-700">{{ item.step }}</span>
                    <h3 class="mt-3 font-bold text-lg text-gray-800 dark:text-gray-100">{{ item.title }}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{{ item.body }}</p>
                </li>
            </ol>
        </div>
    </section>
</template>
