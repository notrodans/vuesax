"use client";

import { Settings } from "#/components/icons";
import { Button, Checkbox, CheckboxGroup, Divider, Rating, Slider, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useCallback, useContext, useState } from "react";
import styles from "./Filters.module.css";
import { variants } from "./Filters.variants";

const Filters: FC = () => {
	const { products } = useContext(ProductsContext);
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [rating, setRating] = useState(1);
	const [selected, setSelected] = useState(["$10"]);
	const [sliderState, setSliderState] = useState<number | number[]>([1.99, 4098]);

	const onChangeSliderState = (value: number | number[]) => {
		setSliderState(value);
	};

	const onHandleOpen = () => {
		setIsOpen(prev => !prev);
	};

	const onClearAllFilters = useCallback(() => {
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
				<CheckboxGroup
					aria-label='prices'
					value={selected}
					onChange={setSelected}
					className={clsx(styles.checkboxGroup, styles.prices)}
				>
					<Checkbox value='$10'>$10</Checkbox>
					<Checkbox value='$10-$100'>$10-$100</Checkbox>
					<Checkbox value='$10-$500'>$10-$500</Checkbox>
					<Checkbox value='$500'>$500</Checkbox>
					<Checkbox value='All'>All</Checkbox>
				</CheckboxGroup>
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
					Brands
				</Title>
				<CheckboxGroup aria-label='brands' className={clsx(styles.checkboxGroup, styles.brands)}>
					{products.length >= 1 &&
						products.map(p => (
							<Checkbox className={styles.brand} key={p.id} value={p.brand}>
								{p.brand}
							</Checkbox>
						))}
				</CheckboxGroup>
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
