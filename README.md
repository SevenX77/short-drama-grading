# 短剧调色培训文档平台

这是一个专注于短剧调色技术培训的在线文档平台。该平台以文档展示形式呈现调色知识和技巧，采用左侧目录、右侧内容的经典文档布局，便于用户系统性学习短剧调色技术。

## 功能特点

- 结构化的调色知识体系展示
- 丰富的调色案例与教程
- 响应式设计，支持多设备访问
- 优化的内容加载速度
- 支持搜索功能
- 暗色/亮色主题切换

## 技术栈

- **前端框架**: Next.js 14（App Router）
- **UI 库**: Tailwind CSS + Shadcn UI
- **状态管理**: React Context API / Zustand
- **内容渲染**: MDX（支持在 Markdown 中嵌入 React 组件）
- **动画效果**: Framer Motion
- **部署平台**: 腾讯云 Webify

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
/
├── app/                      # Next.js App Router
│   ├── [category]/           # 分类路由
│   │   └── [slug]/           # 内容详情页路由
│   ├── layout.tsx            # 根布局
│   └── page.tsx              # 首页
├── components/               # 可复用组件
│   ├── ui/                   # 基础UI组件
│   ├── layout/               # 布局组件
│   │   ├── sidebar.tsx       # 侧边栏组件
│   │   ├── header.tsx        # 页头组件
│   │   └── footer.tsx        # 页脚组件
│   └── content/              # 内容相关组件
│       ├── mdx-components.tsx # MDX组件映射
│       └── color-example.tsx # 调色示例组件
├── lib/                      # 工具函数和库
│   └── utils/                # 工具函数
│       ├── mdx.ts            # MDX处理工具
│       └── color-utils.ts    # 颜色处理工具
├── public/                   # 静态资源
│   └── images/               # 图片资源
├── styles/                   # 样式文件
│   └── globals.css           # 全局样式
├── content/                  # 内容文件
│   ├── basics/               # 基础知识
│   ├── techniques/           # 技术技巧
│   └── case-studies/         # 案例研究
├── types/                    # TypeScript类型定义
├── middleware.ts             # Next.js中间件
├── next.config.js            # Next.js配置
├── tailwind.config.js        # Tailwind配置
├── tsconfig.json             # TypeScript配置
└── package.json              # 项目依赖
```

## 内容编写指南

内容文件采用 MDX 格式，支持 Markdown 语法和 React 组件。每个内容文件需要包含以下前置元数据：

```md
---
title: 内容标题
description: 内容描述
date: 发布日期（YYYY-MM-DD格式）
author: 作者名称
tags: ["标签1", "标签2"]
image: 封面图片路径（可选）
---

# 内容正文
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

ISC
