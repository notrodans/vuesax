import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: "small" | "medium" | "large";
	margin?: boolean;
}
