import Image from "next/image";
import { FC } from "react";
import styles from "./User.module.css";
import { UserProps } from "./User.props";

const User: FC<UserProps> = () => {
	return (
		<div className={styles.user}>
			<span className={styles.title}>John Doe</span>
			<Image src={"/avatar.png"} width={34} height={34} alt={"avatar"} />
		</div>
	);
};

export default User;
