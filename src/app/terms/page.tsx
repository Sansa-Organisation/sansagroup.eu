import { LegalShell, legalMetadata } from "@/components/LegalShell";

export const metadata = legalMetadata(
  "Terms of Service",
  "Terms of Service for using sansagroup.eu — Sansa Group AB."
);

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal · Terms" title="Terms of Service" updated="17 September 2026">
      <div>
        <h2>1. The site</h2>
        <p>
          sansagroup.eu is provided by Sansa Group AB for general information about our consulting
          services, Sansavision and Grasp. Nothing here is a binding offer; proposals and
          statements of work govern engagements separately.
        </p>
      </div>
      <div>
        <h2>2. Acceptable use</h2>
        <ul>
          <li>Do not misuse the site, probe it, or submit unlawful, infringing or harmful content.</li>
          <li>Automated scraping at abusive rates, credential stuffing and vulnerability exploitation are prohibited.</li>
        </ul>
      </div>
      <div>
        <h2>3. Intellectual property</h2>
        <p>
          Site content (copy, design, marks) belongs to Sansa Group AB or its licensors and may not be
          reproduced without permission, except short quotations with attribution. Client work IP is
          assigned under the relevant services agreement — not by browsing this site.
        </p>
      </div>
      <div>
        <h2>4. Contact form</h2>
        <p>
          By submitting the form you confirm the details are accurate, you have the right to share them,
          and you consent to us processing them to respond (see Privacy Policy and GDPR notice).
          We aim to reply within one business day but make no SLA via this site.
        </p>
      </div>
      <div>
        <h2>5. Third-party links</h2>
        <p>sansavision.se, grasp.im and other outbound links are provided for convenience; we are not responsible for their content or practices.</p>
      </div>
      <div>
        <h2>6. Disclaimer & liability</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties to the maximum extent permitted by law.
          To the extent permitted, Sansa Group AB is not liable for indirect or consequential loss arising
          from use of the site. Nothing limits liability that cannot be limited by law.
        </p>
      </div>
      <div>
        <h2>7. Governing law</h2>
        <p>These terms are governed by Swedish law. Disputes are subject to the exclusive jurisdiction of Swedish courts, with Gothenburg as venue.</p>
      </div>
      <div>
        <h2>8. Contact</h2>
        <p>Sansa Group AB · Gothenburg, Sweden · <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a></p>
      </div>
    </LegalShell>
  );
}
