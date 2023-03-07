import { Heart, ShopBag, Star } from "#/components/icons";
import { Button, Title } from "#/components/UI";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.css";

const Card: FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					src={"/apple-watch.png"}
					width={220}
					height={272}
					style={{
						width: "100%",
						objectFit: "contain"
					}}
					alt={"card"}
				/>
			</div>
			<div className={styles.body}>
				<div className={styles.header}>
					<Button size='small' iconRight={<Star />} className={styles.ratingButton}>
						<span className={styles.rating}>3.4</span>
					</Button>
					<span className={styles.cost}>$399</span>
				</div>
				<div className={styles.description}>
					<Title tag='h3' className={styles.title}>
						Apple Watch Series 4 GPS
					</Title>
					<p className={styles.text}>Redesigned from scratch and completely revised.</p>
				</div>
				<div className={styles.buttons}>
					<Button
						apperance='gray'
						weight='600'
						className={clsx(styles.button, styles.wishButton)}
						icon={<Heart />}
					>
						wishlist
					</Button>
					<Button weight='600' className={clsx(styles.button, styles.addButton)} icon={<ShopBag />}>
						add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
