import { create } from "zustand";

const useFilters = create<{ searchValue: string; setSearchValue: (value: string) => void }>(
	set => ({
		searchValue: "",
		setSearchValue: (value: string) => {
			set(() => ({ searchValue: value }));
		}
	})
);

export default useFilters;
