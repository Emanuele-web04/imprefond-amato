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

export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers();
    const host = headersList.get("x-forwarded-host") || headersList.get("host");
    const currentDomain = getCurrentDomain(host);
    const baseUrl = `https://${currentDomain}`;

    // Stesse regole per entrambi i domini (sito vetrina, niente da bloccare)
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
