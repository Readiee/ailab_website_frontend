import { photoApi } from '@/api/index'

export async function runPhotoScript(slug:string) {
	return photoApi.get(slug + '/script/')
		.then(response => {
			new Function(response.data)()
		})
		.catch(e => {
			console.log(e)
		})
}

