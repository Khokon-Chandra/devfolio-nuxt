<template>
    <section id="About" class="py-24">
        <div
            class="main-container flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-center h-full w-full">
            <div class="flex-1 flex justify-center">
                <NuxtImg
                    src="https://avatars.githubusercontent.com/u/58368293?v=4"
                    alt="Khokon Chandra - Full Stack Developer"
                    width="320"
                    height="320"
                    class="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-700 shadow-xl"
                    format="webp"
                    loading="lazy"
                />
            </div>
            <div class="w-full lg:w-[40%] text-center lg:text-left">
                <h1
                    class="inline-block font-black text-5xl text-gray-600 dark:text-gray-300 mb-4 bg-white/40 dark:bg-gray-800/40">
                    About Me</h1>

                <p class="font-normal text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-gray-900/60">
                    I'm a passionate web developer with extensive
                    experience in backend and full-stack development. I
                    build scalable, secure, and user-friendly web applications using Laravel, PHP, and modern
                    JavaScript
                    frameworks like Vue.js and Nuxt.js.</p>
            </div>
        </div>
    </section>
</template>