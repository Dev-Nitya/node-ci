const path = require('path');

module.exports = {
	entry: ["./app/main.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
		},
		{
			test:/\.(sa|sc|c)ss$/,
			use: [
			{
				loader: extract.loader
			},
			{
				loader: 'css-loader'
			},
			{
				loader: 'sass-loader',
				options: {
					implementation: require('sass')
				}
			}
			]
		}
		]
	},
	mode: "development"
}