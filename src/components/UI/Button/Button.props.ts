import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, ReactNode } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		PropsWithChildren {
	icon?: ReactNode;
	iconRight?: ReactNode;
	weight?: "300" | "400" | "600";
	apperance?: "primary" | "gray";
	size?: "normal" | "small";
}
