"use client";

import { Settings } from "#/components/icons";
import { Button, Checkbox, CheckboxGroup, Divider, Rating, Slider, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useContext, useMemo, useState } from "react";
import styles from "./Filters.module.css";
import { variants } from "./Filters.variants";

const Filters: FC = () => {
	const { products } = useContext(ProductsContext);
	const productsPriceMin = useMemo(
		() => (products && products.length ? Math.min(...products.map(i => i.price)) : 0),
		[products]
	);
	const productsPriceMax = useMemo(
		() => (products && products.length ? Math.max(...products.map(i => i.price)) : 0),
		[products]
	);
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [rating, setRating] = useState(1);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [sliderState, setSliderState] = useState<number | number[]>([
		productsPriceMin,
		productsPriceMax
	]);

	const onChangeSliderState = (value: number | number[]) => {
		setSliderState(value);
	};

	const onHandleOpen = () => {
		setIsOpen(prev => !prev);
	};

	const onClearAllFilters = () => {
		setRating(1);
		setSelectedBrands([]);
		setSliderState([productsPriceMin, productsPriceMax]);
	};

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
				<Slider
					label='Currency'
					formatOptions={{ style: "currency", currency: "USD" }}
					multi={products ? products?.length >= 2 : false}
					isDisabled={products ? products?.length < 2 : true}
					step={10}
					value={sliderState}
					defaultValue={sliderState}
					minValue={productsPriceMin}
					maxValue={productsPriceMax}
					onChange={onChangeSliderState}
				/>
				<Divider />
				<Title tag='h3' className={styles.title}>
					Brands
				</Title>
				<CheckboxGroup
					aria-label='brands'
					value={selectedBrands}
					defaultValue={selectedBrands}
					onChange={setSelectedBrands}
					className={clsx(styles.checkboxGroup, styles.brands)}
				>
					{products &&
						products?.length >= 1 &&
						products?.map(p => (
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
