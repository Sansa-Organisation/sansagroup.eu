import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Sansa Group AB — a European consulting group with Sansavision (software/SaaS) and Grasp (robotics/annotation).",
};

export default function AboutPage() {
  return (
    <>
      <section className="mesh-bg px-5 pb-20 pt-40 md:pb-24 md:pt-56">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <p className="inline-flex rounded-full bg-white/[0.05] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/55 ring-1 ring-white/10">
              About Sansa Group AB
            </p>
            <h1 className="mt-6 max-w-[22ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[56px]">
              A small senior group for big technical bets.
            </h1>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-white/60">
              Sansa Group AB (sansagroup.eu) is a Gothenburg-based consulting group.
              We do what generalist consultancies cannot: we stay from the first
              workshop until the system runs in production — then we hand it over
              properly and leave.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-28 md:pb-36">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Senior-only", "No juniors learning on your budget. The people you meet are the people who build."],
            ["EU-native", "GDPR by default, EU data residency, Swedish contracts, English/Swedish/German delivery."],
            ["IP is yours", "Code, data, docs and models are assigned to you. Escrow and audit trails on request."],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="h-full rounded-[1.6rem] bg-white/[0.03] p-7 ring-1 ring-white/[0.08]">
                <h2 className="text-[19px] font-semibold text-white">{t}</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-[2rem] bg-white/[0.03] p-2 ring-1 ring-white/10">
            <div className="grid gap-8 rounded-[calc(2rem-0.5rem)] bg-[#0a1118] p-8 md:grid-cols-2 md:p-10">
              <div>
                <h2 className="text-[26px] font-semibold tracking-tight text-white">Structure</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  <strong className="text-white">Sansa Group AB</strong> is the consulting
                  parent. <strong className="text-white">Sansavision</strong> is our software
                  & SaaS subdivision. <strong className="text-white">Grasp</strong> is our
                  robotics & data-annotation division. One contract, one lead, shared senior bench.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  ["Sansa Group AB", "Consulting parent · sansagroup.eu · contact@sansagroup.eu", "/contact"],
                  ["Sansavision", "Software & SaaS subdivision", "/sansavision"],
                  ["Grasp", "Robotics & annotation division", "/grasp"],
                ].map(([t, d, href]) => (
                  <Link key={t} href={href} className="group flex items-center justify-between rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.08] hover:bg-white/[0.06]">
                    <span>
                      <span className="block text-[15px] font-semibold text-white">{t}</span>
                      <span className="block text-[13px] text-white/50">{d}</span>
                    </span>
                    <ArrowRight size={17} className="text-[#2EE6A8] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#2EE6A8] px-7 py-4 text-[15px] font-semibold text-[#04110b] hover:bg-[#7df0c4]">
            Work with us <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
