import { Filters } from "#/components/common";
import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import styles from "./category.module.css";
import { Products } from "./_components/Products/Products";

export default function Page() {
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
