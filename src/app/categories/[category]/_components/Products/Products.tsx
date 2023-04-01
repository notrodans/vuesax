"use client";

import { $baseAxios } from "#/axios";
import { Arrow } from "#/components/icons";
import { Pagination } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import clsx from "clsx";
import { FC, useContext } from "react";
import Card from "../Card/Card";
import { Header } from "../Header/Header";
import styles from "./Products.module.css";

export const Products: FC = () => {
	const { products, pages, setProducts, category } = useContext(ProductsContext);

	const onClick = async (page: number) => {
		try {
			const { data } = await $baseAxios.get<{ pages: number; products: IProduct[] }>(
				`products/bySlug/${category}`,
				{
					params: {
						page: page + 1,
						total: 10
					}
				}
			);
			setProducts?.(data.products);
		} catch (e) {
			setProducts?.([]);
		}
	};

	return (
		<div className={styles.products}>
			<div className={styles.categories}>
				<Header />
				<div className={styles.body}>
					{products.length >= 1 && products.map(p => <Card key={p.id} {...p} />)}
				</div>
			</div>
			{pages > 0 && (
				<Pagination
					className={clsx(styles.paginate, "paginate")}
					previousLabel={<Arrow />}
					nextLabel={<Arrow style={{ transform: "rotate(-180deg)" }} />}
					previousClassName='paginate__previous'
					nextClassName='paginate__next'
					activeClassName='paginate__active'
					pageLinkClassName='paginate__page'
					pageClassName='paginate__item'
					pageCount={pages}
					onPageChange={({ selected }) => {
						onClick(selected);
					}}
				/>
			)}
		</div>
	);
};
