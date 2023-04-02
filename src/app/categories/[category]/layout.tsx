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
		return (await response.json()) as { pages: number; products: IProduct[] };
	} catch (e) {
		return { pages: 0, products: [] };
	}
};

export default async function Layout({
	children,
	params
}: {
	children: ReactNode;
	params: { category: string };
}) {
	const { products, pages } = await fetchProducts(params.category);
	const productsLength = products?.length || 0;
	return (
		<ProductsProvider
			pages={pages}
			brands={
				productsLength >= 1 ? products.map(p => ({ brand: p.brand, brandSlug: p.brandSlug })) : []
			}
			products={productsLength >= 1 ? products.slice(0, 10) : []}
			category={params.category}
			count={productsLength}
		>
			{children}
		</ProductsProvider>
	);
}
