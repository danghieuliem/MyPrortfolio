/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: `/MyPortfolio`,

	// Set the asset prefix for GitHub Pages
	assetPrefix: ``,

	// Enable webpack 5 for better build performance
	future: {
		webpack5: true,
	},

	// For GitHub Pages, set the trailing slash
	trailingSlash: true,
	output: 'export',
};

module.exports = nextConfig;
