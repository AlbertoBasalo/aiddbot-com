const SITE = "https://aiddbot.com";

function pageFileToUrl(file: string) {
  const slug = file
    .replace("../pages/", "")
    .replace(/\.astro$/, "")
    .replace(/\/index$/, "");
  if (!slug || slug === "index") return new URL("/", SITE).href;
  return new URL(`/${slug}/`, SITE).href;
}

function legalFileToUrl(file: string) {
  const slug = file.replace("../content/legal/", "").replace(/\.md$/, "");
  return new URL(`/legal/${slug}/`, SITE).href;
}

/** Public routes for sitemap generation (/aidd is intentionally excluded). */
export const sitemapUrls = [
  ...new Set([
    ...Object.keys(import.meta.glob("../pages/**/*.astro"))
      .filter((file) => !file.includes("[") && !file.endsWith("/aidd.astro"))
      .map(pageFileToUrl),
    ...Object.keys(import.meta.glob("../content/legal/**/*.md")).map(
      legalFileToUrl,
    ),
  ]),
];
