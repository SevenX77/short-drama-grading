"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
	title: string;
	href: string;
	icon?: React.ReactNode;
	items?: NavItem[];
}

const navItems: NavItem[] = [
	{
		title: "基础知识",
		href: "/basics",
		items: [
			{ title: "色彩理论", href: "/basics/color-theory" },
			{ title: "色彩空间", href: "/basics/color-space" },
			{ title: "色彩心理学", href: "/basics/color-psychology" },
			{ title: "调色工具介绍", href: "/basics/color-tools" },
		],
	},
	{
		title: "调色技巧",
		href: "/techniques",
		items: [
			{ title: "基础调色流程", href: "/techniques/basic-workflow" },
			{ title: "色彩平衡", href: "/techniques/color-balance" },
			{ title: "色调分离", href: "/techniques/color-grading" },
			{ title: "LUT的使用", href: "/techniques/using-luts" },
		],
	},
	{
		title: "案例分析",
		href: "/case-studies",
		items: [
			{ title: "青春校园风格", href: "/case-studies/youth-campus" },
			{ title: "都市情感风格", href: "/case-studies/urban-romance" },
			{ title: "悬疑剧情风格", href: "/case-studies/suspense" },
			{ title: "古装历史风格", href: "/case-studies/historical" },
		],
	},
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-30 pt-16">
			<div className="flex-1 flex flex-col min-h-0 border-r bg-card px-4 py-8 overflow-y-auto">
				<nav className="flex-1 space-y-8">
					{navItems.map((section) => (
						<div key={section.href} className="space-y-2">
							<h3 className="font-medium text-sm text-muted-foreground">{section.title}</h3>
							<div className="space-y-1">
								{section.items?.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											"block px-3 py-2 text-sm rounded-md",
											pathname === item.href ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
										)}
									>
										{item.title}
									</Link>
								))}
							</div>
						</div>
					))}
				</nav>
			</div>
		</div>
	);
}
