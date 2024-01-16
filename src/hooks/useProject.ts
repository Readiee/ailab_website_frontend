import { computed, onBeforeUpdate, onMounted, onUpdated, ref, watch } from 'vue'
import { getProject } from '@/api/projects.api'
import type { Project } from '@/api/types'
import { useRoute } from 'vue-router'

export default function useProject() {
	const route = useRoute()
	const slug = ref(String(route.params.slug))
	const data = ref<Project>()
	const fetching = async () => {
		try {
			const response = await getProject(slug.value)
			data.value = response.data
			
		} catch (err) {
			console.log(err)
		}
	}
	
	const project = computed(() => {
		return data.value
	})

	onMounted(fetching)

	watch(slug, newVal => {
		console.log(newVal)
		fetching()
	})

	return {
		slug,
		project
	} 
} 