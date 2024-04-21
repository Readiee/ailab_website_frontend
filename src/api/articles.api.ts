import { mainApi } from '@/api/index'

export async function getArticle(slug:string) {
	return mainApi.get('/get-articles/' + slug)
}