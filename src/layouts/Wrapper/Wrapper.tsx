"use client";

import { Header } from "#/components/common";
import { Breadcrumbs } from "#/components/UI";
import { FC, PropsWithChildren } from "react";
import styles from "./Wrapper.module.css";

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Breadcrumbs />
			<main className={styles.page}>{children}</main>
		</div>
	);
};
