<script setup>
const email = 'khokonchandra4@gmail.com'
const copied = ref(false)
let copyTimeout = null

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email)
    } catch {
        const textarea = document.createElement('textarea')
        textarea.value = email
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
    }

    copied.value = true
    clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
        copied.value = false
    }, 2000)
}

onUnmounted(() => clearTimeout(copyTimeout))
</script>

<template>
    <section id="Contact" class="py-24 md:py-32">
        <div class="main-container">
            <div
                class="relative mx-auto max-w-2xl rounded-3xl border border-gray-200/80 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700/60 dark:bg-gray-800/40 md:p-12">

                <div class="flex flex-col items-center text-center">
                    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                        Contact
                    </p>

                    <h1 class="mb-3 font-black text-4xl text-gray-500 dark:text-gray-400 sm:text-5xl">
                        Say Hi to
                        <span class="text-gray-600 dark:text-gray-300">Khokon</span>
                    </h1>

                    <p class="mb-8 max-w-sm text-gray-700 dark:text-gray-300">
                        Let's build something together.
                    </p>

                    <button type="button" @click="copyEmail" title="Click to copy email"
                        class="group mb-6 flex w-full max-w-lg items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99]"
                        :class="copied
                            ? 'border-green-400/70 bg-green-50/80 dark:border-green-500/40 dark:bg-green-950/30'
                            : 'border-gray-200/80 bg-white/50 hover:border-red-400/50 hover:bg-white/80 dark:border-gray-700/80 dark:bg-gray-900/50 dark:hover:border-red-500/40'">
                        <IconsEnvelop class="size-5 shrink-0 transition-colors"
                            :class="copied ? 'text-green-500' : 'text-red-500'" />

                        <span class="min-w-0 flex-1 truncate font-mono text-sm font-medium sm:text-base"
                            :class="copied ? 'text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'">
                            {{ copied ? 'Copied to clipboard!' : email }}
                        </span>

                        <span
                            class="flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors duration-200"
                            :class="copied
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white dark:bg-red-500/15'">
                            <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                            {{ copied ? 'Done' : 'Copy' }}
                        </span>
                    </button>

                    <a :href="`mailto:${email}`" class="btn-primary mb-8 inline-flex items-center gap-2">
                        <IconsEnvelop class="size-4" />
                        Send an Email
                    </a>

                    <div class="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
                        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <IconsLocation class="size-4" />
                            <span>Dhaka, Bangladesh</span>
                        </div>

                        <span class="hidden text-gray-300 dark:text-gray-600 sm:inline">·</span>

                        <div class="flex items-center gap-6">
                            <a class="social-icon" target="_blank" rel="noopener noreferrer"
                                href="https://github.com/Khokon-Chandra" aria-label="GitHub">
                                <IconsGithub class="size-7" />
                            </a>
                            <a class="social-icon" target="_blank" rel="noopener noreferrer"
                                href="https://linkedin.com/in/khokonchandra" aria-label="LinkedIn">
                                <IconsLinkedin class="size-7" />
                            </a>
                            <a class="social-icon" target="_blank" rel="noopener noreferrer"
                                href="https://x.com/KhokonChandra12" aria-label="Twitter">
                                <IconsTwitter class="size-7" />
                            </a>
                            <a class="social-icon" target="_blank" rel="noopener noreferrer"
                                href="https://leetcode.com/u/khokonchandra/" aria-label="LeetCode">
                                <IconsLeetCode class="size-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
