import { Filters } from "#/components/common";
import { ProductsProvider } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import { ReactNode } from "react";
import styles from "./category.module.css";

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
	return (
		<ProductsProvider products={products}>
			<Wrapper>
				<div className='container'>
					<div className={styles.body}>
						<Filters />
						{children}
					</div>
				</div>
			</Wrapper>
		</ProductsProvider>
	);
}
