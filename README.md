This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Caching, ISR, and Content Freshness

This project now uses 60-second revalidation for CMS/API-backed content so content changes can appear on production without a full redeploy.

### 1) Page-level ISR in App Router

Add this to a server `page.tsx` file:

```ts
export const revalidate = 60
```

Implemented in:

- `src/app/[lang]/[slug]/page.tsx`

### 2) Fetch-level revalidation in a Server Component

Use Next.js fetch revalidation directly:

```ts
const response = await fetch(url, {
	next: { revalidate: 60 },
})
```

Implemented in:

- `src/app/api/v1/menus/[locale]/route.ts`
- `src/app/api/menus/[locale]/route.ts`

### 3) Disable cache for dynamic pages

For pages that must always return the latest value per request:

```ts
const response = await fetch(url, {
	cache: 'no-store',
})
```

In this codebase, shared API helpers in `src/lib/api.ts` support both modes:

- Default: revalidate every 60 seconds
- Dynamic override: pass `{ mode: 'no-store' }`

Example:

```ts
await fetchPageBySlug(lang, slug, { mode: 'no-store' })
```

### 4) Vercel behavior: new routes and redeploy

- Content/data changes: no redeploy required when using ISR/revalidation; Vercel serves cached HTML/data and regenerates after the interval when a request arrives.
- New CMS slugs under an existing dynamic route (for example `/[lang]/[slug]`): usually no redeploy required. The first request can render and cache the new path.
- New file-system routes (new files under `src/app`) or code changes: redeploy required, because build output must be updated.
- Changes to environment variables or package dependencies: redeploy required.
