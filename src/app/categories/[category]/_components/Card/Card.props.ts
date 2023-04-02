import { IProduct } from "#/interfaces/Product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "id" | "title">,
		IProduct {}
