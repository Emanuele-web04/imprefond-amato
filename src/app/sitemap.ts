import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

// Domini supportati
const DOMAINS = {
    EU: "imprefondamato.eu",
    IT: "imprefondamato.it",
} as const;

const DEFAULT_DOMAIN = DOMAINS.IT;

function getCurrentDomain(host: string | null): string {
    if (!host) return DEFAULT_DOMAIN;
    if (host.includes(DOMAINS.EU)) return DOMAINS.EU;
    if (host.includes(DOMAINS.IT)) return DOMAINS.IT;
    return DEFAULT_DOMAIN;
}

// Definizione delle pagine del sito
const PAGES = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servizi", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/progetti", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/trivelle", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/noleggio", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/storia", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/certificazioni", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/contatti", priority: 0.8, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = await headers();
    const host = headersList.get("x-forwarded-host") || headersList.get("host");
    const currentDomain = getCurrentDomain(host);
    const baseUrl = `https://${currentDomain}`;

    const currentDate = new Date().toISOString();

    return PAGES.map((page) => ({
        url: `${baseUrl}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
