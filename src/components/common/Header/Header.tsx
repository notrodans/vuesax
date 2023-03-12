"use client";

import { User } from "#/components/common";
import { Bell, Search } from "#/components/icons";
import { Logo } from "#/components/UI";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = () => {
	const session = useSession();

	return (
		<header className={styles.header}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<Logo />
					<div className={styles.right}>
						<div className={styles.actions}>
							<button>
								<Search />
							</button>
							<button>
								<Bell />
							</button>
						</div>
						<User
							firstName={session.data?.user.firstName}
							lastName={session.data?.user.lastName}
							avatar={session.data?.user?.image}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
