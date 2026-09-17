import Link from "next/link";
import { SansaMark } from "./Logo";

const cols = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Divisions",
    links: [
      { href: "/sansavision", label: "Sansavision — SaaS" },
      { href: "/grasp", label: "Grasp.im — Robotics" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/gdpr", label: "GDPR" },
      { href: "/ccpa", label: "California Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#04070b]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <SansaMark className="h-10 w-10 text-white" />
              <span className="leading-none">
                <span className="block text-lg font-semibold tracking-tight text-white">
                  Sansa Group AB
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
                  Consulting · Software · Robotics
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-white/55">
              A European consulting group building software, SaaS and intelligent
              machines. Strategy through delivery — from boardroom to production.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://sansavision.se"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/[0.05] px-4 py-2 text-[12.5px] font-medium text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/[0.09] hover:text-white"
              >
                sansavision ↗
              </a>
              <a
                href="https://grasp.im"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/[0.05] px-4 py-2 text-[12.5px] font-medium text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/[0.09] hover:text-white"
              >
                grasp.im ↗
              </a>
              <a
                href="mailto:contact@sansagroup.eu"
                className="rounded-full bg-[#2EE6A8]/10 px-4 py-2 text-[12.5px] font-semibold text-[#2EE6A8] ring-1 ring-[#2EE6A8]/25 transition-colors hover:bg-[#2EE6A8]/20"
              >
                contact@sansagroup.eu
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {c.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14.5px] text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Sansa Group AB · Org.nr — Stockholm, Sweden ·
            sansagroup.eu
          </p>
          <p className="font-mono text-[12px] text-white/30">
            EU GDPR compliant · ISO-minded delivery · Cloudflare edge
          </p>
        </div>
      </div>
    </footer>
  );
}
