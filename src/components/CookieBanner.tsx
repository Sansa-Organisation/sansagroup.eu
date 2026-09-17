"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, X } from "@phosphor-icons/react";

const KEY = "sansa-cookie-consent-v1";

type Consent = { necessary: true; analytics: boolean; marketing: boolean; ts: string };

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!localStorage.getItem(KEY)) {
        t = setTimeout(() => setVisible(true), 1400);
      }
    } catch {
      t = setTimeout(() => setVisible(true), 1400);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, []);

  const save = (c: Omit<Consent, "necessary" | "ts">) => {
    const val: Consent = { necessary: true, ...c, ts: new Date().toISOString() };
    try {
      localStorage.setItem(KEY, JSON.stringify(val));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-[880px] rounded-[1.6rem] bg-[#0b131b]/95 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/12 backdrop-blur-2xl">
        <div className="rounded-[calc(1.6rem-0.5rem)] bg-white/[0.03] p-6 ring-1 ring-white/[0.06] md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2EE6A8]/12 text-[#2EE6A8] ring-1 ring-[#2EE6A8]/25">
                <Cookie size={19} weight="duotone" />
              </span>
              <h2 className="text-[16px] font-semibold tracking-tight text-white">
                We value your privacy
              </h2>
            </div>
            <button
              onClick={() => save({ analytics: false, marketing: false })}
              aria-label="Dismiss"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/60 hover:text-white"
            >
              <X size={15} />
            </button>
          </div>

          <p className="mt-4 max-w-[62ch] text-[14px] leading-relaxed text-white/60">
            We use strictly necessary cookies to run sansagroup.eu, and optional
            analytics / marketing cookies to improve it. You can accept, reject,
            or fine-tune. See our{" "}
            <Link href="/cookies" className="text-[#2EE6A8] underline-offset-4 hover:underline">
              Cookie Policy
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-[#2EE6A8] underline-offset-4 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/gdpr" className="text-[#2EE6A8] underline-offset-4 hover:underline">
              GDPR notice
            </Link>
            .
          </p>

          {prefs && (
            <div className="mt-5 grid gap-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/[0.07] sm:grid-cols-2">
              <label className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-3 ring-1 ring-white/[0.07]">
                <span>
                  <span className="block text-[13.5px] font-semibold text-white">Necessary</span>
                  <span className="block text-[12px] text-white/50">Always on — security, load balancing</span>
                </span>
                <span className="rounded-full bg-[#2EE6A8]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2EE6A8]">
                  On
                </span>
              </label>
              {[
                { k: "Analytics", v: analytics, set: setAnalytics, d: "Anonymous usage stats" },
                { k: "Marketing", v: marketing, set: setMarketing, d: "Relevant content, no sale of data" },
              ].map((r) => (
                <button
                  key={r.k}
                  onClick={() => r.set(!r.v)}
                  aria-pressed={r.v}
                  className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-3 text-left ring-1 ring-white/[0.07] transition-colors hover:bg-white/[0.07]"
                >
                  <span>
                    <span className="block text-[13.5px] font-semibold text-white">{r.k}</span>
                    <span className="block text-[12px] text-white/50">{r.d}</span>
                  </span>
                  <span
                    className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
                      r.v ? "bg-[#2EE6A8]" : "bg-white/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${
                        r.v ? "left-[22px]" : "left-0.5"
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <button
              onClick={() => save({ analytics: false, marketing: false })}
              className="rounded-full px-5 py-3 text-[13.5px] font-semibold text-white/75 ring-1 ring-white/15 transition-all hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
            >
              Reject all
            </button>
            <button
              onClick={() => setPrefs(!prefs)}
              className="rounded-full px-5 py-3 text-[13.5px] font-semibold text-white/75 ring-1 ring-white/15 transition-all hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
            >
              {prefs ? "Hide preferences" : "Customise"}
            </button>
            {prefs ? (
              <button
                onClick={() => save({ analytics, marketing })}
                className="rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-black transition-all hover:bg-white/85 active:scale-[0.98] sm:ml-auto"
              >
                Save my choices
              </button>
            ) : (
              <button
                onClick={() => save({ analytics: true, marketing: true })}
                className="rounded-full bg-[#2EE6A8] px-5 py-3 text-[13.5px] font-semibold text-[#04110b] transition-all hover:bg-[#7df0c4] active:scale-[0.98] sm:ml-auto"
              >
                Accept all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function resetConsent() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
