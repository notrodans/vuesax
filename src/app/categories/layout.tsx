import { CategoriesProvider } from "#/context/categories.context";
import { ICategory } from "#/interfaces/Category.interface";

export const metadata = {
	title: "Vuesax | Categories"
};

const fetchCategories = async () => {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/categories/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});
		return (await response.json()) as ICategory[];
	} catch {
		return null;
	}
};

export default async function Layout({ children }: { children: React.ReactNode }) {
	const categories = await fetchCategories();
	return <CategoriesProvider categories={categories}>{children}</CategoriesProvider>;
}
