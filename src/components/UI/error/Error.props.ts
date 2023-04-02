import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IErrorProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	message: string | ReactNode[];
}
