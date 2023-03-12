"use client";

import { Session } from "next-auth";
import { SessionProvider as SessionProviderAuth } from "next-auth/react";
import React from "react";

export const SessionProvider = ({
	children,
	session
}: {
	children: React.ReactNode;
	session: Session | null;
}) => {
	return <SessionProviderAuth session={session}>{children}</SessionProviderAuth>;
};
