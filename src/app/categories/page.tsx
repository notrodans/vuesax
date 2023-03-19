import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import clsx from "clsx";
import styles from "./categories.module.css";
import { Categories } from "./_components/Categories/Categories";

export default async function Page() {
	return (
		<Wrapper>
			<div className={styles.wrapper}>
				<div className={clsx(styles.container, "container")}>
					<Categories />
				</div>
			</div>
		</Wrapper>
	);
}
