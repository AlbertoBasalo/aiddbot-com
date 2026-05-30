import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://aiddbot.com",
	markdown: {
		shikiConfig: {
			theme: "dark-plus",
		},
	},
	integrations: [
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(),
			filter: (page) => !page.includes("/aidd"),
		}),
	],
});
