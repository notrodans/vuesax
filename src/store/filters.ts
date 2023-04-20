import { create } from "zustand";

export interface IFiltersState {
	searchValue: string;
	rating: number;
	selectedBrands: string[];
	priceRange: number[] | number;
	setPriceRange: (price: number[] | number) => void;
	setRating: (rating: number) => void;
	setSearchValue: (value: string) => void;
	setSelectedBrands: (brands: string[]) => void;
}

const useFilters = create<IFiltersState>(set => ({
	searchValue: "",
	rating: 1,
	selectedBrands: [],
	priceRange: [0, 0],
	setPriceRange: priceState => {
		set(() => ({ priceRange: priceState }));
	},
	setSelectedBrands: selectedBrands => {
		set(() => ({ selectedBrands }));
	},
	setRating: rating => {
		set(() => ({ rating }));
	},
	setSearchValue: searchValue => {
		set(() => ({ searchValue }));
	}
}));

export default useFilters;
