<template>
    <div class="animate-pulse space-y-6">
        <!-- Blog Item Skeleton -->
        <div v-for="i in 3" :key="i" class="flex gap-4 p-4 border rounded-lg dark:border-gray-700">
            <!-- Image Placeholder -->
            <div class="w-32 h-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            <!-- Text Placeholder -->
            <div class="flex-1 space-y-2">
                <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    </div>
</template>