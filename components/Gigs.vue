<script setup>
import { gigs } from '~/data/gigs'
import { platforms } from '~/data/profile'

import IconsFiverr from '~/components/icons/Fiverr.vue'
import IconsUpwork from '~/components/icons/Upwork.vue'
import IconsFreelancer from '~/components/icons/Freelancer.vue'

const platformIcons = {
    fiverr: IconsFiverr,
    upwork: IconsUpwork,
    freelancer: IconsFreelancer,
}

const sorted = computed(() =>
    [...gigs].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)),
)

const fiverr = platforms.find(p => p.key === 'fiverr')
</script>

<template>
    <section id="Hire" class="section bg-gray-50/70 dark:bg-gray-800/20">
        <div class="main-container space-y-14">
            <SectionHeading eyebrow="Hire me" title="Fixed-price gigs, no surprises"
                lead="Prefer buying through a marketplace with escrow and buyer protection? Order a gig directly — scope, price and delivery date agreed up front." />

            <!-- ── Gig cards ───────────────────────────────────────── -->
            <div v-if="sorted.length" class="grid gap-6" :class="sorted.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'">
                <article v-for="gig in sorted" :key="gig.url" class="card card-hover flex flex-col p-7"
                    :class="gig.featured ? 'ring-2 ring-red-500/30 border-red-500/40' : ''">

                    <div class="flex items-center justify-between gap-3">
                        <span class="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400">
                            <IconsFiverr class="size-5" />
                            Fiverr gig
                        </span>
                        <span v-if="gig.featured"
                            class="rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-500">
                            Most ordered
                        </span>
                    </div>

                    <h3 class="mt-4 font-black text-lg leading-snug text-gray-800 dark:text-gray-100">
                        {{ gig.title }}
                    </h3>

                    <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {{ gig.summary }}
                    </p>

                    <ul class="mt-5 space-y-2">
                        <li v-for="item in gig.includes" :key="item"
                            class="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                            <IconsCheck class="tick mt-1 size-3.5" />
                            <span>{{ item }}</span>
                        </li>
                    </ul>

                    <div class="mt-5 flex flex-wrap gap-2">
                        <span v-for="tag in gig.tags" :key="tag" class="pill">{{ tag }}</span>
                    </div>

                    <!-- price / delivery footer -->
                    <div
                        class="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-gray-200 pt-5 dark:border-gray-800">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">Starting at</p>
                            <p class="font-black text-3xl text-gray-800 dark:text-gray-100">
                                ${{ gig.price }}
                            </p>
                            <p class="mt-1 flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                <IconsClock class="size-3.5" />
                                {{ gig.days }}-day delivery · {{ gig.revisions }}
                            </p>
                        </div>

                        <a :href="gig.url" target="_blank" rel="noopener noreferrer" class="btn-primary">
                            Order on Fiverr
                            <IconsArrowUpRight class="size-4" />
                        </a>
                    </div>
                </article>
            </div>

            <!-- fallback if every gig is removed from data/gigs.ts -->
            <div v-else class="mx-auto max-w-xl text-center">
                <a :href="fiverr.url" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                    <IconsFiverr class="size-5" />
                    Browse my gigs on Fiverr
                </a>
            </div>

            <!-- ── Platform cards ──────────────────────────────────── -->
            <div class="space-y-6 pt-4">
                <p class="text-center text-sm font-bold uppercase tracking-[0.18em] text-gray-400">
                    Or work with me on
                </p>

                <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <a v-for="platform in platforms" :key="platform.key" :href="platform.url" target="_blank"
                        rel="noopener noreferrer" class="card card-hover group flex flex-col p-6">
                        <div class="flex items-center gap-3">
                            <component :is="platformIcons[platform.key]" class="size-9"
                                :style="platform.key === 'upwork' ? { color: platform.color } : null" />
                            <div>
                                <p class="font-black text-lg text-gray-800 dark:text-gray-100">{{ platform.name }}</p>
                                <p class="text-xs font-semibold text-gray-400">@{{ platform.handle }}</p>
                            </div>
                        </div>

                        <p class="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {{ platform.tagline }}
                        </p>

                        <span
                            class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 transition group-hover:text-red-500 dark:text-gray-400">
                            {{ platform.cta }}
                            <IconsArrowUpRight class="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
