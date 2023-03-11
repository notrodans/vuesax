import clsx from "clsx";
import { FC, memo } from "react";
import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.props";

const Divider: FC<DividerProps> = props => {
	const { className, ...dividerProps } = props;
	return <hr className={clsx(styles.divider, className)} {...dividerProps} />;
};

export default memo(Divider);
