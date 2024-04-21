import ArticleView from '@/views/ArticleView.vue'

export default [
	{
		path: '/articles/:slug',
		name: 'article',
		component: ArticleView,
		// meta: { title: 'Новость' }
	},
]
