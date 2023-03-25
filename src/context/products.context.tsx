"use client";

import { IProduct } from "#/interfaces/Product.interface";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface IProductsContext extends PropsWithChildren {
	products: IProduct[] | null;
	setProducts?: (newProducts: IProduct[]) => void;
	category: string;
	setCategory?: (newCategory: string) => void;
}

export const ProductsContext = createContext<IProductsContext>({
	products: [],
	category: ""
});

export const ProductsProvider: FC<IProductsContext> = ({ children, products, category }) => {
	const [productsState, setProductsState] = useState<IProduct[] | null>(products);
	const [categoryState, setCategoryState] = useState<string>(category);

	const setProducts = (newProducts: IProduct[]) => {
		setProductsState(newProducts);
	};

	const setCategory = (category: string) => {
		setCategoryState(category);
	};

	return (
		<ProductsContext.Provider
			value={{
				products: productsState,
				setProducts,
				category: categoryState,
				setCategory
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
