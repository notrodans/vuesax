import { rangeType } from "#/components/common/Filters/Filters.consts";
import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import { CheckboxProps } from "../Checkbox/Checkbox.props";

export interface CheckboxsContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: (CheckboxProps & ReactNode)[] | (CheckboxProps & ReactNode);
	data?: rangeType | null;
	onChangeData?: Dispatch<SetStateAction<rangeType | null>>;
	checkBoxProps?: CheckboxProps;
}
