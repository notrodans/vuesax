"use client";

import { FC, PropsWithChildren } from "react";
import styles from "./authwrapper.module.css";

export const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<main className={styles.page}>{children}</main>
		</div>
	);
};
