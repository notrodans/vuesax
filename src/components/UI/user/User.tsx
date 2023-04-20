import { useOutside } from "#/hooks/useOutside";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { FC, useRef } from "react";
import styles from "./User.module.css";
import { UserProps } from "./User.props";
import { menuVariants } from "./User.variants";

const User: FC<UserProps> = props => {
	const ref = useRef<HTMLDivElement>(null);
	const { isOpen, setIsOpen } = useOutside(ref);
	const { firstName, lastName, avatar, ...userProps } = props;

	const onLogout = async () => {
		await signOut();
	};

	return (
		<div ref={ref} className={styles.user}>
			<button onClick={() => setIsOpen(true)} type='button' className={styles.body} {...userProps}>
				<div className={styles.fio}>
					<span className={styles.firstName}>{firstName}</span>
					<span className={styles.lastName}>{lastName}</span>
				</div>
				<Image src={avatar || "/avatar.png"} width={34} height={34} alt={"avatar"} />
			</button>
			<motion.div
				variants={menuVariants}
				animate={isOpen ? "visible" : "hidden"}
				initial={isOpen ? "visible" : "hidden"}
				className={styles.menu}
			>
				<ul className={styles.options}>
					<li className={styles.item}>
						<a className={styles.option} onClick={onLogout} href='#'>
							Logout
						</a>
					</li>
				</ul>
			</motion.div>
		</div>
	);
};

export default User;
