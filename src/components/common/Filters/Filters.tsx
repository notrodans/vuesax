"use client";

import { Settings } from "#/components/icons";
import { Button, Checkbox, CheckboxGroup, Divider, Rating, Slider, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { fetchProductsByCategory, IQueriesProduct } from "#/fetchers";
import { useFilters } from "#/store";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "./Filters.module.css";
import { variants } from "./Filters.variants";

const Filters: FC = () => {
	const {
		searchValue,
		setSearchValue,
		setRating,
		rating,
		selectedBrands,
		setSelectedBrands,
		priceState,
		setPriceState
	} = useFilters();
	const { products, setPages, setProducts, category, brands, setBrands } =
		useContext(ProductsContext);
	const productsLength = products.length;
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const priceMin = useMemo(
		() => (products.length >= 1 ? Math.min(...products.map(i => i.price)) : 0),
		[]
	);
	const priceMax = useMemo(
		() => (products.length >= 1 ? Math.max(...products.map(i => i.price)) : 0),
		[]
	);

	useEffect(() => {
		if (productsLength >= 2) {
			setPriceState([priceMin, priceMax]);
		} else {
			setPriceState([priceMin]);
		}
	}, [priceMin, priceMax]);

	const onHandleOpen = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	const onClearAllFilters = useCallback(async () => {
		setRating(1);
		setSelectedBrands([]);
		setPriceState([priceMin, priceMax]);
		setSearchValue("");

		try {
			const { products, pages } = await fetchProductsByCategory(category);
			setProducts?.(products.slice(0, 20));
			setPages?.(pages);
		} catch {
			setProducts?.([]);
			setPages?.(0);
		}
	}, [category, setProducts, priceMin, priceMax]);

	const onClick = useCallback(async () => {
		const params: IQueriesProduct = {};

		if (searchValue) {
			params.search = searchValue;
		}

		if (selectedBrands.length > 0) {
			params.brands = `${selectedBrands.join(",")}`;
		}

		if (rating) {
			params.rating = rating;
		}

		if (Array.isArray(priceState)) {
			if (priceState.length === 2 && priceState[0] > 0 && priceState[1] > 0) {
				params.price = `${priceState[0]},${priceState[1]}`;
			}
		}

		try {
			const { products, pages } = await fetchProductsByCategory(category, params);
			setProducts?.(products.slice(0, 20));
			setPages?.(pages);
		} catch {
			setPages?.(0);
			setBrands?.([]);
		}
	}, [category, priceState, rating, selectedBrands, searchValue]);

	const brandsCheckbox = useMemo(
		() =>
			brands?.map?.(b => {
				return (
					<Checkbox aria-label={b.brand} className={styles.brand} key={b.brand} value={b.brandSlug}>
						{b.brand}
					</Checkbox>
				);
			}),
		[brands]
	);

	const isMulti = productsLength >= 2;
	const isDisabled = productsLength < 2;
	const minValue = isMulti ? priceMin : undefined;
	const maxValue = isMulti ? priceMax : priceMin;

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
					multi={isMulti}
					isDisabled={isDisabled}
					step={10}
					value={priceState}
					defaultValue={priceState}
					minValue={minValue}
					maxValue={maxValue}
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
					{brandsCheckbox}
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

export default Filters;
