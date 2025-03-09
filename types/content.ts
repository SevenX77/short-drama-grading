export interface ContentMeta {
	title: string;
	description: string;
	date: string;
	author?: string;
	tags?: string[];
	category: string;
	slug: string;
	image?: string;
}

export interface ContentItem {
	meta: ContentMeta;
	content: string;
}

export interface CategoryMeta {
	title: string;
	description: string;
	slug: string;
	icon?: string;
	order: number;
}

export interface Category {
	meta: CategoryMeta;
	items: ContentMeta[];
}
