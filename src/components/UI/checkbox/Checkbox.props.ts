import { HTMLAttributes, PropsWithChildren } from "react";
import { AriaCheckboxGroupItemProps } from "react-aria";

export interface CheckboxProps
	extends AriaCheckboxGroupItemProps,
		PropsWithChildren,
		Omit<
			HTMLAttributes<HTMLLabelElement>,
			"onKeyDown" | "onBlur" | "onChange" | "onFocus" | "onKeyUp"
		> {
	rounded?: boolean;
}
