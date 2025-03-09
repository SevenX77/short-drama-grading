import Link from "next/link";
import { getAllContent } from "@/lib/utils/mdx";
import { notFound } from "next/navigation";

interface CategoryPageProps {
	params: {
		category: string;
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = params;
	const contents = await getAllContent(category);

	if (!contents.length) {
		notFound();
	}

	const categoryTitle =
		{
			basics: "基础知识",
			techniques: "调色技巧",
			"case-studies": "案例分析",
		}[category] || category;

	return (
		<div className="container px-4 md:px-6 py-10">
			<div className="flex flex-col items-center text-center space-y-4 mb-10">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{categoryTitle}</h1>
				<p className="text-xl text-muted-foreground max-w-[700px]">
					{category === "basics" && "了解色彩理论、色彩空间、色彩心理学等基础知识"}
					{category === "techniques" && "学习各种调色工具的使用方法和专业调色技巧"}
					{category === "case-studies" && "通过实际案例学习不同风格和情绪的调色方案"}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
				{contents.map((content) => (
					<Link key={content.slug} href={`/${category}/${content.slug}`} className="group">
						<div className="flex flex-col h-full p-6 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
							<h3 className="text-xl font-bold mb-2 group-hover:text-primary">{content.title}</h3>
							<p className="text-muted-foreground flex-grow">{content.description}</p>
							<div className="flex items-center justify-between mt-4">
								<span className="text-sm text-muted-foreground">{new Date(content.date).toLocaleDateString("zh-CN")}</span>
								<span className="text-primary text-sm">阅读更多</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
