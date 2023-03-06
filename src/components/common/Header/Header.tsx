import { User } from "#/components/common";
import { Bell, Search } from "#/components/icons";
import { Logo } from "#/components/UI";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

const Header: FC<HeaderProps> = () => {
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
						<User />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
