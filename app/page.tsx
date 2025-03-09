import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<div className="container px-4 md:px-6 py-10">
			<div className="flex flex-col items-center text-center space-y-4 mb-10">
				<h1 className="text-3xl md:text-5xl font-bold tracking-tighter">短剧调色培训文档平台</h1>
				<p className="text-xl text-muted-foreground max-w-[700px]">专注于短剧调色技术培训的在线文档平台，系统性学习短剧调色技术</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
				<CategoryCard title="基础知识" description="了解色彩理论、色彩空间、色彩心理学等基础知识" href="/basics" />
				<CategoryCard title="调色技巧" description="学习各种调色工具的使用方法和专业调色技巧" href="/techniques" />
				<CategoryCard title="案例分析" description="通过实际案例学习不同风格和情绪的调色方案" href="/case-studies" />
			</div>

			<div className="mt-16 text-center">
				<h2 className="text-2xl font-bold mb-6">为什么选择我们的平台？</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
					<FeatureCard title="系统化学习" description="结构化的知识体系，从入门到精通" />
					<FeatureCard title="实用技巧" description="直接应用于实际工作的专业调色方法" />
					<FeatureCard title="丰富案例" description="多样化的调色案例，覆盖各种风格" />
					<FeatureCard title="持续更新" description="定期更新最新的调色技术和行业趋势" />
				</div>
			</div>
		</div>
	);
}

function CategoryCard({ title, description, href }: { title: string; description: string; href: string }) {
	return (
		<Link href={href} className="group">
			<div className="flex flex-col h-full p-6 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
				<h3 className="text-xl font-bold mb-2 group-hover:text-primary">{title}</h3>
				<p className="text-muted-foreground flex-grow">{description}</p>
				<div className="flex items-center mt-4 text-primary">
					<span>开始学习</span>
					<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</div>
			</div>
		</Link>
	);
}

function FeatureCard({ title, description }: { title: string; description: string }) {
	return (
		<div className="p-6 bg-card rounded-lg border border-border shadow-sm">
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
