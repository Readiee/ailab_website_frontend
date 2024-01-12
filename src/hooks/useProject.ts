import { computed, onMounted, ref } from 'vue'
import { getProject } from '@/api/projects.api'
import type { Project } from '@/api/types'

export default function useProject(slug:string) {
	const data = ref<Project>()
	const fetching = async () => {
		try {
			const response = await getProject(slug)
			data.value = response.data
			
		} catch (err) {
			console.log(err)
		}
	}
	
	const project = computed(() => {
		return data.value
	})

	onMounted(fetching)

	return {
		project
	} 
} 