/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// @ts-ignore
import type { NextConfig } from "next";
import "./src/env.js";

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/f/*",
            },
        ],
    },
    experimental: {
        optimizePackageImports: [
            '@mantine/core',
            '@mantine/hooks'
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
