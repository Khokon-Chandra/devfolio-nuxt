<script setup>
import { profile, education, languages, platforms } from '~/data/profile'

const fiverr = platforms.find(p => p.key === 'fiverr')
</script>

<template>
    <section id="About" class="section bg-gray-50/70 dark:bg-gray-800/20">
        <div class="main-container">
            <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">

                <!-- ── Story ───────────────────────────────────────── -->
                <div class="space-y-6">
                    <SectionHeading align="left" eyebrow="About me"
                        title="A remote developer who ships, then supports it" />

                    <div class="space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>
                            I started out writing Laravel backends for ERP and billing systems, where the brief
                            was usually "it's slow and it breaks." That's where I learned the unglamorous half of
                            this job — indexing, caching, queue reliability, and reading someone else's code
                            carefully before changing it.
                        </p>
                        <p>
                            Today I work fully remote with a distributed European product team, building the front
                            end of a multi-tenant CRM/ERP platform with 30+ modules. I own a module end-to-end,
                            and everything I merge goes through review under a zero-warning lint policy.
                        </p>
                        <p>
                            Remote work is the whole job for me, not a perk — written updates, small reviewable
                            commits, and a staging URL you can check any time. Alongside that I take freelance
                            projects through Fiverr, Upwork and Freelancer, and maintain a PHP micro-framework
                            on Packagist.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3 pt-2">
                        <a :href="`mailto:${profile.email}`" class="btn-primary">
                            <IconsEnvelop class="size-4" />
                            Email me
                        </a>
                        <a :href="fiverr.url" target="_blank" rel="noopener noreferrer" class="btn-soft">
                            <IconsFiverr class="size-4" />
                            Hire me on Fiverr
                        </a>
                    </div>
                </div>

                <!-- ── Remote facts ────────────────────────────────── -->
                <div class="space-y-6">
                    <dl class="card divide-y divide-gray-200 dark:divide-gray-800">
                        <div v-for="fact in profile.remote" :key="fact.label" class="px-6 py-4">
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
