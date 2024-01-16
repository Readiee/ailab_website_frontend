import ProjectView from '@/views/ProjectView.vue'

export default [
	// {
	// 	path: '/projects',
	// 	name: 'projects',
	// 	component: ProjectsView,
	// 	meta: {
	// 		middleware: true // Только для неавторизованных
	// 	}
	// },

	// {
	// 	path: '/projects/photo/:slug',
	// 	name: 'photoProject',
	// 	component: ProjectPhotoView,
	// 	meta: { title: 'Фотопроект' }

	// },
	// {
	// 	path: '/projects/video/:slug',
	// 	name: 'videoProject',
	// 	component: ProjectVideoView,
	// 	meta: { title: 'Видеопроект' }
	// },

	{
		path: '/projects/video/:slug',
		name: 'videoProject',
		component: ProjectView,
		meta: { title: 'Видеопроект' }
	},

	{
		path: '/projects/photo/:slug',
		name: 'photoProject',
		component: ProjectView,
		meta: { title: 'Фотопроект' }
	},
]
