"use client";

import { Loader } from "#/components/icons";
import { ProductsContext } from "#/context/products.context";
import clsx from "clsx";
import { FC, memo, useContext, useEffect, useMemo, useState } from "react";
import Card from "../Card/Card";
import { Header } from "../Header/Header";
import styles from "./Products.module.css";

export const Products: FC = memo(() => {
	const { products } = useContext(ProductsContext);
	const productsState = useMemo(() => products, [products]);
	const productsLength = productsState?.length || 0;
	const [isLoading, setIsLoading] = useState(true);
	const [isGrid, setIsGrid] = useState(false);

	useEffect(() => {
		setIsGrid((localStorage.getItem("isGrid") === "true" ? true : false) ?? false);
		setIsLoading(false);
	}, []);

	const onGridClick = () => {
		setIsGrid(prev => {
			localStorage.setItem("isGrid", prev ? "false" : "true");
			return !prev;
		});
	};
	return isLoading ? (
		<div className={styles.center}>
			<Loader width={64} height={64} />
		</div>
	) : (
		<div className={styles.categories}>
			<Header productsLength={productsLength} onGridClick={onGridClick} />
			<div
				className={clsx(styles.body, {
					[styles.grid]: isGrid
				})}
			>
				{productsState?.map?.(p => (
					<Card key={p.id} {...p} />
				))}
			</div>
		</div>
	);
});

Products.displayName = "Products";
