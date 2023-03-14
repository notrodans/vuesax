"use client";

import { SessionProviderProps, SessionProvider as SessionProviderAuth } from "next-auth/react";
import React, { FC } from "react";

export const SessionProvider: FC<SessionProviderProps> = ({ children, ...props }) => {
	return <SessionProviderAuth {...props}>{children}</SessionProviderAuth>;
};
