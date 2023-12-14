/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{html,ts,vue}',
		'./src/views/**/*.{html,ts,vue}',
		'./src/App.vue',
		'./index.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	blocklist: [
		'container'
	]
}