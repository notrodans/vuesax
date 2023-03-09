"use client";

import { rangeKeys, rangeType } from "#/components/common/Filters/Filters.consts";
import clsx from "clsx";
import React, { FC, memo, useMemo, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./CheckboxsContainer.module.css";
import { CheckboxsContainerProps } from "./CheckboxsContainer.props";

const CheckboxsContainer: FC<CheckboxsContainerProps> = props => {
	const { children, className, data, onChangeData, ...checkboxsContainerProps } = props;
	const [rangeSelected] = useState<rangeType | null>(data ? { ...data } : null);
	const rangeSelectedEntries = useMemo(
		() =>
			rangeSelected &&
			(Object.entries(rangeSelected) as [
				key: rangeKeys<typeof rangeSelected>,
				value: rangeType[rangeKeys<typeof rangeSelected>]
			][]),
		[rangeSelected]
	);

	const onChangeCheckbox = (key: any) => {
		if (!rangeSelected || !onChangeData) {
			return;
		}
		if (rangeSelected[key].isSelected) {
			onChangeData(prev => {
				const obj = prev?.[key];
				if (obj) {
					obj.isSelected = false;
					const newPrev = { ...prev };
					return newPrev;
				}
				return null;
			});
		} else {
			onChangeData(prev => {
				const obj = prev?.[key];
				if (obj) {
					obj.isSelected = true;
					const newPrev = { ...prev };
					return newPrev;
				}
				return null;
			});
		}
	};

	if (data) {
		return (
			<div className={clsx(styles.checkboxsContainer, className)} {...checkboxsContainerProps}>
				{rangeSelectedEntries &&
					rangeSelectedEntries.map(([key, value]) => (
						<Checkbox
							className={styles.checkbox}
							key={key}
							isSelected={value.isSelected}
							onChange={() => onChangeCheckbox(key)}
						>
							{value.children}
						</Checkbox>
					))}
			</div>
		);
	}

	return (
		<div className={clsx(styles.checkboxsContainer, className)} {...checkboxsContainerProps}>
			{children}
		</div>
	);
};

export default memo(CheckboxsContainer);
