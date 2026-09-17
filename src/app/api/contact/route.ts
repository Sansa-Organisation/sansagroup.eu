import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    // honeypot — silently accept
    if (body.website) return NextResponse.json({ ok: true });

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }
    if (!isEmail(body.email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (!body.consent) {
      return NextResponse.json({ error: "Privacy consent is required (GDPR)." }, { status: 400 });
    }
    if (body.message.length > 10000) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    const payload = {
      to: "contact@sansagroup.eu",
      from: body.email.trim(),
      name: body.name.trim(),
      company: body.company?.trim() || "-",
      interest: body.interest || "-",
      budget: body.budget || "-",
      message: body.message.trim(),
      at: new Date().toISOString(),
      source: "sansagroup.eu/contact",
    };

    // Optional: forward via Resend if configured (works on Cloudflare Workers too via fetch)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Sansa Group <noreply@sansagroup.eu>",
          to: ["contact@sansagroup.eu"],
          reply_to: payload.from,
          subject: `New enquiry — ${payload.name} (${payload.interest})`,
          text: `Name: ${payload.name}\nEmail: ${payload.from}\nCompany: ${payload.company}\nInterest: ${payload.interest}\nBudget: ${payload.budget}\n\n${payload.message}`,
        }),
      });
      if (!r.ok) {
        console.error("Resend failed", await r.text());
      }
    } else {
      console.log("Contact enquiry (no RESEND_API_KEY, logged only):", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not send. Please email contact@sansagroup.eu" }, { status: 500 });
  }
}
