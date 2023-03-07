import { Title } from "#/components/UI";
import styles from "./Filters.module.css";

const Filters = () => {
	return (
		<div className={styles.filters}>
			<div className={styles.title}>Filters</div>
			<Title tag='h3' className={styles.body}>
				Multi Range
			</Title>
		</div>
	);
};

export default Filters;
