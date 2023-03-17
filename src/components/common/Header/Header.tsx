"use client";

import { User } from "#/components/common";
import { Bell, Search } from "#/components/icons";
import { Logo } from "#/components/UI";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = () => {
	const { data, status } = useSession();

	return (
		<header className={styles.header}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<Link href='/'>
						<Logo />
					</Link>
					<div
						className={clsx(styles.right, {
							[styles.loading]: status
						})}
					>
						{status === "loading" ? (
							<div
								className={clsx("h-[34px] rounded-2xl bg-vuesax-bluewood", {
									"relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
										status
								})}
							>
								<div className='space-y-3'>
									<div className='w-64 rounded-lg bg-gray-700' />
								</div>
							</div>
						) : data ? (
							<>
								<div className={styles.actions}>
									<button>
										<Search />
									</button>
									<button>
										<Bell />
									</button>
								</div>
								<User
									firstName={data.user?.firstName}
									lastName={data.user?.lastName}
									avatar={data.user?.image}
								/>
							</>
						) : (
							<Link href={"/signin"}>Log in</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
