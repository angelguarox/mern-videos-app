const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new htmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html'
});

module.exports = {
	/*entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},*/
	module: {
		rules: [{
			test: /\.js$/i,
			exclude: /node_modules/,
			use: ['babel-loader']
		}, {
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [htmlPlugin],
	devServer: {
		historyApiFallback: true
	}
};