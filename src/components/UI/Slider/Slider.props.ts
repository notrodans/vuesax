import { SliderStateOptions } from "react-stately";

export interface SliderProps extends SliderStateOptions<number | number[]> {
	label?: string;
}
