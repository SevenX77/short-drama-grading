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
        unoptimized: process.env.NODE_ENV === 'production',
    },
    experimental: {
        mdxRs: true,
        skipNodeCheck: true,
        skipTrailingSlashRedirect: true,
        skipMiddlewareUrlNormalize: true,
    },
    output: process.env.EXPORT === 'true' ? 'export' : undefined,
    i18n: {
        locales: ['zh-CN'],
        defaultLocale: 'zh-CN',
    },
}

// 强制设置环境变量
process.env.NODE_VERSION = '18.x';

module.exports = nextConfig 