<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { profile, platforms } from '~/data/profile'

const fiverr = platforms.find(p => p.key === 'fiverr')

const schema = yup.object({
    name: yup.string().trim().required('Please enter your name.').min(2, 'That name looks too short.'),
    email: yup.string().trim().required('Please enter your email.').email('Please enter a valid email address.'),
    subject: yup.string().trim().required('Please add a subject.').min(3, 'Please add a subject.'),
    budget: yup.string().default('Not specified'),
    message: yup.string().trim().required('Please write a message.').min(10, 'Please write at least 10 characters.'),
})

const { defineField, errors, handleSubmit, isSubmitting, resetForm, values } = useForm({
    validationSchema: schema,
    initialValues: { name: '', email: '', subject: '', budget: '', message: '' },
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [subject, subjectAttrs] = defineField('subject')
const [budget, budgetAttrs] = defineField('budget')
const [message, messageAttrs] = defineField('message')

/** Honeypot — hidden from humans, irresistible to bots. */
const company = ref('')

const status = ref('idle') // 'idle' | 'success' | 'error'
const statusMessage = ref('')
/** Set when the server has no mail provider configured, so we offer a mailto escape hatch. */
const showMailtoFallback = ref(false)

const budgetOptions = [
    'Under $250',
    '$250 – $1,000',
    '$1,000 – $5,000',
    '$5,000+',
    'Not sure yet',
]

const mailtoHref = computed(() => {
    const params = new URLSearchParams({
        subject: values.subject || 'Project enquiry',
        body: `${values.message || ''}\n\n—\n${values.name || ''}\n${values.email || ''}\nBudget: ${values.budget || 'Not specified'}`,
    })
    return `mailto:${profile.email}?${params.toString()}`
})

const onSubmit = handleSubmit(async (formValues) => {
    status.value = 'idle'
    showMailtoFallback.value = false

    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: { ...formValues, company: company.value },
        })

        status.value = 'success'
        statusMessage.value = `Thanks ${formValues.name.split(' ')[0]} — your message is on its way. I usually reply within a day.`
        resetForm()
    } catch (error) {
        status.value = 'error'
        const code = error?.data?.statusCode ?? error?.statusCode

        if (code === 503) {
            statusMessage.value = 'The form isn’t hooked up to email yet — send it directly instead:'
            showMailtoFallback.value = true
        } else if (code === 429) {
            statusMessage.value = 'That’s a few messages in a short time. Please try again in a few minutes.'
        } else {
            statusMessage.value = 'Something went wrong sending that. You can email me directly instead:'
            showMailtoFallback.value = true
        }
    }
})
</script>

<template>
    <section id="Contact" class="section">
        <div class="main-container">
            <SectionHeading eyebrow="Contact" title="Let's build something"
                lead="Tell me what you're working on and what's blocking it. You'll get a scoped, fixed-price reply — usually within 24 hours." />

            <div class="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">

                <!-- ── Direct channels ─────────────────────────────── -->
                <div class="space-y-6">
                    <div class="card divide-y divide-gray-200 dark:divide-gray-800">
                        <a :href="`mailto:${profile.email}`"
                            class="group flex items-center gap-4 px-6 py-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            <IconsEnvelop class="size-6 shrink-0 text-red-500" />
                            <div class="min-w-0">
                                <p class="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                                <p class="truncate font-semibold text-gray-700 dark:text-gray-200">{{ profile.email }}</p>
                            </div>
                        </a>

                        <a :href="`tel:${profile.phoneHref}`"
                            class="group flex items-center gap-4 px-6 py-5 transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            <IconsPhone class="size-6 shrink-0 text-red-500" />
                            <div class="min-w-0">
                                <p class="text-xs font-bold uppercase tracking-wider text-gray-400">Phone</p>
                                <p class="font-semibold text-gray-700 dark:text-gray-200">{{ profile.phone }}</p>
                            </div>
                        </a>

                        <div class="flex items-center gap-4 px-6 py-5">
                            <IconsLocation class="size-6 shrink-0 text-red-500" />
                            <div class="min-w-0">
                                <p class="text-xs font-bold uppercase tracking-wider text-gray-400">Location</p>
                                <p class="font-semibold text-gray-700 dark:text-gray-200">{{ profile.location }}</p>
                                <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{{ profile.overlap }}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 px-6 py-5">
                            <IconsClock class="size-6 shrink-0 text-red-500" />
                            <div class="min-w-0">
                                <p class="text-xs font-bold uppercase tracking-wider text-gray-400">Response time</p>
                                <p class="font-semibold text-gray-700 dark:text-gray-200">Within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <!-- Fiverr shortcut -->
                    <div class="card overflow-hidden">
                        <div class="border-l-4 border-red-500 p-6">
                            <p class="inline-flex items-center gap-2 font-black text-gray-800 dark:text-gray-100">
                                <IconsFiverr class="size-5" />
                                Rather use Fiverr?
                            </p>
                            <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Order through Fiverr for escrow, buyer protection and a fixed delivery date — the
                                messaging thread stays on the platform.
                            </p>
                            <a :href="fiverr.url" target="_blank" rel="noopener noreferrer" class="btn-secondary mt-5 w-full">
                                Message me on Fiverr
                                <IconsArrowUpRight class="size-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- ── Form ────────────────────────────────────────── -->
                <div class="card p-6 sm:p-8">
                    <!-- status banners -->
                    <div v-if="status === 'success'"
                        class="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4"
                        role="status">
                        <IconsCheck class="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <p class="text-sm font-semibold text-emerald-800 dark:text-emerald-300">{{ statusMessage }}</p>
                    </div>

                    <div v-else-if="status === 'error'"
                        class="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4" role="alert">
                        <p class="text-sm font-semibold text-red-700 dark:text-red-300">{{ statusMessage }}</p>
                        <a v-if="showMailtoFallback" :href="mailtoHref"
                            class="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-red-700 underline underline-offset-2 dark:text-red-300">
                            <IconsEnvelop class="size-4" />
                            {{ profile.email }}
                        </a>
                    </div>

                    <form class="space-y-5" novalidate @submit="onSubmit">
                        <!-- honeypot: hidden from humans and screen readers -->
                        <div class="hidden" aria-hidden="true">
                            <label>
                                Company
                                <input v-model="company" type="text" tabindex="-1" autocomplete="off">
                            </label>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label for="c-name" class="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                                    Full name
                                </label>
                                <input id="c-name" v-model="name" v-bind="nameAttrs" type="text"
                                    placeholder="Jane Doe" autocomplete="name" class="input"
                                    :class="errors.name && 'input-error'">
                                <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
                            </div>

                            <div>
                                <label for="c-email" class="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input id="c-email" v-model="email" v-bind="emailAttrs" type="email"
                                    placeholder="jane@company.com" autocomplete="email" class="input"
                                    :class="errors.email && 'input-error'">
                                <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label for="c-subject" class="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                                    Subject
                                </label>
                                <input id="c-subject" v-model="subject" v-bind="subjectAttrs" type="text"
                                    placeholder="Laravel API for a booking app" class="input"
                                    :class="errors.subject && 'input-error'">
                                <p v-if="errors.subject" class="field-error">{{ errors.subject }}</p>
                            </div>

                            <div>
                                <label for="c-budget" class="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                                    Budget <span class="font-medium text-gray-400">(optional)</span>
                                </label>
                                <select id="c-budget" v-model="budget" v-bind="budgetAttrs" class="input">
                                    <option value="">Select a range</option>
                                    <option v-for="option in budgetOptions" :key="option" :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="c-message" class="mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-300">
                                Project details
                            </label>
                            <textarea id="c-message" v-model="message" v-bind="messageAttrs" rows="6"
                                placeholder="What are you building, what's the deadline, and what's currently in the way?"
                                class="input resize-y" :class="errors.message && 'input-error'" />
                            <p v-if="errors.message" class="field-error">{{ errors.message }}</p>
                        </div>

                        <button type="submit" :disabled="isSubmitting" class="btn-primary w-full">
                            <span v-if="isSubmitting"
                                class="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            {{ isSubmitting ? 'Sending…' : 'Send message' }}
                        </button>

                        <p class="text-center text-xs text-gray-400">
                            Your details go straight to my inbox — never shared or added to a mailing list.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
