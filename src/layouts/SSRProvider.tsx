"use client";

import { FC } from "react";
import { SSRProvider as SSRProviderAria, SSRProviderProps } from "react-aria";

export const SSRProvider: FC<SSRProviderProps> = ({ children, ...props }) => {
	return <SSRProviderAria {...props}>{children}</SSRProviderAria>;
};
