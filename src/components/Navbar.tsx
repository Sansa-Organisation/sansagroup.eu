"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "@phosphor-icons/react";
import { SansaMark } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/sansavision", label: "Sansavision" },
  { href: "/grasp", label: "Grasp" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
        <div
          className={`flex w-full max-w-[1120px] items-center justify-between gap-4 rounded-full py-2.5 pl-4 pr-2.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "bg-[#0a1118]/85 shadow-[0_18px_60px_-18px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur-2xl"
              : "bg-[#0a1118]/45 ring-1 ring-white/[0.07] backdrop-blur-xl"
          }`}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label="Sansa Group home">
            <SansaMark className="h-9 w-9 text-white" />
            <span className="leading-none">
              <span className="block text-[15px] font-semibold tracking-tight text-white">
                Sansa Group
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                SANSAGROUP.EU
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[13.5px] font-medium text-white/70 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group ml-2 inline-flex items-center gap-2 rounded-full bg-[#2EE6A8] py-2 pl-5 pr-2 text-[13.5px] font-semibold text-[#04110b] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#7df0c4] active:scale-[0.98]"
            >
              Start a project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={15} weight="bold" />
              </span>
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.8px] w-full rounded bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.8px] w-full rounded bg-white transition-all duration-500 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[1.8px] w-full rounded bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[#05080c]/90 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center gap-1 px-8 pt-20"
          aria-label="Mobile"
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`group flex items-center justify-between border-b border-white/[0.07] py-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-3xl font-semibold tracking-tight text-white">
                {l.label}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-colors group-hover:bg-[#2EE6A8] group-hover:text-black">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
          <p className="mt-8 text-sm text-white/40">contact@sansagroup.eu — Gothenburg · EU · Remote worldwide</p>
        </nav>
        <button aria-hidden tabIndex={-1} className="hidden">
          <X />
        </button>
      </div>
    </>
  );
}
