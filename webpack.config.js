const AUTOPREFIXER = require('autoprefixer'),
      HTML_WEBPACK_PLUGIN = require('html-webpack-plugin'),
      MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin'),
      MODERNIZR_WEBPACK_PLUGIN = require('modernizr-webpack-plugin'),
      WEBPACK = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
		index: './src/javascript/index.js'
	},
  output: {
		filename: '[name].js',
		chunkFilename: '[name].[hash].js'
  },
  mode: isDevelopment ? 'production' : 'development',
	devtool: isDevelopment && 'source-map',
	devServer: {
		port: 3000,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff'
					}
				}
			]},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
			{
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'image-webpack-loader',
				enforce: 'pre'
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[hash].[ext]',
							limit: 8000,
							useRelativePath: true
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MINI_CSS_EXTRACT_PLUGIN.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: isDevelopment,
							minimize: !isDevelopment
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: { browsers: ['last 2 versions'] },
							sourceMap: isDevelopment,
							plugins: () => [ AUTOPREFIXER ]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{ test: /\.pug$/, loader: 'pug-loader' }
		],
	},
	plugins: [
		new MODERNIZR_WEBPACK_PLUGIN(),
		new WEBPACK.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new MINI_CSS_EXTRACT_PLUGIN({
			filename: '[name].css',
			chunkFilename: '[id].[hash].css'
		}),
		new HTML_WEBPACK_PLUGIN({
			language: require('./src/languages/english'),
			utils: require('./src/javascript/pugUtils'),
			template: './src/templates/index.pug',
			chunks: ['index'],
			minify: !isDevelopment && {
				html5: true,
				collapseWhitespace: true,
				caseSensitive: true,
				removeComments: true,
				removeEmptyElements: true
			},
		})
	],
	optimization: {
		minimize: !isDevelopment
	}
};
