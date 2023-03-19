"use client";

import { Heart, ShopBag, Star } from "#/components/icons";
import { Button } from "#/components/UI";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

const Card: FC<CardProps> = props => {
	const {
		title,
		slug,
		price,
		rating,
		primaryImage,
		images,
		description,
		categorySlug,
		id,
		className
	} = props;

	return (
		<div className={clsx(styles.card, className)}>
			<Link href={`/categories/${categorySlug}/${slug}`} className={styles.image}>
				<Image
					src={primaryImage}
					width={220}
					height={273}
					style={{
						width: "100%",
						height: "auto"
					}}
					priority
					alt={"card"}
				/>
			</Link>
			<div className={styles.body}>
				<div className={styles.header}>
					<Button size='small' weight='600' iconRight={<Star />} className={styles.ratingButton}>
						<span className={styles.rating}>{rating}</span>
					</Button>
					<span className={styles.cost}>${price}</span>
				</div>
				<div className={styles.description}>
					<Link className={styles.title} href={`/categories/${categorySlug}/${slug}`}>
						{title}
					</Link>
					<p className={styles.text}>{description}</p>
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
