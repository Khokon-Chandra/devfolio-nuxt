<script setup>

const experiences = [
    {
        title: 'Software Engineer',
        date: 'June 2023 - Sept 2023',
        company: 'Spagreen Creative, Dhaka',
        lists: [
            'Engineered a scalable Learning Management System (LMS) for Codecanyon, supporting 10,000+ users while main-taining seamless performance.',
            'Developed a Courier Management System, cutting parcel tracking errors by 20% through automated workflows and optimized database queries.',
            'Increased efficiency of background tasks by 30% with schedulers, cron jobs, and Supervisord.'
        ]
    },

    {
        title: 'Full-Stack Developer',
        date: 'May 2022 - June 2023',
        company: 'Zit Solution Ltd, Dhaka',
        lists: [
            'Improved server-to-database load times by 35% for an electric bill payment system via Redis, indexing, and database normalization',
            'Optimized large-scale database query performance by 40% through indexing, eager loading, and progressive loading techniques.',
            'Built secure, scalable RESTful APIs, supporting 10,000+ daily API calls, facilitating efficient communication between front-end and back-end services.',
            'Designed a scalable database model, improving data integrity for 50,000+ records'
        ]
    },

    {
        title: 'Backend Developer',
        date: 'Nov 2021 - May 2022',
        company: 'Legend IT Solution, Rangpur',
        lists: [
            'Enhanced ERP systems for Cold Storage and Accounting using Laravel, improving efficiency by 25% through responsive interfaces',
            'Streamlined backend workflows, increasing system efficiency by 20% by collaborating with teams for requirement gathering and implementation.'
        ]
    }


]

</script>
<template>
    <section>
        <div class="main-container py-12 space-y-12">

            <div class="text-center max-w-2xl mx-auto">
                <h1 class="font-black text-5xl text-gray-400 mb-4">Professional Experience</h1>
            </div>


            <div class="p-8 dark:bg-gray-800/20 ">

                <div v-for="experience in experiences" class="relative py-6">
                    <div class="absolute w-px bg-gray-300 dark:bg-gray-800 h-full top-0"></div>
                    <div
                        class="absolute size-3 rounded-full border-2 border-gray-400 dark:border-gray-700 -top-3 -left-[5.08px]">
                    </div>

                    <div class="p-4 space-y-2">
                        <h4 class="font-normal text-sm text-gray-600">{{ experience.date }}</h4>
                        <h3 class="font-bold text-xl text-gray-700 dark:text-gray-300">{{ experience.title }}</h3>
                        <h5 class="font-semibold text-gray-600 dark:text-gray-400">{{ experience.company }}</h5>
                        <ul class="list-disc list-outside pl-5">
                            <li v-for="item in experience.lists" class="font-normal text-gray-500 text-wrap">{{ item }}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>