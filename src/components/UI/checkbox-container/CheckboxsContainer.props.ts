import { rangeType } from "#/components/common/Filters/Filters.consts";
import { CheckboxProps } from "#/components/UI/checkbox/Checkbox.props";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface CheckboxsContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: (CheckboxProps & ReactNode)[] | (CheckboxProps & ReactNode);
	data?: rangeType | null;
	onChangeData?: Dispatch<SetStateAction<rangeType | null>>;
	checkBoxProps?: CheckboxProps;
}
