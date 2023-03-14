"use client";

import { Settings } from "#/components/icons";
import { Button, CheckboxsContainer, Divider, Rating, Slider, Title } from "#/components/UI";
import { CheckboxProps } from "#/components/UI/checkbox/Checkbox.props";
import clsx from "clsx";
import { motion } from "framer-motion";
import _cloneDeep from "lodash.clonedeep";
import { FC, useCallback, useState } from "react";
import { range, rangeSecond, rangeType } from "./Filters.consts";
import styles from "./Filters.module.css";
import { variants } from "./Filters.variants";

const checkBoxProps: CheckboxProps = { rounded: true };

const Filters: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [rating, setRating] = useState(1);
	const [rangeSelected, setRangeSelected] = useState<rangeType | null>(_cloneDeep(range));
	const [rangeSecondSelected, setRangeSecondSelected] = useState<rangeType | null>(
		_cloneDeep(rangeSecond)
	);
	const [sliderState, setSliderState] = useState<number | number[]>([1.99, 4098]);

	const onChangeSliderState = (value: number | number[]) => {
		setSliderState(value);
	};

	const onHandleOpen = () => {
		setIsOpen(prev => !prev);
	};

	const onClearAllFilters = useCallback(() => {
		setRangeSelected(_cloneDeep(range));
		setRangeSecondSelected(_cloneDeep(rangeSecond));
		setSliderState([...[1.99, 4098]]);
	}, []);

	return (
		<div className={styles.filters}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.headerTitle}>
					Filters
				</Title>
				<Button
					onClick={onHandleOpen}
					size='small'
					forceRounded
					icon={<Settings />}
					className={styles.openButton}
				/>
			</div>
			<motion.div
				variants={variants}
				initial={isOpen ? "visible" : "hidden"}
				animate={isOpen ? "visible" : "hidden"}
				className={clsx(styles.body, {
					[styles.active]: isOpen
				})}
			>
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
				<Rating isEditable setRating={setRating} rating={rating} />
			</motion.div>
			<Button onClick={onClearAllFilters} rounded textTransform='upper'>
				clear all filters
			</Button>
		</div>
	);
};

export default Filters;
