module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		// 'linebreak-style': [
		// 	'error',
		// 	'windows'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		// // 'semi': [
		// // 	'error',
		// // 	'always'
		// // ],
		// 'no-console': 2, //不允许出现console语句
		// 'semi': [2, 'always'],
	}
};