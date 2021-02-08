const path = require("path");
// const glob = require("glob");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = {
	mode: "development", // "production" | "development" | "none"

	entry: path.join(__dirname, "src/main.js"),

	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.js",
	},

	devtool: false,

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

		// new MiniCssExtractPlugin({
		// 	filename: "style.css",
		// }),

		// new PurgecssPlugin({
		// 	paths: glob.sync(`${path.join(__dirname, "src")}/**/*`),

		// 	defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
		// 	// defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
		// }),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},

			// {
			// 	test: /\.css$/,
			// 	include: path.resolve(__dirname, "src"),
			// 	exclude: /(node_modules)/,
			// 	use: ["style-loader", "css-loader", "postcss-loader", MiniCssExtractPlugin.loader],
			// },
		],
	},
};
