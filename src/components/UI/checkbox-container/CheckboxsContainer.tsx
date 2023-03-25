"use client";

import { createContext, FC } from "react";
import { useCheckboxGroup } from "react-aria";
import { CheckboxGroupState, useCheckboxGroupState } from "react-stately";
import { CheckboxsContainerProps } from "./CheckboxsContainer.props";

export const CheckboxGroupContext = createContext<CheckboxGroupState>({} as CheckboxGroupState);

const CheckboxGroup: FC<CheckboxsContainerProps> = props => {
	const { children, className, label, description, errorMessage, validationState } = props;
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(
		props,
		state
	);

	return (
		<div className={className} {...groupProps}>
			{label && <span {...labelProps}>{label}</span>}
			<CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
			{description && (
				<div {...descriptionProps} style={{ fontSize: 12 }}>
					{description}
				</div>
			)}
			{errorMessage && validationState === "invalid" && (
				<div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default CheckboxGroup;
