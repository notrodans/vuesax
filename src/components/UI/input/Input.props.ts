import { DOMFactory, HTMLAttributes, ReactHTML, ReactSVG, RefObject } from "react";
import { AriaTextFieldProps } from "react-aria";

type IntrinsicHTMLElements = {
	[K in keyof IntrinsicHTMLAttributes]: IntrinsicHTMLAttributes[K] extends HTMLAttributes<infer T>
		? T
		: never;
};

interface ReactDOM extends ReactHTML, ReactSVG {}

type TextFieldIntrinsicElements = keyof Pick<IntrinsicHTMLElements, "input" | "textarea">;

type IntrinsicHTMLAttributes = {
	[K in keyof ReactDOM]: ReactDOM[K] extends DOMFactory<infer T, any> ? T : never;
};

type TextFieldHTMLElementType = Pick<IntrinsicHTMLElements, TextFieldIntrinsicElements>;

export type TextFieldRefObject<T extends TextFieldIntrinsicElements> = RefObject<
	TextFieldHTMLElementType[T]
>;

export interface IInputProps extends AriaTextFieldProps {
	rounded?: boolean;
}
