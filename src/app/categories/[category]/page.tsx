import { Filters } from "#/components/common";
import styles from "./category.module.css";
import { Products } from "./_components/Products/Products";

export default async function Page() {
	return (
		<div className={styles.body}>
			<Filters />
			<Products />
		</div>
	);
}
