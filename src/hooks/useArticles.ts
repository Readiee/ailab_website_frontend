import { onMounted, ref, watch } from 'vue'
import { getArticles } from '@/api/home.api'
import type { Article } from '@/api/types'
import { useRoute } from 'vue-router'

export default function useArticles() {
	const articles = ref<Article[]>([])
	const route = useRoute()
	const currentArticleSlug = ref(String(route.params.slug))

	const fetching = async () => {
		try {
			const response = await getArticles()
			articles.value = response.data
		} catch (err) {
			console.log(err)
		} finally {
			articles.value = articles.value.filter(a => a.slug != currentArticleSlug.value)
		}
	}

	onMounted(fetching)

	watch(currentArticleSlug, () => {
		fetching()
		window.scrollTo({ top: 0, behavior: 'smooth'})
	})

	return {
		currentArticleSlug,
		articles
	} 
}
