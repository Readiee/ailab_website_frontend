import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import homeRoutes from '@/router/home'
import projectsRoutes from '@/router/projects'

const routes: RouteRecordRaw[] = [
	...homeRoutes,
	...projectsRoutes,
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
