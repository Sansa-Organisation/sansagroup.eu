import { LegalShell, legalMetadata } from "@/components/LegalShell";

export const metadata = legalMetadata(
  "Privacy Policy",
  "Privacy Policy for sansagroup.eu — how Sansa Group AB collects, uses and protects personal data."
);

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal · Privacy" title="Privacy Policy" updated="17 September 2026">
      <div>
        <h2>1. Who we are</h2>
        <p>
          Sansa Group AB (&quot;Sansa Group&quot;, &quot;we&quot;) operates sansagroup.eu, including
          our Sansavision software/SaaS practice and Grasp robotics/annotation division.
          Contact: <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a>, Gothenburg, Sweden.
          We are the data controller for personal data collected via this website.
        </p>
      </div>
      <div>
        <h2>2. Data we collect</h2>
        <ul>
          <li>Contact enquiries: name, email, company, project details you provide.</li>
          <li>Technical data: IP address, device/browser type, pages visited (see Cookie Policy).</li>
          <li>Correspondence: emails and meeting notes when you contact us.</li>
        </ul>
        <p>We do not collect special-category data via this website and ask you not to send it.</p>
      </div>
      <div>
        <h2>3. Why and on what basis (GDPR Art. 6)</h2>
        <ul>
          <li>Responding to enquiries — legitimate interest / pre-contractual steps (Art. 6(1)(b)/(f)).</li>
          <li>Security, prevention of abuse — legitimate interest (Art. 6(1)(f)).</li>
          <li>Optional analytics/marketing cookies — consent only (Art. 6(1)(a)), withdrawable anytime via your browser or by clearing site consent.</li>
          <li>Legal obligations — tax/accounting retention (Art. 6(1)(c)).</li>
        </ul>
      </div>
      <div>
        <h2>4. Sharing</h2>
        <p>
          We share data only with processors needed to run the site: Cloudflare (hosting/CDN/security),
          and — if configured — an email provider (e.g. Resend) to deliver contact-form messages.
          All processors act under Art. 28 DPAs. We never sell personal data.
        </p>
      </div>
      <div>
        <h2>5. International transfers</h2>
        <p>
          Hosting is EU-first via Cloudflare. Where a processor transfers data outside the EEA/UK,
          we rely on adequacy decisions or Standard Contractual Clauses plus supplementary measures.
        </p>
      </div>
      <div>
        <h2>6. Retention</h2>
        <ul>
          <li>Enquiries: up to 24 months after last contact, then deleted or anonymised.</li>
          <li>Security logs: up to 12 months.</li>
          <li>Accounting records: as required by Swedish law (currently 7 years).</li>
        </ul>
      </div>
      <div>
        <h2>7. Your rights</h2>
        <p>
          Under GDPR (and UK GDPR) you have rights of access, rectification, erasure, restriction,
          portability, objection, and to withdraw consent. To exercise them email{" "}
          <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a>. We reply within one month.
          You may complain to Integritetsskyddsmyndigheten (IMY, Sweden) or your local supervisory authority.
        </p>
      </div>
      <div>
        <h2>8. Security</h2>
        <p>
          TLS in transit, least-privilege access, Cloudflare WAF/bot protection, and minimal collection
          by design. No system is perfect — report suspected issues to{" "}
          <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a>.
        </p>
      </div>
      <div>
        <h2>9. Children</h2>
        <p>This site is business-to-business and not directed at children under 16.</p>
      </div>
      <div>
        <h2>10. Changes</h2>
        <p>We will post material changes here and update the date above. Continued use after changes means you accept the update.</p>
      </div>
    </LegalShell>
  );
}
