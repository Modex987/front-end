module.exports = {
	plugins: {
		tailwindcss: require("tailwindcss"),

		autoprefixer: require("autoprefixer"),

		// purgecss: require("@fullhuman/postcss-purgecss")({
		// 	content: ["./src/**/*.html", "./public/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
		// 	defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
		// }),
	},
};
