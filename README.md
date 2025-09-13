# Automate-HQ — AI Call Centre Agent (Next.js 15)

Premium, conversion-first marketing site for a customizable AI voice agent in South Africa.

## Stack
- Next.js 15 (App Router), TypeScript
- Tailwind CSS, Framer Motion
- next-themes (dark/light), lucide-react
- SEO meta/OpenGraph
- Analytics (Plausible/GA) + cookie banner
- Calendly inline modal (no redirect)

## Quickstart
```bash
npm install
cp .env.example .env.local
# set your Calendly event URL in .env.local
npm run dev
```
Open http://localhost:3000

## ENV
- `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/automate-hq/30min`
- Optional: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `NEXT_PUBLIC_GA_ID`

## Pages
- `/` Landing (animated, calm)
- `/solutions`, `/how-it-works`, `/pricing`, `/contact`
- `/docs` → 308 redirect to `/how-it-works`
- `/legal/privacy`, `/legal/terms`, `/legal/popia`

## Notes
- Palette: white / brand blue `#2563EB` / black.
- Sticky mobile CTA for conversion.
- Theme toggle hydration-safe.
- Replace `/public/og.png` with your OG image (optional).