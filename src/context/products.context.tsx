"use client";

import { IProduct } from "#/interfaces/Product.interface";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface IProductsContext extends PropsWithChildren {
	products: IProduct[] | undefined;
	setProducts?: (newProducts: IProduct[]) => void;
}

export const ProductsContext = createContext<IProductsContext>({ products: [] });

export const ProductsProvider: FC<IProductsContext> = ({ children, products }) => {
	const [productsState, setProductsState] = useState<IProduct[] | undefined>(products);

	const setProducts = (newProducts: IProduct[]) => {
		setProductsState(newProducts);
	};

	return (
		<ProductsContext.Provider value={{ products: productsState, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};
