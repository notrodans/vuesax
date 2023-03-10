"use client";

import { Settings } from "#/components/icons";
import { Button, CheckboxsContainer, Divider, Slider, Title } from "#/components/UI";
import { CheckboxProps } from "#/components/UI/Checkbox/Checkbox.props";
import { motion } from "framer-motion";
import _cloneDeep from "lodash.clonedeep";
import { FC, useCallback, useMemo, useState } from "react";
import { range, rangeSecond, rangeType } from "./Filters.consts";
import styles from "./Filters.module.css";

const Filters: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [rangeSelected, setRangeSelected] = useState<rangeType | null>(_cloneDeep(range));
	const [rangeSecondSelected, setRangeSecondSelected] = useState<rangeType | null>(
		_cloneDeep(rangeSecond)
	);
	const [sliderState, setSliderState] = useState<number | number[]>([1.99, 4098]);

	const onChangeSliderState = (value: number | number[]) => {
		setSliderState(value);
	};

	const checkBoxProps: CheckboxProps = useMemo(() => ({ rounded: true }), []);

	const onClearAllFilters = useCallback(() => {
		setRangeSelected(_cloneDeep(range));
		setRangeSecondSelected(_cloneDeep(rangeSecond));
		setSliderState([...[1.99, 4098]]);
	}, []);

	return (
		<motion.div layout className={styles.filters}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.headerTitle}>
					Filters
				</Title>
				<Button size='small' forceRounded icon={<Settings />} className={styles.openButton} />
			</div>
			<div className={styles.body}>
				<Title tag='h3' className={styles.title}>
					Multi Range
				</Title>
				<CheckboxsContainer
					className={styles.prices}
					onChangeData={setRangeSelected}
					data={rangeSelected}
				/>
				<Divider />
				<Slider
					label='Slider'
					multi
					value={sliderState}
					defaultValue={sliderState}
					onChange={onChangeSliderState}
					step={10}
					maxValue={4098}
				/>
				<Divider />
				<Title tag='h3' className={styles.title}>
					Category
				</Title>
				<CheckboxsContainer
					aria-label='prices checkboxs'
					className={styles.prices}
					onChangeData={setRangeSecondSelected}
					data={rangeSecondSelected}
					checkBoxProps={checkBoxProps}
				/>
				<Divider />
				<Title tag='h3' className={styles.title}>
					Brand
				</Title>
				<CheckboxsContainer
					aria-label='brand checkboxs'
					onChangeData={setRangeSecondSelected}
					data={rangeSecondSelected}
					checkBoxProps={checkBoxProps}
				/>
				<Divider />
				<Title tag='h3' className={styles.title}>
					Rating
				</Title>
			</div>
			<Button onClick={onClearAllFilters} rounded textTransform='upper'>
				clear all filters
			</Button>
		</motion.div>
	);
};

export default Filters;
