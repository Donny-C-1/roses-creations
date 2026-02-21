# Roses Creations Website

Official website for **Roses Creations**, a Nigeria-based fashion design company delivering premium clothing and apparel for men and women.

## Overview
This repository contains the frontend website used to present the brand, showcase collections, and support client booking/contact flow.

The project is built with SvelteKit and configured for static deployment.

## Tech Stack
- Svelte 5
- SvelteKit 2
- Vite 7
- `@sveltejs/adapter-static` for static site generation
- Prettier for formatting

## Current Site Structure
- `/` - Home page
- `/heritage` - Brand story / heritage page
- `/catalog` - Fashion catalog page
- `/booking` - Booking page

Shared UI:
- Top navigation: `src/lib/components/TopNav.svelte`
- Footer: `src/lib/components/Footer.svelte`
- Global styles: `src/lib/css/app.css`

## Project Structure
```text
src/
  lib/
    assets/
    components/
    css/
  routes/
    +layout.js        # prerender enabled
    +layout.svelte    # global layout (head, nav, footer)
    +page.svelte      # homepage
    heritage/+page.svelte
    catalog/+page.svelte
    booking/+page.svelte
```

## Getting Started
### Prerequisites
- Node.js 18+
- npm 9+

### Install
```bash
npm install
```

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Available Scripts
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview the production build
- `npm run lint` - check formatting
- `npm run format` - format code with Prettier

## Deployment
This app uses static prerendering (`src/routes/+layout.js` sets `prerender = true`) and `@sveltejs/adapter-static`, so it can be deployed to static hosts such as:
- Netlify
- Vercel (static output)
- Cloudflare Pages
- GitHub Pages

Typical deployment flow:
1. Run `npm run build`
2. Deploy the generated static output from the build directory expected by your hosting platform

## Brand Notes
Roses Creations focuses on premium, culturally grounded fashion for both male and female clients. Site content and visuals should reflect:
- Craftsmanship
- Elegance
- Heritage
- Modern African luxury

## Recommended Next Improvements
- Complete content for `heritage`, `catalog`, and `booking` pages
- Replace placeholder footer content
- Add SEO metadata per route
- Add optimized images for collections and campaigns
- Add analytics and conversion tracking

## Ownership
Client: **Roses Creations** (Nigeria)

Maintainers should keep the codebase clean, fast, mobile-friendly, and aligned with the brand's premium identity.
