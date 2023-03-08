import { Heart, ShopBag, Star } from "#/components/icons";
import { Button, Title } from "#/components/UI";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

const Card: FC<CardProps> = ({ image, title, text, cost, rating, className, ...props }) => {
	return (
		<div className={clsx(styles.card, className)} {...props}>
			<div className={styles.image}>
				<Image
					src={image}
					width={220}
					height={273}
					style={{
						width: "auto",
						height: "17.0625rem",
						aspectRatio: "220/273",
						objectFit: "contain"
					}}
					loading={"lazy"}
					alt={"card"}
				/>
			</div>
			<div className={styles.body}>
				<div className={styles.header}>
					<Button size='small' iconRight={<Star />} className={styles.ratingButton}>
						<span className={styles.rating}>{rating}</span>
					</Button>
					<span className={styles.cost}>{cost}</span>
				</div>
				<div className={styles.description}>
					<Title tag='h3' className={styles.title}>
						{title}
					</Title>
					<p className={styles.text}>{text}</p>
				</div>
				<div className={styles.buttons}>
					<Button
						apperance='gray'
						weight='600'
						className={clsx(styles.button, styles.wishButton)}
						icon={<Heart />}
						textTransform='upper'
					>
						wishlist
					</Button>
					<Button
						weight='600'
						className={clsx(styles.button, styles.addButton)}
						icon={<ShopBag />}
						textTransform='upper'
					>
						add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
