import { IProduct } from "#/interfaces/Product.interface";
import { notFound } from "next/navigation";
import { Product } from "./_components/Product/Product";

const fetchProduct = async (slug: string) => {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + slug, {
			method: "GET",
			headers: {
				["Content-Type"]: "application/json"
			}
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		return (await response.json()) as IProduct;
	} catch (e) {
		return null;
	}
};

export default async function Category({ params }: { params: { product: string } }) {
	const product = await fetchProduct(params.product);
	if (!product) {
		return notFound();
	}
	return (
		<div>
			<Product {...product} />
		</div>
	);
}
