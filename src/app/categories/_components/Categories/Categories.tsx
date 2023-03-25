"use client";

import { SearchField, Title } from "#/components/UI";
import { CategoriesContext } from "#/context/categories.context";
import { declOfNumber } from "#/utils/decline";
import { motion } from "framer-motion";
import { FC, useContext } from "react";
import Category from "../Category/Category";
import styles from "./Categories.module.css";

export const Categories: FC = () => {
	const { categories } = useContext(CategoriesContext);
	const categoriesLength = categories?.length ?? 0;

	return (
		<div className={styles.categories}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.title}>
					{categoriesLength && categoriesLength}&nbsp;
					{declOfNumber(categoriesLength, ["result", "results"])}&nbsp; found
				</Title>
			</div>
			<div className={styles.search}>
				<SearchField placeholder='Search here' aria-label='find orders' />
			</div>
			<motion.div className={styles.body}>
				{categories?.map?.((p, i) => (
					<Category key={i} {...p} />
				))}
			</motion.div>
		</div>
	);
};
