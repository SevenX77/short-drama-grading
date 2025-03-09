#!/bin/bash
# 加载nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 安装并使用Node.js 18
nvm install 18
nvm use 18

# 显示Node.js版本
node -v
npm -v

# 设置环境变量
export EXPORT=true

# 安装依赖
npm install

# 构建项目
npm run build
npx next export -o out

echo "构建完成，输出目录: out" 