"use client";

import { SSRProvider as SSRProviderAria } from "@react-aria/ssr";

import { FC, PropsWithChildren } from "react";

export const SSRProvider: FC<PropsWithChildren> = ({ children }) => {
	return <SSRProviderAria>{children}</SSRProviderAria>;
};
