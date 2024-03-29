import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import homeRoutes from '@/router/home'
import projectsRoutes from '@/router/projects'
import errorRoutes from '@/router/errors'

const routes: RouteRecordRaw[] = [
	...homeRoutes,
	...projectsRoutes,
	...errorRoutes,
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

const WEBSITE_TITLE = 'НУЛ СИИ ИКИТ'
router.afterEach((to, from) => {
	document.title = to.meta.title + ' — ' + WEBSITE_TITLE
})
export default router
