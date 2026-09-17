import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Grasp.im — Robotics & Annotation",
  description: "Grasp.im, the Sansa Group robotics & annotation practice: perception, grasping pilots, vision/3D labelling ops.",
};

export default function GraspPage() {
  return (
    <>
      <section className="mesh-bg px-5 pb-14 pt-36 md:pt-44">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="inline-flex rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/12">
              Practice · Grasp.im
            </p>
            <h1 className="mt-5 max-w-[20ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white md:text-[58px]">
              Robots that grasp. Data that trains them.
            </h1>
            <p className="mt-5 max-w-[60ch] text-[16px] leading-relaxed text-white/60">
              Grasp.im is Sansa Group&apos;s robotics & data-annotation practice. Vision
              and 3D perception, grasp planning, field pilots — plus the managed
              labelling pipelines that make it all work.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2EE6A8] px-7 py-4 text-[15px] font-semibold text-[#04110b] hover:bg-[#7df0c4]">
                Scope a pilot <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="https://grasp.im" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-semibold text-white ring-1 ring-white/15 hover:bg-white/[0.06]">
                grasp.im ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <Stagger className="grid gap-4 md:grid-cols-2">
          {[
            ["Perception systems", "2D detection, segmentation, 6D pose and 3D — optimised for edge latency, not just mAP.", ["mAP-tracked eval sets", "41ms edge inference budgets", "ROS / Isaac / custom stacks"]],
            ["Grasping & manipulation", "Grasp synthesis, motion planning and cell integration — from first pick to shift-long reliability.", ["Sim-to-real transfer", "Gripper & sensor selection", "Throughput & failure analytics"]],
            ["Annotation operations", "Managed labelling for images, video, point clouds and VLA traces with double-blind QA.", ["Boxes, masks, cuboids, keypoints", "Gold sets + adjudication", "≥99% QA, EU data handling"]],
            ["Field pilots & scale", "Instrumented pilots with success metrics agreed up front — then hardening for production.", ["4–8 week pilot cells", "Safety documentation", "Handover to your ops team"]],
          ].map(([t, d, bullets]) => (
            <StaggerItem key={t as string}>
              <div className="h-full rounded-[1.75rem] bg-white/[0.03] p-8 ring-1 ring-white/[0.08]">
                <h2 className="text-[22px] font-semibold tracking-tight text-white">{t}</h2>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{d}</p>
                <ul className="mt-5 space-y-2">
                  {(bullets as string[]).map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[14px] text-white/70">
                      <Check size={15} weight="bold" className="text-[#2EE6A8]" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
