var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: './app/app.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle-[hash].js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html' },
			{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            }
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({template: 'app/main-page.ejs'}),
	    new LiveReloadPlugin({appendScriptTag: true})
	]
};
