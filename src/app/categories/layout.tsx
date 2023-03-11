import { Filters } from "#/components/common";
import clsx from "clsx";
import styles from "./categories.module.css";

export const metadata = {
	title: "Vuesax | Categories"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.container, "container")}>
				<Filters />
				{children}
			</div>
		</div>
	);
}
