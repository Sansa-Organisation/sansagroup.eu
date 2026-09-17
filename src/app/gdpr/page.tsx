import { LegalShell, legalMetadata } from "@/components/LegalShell";

export const metadata = legalMetadata(
  "GDPR Notice",
  "GDPR privacy notice for sansagroup.eu — data subject rights, DPO contact, retention, transfers."
);

export default function GdprPage() {
  return (
    <LegalShell eyebrow="Legal · GDPR (EU 2016/679)" title="GDPR Privacy Notice" updated="17 September 2026">
      <div>
        <h2>1. Controller</h2>
        <p>Sansa Group AB, Stockholm, Sweden · <a href="mailto:contact@sansagroup.eu">contact@sansagroup.eu</a> · sansagroup.eu. No separate DPO is appointed; privacy enquiries go to the same address and are handled by management.</p>
      </div>
      <div>
        <h2>2. Purposes, categories & bases</h2>
        <ul>
          <li>Enquiry handling (identity + contact + brief content): Art. 6(1)(b)/(f).</li>
          <li>Site security & anti-abuse (IP, logs, device signals): Art. 6(1)(f).</li>
          <li>Optional analytics/marketing: Art. 6(1)(a) consent, withdrawable anytime.</li>
        </ul>
      </div>
      <div>
        <h2>3. Recipients & processors</h2>
        <p>Cloudflare, Inc. (CDN/hosting/security, Art. 28 DPA) and our email-delivery provider for form messages. Sub-processors for Sansavision/Grasp.im client work are governed by separate DPAs and are out of scope for this website notice.</p>
      </div>
      <div>
        <h2>4. Transfers outside EEA</h2>
        <p>EU-first hosting. Any non-adequate transfer uses SCCs (2021/914) with transfer risk assessment and encryption in transit/at rest.</p>
      </div>
      <div>
        <h2>5. Retention</h2>
        <p>Enquiries 24 months; logs 12 months; consent records 3 years (accountability); accounting 7 years (Swedish Bokföringslagen).</p>
      </div>
      <div>
        <h2>6. Your rights (Art. 12–22)</h2>
        <ul>
          <li>Access, rectification, erasure, restriction, portability, objection (including to direct marketing, absolute).</li>
          <li>Withdraw consent anytime without affecting prior lawful processing.</li>
          <li>We verify identity proportionately and respond within one month (extendable by two for complexity).</li>
        </ul>
      </div>
      <div>
        <h2>7. Complaints</h2>
        <p>Contact us first. You may also complain to Integritetsskyddsmyndigheten (IMY), Box 8114, 104 20 Stockholm, imy@imy.se, or your habitual-residence authority.</p>
      </div>
      <div>
        <h2>8. Automated decisions</h2>
        <p>We do not make solely-automated decisions with legal or similarly significant effects via this website.</p>
      </div>
    </LegalShell>
  );
}
