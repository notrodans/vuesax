import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	firstName?: string;
	lastName?: string;
	avatar?: string | null;
}
