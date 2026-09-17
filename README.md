# Sansa Group AB — sansagroup.eu

Consulting group site: **Next.js 16 · React 19 · Tailwind CSS v4**, deployed to
**Cloudflare Workers** (OpenNext) on **sansagroup.eu**.

- Parent: **Sansa Group AB** — consulting (`/`, `/services`, `/about`, `/contact`)
- Division: **Sansavision** — software & SaaS (`/sansavision`)
- Practice: **Grasp.im** — robotics & data annotation (`/grasp`)
- Legal: `/privacy` · `/terms` · `/cookies` · `/gdpr` · `/ccpa`
- Contact API: `POST /api/contact` → forwards via Resend if `RESEND_API_KEY` is set, else logs.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build
```

## Cloudflare deploy

1. `npx wrangler login`
2. Optional email delivery: `npx wrangler secret put RESEND_API_KEY`
3. `npm run deploy` — builds with OpenNext and deploys Worker `sansagroup-eu`
4. Attach domain: Cloudflare dashboard → Workers & Pages → `sansagroup-eu` →
   Settings → Domains & Routes → Add `sansagroup.eu` + `www.sansagroup.eu`.
   Or: `npx wrangler domains add sansagroup.eu`
5. DNS: apex `A`/`AAAA` via Cloudflare proxy or `CNAME www → sansagroup-eu.<subdomain>.workers.dev`, both proxied (orange cloud) for TLS + WAF.

See `DEPLOY.md` for the full checklist (DNS, TLS, redirects, cache, WAF).

## GitHub

Repo: `Sansa-Organisation/sansagroup.eu` (public). `main` is production.
Deploys are manual from a logged-in machine: `npm run deploy`. No CI/GitHub Actions.

## Contact

contact@sansagroup.eu — Stockholm · EU · Remote worldwide
