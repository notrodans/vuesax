import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface UserProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	firstName?: string;
	lastName?: string;
	avatar?: string | null;
}
