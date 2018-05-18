const AUTOPREFIXER = require('autoprefixer'),
	  HTML_WEBPACK_PLUGIN = require('html-webpack-plugin'),
	  MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin'),
	  PATH = require('path'),
	  WEBPACK = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/js/app.js',
    output: {
		filename: 'bundle.js'
		// path: PATH.resolve(__dirname, 'dist')
	},
	devtool: isDevelopment && 'source-map',
	devServer: {
		port: 3000,
		open: true
	},
	module: {
		rules: [
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
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'static/',
							useRelativePath: true,
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: true
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		],
	},
    plugins: [
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
            title: 'Code Our Dreams',
			template: './src/templates/index.pug',
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