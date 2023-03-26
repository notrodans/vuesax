import { IProduct } from "#/interfaces/Product.interface";
import { notFound } from "next/navigation";

const fetchProduct = async (slug: string) => {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products/" + slug, {
		method: "GET",
		headers: {
			["Content-Type"]: "application/json"
		},
		cache: "force-cache"
	});
	if (response.ok) {
		const product = (await response.json()) as IProduct;
		console.log(product);
		return product;
	}

	return null;
};

export default async function Category({ params }: { params: { slug: string } }) {
	const product = await fetchProduct(params.slug);
	if (!product) {
		return notFound();
	}
	return <div className='container'>{product?.title}</div>;
}
