import { computed, onMounted, ref, watch } from 'vue'
import { getPhotoScript, getProject, getVideoScript } from '@/api/projects.api'
import type { Project } from '@/api/types'
import { useRoute, useRouter } from 'vue-router'

export default function useProject() {
	const router = useRouter()
	const route = useRoute()
	const slug = ref(String(route.params.slug))
	const data = ref<Project>()
	const fetching = async () => {
		try {
			const response = await getProject(slug.value)
			data.value = response.data
		} catch (err) {
			console.log(err)
			router.push({ name: 'notFound' })
		}
		fetchingScript()
	}
	
	const project = computed(() => {
		return data.value
	})

	onMounted(() => {
		fetching()
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})

	watch(slug, () => {
		// location.reload()
		fetching()
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})

	const fetchScriptError = ref()
	let scriptElement: HTMLScriptElement

	const fetchingScript = async () => {
		if (scriptElement) {
			scriptElement.parentNode?.removeChild(scriptElement)
		}
		if (project.value) {
			try {
				let response
				if (project.value.type == 0) {
					response = await getPhotoScript(slug.value)
				} 
				else if (project.value.type == 1) {
					response = await getVideoScript(slug.value)
				}
				const scriptText = await response?.data
				scriptElement = document.createElement('script')
				scriptElement.innerHTML = scriptText
				document.head.appendChild(scriptElement)

				fetchScriptError.value = false
			} catch (err) {
				fetchScriptError.value = true
				console.log(err)
			}
		} else {
			console.log('No project.')
		}
	}

	return {
		slug,
		project,
		fetchScriptError
	} 
} 