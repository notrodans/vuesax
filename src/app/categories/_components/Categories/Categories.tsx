"use client";

import { Card } from "#/components/common";
import { CardProps } from "#/components/common/Card/Card.props";
import { Grid, Loader } from "#/components/icons";
import { Button, SearchField, Title } from "#/components/UI";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
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
	const [isLoading, setIsLoading] = useState(true);
	const [isGrid, setIsGrid] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsGrid((localStorage.getItem("isGrid") === "true" ? true : false) || false);
			setIsLoading(false);
		}
	}, []);

	const onGridClick = () => {
		setIsGrid(prev => {
			localStorage.setItem("isGrid", prev ? "false" : "true");
			return !prev;
		});
	};

	return isLoading ? (
		<div className={styles.center}>
			<Loader width={64} height={64} />
		</div>
	) : (
		<div className={styles.categories}>
			<div className={styles.header}>
				<Title tag='h3' className={styles.title}>
					7,618 results found
				</Title>
				<Button
					onClick={onGridClick}
					apperance='white'
					rounded
					size='medium'
					className={styles.gridButton}
					icon={<Grid />}
				/>
			</div>
			<div className={styles.search}>
				<SearchField placeholder='Search here' aria-label='find orders' />
			</div>
			<motion.div
				className={clsx(styles.body, {
					[styles.grid]: isGrid
				})}
			>
				<Card {...cardFirst} />
				<Card {...cardSecond} />
				<Card {...cardThird} />
				<Card {...cardFirst} />
				<Card {...cardSecond} />
				<Card {...cardThird} />
			</motion.div>
		</div>
	);
};
