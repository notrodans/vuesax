import { ICategory } from "#/interfaces/Category.interface";
import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface CardProps
	extends ICategory,
		Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "id"> {}
