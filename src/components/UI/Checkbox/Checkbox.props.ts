import { HTMLAttributes, PropsWithChildren } from "react";
import { AriaCheckboxProps } from "react-aria";

export interface CheckboxProps
	extends AriaCheckboxProps,
		PropsWithChildren,
		Omit<
			HTMLAttributes<HTMLLabelElement>,
			"onKeyDown" | "onBlur" | "onChange" | "onFocus" | "onKeyUp"
		> {
	rounded?: boolean;
}
