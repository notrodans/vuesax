import { IProduct } from "#/interfaces/Product.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProductProps
	extends IProduct,
		Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "id" | "title"> {}
