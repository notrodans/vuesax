import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string;
	title: string;
	text: string;
	cost: string;
	rating: string;
}
