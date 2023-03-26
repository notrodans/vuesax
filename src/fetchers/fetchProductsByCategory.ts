import { $axios } from "#/axios";
import { IProduct } from "#/interfaces/Product.interface";

export interface IQueriesProduct {
	search?: string;
	brands?: string;
	rating?: number;
	price?: string;
	page?: number;
	total?: number;
}

const fetchProductsByCategory = async (category: string, params?: IQueriesProduct) => {
	const { data } = await $axios.get<{ pages: number; products: IProduct[] }>(
		`products/bySlug/${category}`,
		{
			params
		}
	);
	return data;
};

export default fetchProductsByCategory;
