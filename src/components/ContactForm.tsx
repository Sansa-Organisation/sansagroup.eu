"use client";

import { useState } from "react";
import { PaperPlaneTilt, CheckCircle, WarningCircle } from "@phosphor-icons/react";

const budgets = ["< €15k", "€15–50k", "€50–150k", "€150k+", "Retainer / ongoing"];
const interests = ["Software / SaaS", "AI & Data", "Robotics", "Data annotation", "Cloud & Platform", "Strategy / Advisory", "Other"];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "€15–50k",
    interest: "Software / SaaS",
    message: "",
    consent: false,
    website: "", // honeypot
  });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof form, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in name, work email and a short project description.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email address does not look valid.");
      return;
    }
    if (!form.consent) {
      setError("Please tick the privacy consent so we can reply to you (GDPR).");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Send failed");
      setState("done");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Email us at contact@sansagroup.eu");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-[1.6rem] bg-white/[0.04] p-8 text-center ring-1 ring-white/10 md:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2EE6A8]/12 text-[#2EE6A8] ring-1 ring-[#2EE6A8]/30">
          <CheckCircle size={28} weight="duotone" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">Message received</h3>
        <p className="mx-auto mt-3 max-w-[44ch] text-[15px] leading-relaxed text-white/60">
          Thank you, {form.name.split(" ")[0] || "there"}. We reply within one business day.
          For anything urgent:{" "}
          <a href="mailto:contact@sansagroup.eu" className="text-[#2EE6A8] hover:underline">
            contact@sansagroup.eu
          </a>
        </p>
        <button
          onClick={() => {
            setState("idle");
            setForm({ name: "", email: "", company: "", budget: "€15–50k", interest: "Software / SaaS", message: "", consent: false, website: "" });
          }}
          className="mt-6 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white/70 ring-1 ring-white/15 hover:bg-white/[0.06] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl bg-black/40 px-4 py-3.5 text-[14.5px] text-white placeholder:text-white/30 ring-1 ring-white/10 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#2EE6A8]/60 focus:bg-black/60";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => set("website", e.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-[13px] font-medium text-white/70">
            Full name *
          </label>
          <input
            id="cf-name"
            className={inputCls}
            placeholder="Ada Lovelace"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-[13px] font-medium text-white/70">
            Work email *
          </label>
          <input
            id="cf-email"
            type="email"
            className={inputCls}
            placeholder="ada@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
        </div>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="cf-company" className="mb-2 block text-[13px] font-medium text-white/70">
            Company
          </label>
          <input
            id="cf-company"
            className={inputCls}
            placeholder="Company AB"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="cf-interest" className="mb-2 block text-[13px] font-medium text-white/70">
            I&apos;m interested in
          </label>
          <select
            id="cf-interest"
            className={`${inputCls} appearance-none`}
            value={form.interest}
            onChange={(e) => set("interest", e.target.value)}
          >
            {interests.map((o) => (
              <option key={o} value={o} className="bg-[#0a1118]">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <span className="mb-2 block text-[13px] font-medium text-white/70">Indicative budget</span>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => set("budget", b)}
              aria-pressed={form.budget === b}
              className={`rounded-full px-4 py-2 text-[13px] font-medium ring-1 transition-all duration-300 active:scale-[0.97] ${
                form.budget === b
                  ? "bg-[#2EE6A8] text-[#04110b] ring-[#2EE6A8]"
                  : "bg-white/[0.04] text-white/60 ring-white/10 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="cf-msg" className="mb-2 block text-[13px] font-medium text-white/70">
          Project brief *
        </label>
        <textarea
          id="cf-msg"
          rows={5}
          className={`${inputCls} resize-y leading-relaxed`}
          placeholder="What are you building, what does success look like, and when do you need it?"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/[0.07]">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#2EE6A8]"
        />
        <span className="text-[13px] leading-relaxed text-white/60">
          I agree that Sansa Group AB may process my details to respond to this enquiry,
          per the <a href="/privacy" className="text-[#2EE6A8] hover:underline">Privacy Policy</a> and{" "}
          <a href="/gdpr" className="text-[#2EE6A8] hover:underline">GDPR notice</a>. *
        </span>
      </label>

      {(error || state === "error") && (
        <p role="alert" className="flex items-start gap-2 rounded-2xl bg-red-500/10 px-4 py-3 text-[13.5px] text-red-300 ring-1 ring-red-500/25">
          <WarningCircle size={17} className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2EE6A8] px-7 py-4 text-[15px] font-semibold text-[#04110b] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#7df0c4] active:scale-[0.98] disabled:opacity-60"
      >
        {state === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
            Sending…
          </>
        ) : (
          <>
            Send enquiry
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-500 group-hover:translate-x-1">
              <PaperPlaneTilt size={15} weight="fill" />
            </span>
          </>
        )}
      </button>
      <p className="text-center text-[12.5px] text-white/35">
        Prefer email? <a href="mailto:contact@sansagroup.eu" className="text-white/60 underline-offset-4 hover:underline">contact@sansagroup.eu</a> · No newsletters, no spam, no data sale.
      </p>
    </form>
  );
}
