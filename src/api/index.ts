import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const mainApi = axios.create({
	baseURL: process.env.MAIN_API_URL,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
		// withCredentials: true,
		// credentials: 'include',
	}
})

const photoApi = axios.create({
	baseURL: process.env.PHOTO_API_URL,
	timeout: 1000,
	headers: {
		// 'Content-Type': 'application/json',
		// withCredentials: true,
		// credentials: 'include',
	}
})

const videoApi = axios.create({
	baseURL: process.env.VIDEO_API_URL,
	timeout: 1000,
	headers: {
		// 'Content-Type': 'application/json',
		// withCredentials: true,
		// credentials: 'include',
	}
})

export { mainApi, photoApi,	videoApi }

