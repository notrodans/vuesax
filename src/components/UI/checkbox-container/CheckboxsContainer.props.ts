import { DetailedHTMLProps, HTMLAttributes } from "react";
import { AriaCheckboxGroupProps } from "react-aria";

export interface CheckboxsContainerProps
	extends Omit<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
			"defaultValue" | "onChange"
		>,
		AriaCheckboxGroupProps {}
