import { FocusableElement } from "@react-types/shared";
import { DOMAttributes } from "react";
import { AriaSliderProps, AriaSliderThumbOptions } from "react-aria";
import { SliderState } from "react-stately";

export interface NumberFormatOptions
	extends Intl.NumberFormatOptions,
		Pick<Intl.LocaleOptions, "numberingSystem"> {}

export interface SliderProps extends AriaSliderProps {
	formatOptions?: NumberFormatOptions;
	label?: string;
	multi?: boolean;
}

export interface ThumbProps
	extends Omit<AriaSliderThumbOptions, "onBlur" | "onFocus" | "onKeyDown" | "onKeyUp" | "inputRef">,
		DOMAttributes<FocusableElement> {
	state: SliderState;
}
