import { computed, onMounted, ref } from 'vue'
import { getProjects } from '@/api/home.api'
import type { Project } from '@/api/types'

export default function useProjects() {
	const data = ref<Project[]>([])
	const isRealizedSwitch = ref<boolean>(true) // реализовано или разрабатывается
	const slice = ref<number>(4)

	const fetching = async () => {
		try {
			const response = await getProjects()
			data.value = response.data
		} catch (err) {
			console.log(err)
		}
	}

	const loadMore = () => {
		slice.value += 4
	}
	
	const projects = computed(() => {
		return data.value.filter(p => p.is_realized == isRealizedSwitch.value).slice(0, slice.value)
	})

	onMounted(fetching)

	return {
		projects, isRealizedSwitch
	} 
} 

