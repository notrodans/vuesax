"use client";

import { Grid, Loader } from "#/components/icons";
import { Button, SearchField, Title } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { declOfNumber } from "#/utils/decline";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Products.module.css";

export const Products: FC = () => {
	const { products } = useContext(ProductsContext);
	const productsLength = products?.length || 0;
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
			<div className={styles.header}>
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
				<SearchField placeholder='Search here' aria-label='find orders' />
			</div>
			<motion.div
				className={clsx(styles.body, {
					[styles.grid]: isGrid
				})}
			>
				{products && products?.length >= 1 && products.map(p => <Card key={p.id} {...p} />)}
			</motion.div>
		</div>
	);
};
