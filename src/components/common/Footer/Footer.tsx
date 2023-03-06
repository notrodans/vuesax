import { FC } from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

const Footer: FC<FooterProps> = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>Footer</div>
		</footer>
	);
};

export default Footer;
