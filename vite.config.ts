import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({ 
			script: {
				defineModel: true
			}
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	define: { 'process.env': {
		MAIN_API_URL: 'http://10.3.3.147/api/v1', // основной API
		PHOTO_API_URL: 'http://10.3.3.147/photo/', // API нейронок-фото
		VIDEO_API_URL: 'http://10.3.3.147/webrtc/', // API нейронок-видео
	} },
})
