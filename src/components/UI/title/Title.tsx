import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.props";

const Title: FC<TitleProps> = titleProps => {
	const { tag = "h1", size = "medium", margin = true, children, className, ...props } = titleProps;

	const tagClassName = clsx(className, styles.tag, {
		[styles.small]: size === "small",
		[styles.medium]: size === "medium",
		[styles.large]: size === "large",
		[styles.margin]: margin
	});

	switch (tag) {
		case "h1":
			return (
				<h1 className={clsx(tagClassName, styles.h1)} {...props}>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2 className={clsx(tagClassName, styles.h2)} {...props}>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={clsx(tagClassName, styles.h3)} {...props}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};

export default memo(Title);
