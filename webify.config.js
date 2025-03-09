// 腾讯云 Webify 配置文件
// 注意：此文件仅供参考，实际部署时请在腾讯云 Webify 控制台进行配置
module.exports = {
    // 构建配置
    framework: "nextjs",
    buildCommand: "npm run export",
    outputDirectory: "out",
    // 明确指定Node.js版本
    nodeVersion: "18.x",

    // 构建环境设置
    buildSettings: {
        runtime: "nodejs18.x",
        nodeVersion: "18.x",
        env: {
            NODE_VERSION: "18.x",
            EXPORT: "true"
        }
    },

    // 环境变量
    environments: [
        {
            name: "production",
            envs: {
                NEXT_PUBLIC_SITE_URL: "https://short-drama-grading.webify.cloudbase.net",
                NEXT_PUBLIC_SITE_NAME: "短剧调色培训",
                NODE_VERSION: "18.x"
            }
        },
        {
            name: "development",
            envs: {
                NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
                NEXT_PUBLIC_SITE_NAME: "短剧调色培训（开发）",
                NODE_VERSION: "18.x"
            }
        }
    ],

    // 区域设置
    region: "ap-shanghai",
    // 路由重写规则
    routes: [
        { src: "/(.*)", dest: "/$1" }
    ],
    // 缓存配置
    cache: [
        { src: "/_next/static/(.*)", headers: { "cache-control": "public,max-age=31536000,immutable" } },
        { src: "/images/(.*)", headers: { "cache-control": "public,max-age=86400" } }
    ],
    plugins: []
} 