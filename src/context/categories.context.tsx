"use client";

import { ICategory } from "#/interfaces/Category.interface";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface ICategoriesContext extends PropsWithChildren {
	categories: ICategory[] | null;
	setCategories?: (newCategories: ICategory[]) => void;
}

export const CategoriesContext = createContext<ICategoriesContext>({
	categories: null
});

export const CategoriesProvider: FC<ICategoriesContext> = ({ children, categories }) => {
	const [categoriesState, setCategoriesState] = useState<ICategory[] | null>(categories);
	const setCategories = (newCategories: ICategory[]) => {
		setCategoriesState(newCategories);
	};

	return (
		<CategoriesContext.Provider value={{ categories: categoriesState, setCategories }}>
			{children}
		</CategoriesContext.Provider>
	);
};
