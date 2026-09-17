import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Sansa Group consulting services: software & SaaS, AI & data, robotics, annotation ops, cloud & platform, strategy.",
};

const groups = [
  {
    title: "Software & SaaS engineering",
    owner: "Sansavision",
    body: "Greenfield builds, legacy rescue, and multi-tenant SaaS. Next.js + React 19, design systems, billing, auth, and EU hosting.",
    bullets: ["Product discovery & UX in-house", "Next.js, React 19, Tailwind v4, Cloudflare edge", "SOC2-minded SDLC, docs & handover"],
    price: "From €15k pilot · 2–4 wks",
  },
  {
    title: "AI, LLM & data platforms",
    owner: "Sansavision",
    body: "RAG over your docs, agents with human-in-the-loop, eval harnesses and cost controls. No black boxes.",
    bullets: ["RAG, agents, copilots on your data", "Eval sets, guardrails, red-teaming", "Vector + warehouse architecture"],
    price: "From €20k pilot · measurable accuracy lift",
  },
  {
    title: "Robotics & perception",
    owner: "Grasp.im",
    body: "Vision-guided grasping, 3D perception and field pilots — from dataset to deployed cell.",
    bullets: ["2D / 3D perception, pose, grasp planning", "Sim-to-real, on-robot optimisation", "Safety & CE-minded documentation"],
    price: "Scoped per cell · pilot first",
  },
  {
    title: "Data annotation operations",
    owner: "Grasp.im",
    body: "Managed labelling for vision, 3D and language: workforce, tooling, QA loops that hold ≥99%.",
    bullets: ["Boxes, masks, keypoints, 3D cuboids, VLA traces", "Double-blind QA + gold sets", "GDPR-compliant handling, EU storage"],
    price: "Per-unit or dedicated pod",
  },
  {
    title: "Cloud, edge & platform",
    owner: "Group",
    body: "Cloudflare-first architectures, CI/CD, observability and FinOps. Fast globally, compliant in the EU.",
    bullets: ["Cloudflare Workers, R2, D1, Queues", "GitHub Actions pipelines, preview envs", "Cost, latency & carbon reporting"],
    price: "Audit from €8k",
  },
  {
    title: "Strategy, audits & interim CTO",
    owner: "Group",
    body: "Build-vs-buy, technical due diligence, roadmaps and interim leadership for boards and founders.",
    bullets: ["1-week technical audit with memo", "Board-ready roadmap & hiring plan", "Interim CTO 2–3 days/week"],
    price: "Weekly or retainer",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mesh-bg px-5 pb-14 pt-36 md:pt-44">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h1 className="max-w-[20ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[58px]">
              Services that end in production, not slides.
            </h1>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-white/60">
              Six practices, one senior team. Every engagement starts with a
              fixed-scope pilot and ends with your team owning everything.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <Stagger className="grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="flex h-full flex-col rounded-[1.75rem] bg-white/[0.03] p-7 ring-1 ring-white/[0.08] md:p-8">
                <span className="w-fit rounded-full bg-[#2EE6A8]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2EE6A8] ring-1 ring-[#2EE6A8]/25">
                  {g.owner}
                </span>
                <h2 className="mt-4 text-[24px] font-semibold tracking-tight text-white">{g.title}</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{g.body}</p>
                <ul className="mt-5 space-y-2">
                  {g.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-white/70">
                      <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-[#2EE6A8]" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <span className="font-mono text-[12px] text-white/40">{g.price}</span>
                  <Link href="/contact" className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2EE6A8]">
                    Scope this <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[1.75rem] bg-[#2EE6A8] p-8 md:flex-row md:p-10">
            <div>
              <h2 className="text-[24px] font-semibold tracking-tight text-[#04110b] md:text-[28px]">Not sure which practice you need?</h2>
              <p className="mt-1 text-[15px] text-black/65">Send a 5-line brief. We will route it to the right lead within a day.</p>
            </div>
            <Link href="/contact" className="shrink-0 rounded-full bg-[#04110b] px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Talk to us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
