import { Breadcrumbs } from "#/components/UI";
import { CategoriesProvider } from "#/context/categories.context";
import { ICategory } from "#/interfaces/Category.interface";
import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import clsx from "clsx";
import styles from "./categories.module.css";

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
	return (
		<CategoriesProvider categories={categories}>
			<Wrapper>
				<Breadcrumbs />
				<div className={styles.wrapper}>
					<div className={clsx(styles.container, "container")}>{children}</div>
				</div>
			</Wrapper>
		</CategoriesProvider>
	);
}
