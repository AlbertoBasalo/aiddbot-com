import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://albertobasalo.dev",

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
      }),
	],

  adapter: cloudflare(),
});