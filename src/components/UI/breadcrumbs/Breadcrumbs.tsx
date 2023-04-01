"use client";

import { Arrows, Home } from "#/components/icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./Breadcrumbs.module.css";
import { BreadcrumbsProps } from "./Breadcrumbs.props";

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
	const pathname = usePathname();
	const paths = pathname?.slice(1).split("/");
	const pathsIsValid = paths?.[paths.length - 1];

	return (
		<div className={styles.breadcrumbs}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<div className={styles.goBack}>
						<Link href={"/"}>
							<Home />
						</Link>
						{pathsIsValid && <Arrows />}
					</div>
					{pathsIsValid &&
						paths?.map((p, i, arr) => {
							const path = `/${arr.slice(0, i + 1).join("/")}`;
							return (
								<span className={styles.path} key={path}>
									<Link
										className={clsx(styles.link, {
											[styles.active]: i === arr.length - 1,
											"pointer-events-none": i === arr.length - 1
										})}
										href={path}
									>
										{p}
									</Link>
									{i !== arr.length - 1 && <Arrows />}
								</span>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Breadcrumbs;
