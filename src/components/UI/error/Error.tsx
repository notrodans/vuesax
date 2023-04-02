import clsx from "clsx";
import { FC } from "react";
import styles from "./Error.module.css";
import { IErrorProps } from "./Error.props";

const Error: FC<IErrorProps> = props => {
	const { message, className, ...errorProps } = props;
	return (
		<div className={clsx(styles.error, className)} {...errorProps}>
			{Array.isArray(message) ? (
				message.map((m, i) => (
					<div key={i} className={styles.message}>
						{m}
					</div>
				))
			) : (
				<div className={styles.message}>{message}</div>
			)}
		</div>
	);
};

export default Error;
