<script setup>
import { projects, packages } from '~/data/projects'
</script>

<template>
    <section id="Portfolio" class="section">
        <div class="main-container space-y-16">
            <SectionHeading eyebrow="Selected work" title="Things I've built"
                lead="A CRM suite used across Europe, an online judge, and a real-time messaging platform — plus a PHP framework published on Packagist." />

            <!-- ── Alternating feature rows ────────────────────────── -->
            <div class="space-y-16 md:space-y-24">
                <article v-for="(project, i) in projects" :key="project.title"
                    class="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

                    <!-- screenshot -->
                    <div class="group relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-xl dark:border-gray-800"
                        :class="i % 2 === 1 ? 'lg:order-2' : ''">
                        <NuxtImg :src="project.image" :alt="`${project.title} — ${project.subtitle}`" format="webp"
                            sizes="xs:100vw sm:100vw lg:600px" densities="x1" :placeholder="[600, 316, 75, 5]"
                            loading="lazy"
                            class="w-full transition duration-500 group-hover:scale-[1.03]" />
                    </div>

                    <!-- copy -->
                    <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
                        <span class="pill">{{ project.tag }}</span>

                        <h3 class="mt-4 font-black text-2xl sm:text-3xl text-gray-800 dark:text-gray-100">
                            {{ project.title }}
                        </h3>
                        <p class="mt-1 font-bold text-red-500">{{ project.subtitle }}</p>

                        <p class="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                            {{ project.description }}
                        </p>

                        <div class="mt-5 flex flex-wrap gap-2">
                            <span v-for="tech in project.stack" :key="tech" class="pill">{{ tech }}</span>
                        </div>

                        <a :href="project.url" target="_blank" rel="noopener noreferrer"
                            class="btn-outline mt-7">
                            {{ project.linkLabel }}
                            <IconsArrowUpRight class="size-4" />
                        </a>
                    </div>
                </article>
            </div>

            <!-- ── Published packages ──────────────────────────────── -->
            <div class="grid gap-6 md:grid-cols-2">
                <a v-for="pkg in packages" :key="pkg.name" :href="pkg.url" target="_blank" rel="noopener noreferrer"
                    class="card card-hover group p-7">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <span class="pill">Open source package</span>
                            <h3 class="mt-3 font-black text-xl text-gray-800 dark:text-gray-100">{{ pkg.name }}</h3>
                        </div>
                        <IconsArrowUpRight
                            class="size-5 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500" />
                    </div>

                    <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{{ pkg.description }}</p>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="tech in pkg.stack" :key="tech" class="pill">{{ tech }}</span>
                    </div>

                    <p class="mt-4 font-mono text-xs text-gray-400">{{ pkg.meta }}</p>
                </a>
            </div>
        </div>
    </section>
</template>
