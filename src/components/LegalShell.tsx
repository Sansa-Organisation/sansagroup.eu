import type { ReactNode } from "react";
import type { Metadata } from "next";

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="mesh-bg px-5 pb-28 pt-40 md:pb-36 md:pt-56">
      <div className="mx-auto max-w-[860px]">
        <p className="inline-flex rounded-full bg-white/[0.05] px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/55 ring-1 ring-white/10">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-[48px]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-[12.5px] text-white/40">Last updated: {updated} · Sansa Group AB · sansagroup.eu</p>
        <div className="legal mt-10 space-y-8 rounded-[1.75rem] bg-white/[0.03] p-7 ring-1 ring-white/[0.08] md:p-10 [&_h2]:mt-2 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white [&_p]:mt-3 [&_p]:text-[14.5px] [&_p]:leading-relaxed [&_p]:text-white/65 [&_ul]:mt-3 [&_ul]:space-y-2 [&_li]:text-[14.5px] [&_li]:leading-relaxed [&_li]:text-white/65 [&_li]:before:mr-2 [&_li]:before:text-[#2EE6A8] [&_li]:before:content-['—'] [&_a]:text-[#2EE6A8] [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </div>
        <p className="mt-6 text-center text-[13px] text-white/40">
          Questions? <a href="mailto:contact@sansagroup.eu" className="text-[#2EE6A8] hover:underline">contact@sansagroup.eu</a>
        </p>
      </div>
    </section>
  );
}

export const legalMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
  robots: { index: true, follow: true },
});
