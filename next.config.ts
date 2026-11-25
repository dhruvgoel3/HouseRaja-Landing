import type { NextConfig } from "next";

/**
 * Fully static site (`next build` → `out/`), so it can be hosted anywhere:
 * Firebase Hosting, Vercel, Netlify, GitHub Pages…
 */
const nextConfig: NextConfig = {
  output: "export",
  // Static export can't use the default image optimizer; images are
  // pre-optimised WebP files in /public already.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
