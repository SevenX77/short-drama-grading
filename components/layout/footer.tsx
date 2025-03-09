import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t bg-card">
			<div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
				<div className="text-center text-sm text-muted-foreground md:text-left">&copy; {new Date().getFullYear()} 短剧调色培训. 保留所有权利.</div>
				<div className="flex gap-4 text-sm text-muted-foreground">
					<Link href="/about" className="hover:underline">
						关于我们
					</Link>
					<Link href="/contact" className="hover:underline">
						联系我们
					</Link>
					<Link href="/privacy" className="hover:underline">
						隐私政策
					</Link>
					<Link href="/terms" className="hover:underline">
						使用条款
					</Link>
				</div>
			</div>
		</footer>
	);
}
