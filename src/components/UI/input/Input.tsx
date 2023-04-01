import clsx from "clsx";
import { forwardRef } from "react";
import { useTextField } from "react-aria";
import styles from "./Input.module.css";
import { IInputProps } from "./Input.props";

const Input = forwardRef((props: IInputProps, ref: any) => {
	const { rounded, ...propsInput } = props;
	const { label } = propsInput;
	const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
		propsInput,
		ref
	);

	return (
		<div className={styles.container}>
			<label className={styles.label} {...labelProps}>
				{label}
			</label>
			<input
				className={clsx(styles.input, {
					[styles.rounded]: rounded
				})}
				{...inputProps}
				ref={ref}
			/>
			{props.description && (
				<div className={styles.description} {...descriptionProps}>
					{props.description}
				</div>
			)}
			{props.errorMessage && (
				<div className={styles.error} {...errorMessageProps}>
					{props.errorMessage}
				</div>
			)}
		</div>
	);
});

Input.displayName = "input";

export default Input;
