"use client";

import { $axios } from "#/axios";
import { Settings } from "#/components/icons";
import { Button, Checkbox, CheckboxGroup, Divider, Rating, Slider, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import { useFilters } from "#/store";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, memo, useCallback, useContext, useRef, useState } from "react";
import styles from "./Filters.module.css";
import { variants } from "./Filters.variants";

const Filters: FC = () => {
	const { searchValue, setSearchValue } = useFilters();
	const { products, setProducts, category } = useContext(ProductsContext);
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [rating, setRating] = useState(1);
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

	const priceMin = useRef(
		products && products.length >= 1 ? Math.min(...products.map(i => i.price)) : 0
	);
	const priceMax = useRef(
		products && products.length >= 1 ? Math.max(...products.map(i => i.price)) : 0
	);

	const [priceState, setPriceState] = useState<number[] | number>([
		priceMin.current,
		priceMax.current
	]);

	const onHandleOpen = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	const onClearAllFilters = useCallback(async () => {
		setRating(1);
		setSelectedBrands([]);
		setPriceState([priceMin.current, priceMax.current]);
		setSearchValue("");

		try {
			const { data } = await $axios.get<IProduct[]>("products/bySlug/" + category);
			setProducts?.(data ?? []);
		} catch {
			setProducts?.([]);
		}
	}, [category, setProducts, priceMin, priceMax]);

	const onClick = useCallback(async () => {
		const params: { search?: string; brands?: string; rating?: number; price?: string } = {};

		if (searchValue) {
			params.search = searchValue;
		}

		if (selectedBrands.length >= 1) {
			params.brands = `${selectedBrands.join(",")}`;
		}

		if (rating) {
			params.rating = rating;
		}

		if (Array.isArray(priceState)) {
			if (priceState.length === 2 && priceState[0] > 1 && priceState[1] > 0) {
				params.price = `${(priceState as number[])[0]},${(priceState as number[])[1]}`;
			}
		}
		try {
			const { data } = await $axios.get<IProduct[]>("products/bySlug/" + category, {
				params
			});
			setProducts?.(data ?? []);
		} catch {
			setProducts?.([]);
		}
	}, [category, priceState, rating, selectedBrands, searchValue]);

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
					value={Array.isArray(priceState) && priceState?.length >= 2 ? priceState : 0}
					defaultValue={priceState}
					minValue={priceMin.current}
					maxValue={priceMax.current}
					onChange={setPriceState}
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
					{products?.map?.(p => (
						<Checkbox aria-label={p.title} className={styles.brand} key={p.id} value={p.brandSlug}>
							{p.brand}
						</Checkbox>
					))}
				</CheckboxGroup>
				<Divider />
				<Title tag='h3' className={styles.title}>
					Rating
				</Title>
				<Rating isEditable setRating={setRating} rating={rating} />
				<Divider />
				<Button rounded onClick={onClick}>
					Apply filters
				</Button>
			</motion.div>
			<Button onClick={onClearAllFilters} rounded textTransform='upper'>
				clear all filters
			</Button>
		</div>
	);
};

export default memo(Filters);
