FROM node:18-alpine

WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制所有文件
COPY . .

# 设置环境变量
ENV NODE_VERSION=18.x
ENV EXPORT=true

# 构建应用
RUN npm run export

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npx", "serve", "out", "-p", "3000"] 