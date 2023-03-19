"use client";

import { ICategory } from "#/interfaces/Category.interface";
import { createContext, FC, PropsWithChildren, useState } from "react";

export interface ICategoriesContext extends PropsWithChildren {
	categories: ICategory[];
	category: string;
	setCategories?: (newCategories: ICategory[]) => void;
	setCategory?: (newCategory: string) => void;
}

export const CategoriesContext = createContext<ICategoriesContext>({
	categories: [],
	category: ""
});

export const CategoriesProvider: FC<ICategoriesContext> = ({ children, categories, category }) => {
	const [categoriesState, setCategoriesState] = useState<ICategory[]>(categories);
	const [categoryState, setCategoryState] = useState<string>(category);
	const setCategories = (newCategories: ICategory[]) => {
		setCategoriesState(newCategories);
	};

	const setCategory = (category: string) => {
		setCategoryState(category);
	};

	return (
		<CategoriesContext.Provider
			value={{ categories: categoriesState, setCategories, category: categoryState, setCategory }}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
