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
		console.log(e);
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
	return (
		<ProductsProvider
			pages={pages}
			brands={products.map(p => ({ brand: p.brand, brandSlug: p.brandSlug }))}
			products={products?.slice(0, 20)}
			category={params.category}
		>
			{children}
		</ProductsProvider>
	);
}
