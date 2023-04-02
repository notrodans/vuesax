import { Search } from "#/components/icons";
import { Button } from "#/components/UI";
import clsx from "clsx";
import { FC, useRef } from "react";
import { useSearchField } from "react-aria";
import { useSearchFieldState } from "react-stately";
import styles from "./SearchField.module.css";
import { SearchFieldProps } from "./SearchField.props";

const SearchField: FC<SearchFieldProps> = props => {
	const { label, className, onClickButton, ...searchFieldProps } = props;
	const state = useSearchFieldState(props);
	const ref = useRef(null);
	const { labelProps, inputProps, clearButtonProps } = useSearchField(searchFieldProps, state, ref);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { excludeFromTabOrder, ...buttonProps } = clearButtonProps;

	return (
		<div className={clsx(styles.container, className)}>
			<label className={styles.label} {...labelProps}>
				{label}
			</label>
			<div className={styles.body}>
				{state.value && (
					<Button size='small' className={styles.button} {...buttonProps}>
						❎
					</Button>
				)}
				<input className={styles.input} {...inputProps} ref={ref} />

				{state.value && (
					<Button
						onClick={onClickButton}
						size='small'
						icon={<Search />}
						className={styles.searchButton}
					/>
				)}
			</div>
		</div>
	);
};

export default SearchField;
