# Prospereum Website

**Prospereum (PSRE)** — Proof of Net Economic Contribution

Next.js 14 (App Router) + TypeScript + TailwindCSS + Wagmi + ConnectKit.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, stats, how it works, feature grid |
| `/whitepaper` | Whitepaper PDF embed + key sections (SEO) |
| `/partners` | Partner signup — tier table, wallet connect stub, interest form |
| `/stake` | Staking UI — PSRE and LP tabs, stub (mainnet only) |
| `/stats` | Protocol dashboard iframe (Base Sepolia testnet live) |

## Local Development

```bash
git clone https://github.com/wealthhealthai/prospereum-website
cd prospereum-website
npm install --legacy-peer-deps
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
# Outputs to /out (static export — ready for Cloudflare Pages or Vercel)
```

## Deployment — Cloudflare Pages

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Connect GitHub repo: `wealthhealthai/prospereum-website`
3. Build command: `npm run build`
4. Output directory: `out`
5. Node version: `20` or `22`

## Deployment — Vercel

```bash
npx vercel --prod
```
(Remove `output: 'export'` from `next.config.ts` for Vercel — it supports SSR natively)

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** TailwindCSS v4
- **Web3:** Wagmi v2 + Viem + ConnectKit (wallet connect stubbed — mainnet only)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Network:** Base (mainnet target), Base Sepolia (testnet live)
