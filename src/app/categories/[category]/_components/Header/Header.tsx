"use client";

import { SearchField, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { fetchProductsByCategory, IQueriesProduct } from "#/fetchers";
import { useFilters } from "#/store";
import { declOfNumber } from "#/utils/decline";
import { FC, useContext } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
	const { category, setProducts, setPages, count, setCount } = useContext(ProductsContext);
	const { setSearchValue, searchValue, priceRange, selectedBrands, rating } = useFilters();

	const onSubmit = async () => {
		try {
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

			if (Array.isArray(priceRange)) {
				if (priceRange.length === 2 && priceRange[0] > 0 && priceRange[1] > 0) {
					params.price = `${priceRange[0]},${priceRange[1]}`;
				}
			}
			const { products, pages } = await fetchProductsByCategory(category, params);
			setProducts?.(products.slice(0, 10));
			setPages?.(pages);
		} catch {
			setProducts?.([]);
			setPages?.(0);
		}
	};

	const onClear = async () => {
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

	return (
		<div className={styles.header}>
			<Title tag='h3' className={styles.title}>
				{count}&nbsp;
				{declOfNumber(count, ["result", "results"])}&nbsp; found
			</Title>
			<div className={styles.search}>
				<SearchField
					onClear={onClear}
					onSubmit={onSubmit}
					onClickButton={onSubmit}
					value={searchValue}
					onChange={setSearchValue}
					placeholder='Search here'
					aria-label='find orders'
				/>
			</div>
		</div>
	);
};
