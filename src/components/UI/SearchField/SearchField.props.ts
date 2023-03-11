import { InputHTMLAttributes } from "react";
import { AriaSearchFieldProps } from "react-aria";

type InputAttributes = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	| "defaultValue"
	| "onKeyDown"
	| "onBlur"
	| "onChange"
	| "onFocus"
	| "onKeyUp"
	| "onSubmit"
	| "type"
	| "value"
>;

export interface SearchFieldProps extends AriaSearchFieldProps, InputAttributes {}
