import { LegalShell, legalMetadata } from "@/components/LegalShell";

export const metadata = legalMetadata(
  "Cookie Policy",
  "Cookie Policy for sansagroup.eu — what cookies we use and how to control them."
);

export default function CookiesPage() {
  return (
    <LegalShell eyebrow="Legal · Cookies" title="Cookie Policy" updated="17 September 2026">
      <div>
        <h2>1. What cookies are</h2>
        <p>Cookies and similar storage help the site remember your choices (like this consent banner) and — only with your consent — measure usage.</p>
      </div>
      <div>
        <h2>2. What we use</h2>
        <ul>
          <li>Strictly necessary: consent choice (sansa-cookie-consent-v1, 12 months), Cloudflare security/load-balancing (__cf_bm, cf_clearance). Always on; the site cannot run securely without them.</li>
          <li>Analytics (only with consent): privacy-friendly, IP-anonymised measurement of visited pages. Off by default.</li>
          <li>Marketing (only with consent): remembering campaign source to show relevant content. Off by default. We never sell data.</li>
        </ul>
      </div>
      <div>
        <h2>3. Legal basis</h2>
        <p>Necessary cookies rely on our legitimate interest in a secure, working site. Analytics/marketing rely on your prior consent (ePrivacy + GDPR Art. 6(1)(a)).</p>
      </div>
      <div>
        <h2>4. Managing choices</h2>
        <ul>
          <li>Use the on-site banner: Reject all / Customise / Accept all — changeable anytime by clearing localStorage key sansa-cookie-consent-v1.</li>
          <li>Browser controls: block or delete cookies in settings; use Global Privacy Control where supported (treated as reject for optional categories).</li>
          <li>Email us at contact@sansagroup.eu and we will help.</li>
        </ul>
      </div>
      <div>
        <h2>5. Retention</h2>
        <p>Consent record: 12 months. Cloudflare security cookies: session to 30 days. Optional cookies: max 13 months and only if you opted in.</p>
      </div>
    </LegalShell>
  );
}
