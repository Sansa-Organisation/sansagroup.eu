import { LegalShell, legalMetadata } from "@/components/LegalShell";

export const metadata = legalMetadata(
  "California Privacy Notice (CCPA/CPRA)",
  "California privacy notice for sansagroup.eu — CCPA/CPRA rights, no sale of personal information."
);

export default function CcpaPage() {
  return (
    <LegalShell eyebrow="Legal · California (CCPA/CPRA)" title="California Privacy Notice" updated="17 September 2026">
      <div>
        <h2>1. Scope</h2>
        <p>This notice supplements our Privacy Policy for California residents under the CCPA as amended by the CPRA. Sansa Group AB is a business/service provider as applicable per interaction.</p>
      </div>
      <div>
        <h2>2. Categories collected</h2>
        <ul>
          <li>Identifiers (name, email, IP) and commercial/Internet activity (pages viewed) in the last 12 months.</li>
          <li>Sources: you directly; automatically via Cloudflare security.</li>
          <li>Purposes: respond to enquiries, secure the site, comply with law — see Privacy Policy §3.</li>
        </ul>
      </div>
      <div>
        <h2>3. No sale or sharing</h2>
        <p>We do not sell or share personal information as defined by the CCPA, including for cross-context behavioural advertising. We have no actual knowledge of selling minors&apos; data (site is B2B, 16+).</p>
      </div>
      <div>
        <h2>4. Your rights</h2>
        <ul>
          <li>Know/access, delete, correct, limit use of sensitive personal information, and non-discrimination.</li>
          <li>Opt out of sale/sharing: not applicable as we do not sell/share, but Global Privacy Control signals are honoured as opt-out of any optional tracking.</li>
          <li>Submit requests to contact@sansagroup.eu with subject &quot;California Privacy Request&quot;. We verify by reply-to-email match and respond within 45 days.</li>
          <li>Authorised agents may act with signed permission plus identity verification.</li>
        </ul>
      </div>
      <div>
        <h2>5. Retention & security</h2>
        <p>Per Privacy Policy §6. We apply reasonable administrative, technical and physical safeguards.</p>
      </div>
      <div>
        <h2>6. Contact</h2>
        <p>Sansa Group AB · <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a> · Write &quot;California Privacy&quot; in the subject for fastest routing.</p>
      </div>
    </LegalShell>
  );
}
