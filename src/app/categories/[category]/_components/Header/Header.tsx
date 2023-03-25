"use clinet";

import { $axios } from "#/axios";
import { Grid } from "#/components/icons";
import { Button, SearchField, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { useFilters } from "#/store";
import { declOfNumber } from "#/utils/decline";
import clsx from "clsx";
import React, { FC, useContext } from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from "./Header.props";

export const Header: FC<IHeaderProps> = ({ productsLength, onGridClick }) => {
	const { category, setProducts } = useContext(ProductsContext);
	const { setSearchValue, searchValue } = useFilters();
	const onClick = async () => {
		try {
			const { data } = await $axios.get("products/bySlug/" + category, {
				params: {
					search: searchValue
				}
			});
			setProducts?.(data);
		} catch {
			setProducts?.([]);
		}
	};
	return (
		<div className={styles.header}>
			<div className={styles.top}>
				<Title tag='h3' className={styles.title}>
					{productsLength && productsLength}&nbsp;
					{declOfNumber(productsLength, ["result", "results"])}&nbsp; found
				</Title>
				<Button
					onClick={onGridClick}
					apperance='white'
					rounded
					size='medium'
					className={clsx(styles.gridButton, {
						[styles.active]: productsLength >= 3
					})}
					icon={<Grid />}
				/>
			</div>
			<div className={styles.search}>
				<SearchField
					onClickButton={onClick}
					value={searchValue}
					onChange={setSearchValue}
					placeholder='Search here'
					aria-label='find orders'
				/>
			</div>
		</div>
	);
};
