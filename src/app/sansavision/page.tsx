import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sansavision — Software & SaaS",
  description: "Sansavision, the Sansa Group software & SaaS subdivision: product engineering, multi-tenant platforms, AI features.",
};

export default function SansavisionPage() {
  return (
    <>
      <section className="mesh-bg px-5 pb-14 pt-36 md:pt-44">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="inline-flex rounded-full bg-[#2EE6A8]/10 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#2EE6A8] ring-1 ring-[#2EE6A8]/25">
              Division · Sansavision
            </p>
            <h1 className="mt-5 max-w-[20ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[58px]">
              SaaS, engineered like you have to run it.
            </h1>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-white/60">
              Sansavision is Sansa Group&apos;s software & SaaS subdivision. We design,
              build and scale multi-tenant products on Next.js 16, React 19 and the
              Cloudflare edge — with billing, auth, AI and analytics done right the first time.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2EE6A8] px-7 py-4 text-[15px] font-semibold text-[#04110b] hover:bg-[#7df0c4]">
                Scope a SaaS build <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="https://sansavision.se" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-semibold text-white ring-1 ring-white/15 hover:bg-white/[0.06]">
                sansavision.se ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {[
            ["Greenfield SaaS", "Tenancy, roles, billing (Stripe), onboarding, admin — the boring parts, perfect."],
            ["Rebuilds & rescue", "Strangler rewrites of Rails/Laravel/WordPress monoliths to the edge, zero-downtime."],
            ["AI inside SaaS", "Copilots, search, support deflection and insights — metered, evaluated, private."],
            ["Design systems", "Tailwind v4 systems your team can extend without us. Figma → code parity."],
            ["Platform & DevEx", "Preview envs, CI/CD, feature flags, observability. Ship daily with confidence."],
            ["Compliance-ready", "GDPR DPA, EU residency, SSO/SAML, audit logs. Enterprise procurement passes."],
          ].map(([t, d]) => (
            <StaggerItem key={t}>
              <div className="h-full rounded-[1.6rem] bg-white/[0.03] p-7 ring-1 ring-white/[0.08]">
                <h2 className="flex items-center gap-2 text-[17px] font-semibold text-white"><Check size={16} weight="bold" className="text-[#2EE6A8]" />{t}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8">
          <div className="rounded-[1.6rem] bg-white/[0.03] p-7 font-mono text-[13px] leading-relaxed text-white/55 ring-1 ring-white/[0.08] md:p-8">
            <p className="text-white/80">$ stack — proven in production</p>
            <p className="mt-2">next@16 · react@19 · tailwind@v4 · cloudflare workers / r2 / d1 · stripe · clerk/auth.js · posthog · sentry</p>
            <p className="mt-2 text-[#2EE6A8]">typical pilot: 3 weeks · staging link in week 1 · fixed price</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
