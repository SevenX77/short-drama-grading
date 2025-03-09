/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.example.com',
            },
        ],
    },
    experimental: {
        mdxRs: true,
    },
}

module.exports = nextConfig 