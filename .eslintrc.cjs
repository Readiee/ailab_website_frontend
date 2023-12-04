/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 6,
				},
				multiline: {
					max: 1,
				},
			},
		],
		'multiline-html-element-content-newline': 'off',

		semi: [2, 'never'],
		quotes: [2, 'single', { avoidEscape: true }],
		indent: ['error', 'tab'],
		'vue/block-lang': [
			'error',
			{
				script: {
					lang: 'ts',
				},
			},
		],

		'vue/singleline-html-element-content-newline': 'off'
	},
}
