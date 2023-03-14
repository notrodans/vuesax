import { Filters } from "#/components/common";
import { Wrapper } from "#/layouts/Wrapper";
import clsx from "clsx";
import styles from "./categories.module.css";

export const metadata = {
	title: "Vuesax | Categories"
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Wrapper>
			<div className={styles.wrapper}>
				<div className={clsx(styles.container, "container")}>
					<Filters />
					{children}
				</div>
			</div>
		</Wrapper>
	);
}
