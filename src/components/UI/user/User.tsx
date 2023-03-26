import Image from "next/image";
import { FC } from "react";
import styles from "./User.module.css";
import { UserProps } from "./User.props";

const User: FC<UserProps> = props => {
	const { firstName, lastName, avatar, ...userProps } = props;
	return (
		<div className={styles.user} {...userProps}>
			<div className={styles.fio}>
				<span className={styles.firstName}>{firstName}</span>
				<span className={styles.lastName}>{lastName}</span>
			</div>
			<Image src={avatar || "/avatar.png"} width={34} height={34} alt={"avatar"} />
		</div>
	);
};

export default User;
