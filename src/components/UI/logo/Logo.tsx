import Image from "next/image";
import { FC } from "react";
import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";

const Logo: FC<LogoProps> = props => {
	return (
		<div className={styles.logo} {...props}>
			<Image
				src={"/logo.png"}
				width={38}
				height={27}
				style={{
					height: "27",
					aspectRatio: "38/27",
					objectFit: "contain"
				}}
				alt={"logo"}
			/>
			<span className={styles.title}>Vuesax</span>
		</div>
	);
};

export default Logo;
