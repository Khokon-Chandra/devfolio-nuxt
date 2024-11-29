<script setup>

const activeId = ref(null)

onMounted(() => {
    const callback = (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                activeId.value = entry.target.id
                break;
            }
        }
    }
    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.5
    })
    const elements = document.querySelectorAll('h2, h3')
    for (const element of elements) {
        observer.observe(element)
    }
    onBeforeUnmount(() => {
        for (const element of elements) {
            observer.unobserve(element)
        }
    })
})
</script>

<template>
    <div>
        <article class="
        main-container 
        prose dark:prose-invert
         py-24 prose-h1:text-4xl 
         prose-h1:text-gray-700 
         prose-h1:dark:text-gray-300 
         prose-pre:bg-gray-200
         prose-pre:text-gray-700
         dark:prose-pre:bg-gray-800
         dark:prose-pre:text-gray-300
         ">
            <ContentDoc v-slot="{ doc }">
                <div class="grid grid-cols-6 gap-16">
                    <div :class="{ 'col-span-6 lg:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
                        <ContentRenderer :value="doc" />
                    </div>

                    <div v-if="doc.toc" class="hidden lg:block col-span-2">
                        <aside class="sticky top-8 not-prose">
                            <h5 class="font-semibold text-xl mb-2">Table of contents</h5>
                            <nav>
                                <TopLink :links="doc.body.toc.links" :active-id="activeId" />
                            </nav>
                        </aside>
                    </div>
                </div>
            </ContentDoc>
        </article>
    </div>
</template>