import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.props";

const Divider: FC<DividerProps> = props => {
	const { className, marginSize = "medium", ...dividerProps } = props;
	return (
		<hr
			className={clsx(
				styles.divider,
				{
					[styles.small]: marginSize === "small",
					[styles.medium]: marginSize === "medium"
				},
				className
			)}
			{...dividerProps}
		/>
	);
};

export default memo(Divider);
