import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { geistSans, spaceGrotesk } from "../utils/fonts";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const dynamic = "force-dynamic";

// Domini supportati
const DOMAINS = {
  EU: "imprefondamato.eu",
  IT: "imprefondamato.it",
} as const;

const DEFAULT_DOMAIN = DOMAINS.IT;

// Funzione helper per ottenere il dominio corrente
export function getCurrentDomain(host: string | null): string {
  if (!host) return DEFAULT_DOMAIN;
  if (host.includes(DOMAINS.EU)) return DOMAINS.EU;
  if (host.includes(DOMAINS.IT)) return DOMAINS.IT;
  return DEFAULT_DOMAIN;
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  // x-forwarded-host è più affidabile su Vercel
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const currentDomain = getCurrentDomain(host);
  const baseUrl = `https://${currentDomain}`;

  return {
    title: {
      default: "Imprefond F.lli Amato | Trivellazioni e Lavori Fratelli Amato",
      template: "%s | Imprefond F.lli Amato",
    },
    description:
      "Dal 1950, Imprefond F.lli Amato è leader nelle fondazioni speciali: pali trivellati, micropali, palancole, jet grouting. Affidabilità e competenza in tutta Italia.",
    keywords: [
      // Brand & Identità
      "Imprefond Fratelli Amato",
      "Imprefond",
      "Fratelli Amato S.R.L.",
      "Amato Fondazioni",

      // Servizi Core (Geotecnica)
      "fondazioni speciali",
      "pali trivellati",
      "micropali",
      "palancole",
      "jet grouting",
      "consolidamento terreni",
      "trivellazioni",
      "diaframmi in cemento armato",
      "berlinesi di micropali",

      // Applicazioni e Soluzioni
      "opere sottosuolo",
      "ingegneria del sottosuolo",
      "consolidamento fondazioni",
      "messa in sicurezza versanti",
      "sondaggi geognostici",
      "prove di carico",
      "edilizia civile e infrastrutture",
    ],
    authors: [{ name: "Imprefond F.lli Amato S.r.l." }],
    creator: "Imprefond F.lli Amato S.r.l.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url: baseUrl,
      siteName: "Imprefond F.lli Amato",
      title: "Imprefond F.lli Amato | Trivellazioni e Lavori Fratelli Amato",
      description:
        "Dal 1950, leader nelle fondazioni speciali: pali trivellati, micropali, palancole, jet grouting.",
      images: [
        {
          url: `${baseUrl}/og-imprefond.png`,
          width: 1200,
          height: 630,
          alt: "Imprefond F.lli Amato - Fondazioni Speciali",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Imprefond F.lli Amato | Trivellazioni e Lavori Fratelli Amato",
      description:
        "Dal 1950, leader nelle fondazioni speciali: pali trivellati, micropali, palancole, jet grouting.",
      images: [`${baseUrl}/og-imprefond.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} font-space-grotesk! tracking-tighter antialiased`}
      >
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
