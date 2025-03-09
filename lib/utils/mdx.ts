import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ContentItem, ContentMeta } from "@/types/content";

const contentDirectory = path.join(process.cwd(), "content");

export async function getContentBySlug(category: string, slug: string): Promise<ContentItem | null> {
	try {
		const fullPath = path.join(contentDirectory, category, `${slug}.mdx`);

		if (!fs.existsSync(fullPath)) {
			return null;
		}

		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			meta: {
				title: data.title,
				description: data.description,
				date: data.date,
				author: data.author,
				tags: data.tags,
				category,
				slug,
				image: data.image,
			} as ContentMeta,
			content,
		};
	} catch (error) {
		console.error(`Error getting content for ${category}/${slug}:`, error);
		return null;
	}
}

export async function getAllContent(category: string): Promise<ContentMeta[]> {
	try {
		const categoryPath = path.join(contentDirectory, category);

		if (!fs.existsSync(categoryPath)) {
			return [];
		}

		const files = fs.readdirSync(categoryPath);

		const allContent = files
			.filter((file: string) => file.endsWith(".mdx"))
			.map((file: string) => {
				const fileContents = fs.readFileSync(path.join(categoryPath, file), "utf8");
				const { data } = matter(fileContents);
				const slug = file.replace(/\.mdx$/, "");

				return {
					title: data.title,
					description: data.description,
					date: data.date,
					author: data.author,
					tags: data.tags,
					category,
					slug,
					image: data.image,
				} as ContentMeta;
			})
			.sort((a: ContentMeta, b: ContentMeta) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return allContent;
	} catch (error) {
		console.error(`Error getting all content for ${category}:`, error);
		return [];
	}
}

export async function getAllCategories(): Promise<string[]> {
	try {
		if (!fs.existsSync(contentDirectory)) {
			return [];
		}

		return fs.readdirSync(contentDirectory).filter((dir: string) => {
			const stats = fs.statSync(path.join(contentDirectory, dir));
			return stats.isDirectory();
		});
	} catch (error) {
		console.error("Error getting all categories:", error);
		return [];
	}
}
