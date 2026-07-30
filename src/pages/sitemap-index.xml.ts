import type { APIRoute } from "astro";

export const prerender = true;

const SITE = "https://aiddbot.com";
const LASTMOD = new Date().toISOString();

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${SITE}/sitemap-0.xml</loc><lastmod>${LASTMOD}</lastmod></sitemap></sitemapindex>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
