const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');
const WriteFilePlugin = require('write-file-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = {
	entry: {
		app: [
			// 'react-hot-loader/patch',
			path.resolve(__dirname, './src/client/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, 'public/javascripts/'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.(scss)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!postcss-loader!sass-loader'
				})
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg|woff|woff2|ttf|eot|webm|mp4|ico)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/client/assets/'),
				// use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
				use: 'url-loader?limit=10000&name=assets/[name].[ext]'
			}
		]
	},
	resolve: {
        extensions: ['.js', '.jsx']
		// alias: {
		// 	'components': path.resolve(__dirname, './src/client/components'),
		// 	'containers': path.resolve(__dirname, './src/client/containers'),
		// 	'actions': path.resolve(__dirname, './src/client/actions'),
		// 	'reducers': path.resolve(__dirname, './src/client/reducers'),
		// 	'store': path.resolve(__dirname, './src/client/store'),
		// 	'assets': path.resolve(__dirname, './src/client/assets'),
		// 	'util': path.resolve(__dirname, './src/client/util'),
		// 	'constants': path.resolve(__dirname, './src/client/constants'),
		// 	'routes': path.resolve(__dirname, './src/client/routes'),
		// }
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/client/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		// new BrowserSyncPlugin(
		// 	{
		// 		// browse to http://localhost:3000/ during development,
		// 		// ./public directory is being served
		// 		host: 'localhost',
		// 		port: 3000,
		// 		// server: { baseDir: ['public'] }
		// 		proxy: 'http://localhost:8888/',
		// 	  },
		// 	  {
		// 		  reload: false
		// 	  }
		// ),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks (module) {
			  return module.context &&
					 module.context.indexOf('node_modules') >= 0;
			}
		  }),
		new StyleExtHtmlWebpackPlugin({
			minify: true
		})
		// new WriteFilePlugin({
		// 	test: /^(?!.*(hot)).*/,
		// }),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8888,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '127.0.0.1'
	}
}

module.exports = webpackConfig