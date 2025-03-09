import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// 获取请求的路径
	const path = request.nextUrl.pathname;

	// 如果访问的是根路径，重定向到基础知识页面
	if (path === "/") {
		return NextResponse.next();
	}

	// 允许请求继续
	return NextResponse.next();
}

// 配置匹配的路径
export const config = {
	matcher: [
		/*
		 * 匹配所有路径，除了:
		 * - api 路由
		 * - _next 静态文件
		 * - 图片文件
		 * - 字体文件
		 * - favicon.ico
		 */
		"/((?!api|_next|images|fonts|favicon.ico).*)",
	],
};
