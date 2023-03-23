import { ProductsProvider } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import { ReactNode } from "react";

const fetchProducts = async (category: string) => {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products/bySlug/${category}`, {
		method: "GET",
		cache: "force-cache",
		headers: {
			"Content-Type": "application/json"
		}
	});
	if (!response) {
		return [];
	}
	const products = (await response.json()) as IProduct[];

	return products;
};

export default async function Layout({
	children,
	params
}: {
	children: ReactNode;
	params: { category: string };
}) {
	const products = await fetchProducts(params.category);
	return <ProductsProvider products={products}>{children}</ProductsProvider>;
}
