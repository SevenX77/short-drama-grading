"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<div className="mr-4 flex md:hidden">
					<button
						className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className="h-5 w-5" />
						<span className="sr-only">打开菜单</span>
					</button>
				</div>
				<div className="flex items-center">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">短剧调色</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<div className="hidden md:flex">
						<button className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
							<Search className="h-5 w-5" />
							<span className="sr-only">搜索</span>
						</button>
					</div>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
