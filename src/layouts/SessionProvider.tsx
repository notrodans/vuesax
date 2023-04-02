"use client";

import { SessionProvider as SessionProviderAuth, SessionProviderProps } from "next-auth/react";
import { FC } from "react";

export const SessionProvider: FC<SessionProviderProps> = ({ children, ...props }) => {
	return <SessionProviderAuth {...props}>{children}</SessionProviderAuth>;
};
