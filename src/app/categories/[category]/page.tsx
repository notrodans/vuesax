import { Filters } from "#/components/common";
import { IProduct } from "#/interfaces/Product.interface";
import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import styles from "./category.module.css";
import { Products } from "./_components/Products/Products";

const fetchProducts = async (category: string) => {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products/bySlug/" + category, {
			method: "GET",
			cache: "force-cache",
			headers: {
				["Content-Type"]: "application/json"
			}
		});
		return (await response.json()) as IProduct[];
	} catch {
		return [];
	}
};

export default async function Page({ params }: { params: { category: string } }) {
	return (
		<Wrapper>
			<div className='container'>
				<div className={styles.body}>
					<Filters />
					<Products />
				</div>
			</div>
		</Wrapper>
	);
}
