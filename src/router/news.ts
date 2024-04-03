import NewView from '@/views/NewView.vue'

export default [
	{
		path: '/news/:id',
		name: 'new',
		component: NewView,
		// meta: { title: 'Новость' }
	},
]
