<script setup>
import { profile, platforms } from '~/data/profile'

import IconsFiverr from '~/components/icons/Fiverr.vue'
import IconsUpwork from '~/components/icons/Upwork.vue'
import IconsFreelancer from '~/components/icons/Freelancer.vue'

const platformIcons = {
    fiverr: IconsFiverr,
    upwork: IconsUpwork,
    freelancer: IconsFreelancer,
}

/** Fiverr leads: escrow and a fixed delivery date lower the risk of a first order. */
const ordered = computed(() => [
    ...platforms.filter(p => p.key === 'fiverr'),
    ...platforms.filter(p => p.key !== 'fiverr'),
])

const mailto = computed(() => {
    const params = new URLSearchParams({
        subject: 'Project enquiry',
        body: `Hi Khokon,\n\nWhat I'm building:\n\nDeadline:\n\nBudget:\n\nThanks,\n`,
    })
    return `mailto:${profile.email}?${params.toString()}`
})

const { copy, copied, isSupported } = useClipboard({ source: profile.email, copiedDuring: 2000 })

const channels = [
    { label: 'Replies within', value: '24 hours' },
    { label: 'Time zone', value: `Dhaka · ${profile.timezone}` },
    { label: 'Overlap', value: '4–6 h CET · 3+ h EST' },
]
</script>

<template>
    <section id="Contact" class="section">
        <div class="main-container">
            <SectionHeading eyebrow="Contact" title="Let's build something"
                lead="Tell me what you're building and what's in the way. You'll get a scoped, fixed-price reply — usually within 24 hours." />

            <!-- ── Primary channel: email ──────────────────────────── -->
            <div class="mt-14 card overflow-hidden">
                <div class="p-8 text-center sm:p-12">
                    <p class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                        Straight to my inbox
                    </p>

                    <a :href="mailto"
                        class="mt-4 block break-all font-black tracking-tight text-gray-800 transition hover:text-red-500 dark:text-gray-100 dark:hover:text-red-400 text-xl sm:text-3xl md:text-4xl">
                        {{ profile.email }}
                    </a>

                    <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a :href="mailto" class="btn-primary w-full sm:w-auto">
                            <IconsEnvelop class="size-4" />
                            Write me an email
                        </a>

                        <button v-if="isSupported" type="button" class="btn-outline w-full sm:w-auto"
                            @click="copy()">
                            <IconsCheck v-if="copied" class="size-4 text-emerald-500" />
                            {{ copied ? 'Address copied' : 'Copy address' }}
                        </button>
                    </div>
                </div>

                <!-- facts rail -->
                <dl class="grid grid-cols-1 gap-px border-t border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-gray-800 sm:grid-cols-3">
                    <div v-for="channel in channels" :key="channel.label"
                        class="bg-white px-5 py-5 text-center dark:bg-gray-900/60">
                        <dt class="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            {{ channel.label }}
                        </dt>
                        <dd class="mt-1 text-sm font-bold text-gray-700 dark:text-gray-200">
                            {{ channel.value }}
                        </dd>
                    </div>
                </dl>
            </div>

            <!-- ── Marketplaces ────────────────────────────────────── -->
            <div class="mt-14">
                <p class="text-center text-sm font-bold uppercase tracking-[0.18em] text-gray-400">
                    Or hire me through a marketplace
                </p>

                <div class="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <a v-for="platform in ordered" :key="platform.key" :href="platform.url" target="_blank"
                        rel="noopener noreferrer" class="card card-hover group flex flex-col p-6"
                        :class="platform.key === 'fiverr'
                            ? 'ring-2 ring-brand-fiverr/35 border-brand-fiverr/40 sm:col-span-2 lg:col-span-1'
                            : ''">

                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-3">
                                <component :is="platformIcons[platform.key]" class="size-9"
                                    :style="platform.key === 'upwork' ? { color: platform.color } : null" />
                                <div>
                                    <p class="font-black text-lg text-gray-800 dark:text-gray-100">
                                        {{ platform.name }}
                                    </p>
                                    <p class="text-xs font-semibold text-gray-400">@{{ platform.handle }}</p>
                                </div>
                            </div>

                            <span v-if="platform.key === 'fiverr'"
                                class="rounded-full bg-brand-fiverr/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-brand-fiverr">
                                Fastest
                            </span>
                        </div>

                        <p class="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {{ platform.tagline }}
                        </p>

                        <span
                            class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 transition group-hover:text-brand-fiverr dark:text-gray-400">
                            {{ platform.cta }}
                            <IconsArrowUpRight
                                class="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
