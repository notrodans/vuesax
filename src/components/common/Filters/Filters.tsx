"use client";

import { Button, CheckboxsContainer, Title } from "#/components/UI";
import { FC, useState } from "react";
import { range, rangeType } from "./Filters.consts";
import styles from "./Filters.module.css";

const Filters: FC = () => {
	const [rangeSelected, setRangeSelected] = useState<rangeType | null>(range && { ...range });

	return (
		<div className={styles.filters}>
			<div className={styles.title}>Filters</div>
			<div className={styles.body}>
				<Title tag='h3' className={styles.title}>
					Multi Range
				</Title>
				<CheckboxsContainer
					className={styles.prices}
					onChangeData={setRangeSelected}
					data={rangeSelected}
				/>
			</div>
			<Button rounded textTransform='upper'>
				clear all filters
			</Button>
		</div>
	);
};

export default Filters;
