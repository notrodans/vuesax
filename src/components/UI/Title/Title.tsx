import clsx from "clsx";
import { FC } from "react";
import styles from "./Title.module.css";
import { TitleProps } from "./Title.props";

const Title: FC<TitleProps> = ({ tag = "h1", size = "medium", children, ...props }) => {
	switch (tag) {
		case "h1":
			return (
				<h1
					className={clsx(styles.tag, styles.h1, {
						[styles.small]: size === "small",
						[styles.medium]: size === "medium",
						[styles.large]: size === "large"
					})}
					{...props}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={clsx(styles.tag, styles.h2, {
						[styles.small]: size === "small",
						[styles.medium]: size === "medium",
						[styles.large]: size === "large"
					})}
					{...props}
				>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3
					className={clsx(styles.tag, styles.h3, {
						[styles.small]: size === "small",
						[styles.medium]: size === "medium",
						[styles.large]: size === "large"
					})}
					{...props}
				>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};

export default Title;
