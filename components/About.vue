<script setup>
import { profile, education, languages } from '~/data/profile'

const facts = [
    { label: 'Based in', value: `${profile.location} (${profile.timezone})` },
    { label: 'Overlap', value: profile.overlap },
    { label: 'Working language', value: 'English — async-first, written updates' },
    { label: 'Engagement', value: 'Fixed-price gigs, hourly contracts or retainer' },
]
</script>

<template>
    <section id="About" class="section bg-gray-50/70 dark:bg-gray-800/20">
        <div class="main-container">
            <div class="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

                <!-- ── Story ───────────────────────────────────────── -->
                <div class="space-y-6">
                    <SectionHeading align="left" eyebrow="About me" title="A developer who ships, then supports it" />

                    <div class="space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>
                            I started out writing Laravel backends for ERP and billing systems in Bangladesh, where
                            the brief was usually "it's slow and it breaks." That's where I learned the unglamorous
                            half of this job — indexing, caching, queue reliability, and reading someone else's
                            code before changing it.
                        </p>
                        <p>
                            Today I'm on the remote engineering team at
                            <strong class="font-bold text-gray-700 dark:text-gray-200">Körbler GmbH</strong> in
                            Austria, building the front end of
                            <strong class="font-bold text-gray-700 dark:text-gray-200">1Tool</strong> — a
                            multi-tenant CRM/ERP suite with 30+ modules used across Europe. I own the calendar and
                            scheduling module end-to-end, and everything I merge goes through review under a
                            zero-warning ESLint policy.
                        </p>
                        <p>
                            Outside of that I take on freelance work through Fiverr, Upwork and Freelancer, and
                            maintain a small PHP micro-framework on Packagist. I use AI-assisted tooling daily in
                            production — but I review and own every line that ships.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3 pt-2">
                        <a :href="profile.resume" download class="btn-primary">
                            <IconsDownload class="size-4" />
                            Download CV
                        </a>
                        <a :href="`mailto:${profile.email}`" class="btn-outline">
                            <IconsEnvelop class="size-4" />
                            Email me
                        </a>
                    </div>
                </div>

                <!-- ── Facts ───────────────────────────────────────── -->
                <div class="space-y-6">
                    <dl class="card divide-y divide-gray-200 dark:divide-gray-800">
                        <div v-for="fact in facts" :key="fact.label" class="px-6 py-4">
                            <dt class="text-xs font-bold uppercase tracking-wider text-gray-400">{{ fact.label }}</dt>
                            <dd class="mt-1 font-semibold text-gray-700 dark:text-gray-200">{{ fact.value }}</dd>
                        </div>
                    </dl>

                    <div class="card p-6">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Education</h3>
                        <p class="mt-2 font-bold text-gray-800 dark:text-gray-100">{{ education.degree }}</p>
                        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            {{ education.school }} · {{ education.period }}
                        </p>
                        <p class="mt-1 text-sm font-semibold text-red-500">{{ education.grade }}</p>
                    </div>

                    <div class="card p-6">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Languages</h3>
                        <ul class="mt-3 space-y-2">
                            <li v-for="language in languages" :key="language.name"
                                class="flex flex-wrap items-baseline justify-between gap-2">
                                <span class="font-bold text-gray-700 dark:text-gray-200">{{ language.name }}</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400">{{ language.level }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
