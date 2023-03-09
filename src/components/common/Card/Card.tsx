import { Heart, ShopBag, Star } from "#/components/icons";
import { Button, Title } from "#/components/UI";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

const Card: FC<CardProps> = props => {
	const { image, title, text, cost, rating, className, ...cardProps } = props;

	return (
		<div className={clsx(styles.card, className)} {...cardProps}>
			<div className={styles.image}></div>
			<Image
				className={clsx(styles.image)}
				src={image}
				width={220}
				height={273}
				sizes='100vw'
				style={{
					height: 273,
					objectFit: "contain"
				}}
				priority
				alt={"card"}
			/>
			<div className={styles.body}>
				<div className={styles.header}>
					<Button size='small' weight='600' iconRight={<Star />} className={styles.ratingButton}>
						<span className={styles.rating}>{rating}</span>
					</Button>
					<span className={styles.cost}>{cost}</span>
				</div>
				<div className={styles.description}>
					<Title tag='h3' margin={false} className={styles.title}>
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
