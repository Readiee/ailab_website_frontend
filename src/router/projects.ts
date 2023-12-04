import ProjectPhotoView from '@/views/ProjectPhotoView.vue'
import ProjectVideoView from '@/views/ProjectVideoView.vue'

export default [
	// {
	// 	path: '/projects',
	// 	name: 'projects',
	// 	component: ProjectsView,
	// 	meta: {
	// 		middleware: true // Только для неавторизованных
	// 	}
	// },
	{
		path: '/projects/photo/:slug',
		name: 'photoProject',
		component: ProjectPhotoView
	},
	{
		path: '/projects/video/:slug',
		name: 'videoProject',
		component: ProjectVideoView
	},
]
