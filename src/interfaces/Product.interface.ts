export interface IProduct {
	id: number;
	title: string;
	slug: string;
	description: string;
	rating: number;
	brand: string;
	brandSlug: string;
	price: number;
	primaryImage: string;
	categorySlug: string;
	images: string[];
}
