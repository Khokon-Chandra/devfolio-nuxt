
export const useScrollStore = defineStore('smooth-scroll', {
    actions: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        },
    }
})