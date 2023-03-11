import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag?: "h1" | "h2" | "h3";
	size?: "small" | "medium" | "large";
	margin?: boolean;
}
