import { ReactNode } from "react";

export const range = {
	first: {
		isSelected: true,
		key: 1,
		children: "$10"
	},
	second: {
		isSelected: false,
		key: 2,
		children: "$10-$100"
	},
	third: {
		isSelected: false,
		key: 3,
		children: "$100-$500"
	},
	fourth: {
		isSelected: false,
		key: 4,
		children: "$500"
	},
	fifth: {
		isSelected: false,
		key: 5,
		children: "All"
	}
};

export type rangeType = {
	[key: string]: { isSelected: boolean; key: number; children: ReactNode | string };
};
export type rangeKeys<T> = keyof T;
