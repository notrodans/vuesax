"use client";

import clsx from "clsx";
import { FC, memo, useRef } from "react";
import { mergeProps, useCheckbox, useFocusRing, VisuallyHidden } from "react-aria";
import { useToggleState } from "react-stately";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.props";

const Checkbox: FC<CheckboxProps> = props => {
	const { rounded = true, className, children } = props;
	const state = useToggleState(props);
	const ref = useRef(null);
	const { inputProps } = useCheckbox(props, state, ref);
	const { focusProps, isFocusVisible } = useFocusRing();

	const checkBoxClassname = clsx(styles.box, {
		[styles.active]: state.isSelected,
		[styles.focus]: isFocusVisible,
		[styles.rounded]: rounded
	});

	return (
		<label className={clsx(styles.checkbox, className)}>
			<VisuallyHidden>
				<input ref={ref} {...mergeProps(inputProps, focusProps)} />
			</VisuallyHidden>
			<div className={checkBoxClassname} aria-hidden='true'></div>
			<span className={styles.text} aria-hidden='true'>
				{children}
			</span>
		</label>
	);
};

export default memo(Checkbox);
