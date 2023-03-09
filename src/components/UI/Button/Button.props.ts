import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, ReactNode } from "react";
import { AriaFocusRingProps, PressHookProps } from "react-aria";

export interface ButtonProps
	extends Omit<
			DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
			"ref"
		>,
		PressHookProps,
		AriaFocusRingProps,
		PropsWithChildren {
	icon?: ReactNode;
	iconRight?: ReactNode;
	weight?: "300" | "400" | "600";
	apperance?: "primary" | "gray";
	size?: "normal" | "small";
	rounded?: boolean;
	forceRounded?: boolean;
	textTransform?: false | "upper" | "capitalize";
}
