"use clinet";

import { $axios } from "#/axios";
import { SearchField, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { fetchProductsByCategory, IQueriesProduct } from "#/fetchers";
import { useFilters } from "#/store";
import { declOfNumber } from "#/utils/decline";
import { FC, useContext } from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from "./Header.props";

export const Header: FC<IHeaderProps> = ({ productsLength }) => {
	const { category, setProducts, setPages } = useContext(ProductsContext);
	const { setSearchValue, searchValue, priceState, selectedBrands, rating } = useFilters();

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

			if (Array.isArray(priceState)) {
				if (priceState.length === 2 && priceState[0] > 0 && priceState[1] > 0) {
					params.price = `${priceState[0]},${priceState[1]}`;
				}
			}
			const { products, pages } = await fetchProductsByCategory(category, params);
			setProducts?.(products.slice(0, 20));
			setPages?.(pages);
		} catch {
			setProducts?.([]);
			setPages?.(0);
		}
	};

	const onClear = async () => {
		try {
			const { products, pages } = await fetchProductsByCategory(category);
			setProducts?.(products.slice(0, 20));
			setPages?.(pages);
		} catch {
			setProducts?.([]);
			setPages?.(0);
		}
	};

	return (
		<div className={styles.header}>
			<Title tag='h3' className={styles.title}>
				{productsLength && productsLength}&nbsp;
				{declOfNumber(productsLength, ["result", "results"])}&nbsp; found
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
