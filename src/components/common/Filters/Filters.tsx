"use client";

import { Button, Checkbox, Title } from "#/components/UI";
import { useMemo, useState } from "react";
import { range, rangeKeys, rangeType } from "./Filters.consts";
import styles from "./Filters.module.css";

const Filters = () => {
	const [rangeSelected, setRangeSelected] = useState<rangeType>({ ...range });
	const rangeSelectedEntries = useMemo(
		() => Object.entries(rangeSelected) as [key: rangeKeys, value: rangeType[rangeKeys]][],
		[rangeSelected]
	);

	const onChangeCheckbox = (key: rangeKeys) => {
		if (rangeSelected[key].isSelected) {
			setRangeSelected(prev => {
				const obj = prev[key];
				obj.isSelected = false;
				const newPrev = { ...prev };
				return newPrev;
			});
		} else {
			setRangeSelected(prev => {
				const obj = prev[key];
				obj.isSelected = true;
				const newPrev = { ...prev };
				return newPrev;
			});
		}
	};

	return (
		<div className={styles.filters}>
			<div className={styles.title}>Filters</div>
			<div className={styles.body}>
				<Title tag='h3' className={styles.title}>
					Multi Range
				</Title>
				<div className={styles.prices}>
					{rangeSelectedEntries.map(([key, value]) => (
						<Checkbox
							className={styles.checkbox}
							key={key}
							isSelected={value.isSelected}
							onChange={() => onChangeCheckbox(key)}
						>
							{value.children}
						</Checkbox>
					))}
				</div>
			</div>
			<Button rounded textTransform='upper'>
				clear all filters
			</Button>
		</div>
	);
};

export default Filters;
