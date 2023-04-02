"use client";

import { Logo, User } from "#/components/UI";
import { useUser } from "#/hooks/useUser";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = () => {
	const { data, isLoading } = useUser();

	return (
		<header className={styles.header}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<Link href='/'>
						<Logo />
					</Link>
					<div
						className={clsx(styles.right, {
							[styles.loading]: isLoading
						})}
					>
						{isLoading ? (
							<div
								className={clsx("h-[34px] rounded-2xl bg-vuesax-bluewood", {
									"relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
										isLoading
								})}
							>
								<div className='space-y-3'>
									<div className='w-64 rounded-lg bg-gray-700' />
								</div>
							</div>
						) : data ? (
							<User firstName={data?.firstName} lastName={data?.lastName} avatar={data?.image} />
						) : (
							<div className={styles.links}>
								<Link href={"/signin"}>Log In</Link>
								<Link href={"/signup"}>Sign Up</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
