module.exports = {
	// purge: ["./src/**/*.html", "./public/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
	purge: {
		mode: "all",
		preserveHtmlElements: false,
		content: ["./src/**/*.html", "./public/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
