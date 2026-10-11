# Ersin Mutlu - Portfolio

Personal portfolio built with [Astro](https://astro.build): a single static page, no client-side framework, automatic dark/light theme.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
```

Requires Node 22+.

## Edit content

All text lives in `src/data/site.ts` (profile, experience, skills, projects, posts). The CV is `public/Ersin_Mutlu_CV.pdf`.

## Deploy (Vercel)

1. Import the repository in Vercel. The Astro preset is detected automatically (build `npm run build`, output `dist`).
2. Optional: set `SITE_URL` (e.g. `https://ersinmutlu.dev`) so canonical, Open Graph and sitemap URLs use your custom domain. Without it, Vercel's production domain is used.

Security and cache headers are configured in `vercel.json`. GitHub Actions (`.github/workflows/ci.yml`) verifies the build on every PR.
