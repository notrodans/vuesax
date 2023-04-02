import clsx from "clsx";
import { FC, memo, useContext, useRef } from "react";
import { mergeProps, useCheckboxGroupItem, useFocusRing, VisuallyHidden } from "react-aria";
import { CheckboxGroupContext } from "../checkbox-container/CheckboxsContainer";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.props";

const Checkbox: FC<CheckboxProps> = props => {
	const { rounded = true, className, children, ...checkBoxProps } = props;
	const state = useContext(CheckboxGroupContext);
	const ref = useRef(null);
	const { inputProps } = useCheckboxGroupItem(checkBoxProps, state, ref);
	const { focusProps, isFocusVisible } = useFocusRing();

	const checkBoxClassname = clsx(styles.box, {
		[styles.active]: state.isSelected(props.value),
		[styles.focus]: isFocusVisible,
		[styles.rounded]: rounded
	});

	return (
		<label className={clsx(styles.checkbox, className)}>
			<VisuallyHidden>
				<input ref={ref} {...mergeProps(inputProps, focusProps)} />
			</VisuallyHidden>
			<div className={checkBoxClassname} aria-hidden='true' />
			<span className={styles.text} aria-hidden='true'>
				{children}
			</span>
		</label>
	);
};

export default memo(Checkbox);
