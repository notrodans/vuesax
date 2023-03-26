import { create } from "zustand";

export interface IFiltersState {
	searchValue: string;
	rating: number;
	selectedBrands: string[];
	priceState: number[] | number;
	setPriceState: (price: number[] | number) => void;
	setRating: (rating: number) => void;
	setSearchValue: (value: string) => void;
	setSelectedBrands: (brands: string[]) => void;
}

const useFilters = create<IFiltersState>(set => ({
	searchValue: "",
	rating: 1,
	selectedBrands: [],
	priceState: [0, 0],
	setPriceState: priceState => {
		set(() => ({ priceState }));
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
