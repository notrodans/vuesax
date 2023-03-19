import { CategoriesProvider } from "#/context/categories.context";
import { ICategory } from "#/interfaces/Category.interface";

export const metadata = {
	title: "Vuesax | Categories"
};

const fetchCategories = async () => {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/categories/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
	const categories = (await response.json()) as ICategory[];

	if (!categories) {
		return [];
	}

	return categories;
};

export default async function Layout({ children }: { children: React.ReactNode }) {
	const categories = await fetchCategories();
	return (
		<CategoriesProvider categories={categories} category={""}>
			{children}
		</CategoriesProvider>
	);
}
