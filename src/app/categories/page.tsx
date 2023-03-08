import { Card } from "#/components/common";
import { CardProps } from "#/components/common/Card/Card.props";
import styles from "./categories.module.css";

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

export default function Page() {
	return (
		<div className={styles.categories}>
			<div className={styles.title}>7,618 results found</div>
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
}
