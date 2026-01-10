import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // In Next.js 16+, se il tipo dà errore, puoi ometterlo 
  // o assicurarti che le opzioni siano corrette.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;