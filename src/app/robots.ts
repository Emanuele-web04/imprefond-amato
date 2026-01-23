import type { MetadataRoute } from "next";
import { headers } from "next/headers";

// Domini supportati
const DOMAINS = {
    EU: "imprefondamato.eu",
    IT: "imprefondamato.it",
} as const;

const DEFAULT_DOMAIN = DOMAINS.IT;

function getCurrentDomain(host: string): string {
    if (host.includes(DOMAINS.EU)) return DOMAINS.EU;
    if (host.includes(DOMAINS.IT)) return DOMAINS.IT;
    return DEFAULT_DOMAIN;
}

export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers();
    const host = headersList.get("host") || DEFAULT_DOMAIN;
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
