import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SpanProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	size?: "small" | "medium" | "large";
	margin?: boolean;
}
