"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: __dirname,
	mode: "development",
	entry: "./example",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { modules: false },
					},
					{
						loader: "sass-loader",
						options: { implementation: require("sass") },
					},
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./example/index.html",
			minify: { collapseWhitespace: false },
			filename: "index.html",
		}),
	],
};
