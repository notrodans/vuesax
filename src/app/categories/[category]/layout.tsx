import { ProductsProvider } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import { ReactNode } from "react";

const fetchProducts = async (category: string) => {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products/bySlug/${category}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			cache: "force-cache"
		});
		return (await response.json()) as IProduct[];
	} catch {
		return null;
	}
};

export default async function Layout({
	children,
	params
}: {
	children: ReactNode;
	params: { category: string };
}) {
	const products = await fetchProducts(params.category);
	return (
		<ProductsProvider products={products} category={params.category}>
			{children}
		</ProductsProvider>
	);
}
