"use client";

import { IProduct } from "#/interfaces/Product.interface";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface IBrand {
	brand: string;
	brandSlug: string;
}

export interface IProductsContext extends PropsWithChildren {
	pages: number;
	setPages?: (pages: number) => void;
	products: IProduct[];
	setProducts?: (newProducts: IProduct[]) => void;
	category: string;
	setCategory?: (newCategory: string) => void;
	brands: IBrand[];
	setBrands?: (newBrands: IBrand[]) => void;
}

export const ProductsContext = createContext<IProductsContext>({
	pages: 0,
	brands: [],
	products: [],
	category: ""
});

export const ProductsProvider: FC<IProductsContext> = ({
	children,
	products,
	category,
	pages,
	brands
}) => {
	const [productsState, setProductsState] = useState<IProduct[]>(products);
	const [categoryState, setCategoryState] = useState<string>(category);
	const [pagesState, setPagesState] = useState<number>(pages);
	const [brandsState, setBrandsState] = useState<IBrand[]>(brands);

	const setProducts = (newProducts: IProduct[]) => {
		setProductsState(newProducts);
	};

	const setCategory = (category: string) => {
		setCategoryState(category);
	};

	const setPages = (pages: number) => {
		setPagesState(pages);
	};

	const setBrands = (brands: IBrand[]) => {
		setBrandsState(brands);
	};

	return (
		<ProductsContext.Provider
			value={{
				pages: pagesState,
				setPages,
				products: productsState,
				setProducts,
				category: categoryState,
				setCategory,
				brands: brandsState,
				setBrands
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
