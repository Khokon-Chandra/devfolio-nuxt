<script setup>

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
                    <form class="space-y-6">
                        <div>
                            <input class="input" type="text" name="" value="" placeholder="Full name">
                            <p v-show="false" class="font-normal text-sm text-red-600">Name is required!</p>
                        </div>
                        <div>
                            <input class="input" type="email" name="" value="" placeholder="E-mail address">
                            <p v-show="false" class="font-normal text-sm text-red-600">E-mail is required!</p>
                        </div>

                        <div>
                            <input class="input" type="text" name="" value="" placeholder="Subject">
                            <p v-show="false" class="font-normal text-sm text-red-600">Subject is required!</p>
                        </div>

                        <div>
                            <textarea class="input" type="text" name="" value="" placeholder="Message"></textarea>
                            <p v-show="false" class="font-normal text-sm text-red-600">Message is required!</p>
                        </div>

                        <button
                            class="border border-red-500 px-6 py-2 items-center rounded-full text-red-500 dark:text-red-600 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white font-bold w-full">Get
                            in touch</button>
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