const AUTOPREFIXER                   = require('autoprefixer'),
      COPY_WEBPACK_PLUGIN            = require('copy-webpack-plugin'),
      DASHBOARD_PLUGIN               = require('webpack-dashboard/plugin'),
      FRIENDLY_ERRORS_WEBPACK_PLUGIN = require('friendly-errors-webpack-plugin'),
      HTML_WEBPACK_PLUGIN            = require('html-webpack-plugin'),
      MINI_CSS_EXTRACT_PLUGIN        = require('mini-css-extract-plugin'),
      MODERNIZR_WEBPACK_PLUGIN       = require('modernizr-webpack-plugin'),
      WEBPACK                        = require('webpack');

const OPTIONS = {
  development: !process.env.NODE_ENV,
  host:        'localhost',
  // icon:        './src/static/images/logo.png',
  port:        process.env.port || '3000'
};

console.log('**********************************');
console.log('Building is starting with the following options: ', OPTIONS);
console.log('**********************************');


module.exports = {
  entry: {
		index: './src/javascript/index.js'
	},
  output: {
		filename: '[name].js',
		chunkFilename: '[name].[hash].js'
  },
  mode: OPTIONS.development ? 'production' : 'development',
	devtool: OPTIONS.development && 'source-map',
	devServer: {
		port: OPTIONS.port,
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
							sourceMap: OPTIONS.development,
							minimize: !OPTIONS.development
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: { browsers: ['last 2 versions'] },
							sourceMap: OPTIONS.development,
							plugins: () => [ AUTOPREFIXER ]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: OPTIONS.development
						}
					}
				]
			},
			{ test: /\.pug$/, loader: 'pug-loader' }
		],
	},
	plugins: [
    new DASHBOARD_PLUGIN(),
    new FRIENDLY_ERRORS_WEBPACK_PLUGIN({
      onErrors: (severity, errors) => {
        if (!OPTIONS.development) return;
        // if (severity !== 'error') return;
        
        for (var error of errors) {
          NOTIFIER.notify({
            title:    'Webpack Error',
            message:  `${ severity }: ${ error.name }`,
            subtitle: error.file || '',
            icon:     OPTIONS.icon
          });
        };
      }
    }),
		new MODERNIZR_WEBPACK_PLUGIN(),
		new WEBPACK.ProvidePlugin({
			$:               'jquery',
			jQuery:          'jquery',
			'window.$':      'jquery',
			'window.jQuery': 'jquery'
		}),
		new MINI_CSS_EXTRACT_PLUGIN({
			filename:      '[name].css',
			chunkFilename: '[id].[hash].css'
		}),
		new HTML_WEBPACK_PLUGIN({
			language: require('./src/languages/english'),
			utils:    require('./src/javascript/pugUtils'),
			template: './src/templates/index.pug',
			chunks:   ['index'],
			minify:   !OPTIONS.development && {
				html5:               true,
				collapseWhitespace:  true,
				caseSensitive:       true,
				removeComments:      true,
				removeEmptyElements: true
			},
    }),
		new COPY_WEBPACK_PLUGIN([{
			context: './src/static/files',
			from:    `*`
		}])
	],
	optimization: {
		minimize: !OPTIONS.development
	}
};
