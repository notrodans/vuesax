import { IProduct } from "./Product.interface";

export interface ICategory {
	id: number;
	name: string;
	slug: string;
	image: string;
	products: IProduct[];
	createdAt: string;
	updatedAt: string;
}
