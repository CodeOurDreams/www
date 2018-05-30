const AUTOPREFIXER = require('autoprefixer'),
      HTML_WEBPACK_PLUGIN = require('html-webpack-plugin'),
      MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin'),
      MODERNIZR_WEBPACK_PLUGIN = require('modernizr-webpack-plugin'),
      PATH = require('path'),
      WEBPACK = require('webpack');
      
const ENGLISH = require('./src/languages/english');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
		index: './src/javascript/index.js'
	},
  output: {
		filename: '[name]-bundle.js'
		// path: PATH.resolve(__dirname, 'dist')
  },
  mode: isDevelopment ? 'production' : 'development',
	devtool: isDevelopment && 'source-map',
	devServer: {
		port: 3000,
		open: true
	},
	module: {
		rules: [
      // { test: /\.ts$/, use: 'ts-loader' },
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
			{ test: /\.pug$/, loader: 'pug-loader' },
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
					// },
					// {
					// 	loader: 'image-webpack-loader',
					// 	options: {
					// 		mozjpeg: {
					// 			progressive: true,
					// 			quality: 65
					// 		},
					// 		optipng: {
					// 			enabled: true,
					// 		},
					// 		pngquant: {
					// 			quality: '65-90',
					// 			speed: 1
					// 		},
					// 		gifsicle: {
					// 			interlaced: false,
					// 		},
					// 		webp: {
					// 			quality: 75
					// 		}
					// 	}
					}
				],
			}
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
		// new WEBPACK.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
		new WEBPACK.LoaderOptionsPlugin({
			options: {
				pugLoader: {}
			}
		}),
		new MINI_CSS_EXTRACT_PLUGIN({
			filename: '[name]-styles.css',
			chunkFilename: '[id].css'
		}),
		new HTML_WEBPACK_PLUGIN({
			english: ENGLISH,
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
	]
};