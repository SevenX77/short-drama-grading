import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/content/mdx-components";

interface ContentPageProps {
	params: {
		category: string;
		slug: string;
	};
}

export async function generateMetadata({ params }: ContentPageProps): Promise<Metadata> {
	const { category, slug } = params;
	const content = await getContentBySlug(category, slug);

	if (!content) {
		return {
			title: "内容不存在",
			description: "找不到请求的内容",
		};
	}

	return {
		title: content.meta.title,
		description: content.meta.description,
		keywords: content.meta.tags?.join(", "),
		authors: content.meta.author ? [{ name: content.meta.author }] : undefined,
	};
}

export default async function ContentPage({ params }: ContentPageProps) {
	const { category, slug } = params;
	const content = await getContentBySlug(category, slug);

	if (!content) {
		notFound();
	}

	return (
		<div className="container px-4 md:px-6 py-10">
			<article className="prose prose-lg dark:prose-invert mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{content.meta.title}</h1>
					<p className="text-xl text-muted-foreground">{content.meta.description}</p>
					<div className="flex items-center mt-4 text-sm text-muted-foreground">
						{content.meta.author && <span className="mr-4">作者: {content.meta.author}</span>}
						<span>发布于: {new Date(content.meta.date).toLocaleDateString("zh-CN")}</span>
					</div>
					{content.meta.tags && content.meta.tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-4">
							{content.meta.tags.map((tag) => (
								<span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
				<div className="content-container">
					<MDXRemote source={content.content} components={mdxComponents} />
				</div>
			</article>
		</div>
	);
}
