"use client";

import { $axios } from "#/axios";
import { Arrow } from "#/components/icons";
import { Pagination } from "#/components/UI";
import { ProductsContext } from "#/context/products.context";
import { IProduct } from "#/interfaces/Product.interface";
import clsx from "clsx";
import { FC, memo, useContext, useMemo, useRef } from "react";
import Card from "../Card/Card";
import { Header } from "../Header/Header";
import styles from "./Products.module.css";

export const Products: FC = memo(() => {
	const { products, pages, setProducts, category } = useContext(ProductsContext);
	const productsState = useMemo(() => products, [products]);
	const productsLength = productsState?.length || 0;

	const isMount = useRef<boolean>(false);

	const onClick = async (page: number) => {
		try {
			const { data } = await $axios.get<{ pages: number; products: IProduct[] }>(
				`products/bySlug/${category}`,
				{
					params: {
						page: page + 1,
						total: 20
					}
				}
			);
			isMount.current = true;
			setProducts?.(data.products);
		} catch (e) {
			setProducts?.([]);
		}
	};

	return (
		<div className={styles.products}>
			<div className={styles.categories}>
				<Header productsLength={productsLength} />
				<div className={styles.body}>
					{productsState?.map?.(p => (
						<Card key={p.id} {...p} />
					))}
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
});

Products.displayName = "Products";
