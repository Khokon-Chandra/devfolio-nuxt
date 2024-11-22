
export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isSidebarVisible: false,
    }),
    actions: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible
        },
        closeSidebar() {
            this.isSidebarVisible = false
        },
    },
})
