import UnknownErrorView from '@/views/UnknownErrorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export default [
	{
		path: '/error',
		name: 'unknownError',
		component: UnknownErrorView,
		meta: { title: 'Произошла ошибка' }
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: NotFoundView,
		meta: { title: 'Страница не найдена' }
	},
]
