import clsx from "clsx";
import { FC } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
	icon,
	iconRight,
	weight = "400",
	size = "normal",
	apperance = "primary",
	rounded = false,
	textTransform = false,
	children,
	className,
	...props
}) => {
	return (
		<button
			className={clsx(styles.button, className, {
				[styles.light]: weight === "300",
				[styles.regular]: weight === "400",
				[styles.semiBold]: weight === "600",
				[styles.primary]: apperance === "primary",
				[styles.gray]: apperance === "gray",
				[styles.normal]: size === "normal",
				[styles.small]: size === "small",
				[styles.rounded]: rounded,
				[styles.upper]: textTransform === "upper",
				[styles.capitalize]: textTransform === "capitalize"
			})}
			{...props}
		>
			{icon && icon}
			{children}
			{iconRight && iconRight}
		</button>
	);
};

export default Button;
