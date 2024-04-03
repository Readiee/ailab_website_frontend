import { mainApi } from '@/api/index'

export async function getNew(id:number) {
	return mainApi.get('/get-news/' + id)
}