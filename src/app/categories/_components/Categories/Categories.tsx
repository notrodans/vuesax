"use client";

import { Card } from "#/components/common";
import { CardProps } from "#/components/common/Card/Card.props";
import { Grid } from "#/components/icons";
import { Button, SearchField, Title } from "#/components/UI";
import { FC } from "react";
import styles from "./Categories.module.css";

const cardFirst: CardProps = {
	image: "/apple-watch.png",
	cost: "$349",
	rating: "3.4",
	text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	title: "Apple Watch"
};

const cardSecond: CardProps = {
	image: "/iphone-x.png",
	cost: "$349",
	rating: "3.4",
	text: "Lorem ipsum dolor sit amet",
	title: "Iphone X"
};

const cardThird: CardProps = {
	image: "/jbl-speaker.png",
	cost: "$349",
	rating: "3.4",
	text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
	title: "Jbl Speaker"
};

export const Categories: FC = () => {
	return (
		<div className={styles.categories}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.title}>
					7,618 results found
				</Title>
				<Button apperance='white' rounded size='medium' className={styles.grid} icon={<Grid />} />
			</div>
			<div className={styles.search}>
				<SearchField onSubmit={() => 1} placeholder='Search here' aria-label='find orders' />
			</div>
			<div className={styles.body}>
				<Card {...cardFirst} />
				<Card {...cardSecond} />
				<Card {...cardThird} />
				<Card {...cardFirst} />
				<Card {...cardSecond} />
				<Card {...cardThird} />
			</div>
		</div>
	);
};
