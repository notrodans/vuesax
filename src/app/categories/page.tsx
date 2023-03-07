import { Card } from "#/components/common";
import clsx from "clsx";
import styles from "./categories.module.css";

export default function Page() {
	return (
		<div className={styles.categories}>
			<div className={styles.title}>7,618 results found</div>
			<div className={styles.body}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
