import { mainApi } from '@/api/index'

export async function getProject(slug:string) {
	return mainApi.get('/get-projects/' + slug + '/')
}
