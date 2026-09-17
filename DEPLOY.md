# Sansa Group AB — Cloudflare deployment for sansagroup.eu

Stack: Next.js 16 (App Router) + React 19 + Tailwind v4 → Cloudflare Workers via `@opennextjs/cloudflare`.

## 0. Prereqs

- Cloudflare account with `sansagroup.eu` zone (nameservers pointed to Cloudflare, proxied).
- `npx wrangler login` authenticated.
- Repo pushed to `Sansa-Organisation/sansagroup.eu`.

## 1. First deploy (CLI)

```bash
npm install
npm run deploy
# → https://sansagroup-eu.<your-subdomain>.workers.dev
```

## 2. Attach sansagroup.eu

Option A — dashboard (recommended):
1. Workers & Pages → `sansagroup-eu` → Settings → **Domains & Routes** → Add Custom Domain.
2. Add `sansagroup.eu`, then add `www.sansagroup.eu`.
3. Cloudflare provisions TLS automatically (usually < 2 min).

Option B — CLI:

```bash
npx wrangler domains add sansagroup.eu
npx wrangler domains add www.sansagroup.eu
```

DNS (in sansagroup.eu zone, all **proxied** / orange cloud):
- `A @ → 192.0.2.1` (placeholder — custom-domain Worker routing overrides; or use CNAME flattening to workers.dev)
- `CNAME www → sansagroup-eu.<subdomain>.workers.dev`

Simpler: after adding the custom domain in the dashboard, Cloudflare creates the records for you.

## 3. Redirects & canonical

- `www → apex`: Cloudflare → Rules → Redirect Rules: `if hostname equals www.sansagroup.eu → 301 https://sansagroup.eu`.
- `http → https`: SSL/TLS → Edge Certificates → **Always Use HTTPS: ON**, min TLS 1.2.

## 4. Contact form email (Resend)

```bash
npx wrangler secret put RESEND_API_KEY   # from https://resend.com/api-keys
```

Verify `sansagroup.eu` in Resend (SPF/DKIM/DMARC), keep `from: noreply@sansagroup.eu`.
Without the secret, `/api/contact` still validates + returns 200 and logs (safe for staging).

## 5. Git deploys (pick one)

**A. Cloudflare Git integration:** Workers & Pages → Create → Import `Sansa-Organisation/sansagroup.eu`,
build command `npx opennextjs-cloudflare build`, deploy command `npx opennextjs-cloudflare deploy`.

**B. GitHub Actions** (`.github/workflows/deploy.yml` in this repo): needs secrets
`CLOUDFLARE_API_TOKEN` (Workers edit + zones DNS) and `CLOUDFLARE_ACCOUNT_ID`.

## 6. Hardening checklist

- [ ] Always Use HTTPS + HSTS (after confirming no mixed content)
- [ ] WAF managed rules ON, bot fight mode as needed
- [ ] Cache: static `_next/static/*` cached; HTML bypass (Workers handles per-request)
- [ ] Analytics: Cloudflare Web Analytics snippet (consent-gated) if wanted
- [ ] Test: `https://sansagroup.eu`, `https://www.sansagroup.eu`, `/sitemap.xml`, `/robots.txt`, all legal pages, contact POST
- [ ] Cookie banner: Accept/Reject/Customise persists `sansa-cookie-consent-v1`
