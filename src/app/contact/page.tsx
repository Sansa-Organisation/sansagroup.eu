import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sansa Group AB — start a software, SaaS, AI, robotics or annotation project. Reply within one business day.",
};

export default function ContactPage() {
  return (
    <section className="mesh-bg px-5 pb-28 pt-40 md:pb-36 md:pt-56">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h1 className="text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[54px]">
            Start a project.
          </h1>
          <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-white/60">
            Tell us in 5 lines what you are building. A partner replies within
            one business day — with next steps, not a sales sequence.
          </p>
          <div className="mt-8 space-y-3">
            <a href="mailto:contact@sansagroup.eu" className="flex items-center gap-4 rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.08] hover:bg-white/[0.06]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2EE6A8]/12 text-[#2EE6A8]"><EnvelopeSimple size={19} /></span>
              <span><span className="block text-[12px] uppercase tracking-[0.14em] text-white/40">Email</span><span className="block text-[15px] font-semibold text-white">contact@sansagroup.eu</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.08]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70"><MapPin size={19} /></span>
              <span><span className="block text-[12px] uppercase tracking-[0.14em] text-white/40">Base</span><span className="block text-[15px] font-semibold text-white">Gothenburg · EU · Remote worldwide</span></span>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/[0.08]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70"><Clock size={19} /></span>
              <span><span className="block text-[12px] uppercase tracking-[0.14em] text-white/40">Response</span><span className="block text-[15px] font-semibold text-white">Within 1 business day · NDA on request</span></span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] bg-white/[0.03] p-2 ring-1 ring-white/10">
            <div className="rounded-[calc(2rem-0.5rem)] bg-[#0a1118] p-6 ring-1 ring-white/[0.06] md:p-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
