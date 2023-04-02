"use client";

import { Button, Checkbox, CheckboxGroup, Divider, Rating, Slider, Title } from "#/components/UI";
import { Settings } from "#/components/icons";
import { ProductsContext } from "#/context/products.context";
import { IQueriesProduct, fetchProductsByCategory } from "#/fetchers";
import { useFilters } from "#/store";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useMemo, useState } from "react";
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
		priceRange,
		setPriceRange
	} = useFilters();
	const { products, setPages, setProducts, category, brands, setBrands, setCount } =
		useContext(ProductsContext);
	const productsLength = products.length;

	const priceMin = useMemo(
		() => (productsLength >= 1 ? Math.min(...products.map(i => i.price)) : 0),
		[]
	);
	const priceMax = useMemo(
		() => (productsLength >= 1 ? Math.max(...products.map(i => i.price)) : 0),
		[]
	);

	const [isOpen, setIsOpen] = useState<boolean>(true);

	useEffect(() => {
		if (productsLength >= 2) {
			setPriceRange([priceMin, priceMax]);
		} else {
			return;
		}
	}, [priceMin, priceMax]);

	const onHandleOpen = () => {
		setIsOpen(prev => !prev);
	};

	const onClearAllFilters = async () => {
		setRating(1);
		setSelectedBrands([]);
		setPriceRange([priceMin, priceMax]);
		setSearchValue("");

		try {
			const { products, pages } = await fetchProductsByCategory(category);
			setProducts?.(products.slice(0, 10));
			setCount?.(products.length);
			setPages?.(pages);
		} catch {
			setProducts?.([]);
			setCount?.(0);
			setPages?.(0);
		}
	};

	const onClick = async () => {
		const params: IQueriesProduct = {};
		if (searchValue) {
			params.search = searchValue;
		}

		if (selectedBrands.length > 0) {
			params.brands = selectedBrands.join(",");
		}
		if (rating) {
			params.rating = rating;
		}

		if (Array.isArray(priceRange)) {
			if (
				!(priceRange.length !== 2) &&
				!(priceRange[0] > priceRange[1]) &&
				priceRange[0] + priceRange[1] !== priceMin + priceMax
			) {
				const newPrice = `${priceRange[0]},${priceRange[1]}`;

				params.price = newPrice;
			}
		}

		try {
			const { products, pages } = await fetchProductsByCategory(category, params);
			setProducts?.(products.slice(0, 10));
			setCount?.(products.length || 0);
			setPages?.(pages);
		} catch {
			setPages?.(0);
			setCount?.(0);
			setBrands?.([]);
		}
	};

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
					multi
					step={10}
					value={priceRange}
					defaultValue={priceRange}
					minValue={priceMin}
					maxValue={priceMax}
					onChange={setPriceRange}
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
