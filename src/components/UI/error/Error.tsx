import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./Error.module.css";
import { IErrorProps } from "./Error.props";

const Error: FC<IErrorProps> = props => {
	const { message, className, ...errorProps } = props;
	return (
		<motion.div className={clsx(styles.error, className)} {...errorProps}>
			{message}
		</motion.div>
	);
};

export default Error;
