import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  CodeBlock,
  Brain,
  Robot,
  Database,
  Cloud,
  Compass,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SansaMark } from "@/components/Logo";

const services = [
  {
    icon: CodeBlock,
    title: "Software & SaaS",
    body: "Product engineering, platform modernisation and SaaS builds your team can actually maintain.",
    tags: ["Next.js · React 19", "Design systems", "APIs"],
    span: "md:col-span-7",
  },
  {
    icon: Brain,
    title: "AI & Data",
    body: "LLM features, RAG, evaluation and data pipelines — shipped with guardrails, not hype.",
    tags: ["RAG · Agents", "Eval harnesses"],
    span: "md:col-span-5",
  },
  {
    icon: Robot,
    title: "Robotics",
    body: "Perception, grasping and field pilots with Grasp.im — from lab demo to robust deployment.",
    tags: ["Perception", "Grasp.im"],
    span: "md:col-span-5",
  },
  {
    icon: Database,
    title: "Annotation Ops",
    body: "High-quality labelling pipelines, QA loops and workforce tooling for vision & language data.",
    tags: ["Vision · 3D", "QA ≥ 99%"],
    span: "md:col-span-7",
  },
  {
    icon: Cloud,
    title: "Cloud & Platform",
    body: "Cloudflare-first edge delivery, CI/CD, observability and cost control baked in from day one.",
    tags: ["Cloudflare", "Edge"],
    span: "md:col-span-7",
  },
  {
    icon: Compass,
    title: "Strategy & Advisory",
    body: "Build-vs-buy, audits, roadmaps and interim CTO support for boards and founders.",
    tags: ["Audits", "Interim CTO"],
    span: "md:col-span-5",
  },
];

const steps = [
  { n: "01", t: "Diagnose", d: "One-week deep dive: code, data, costs, risks. You get a written findings memo with priced options." },
  { n: "02", t: "Prove", d: "A 2–4 week pilot with a measurable target — latency, conversion, accuracy, or cost. No theatre." },
  { n: "03", t: "Build", d: "Senior-only squads shipping weekly to production, with docs and handover from day one." },
  { n: "04", t: "Transfer", d: "We train your team, harden runbooks, and step back. You own everything — code, data, IP." },
];

const stats = [
  { k: "40+", v: "engagements delivered" },
  { k: "12", v: "countries served remotely" },
  { k: "6 wks", v: "median time to first production release" },
  { k: "100%", v: "IP & code assigned to you" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mesh-bg relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] py-1.5 pl-2 pr-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65 ring-1 ring-white/10">
                <span className="rounded-full bg-[#2EE6A8] px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-[#04110b]">
                  New
                </span>
                Sansavision SaaS studio · Grasp.im robotics live
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-balance mt-6 text-[42px] font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-[64px]">
                Consulting that
                <br />
                ships to <em className="font-semibold not-italic text-[#2EE6A8]">production.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[46ch] text-[16.5px] leading-relaxed text-white/60">
                Sansa Group AB helps European companies build software, SaaS,
                AI and robots — strategy through delivery.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2EE6A8] px-7 py-4 text-[15px] font-semibold text-[#04110b] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#7df0c4] active:scale-[0.98]"
                >
                  Start a project
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowRight size={15} weight="bold" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold text-white ring-1 ring-white/15 transition-all duration-500 hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <dl className="mt-10 grid max-w-[520px] grid-cols-2 gap-x-8 gap-y-5 border-t border-white/[0.08] pt-7 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.v}>
                    <dt className="font-mono text-[22px] font-semibold tracking-tight text-white">{s.k}</dt>
                    <dd className="mt-1 text-[12.5px] leading-snug text-white/45">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Hero visual: double-bezel console */}
          <Reveal delay={0.2} className="relative">
            <div className="rounded-[2rem] bg-white/[0.04] p-2 ring-1 ring-white/10">
              <div className="card-sheen overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#0a1118] ring-1 ring-white/[0.07]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2EE6A8]/70" />
                  </div>
                  <span className="font-mono text-[11px] text-white/40">sansa — delivery pulse</span>
                </div>
                <div className="space-y-3 p-5 font-mono text-[12.5px] leading-relaxed">
                  {[
                    ["sansavision / billing", "deployed · 38s", true],
                    ["grasp.im / perception v2.4", "mAP 94.1 · edge 41ms", true],
                    ["client SaaS / EU region", "p99 180ms · 0 incidents", true],
                    ["annotation batch #1182", "QA 99.2% · shipped", false],
                  ].map(([a, b, live]) => (
                    <div key={a as string} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/[0.06]">
                      <span className="truncate text-white/75">{a}</span>
                      <span className="flex shrink-0 items-center gap-2 text-white/45">
                        {live ? <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2EE6A8]" /> : null}
                        {b}
                      </span>
                    </div>
                  ))}
                  <div className="rounded-xl bg-[#2EE6A8]/[0.07] px-4 py-3 ring-1 ring-[#2EE6A8]/20">
                    <p className="text-[#2EE6A8]">✓ week 6 — pilot promoted to production</p>
                    <p className="mt-1 text-white/40">handover docs · runbooks · team trained</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl bg-[#0d151d]/95 px-5 py-4 ring-1 ring-white/10 backdrop-blur-xl md:flex">
              <SansaMark className="h-9 w-9 text-white" />
              <div>
                <p className="text-[13.5px] font-semibold text-white">Sansa Group AB</p>
                <p className="font-mono text-[11.5px] text-white/45">Stockholm · EU · Remote worldwide</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* logo strip */}
        <div className="mx-auto mt-14 max-w-[1200px] px-5 md:mt-20">
          <div className="mask-fade-x overflow-hidden border-y border-white/[0.07] py-5">
            <div className="flex w-max animate-marquee gap-12 pr-12">
              {[...Array(2)].flatMap((_, k) =>
                ["SANSAVISION", "GRASP.IM", "SAAS", "ROBOTICS", "ANNOTATION", "AI SYSTEMS", "CLOUDFLARE EDGE", "EU GDPR"].map((w, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-12 whitespace-nowrap font-mono text-[12px] tracking-[0.28em] text-white/30">
                    {w} <span className="text-[#2EE6A8]/50">◆</span>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-[22ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[46px]">
            One group. Two specialist divisions. Zero hand-offs lost.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <StaggerItem>
            <Link
              href="/sansavision"
              className="group block rounded-[2rem] bg-white/[0.03] p-2 ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#2EE6A8]/40"
            >
              <div className="card-sheen rounded-[calc(2rem-0.5rem)] bg-gradient-to-b from-[#10202b] to-[#0a1118] p-8 ring-1 ring-white/[0.06] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#2EE6A8]/12 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2EE6A8] ring-1 ring-[#2EE6A8]/25">
                    Division · Software
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.05] text-white ring-1 ring-white/10 transition-all duration-500 group-hover:bg-[#2EE6A8] group-hover:text-black">
                    <ArrowUpRight size={19} weight="bold" />
                  </span>
                </div>
                <h3 className="mt-7 text-[30px] font-semibold tracking-tight text-white md:text-[36px]">Sansavision</h3>
                <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-white/60">
                  Our SaaS & software subdivision. Product engineering, multi-tenant
                  platforms, billing, and AI features — designed, built and scaled
                  for European compliance.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["SaaS greenfield & rebuilds", "AI copilots & RAG on your data", "GDPR-native EU hosting"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[14px] text-white/70">
                      <Check size={15} weight="bold" className="text-[#2EE6A8]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/grasp"
              className="group block rounded-[2rem] bg-white/[0.03] p-2 ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-[#2EE6A8]/40"
            >
              <div className="card-sheen rounded-[calc(2rem-0.5rem)] bg-gradient-to-b from-[#161a20] to-[#0a0e13] p-8 ring-1 ring-white/[0.06] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 ring-1 ring-white/12">
                    Division · Robotics
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.05] text-white ring-1 ring-white/10 transition-all duration-500 group-hover:bg-[#2EE6A8] group-hover:text-black">
                    <ArrowUpRight size={19} weight="bold" />
                  </span>
                </div>
                <h3 className="mt-7 text-[30px] font-semibold tracking-tight text-white md:text-[36px]">Grasp.im</h3>
                <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-white/60">
                  Our robotics & annotation practice. Perception systems, grasping
                  pilots, and production-grade labelling ops for vision and
                  language data.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Vision, 3D & VLA data pipelines", "Robot perception & field pilots", "Annotation QA ≥ 99%"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[14px] text-white/70">
                      <Check size={15} weight="bold" className="text-[#2EE6A8]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── SERVICES BENTO ──────────────────────────────── */}
      <section className="border-t border-white/[0.07] bg-[#04070b]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <h2 className="max-w-[20ch] text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[46px]">
                What we do best
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/services" className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#2EE6A8]">
                All services
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2EE6A8]/12 ring-1 ring-[#2EE6A8]/25 transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRight size={15} weight="bold" />
                </span>
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
            {services.map((s) => (
              <StaggerItem key={s.title} className={s.span}>
                <div className="group h-full rounded-[1.75rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.08] transition-all duration-500 hover:bg-white/[0.05] hover:ring-white/[0.14]">
                  <div className="flex h-full flex-col rounded-[calc(1.75rem-0.375rem)] bg-[#0a1118] p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2EE6A8]/10 text-[#2EE6A8] ring-1 ring-[#2EE6A8]/20">
                      <s.icon size={21} weight="duotone" />
                    </span>
                    <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-white">{s.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-white/55">{s.body}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[11.5px] text-white/50 ring-1 ring-white/[0.07]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="inline-flex rounded-full bg-white/[0.05] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/55 ring-1 ring-white/10">
                How we work
              </p>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[44px]">
                Diagnose. Prove.
                <br />
                Build. Transfer.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[15.5px] leading-relaxed text-white/60">
                No 80-slide decks that die in a drawer. Every engagement ends in
                production code, trained people, and documentation.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14.5px] font-semibold text-black transition-all duration-500 hover:bg-[#2EE6A8] active:scale-[0.98]"
              >
                Book a intro call
                <span className="transition-transform duration-500 group-hover:translate-x-1"><ArrowRight size={16} weight="bold" /></span>
              </Link>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {steps.map((s, i) => (
              <StaggerItem key={s.n}>
                <div
                  className={`h-full rounded-[1.6rem] p-7 ring-1 ${
                    i === 0
                      ? "bg-[#2EE6A8] text-[#04110b] ring-[#2EE6A8]"
                      : "bg-white/[0.03] text-white ring-white/[0.08]"
                  }`}
                >
                  <p className={`font-mono text-[13px] font-semibold ${i === 0 ? "text-black/55" : "text-[#2EE6A8]"}`}>{s.n}</p>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-tight">{s.t}</h3>
                  <p className={`mt-2 text-[14px] leading-relaxed ${i === 0 ? "text-black/70" : "text-white/55"}`}>{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section className="border-t border-white/[0.07] bg-[#04070b]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[44px]">
              Tell us what
              <br />
              you&apos;re building.
            </h2>
            <p className="mt-4 max-w-[40ch] text-[15.5px] leading-relaxed text-white/60">
              One business day response. NDA on request. EU-based, GDPR-native,
              happy to work in English, Swedish or German.
            </p>
            <div className="mt-8 space-y-3">
              {[
                ["Email", "contact@sansagroup.eu", "mailto:contact@sansagroup.eu"],
                ["Software / SaaS", "Sansavision →", "/sansavision"],
                ["Robotics / Annotation", "Grasp.im →", "/grasp"],
              ].map(([k, v, href]) => (
                <a
                  key={k}
                  href={href}
                  className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.08] transition-colors hover:bg-white/[0.06]"
                >
                  <span className="text-[13px] uppercase tracking-[0.14em] text-white/40">{k}</span>
                  <span className="text-[15px] font-semibold text-white">{v}</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] bg-white/[0.03] p-2 ring-1 ring-white/10">
              <div className="rounded-[calc(2rem-0.5rem)] bg-[#0a1118] p-6 ring-1 ring-white/[0.06] md:p-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
