import type { APIRoute } from "astro";
import { sitemapUrls } from "../lib/sitemap-urls";

export const prerender = true;

const LASTMOD = new Date().toISOString();

export const GET: APIRoute = () => {
  const urls = sitemapUrls
    .map(
      (url) =>
        `<url><loc>${url}</loc><lastmod>${LASTMOD}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`,
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
