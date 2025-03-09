#!/bin/bash
# 设置Node.js版本
export NODE_VERSION=18.x
export EXPORT=true

# 安装依赖
npm install

# 构建项目
npm run build
npx next export -o out

echo "构建完成，输出目录: out" 