module.exports = {
	content: ["public/index.html"],

	css: ["public/style.css"],

	output: "dist/css",

	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],

	// extractors: [
	// 	{
	// 		extractor: purgeFromHTML,
	// 		extensions: ["html"],
	// 	},

	// 	{
	// 		extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
	// 		extensions: ["vue", "js"],
	// 	},
	// ],
};
