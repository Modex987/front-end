const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development", // "production" | "development" | "none"

	entry: path.join(__dirname, "src/main.js"),

	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.js",
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		port: 8080,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			title: "Our nice site",
			filename: "index.html",
			inject: "body",
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
