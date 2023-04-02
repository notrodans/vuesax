import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Span.module.css";
import { SpanProps } from "./Span.props";

const Span: FC<SpanProps> = titleProps => {
	const { size = "medium", margin = true, children, className, ...props } = titleProps;

	const textClassName = clsx(className, styles.tag, {
		[styles.small]: size === "small",
		[styles.medium]: size === "medium",
		[styles.large]: size === "large",
		[styles.margin]: margin
	});

	return (
		<span className={textClassName} {...props}>
			{children}
		</span>
	);
};

export default memo(Span);
