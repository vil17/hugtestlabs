const path = require('path');
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: './src/client/index.js',
	output: {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/client/index.html',  inject: 'body',}),
		new CleanWebpackPlugin('dist'),
	],

	
	devServer: {
		port: 3000,
		open: true,
		proxy: {
		"/api": "http://localhost:8080",
		"/game": "http://localhost:8080"

		}
	},

}