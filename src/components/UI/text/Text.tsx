import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Text.module.css";
import { TextProps } from "./Text.props";

const Title: FC<TextProps> = titleProps => {
	const { size = "medium", margin = true, children, className, ...props } = titleProps;

	const textClassName = clsx(className, styles.tag, {
		[styles.small]: size === "small",
		[styles.medium]: size === "medium",
		[styles.large]: size === "large",
		[styles.margin]: margin
	});

	return (
		<p className={textClassName} {...props}>
			{children}
		</p>
	);
};

export default memo(Title);
