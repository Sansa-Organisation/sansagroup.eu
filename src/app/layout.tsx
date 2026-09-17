import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sansagroup.eu"),
  title: {
    default: "Sansa Group AB — Consulting for Software, SaaS, AI & Robotics",
    template: "%s · Sansa Group AB",
  },
  description:
    "Sansa Group AB (sansagroup.eu) is a European consulting group. Software & SaaS via Sansavision, robotics & data annotation via Grasp. Strategy through delivery.",
  keywords: ["consulting", "software consulting", "SaaS", "AI", "robotics", "data annotation", "Sansavision", "Grasp", "Sansa Group"],
  authors: [{ name: "Sansa Group AB" }],
  alternates: { canonical: "https://sansagroup.eu" },
  openGraph: {
    type: "website",
    url: "https://sansagroup.eu",
    siteName: "Sansa Group AB",
    title: "Sansa Group AB — Consulting for Software, SaaS, AI & Robotics",
    description: "Strategy through delivery. Software & SaaS via Sansavision, robotics & annotation via Grasp.",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Sansa Group AB", description: "Consulting for Software, SaaS, AI & Robotics" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="grain flex min-h-full flex-col bg-[#05080c] text-[#eef4f0]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sansa Group AB",
              url: "https://sansagroup.eu",
              email: "contact@sansagroup.eu",
              address: { "@type": "PostalAddress", addressLocality: "Gothenburg", addressCountry: "SE" },
              subOrganization: [
                { "@type": "Organization", name: "Sansavision", url: "https://sansavision.se" },
                { "@type": "Organization", name: "Grasp", url: "https://grasp.im" },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
