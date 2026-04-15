# ReviewRite AI

**Paste any Google/Yelp review → get a polished owner response in one click.**

AI-powered review response tool for independent restaurant owners (1-5 locations).

## 🚀 Deploy to GitHub Pages

1. Go to **https://github.com/LawrenceHua/reviewrite/settings/pages**
2. Under "Build and deployment" → Source: **Deploy from a branch**
3. Branch: **`gh-pages`** → `/ (root)` → **Save**
4. Wait 2-3 minutes → site live at `https://LawrenceHua.github.io/reviewrite/`

## Local Development

```bash
cd reviewrite
npm install
npm run dev
```

## Tech Stack

- **Next.js 16** with `output:"export"` (static, GitHub Pages compatible)
- **GPT-4o** via OpenAI API for review → response generation
- **Tailwind CSS v4** + shadcn/ui components
- **TypeScript**

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with features + pricing |
| `/respond/` | Paste review, select sentiment/voice, generate |
| `/response/` | View AI response with copy button |
| `/dashboard/` | Response history (localStorage for now) |
| `/checkout/` | Stripe checkout redirect (client-side) |

## Pricing

| Plan | Price | Features |
|---|---|---|
| Free | $0/mo | 10 responses/mo, all voices, copy to clipboard |
| Starter | $19/mo | 50 responses, batch analysis, response history |
| Pro | $49/mo | Unlimited, batch (50 reviews), weekly digest email |

## Environment Variables

Create `.env.local` with:

```env
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID=price_xxx
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_xxx
```

## Build

```bash
npm run build   # outputs to /out
```

## Key Files

- `lib/review-analyzer.ts` — GPT-4o response generation + batch sentiment analysis
- `components/review-input.tsx` — Review paste form with sentiment/voice selectors
- `components/response-card.tsx` — AI response display with copy button
- `app/respond/page.tsx` — Step 1: paste & generate
- `app/response/page.tsx` — Step 2: view & copy response
- `app/dashboard/page.tsx` — Response history

## Deploy Status

- ✅ Source pushed to `main` branch
- ✅ Static export pushed to `gh-pages` branch
- ⏳ GitHub Pages needs manual enable: `https://github.com/LawrenceHua/reviewrite/settings/pages`
