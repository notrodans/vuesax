"use client";

import { $axios } from "#/axios";
import { SearchField, Title } from "#/components/UI";
import { CategoriesContext } from "#/context/categories.context";
import { ICategory } from "#/interfaces/Category.interface";
import { declOfNumber } from "#/utils/decline";
import { motion } from "framer-motion";
import { FC, useContext, useState } from "react";
import Category from "../Category/Category";
import styles from "./Categories.module.css";

export const Categories: FC = () => {
	const { categories, setCategories } = useContext(CategoriesContext);
	const [searchValue, setSearchValue] = useState("");
	const categoriesLength = categories?.length ?? 0;

	const onSubmit = async () => {
		const params: { search?: string } = {};
		if (searchValue) {
			Object.assign(params, { search: searchValue });
		}
		try {
			const { data } = await $axios.get<ICategory[]>("categories", {
				params
			});
			setCategories?.(data);
		} catch {
			setCategories?.([]);
		}
	};

	return (
		<div className={styles.categories}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.title}>
					{categoriesLength && categoriesLength}&nbsp;
					{declOfNumber(categoriesLength, ["result", "results"])}&nbsp; found
				</Title>
			</div>
			<div className={styles.search}>
				<SearchField
					onSubmit={onSubmit}
					onClickButton={onSubmit}
					value={searchValue}
					onChange={setSearchValue}
					placeholder='Search here'
					aria-label='find orders'
				/>
			</div>
			<motion.div className={styles.body}>
				{categories?.map?.((p, i) => (
					<Category key={i} {...p} />
				))}
			</motion.div>
		</div>
	);
};
