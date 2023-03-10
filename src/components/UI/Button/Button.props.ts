import { ButtonHTMLAttributes, ReactNode } from "react";
import { AriaButtonProps } from "react-aria";

export interface ButtonProps
	extends Omit<
			ButtonHTMLAttributes<HTMLButtonElement>,
			"onKeyUp" | "onKeyDown" | "onFocus" | "onBlur"
		>,
		AriaButtonProps {
	icon?: ReactNode;
	iconRight?: ReactNode;
	weight?: "300" | "400" | "600";
	apperance?: "primary" | "gray" | "white";
	size?: "small" | "medium" | "custom";
	rounded?: boolean;
	forceRounded?: boolean;
	textTransform?: false | "upper" | "capitalize";
}
