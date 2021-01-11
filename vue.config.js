module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				'import': [
					'./src/theme'
				]
			}
		}
	},
	publicPath: './',
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	}
};
