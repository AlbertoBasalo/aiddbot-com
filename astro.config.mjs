import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aiddbot.com",
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
});
