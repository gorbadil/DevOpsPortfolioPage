import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Vercel exposes the production domain at build time; set SITE_URL to override
// (e.g. once a custom domain is attached).
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://ersinmutlu.vercel.app");

export default defineConfig({
  site,
  integrations: [sitemap()],
});
