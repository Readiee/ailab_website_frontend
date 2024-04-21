import { computed, onMounted, ref, watch } from 'vue'
import { getArticle } from '@/api/articles.api'
import type { Article } from '@/api/types'
import { useRoute, useRouter } from 'vue-router'

export default function useArticle() {
	const router = useRouter()
	const route = useRoute()
	const slug = ref(String(route.params.slug))
	const data = ref<Article>()
	const fetching = async () => {
		try {
			const response = await getArticle(slug.value)
			data.value = response.data
		} catch (err) {
			console.log(err)
			router.push({ name: 'notFound' })
		}
	}
	
	const articleItem = computed(() => {
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

	return {
		slug,
		articleItem,
	} 
} 