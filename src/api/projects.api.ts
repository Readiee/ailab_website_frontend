import { mainApi, photoApi, videoApi } from '@/api/index'

export async function getProject(slug:string) {
	return mainApi.get('/get-projects/' + slug + '/')
}

export async function getVideoScript(slug:string) {
	return videoApi.get(slug + '/script/')
}

export async function getPhotoScript(slug:string) {	
	return photoApi.get(slug + '/script/')
}