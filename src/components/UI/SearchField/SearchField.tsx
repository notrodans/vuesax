"use client";

import { FC, useRef } from "react";
import { useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";
import { SearchFieldProps } from "./SearchField.props";
import styles from "./SearchField.module.css";
import clsx from "clsx";
import Button from "../Button/Button";
import { Search } from "#/components/icons";

const SearchField: FC<SearchFieldProps> = props => {
	const { label, className, ...searchFieldProps } = props;
	const state = useSearchFieldState(props);
	const ref = useRef(null);
	const {
		labelProps,
		inputProps,
		clearButtonProps: buttonProps
	} = useSearchField(searchFieldProps, state, ref);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { onPressStart, excludeFromTabOrder, ...clearButtonProps } = buttonProps;

	return (
		<div className={clsx(styles.container, className)}>
			<label className={styles.label} {...labelProps}>
				{label}
			</label>
			<div className={styles.body}>
				{state.value && (
					<Button size='small' className={styles.button} {...clearButtonProps}>
						❎
					</Button>
				)}
				<input className={styles.input} {...inputProps} ref={ref} />

				{state.value && <Button size='small' icon={<Search />} className={styles.searchButton} />}
			</div>
		</div>
	);
};

export default SearchField;
