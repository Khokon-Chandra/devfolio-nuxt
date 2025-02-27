<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';

// Validation Schema
const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

// Form Configuration
const { values, errors, handleSubmit, isSubmitting, setFieldTouched } = useForm({
    validationSchema: schema,
    initialValues: { name: '', email: '', subject: '', message: '' },
});

const successMessage = ref('');
const touchedFields = ref({ name: false, email: false, message: false });

// Mark a field as touched on blur
const setTouched = (field) => {
    touchedFields.value[field] = true;
    setFieldTouched(field, true);
};

// Show error only if field is touched or after the first submission
const showError = (field) => touchedFields.value[field] && errors[field];

// Handle Form Submission
const onSubmit = async () => {
    alert('hello')
    touchedFields.value = { name: true, email: true, subject: true, message: true }; // Show errors after first submit

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error('Something went wrong');

        successMessage.value = 'Your message has been sent successfully!';
    } catch (error) {
        console.error(error);
    }
};
</script>
<template>
    <section id="Contact">
        <div class="main-container py-24">
            <h1 class="font-black text-5xl text-gray-400 text-center mb-10">Say Hi to <span
                    class="text-gray-600 dark:text-gray-300">Khokon</span>.</h1>
            <div class="flex flex-col md:flex-row justify-between items-center">

                <div class="flex-1 space-y-2">

                    <div class="flex items-center gap-4">
                        <IconsEnvelop class="size-6 text-gray-600 dark:text-gray-400" />
                        <span class="font-medium text-gray-600 dark:text-gray-300">khokonchandra4@gmail.com</span>
                    </div>

                    <div class="flex items-center gap-4">
                        <IconsLocation class="size-6 text-gray-600 dark:text-gray-400" />
                        <span class="font-medium text-gray-600 dark:text-gray-300">Dhaka, Bangladesh.</span>
                    </div>
                </div>

                <div class="p-4 flex-1 w-full">
                    <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>

                    <form class="space-y-6" @submit.prevent="handleSubmit(onSubmit)">
                        <div>
                            <input class="input" type="text" v-model="values.name" @blur="setTouched('name')"
                                placeholder="Full name">
                            <p v-if="showError('name')" class="font-normal text-sm text-red-600">Name is required!</p>
                        </div>
                        <div>
                            <input class="input" type="email" v-model="values.email" @blur="setTouched('email')"
                                placeholder="E-mail address">
                            <p v-if="showError('email')" class="font-normal text-sm text-red-600">{{ errors.email }}</p>
                        </div>

                        <div>
                            <input class="input" type="text" v-model="values.subject" @blur="setTouched('subject')"
                                placeholder="Subject">
                            <p v-if="showError('subject')" class="font-normal text-sm text-red-600">Subject is required!
                            </p>
                        </div>

                        <div>
                            <textarea class="input" type="text" v-model="values.message" @blur="setTouched('message')"
                                placeholder="Message"></textarea>
                            <p v-if="showError('message')" class="font-normal text-sm text-red-600">{{ errors.message }}
                            </p>
                        </div>

                        <button type="submit" :disabled="isSubmitting"
                            class="border border-red-500 px-6 py-2 items-center rounded-full text-red-500 dark:text-red-600 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white font-bold w-full">

                            {{ isSubmitting ? "Sending..." : "Get in touch" }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.input {
    @apply w-full bg-gray-200 dark:bg-gray-800 px-6 py-2 rounded-md focus:outline-none text-gray-600 dark:text-gray-300 font-medium text-lg focus:ring-2
}
</style>