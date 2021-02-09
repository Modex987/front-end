const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development", // "production" | "development" | "none"

	entry: "./src/main.js", // string | object | array

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		port: 8000,
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
				test: /\.m?js$/,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},

			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				exclude: /(node_modules)/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
};
