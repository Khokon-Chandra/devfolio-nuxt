import { RouterConfig } from "nuxt/schema";

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }

        return { left: 0, top: 0, behavior: 'smooth' }
    }
}