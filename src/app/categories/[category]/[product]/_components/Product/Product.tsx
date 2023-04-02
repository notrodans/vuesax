"use client";

import { Button, Carousel, Divider, Span, Text, Title } from "#/components/UI";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./Product.module.css";
import { IProductProps } from "./Product.props";
import { SwiperProps } from "swiper/react";

const carouselOptions: SwiperProps = {
	slidesPerView: 3,
	spaceBetween: 10,
	wrapperClass: styles.carousel
};

export const Product: FC<IProductProps> = props => {
	const {
		id,
		slug,
		brand,
		price,
		title,
		images,
		categorySlug,
		primaryImage,
		rating,
		userId,
		brandSlug,
		updatedAt,
		createdAt,
		description,
		...productProps
	} = props;
	const [primaryImageState, setPrimaryImageState] = useState(primaryImage);

	useEffect(() => {
		const handleCancel = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setPrimaryImageState(primaryImage);
			}
		};

		document.addEventListener("keydown", handleCancel, true);

		return () => {
			document.removeEventListener("keydown", handleCancel, true);
		};
	}, [primaryImage]);

	const onChangeImage = (src: string) => {
		setPrimaryImageState(src);
	};

	return (
		<div className={styles.product} {...productProps}>
			<div className={styles.images}>
				<div className={styles.primaryImage}>
					<Image
						className={styles.image}
						src={primaryImageState}
						width={640}
						height={480}
						sizes='100vw'
						style={{
							width: "100%",
							height: "auto",
							objectFit: "cover",
							aspectRatio: "640 / 480"
						}}
						alt='image'
					/>
					<Button className={styles.rating} rounded weight='600' size='small'>
						{rating}
					</Button>
				</div>
				<Carousel {...carouselOptions}>
					{images.map((i, n) => (
						<button
							onKeyDown={e => {
								(e.key === " " || e.key === "Enter") && onChangeImage(i);
							}}
							onClick={() => onChangeImage(i)}
							key={n}
						>
							<Image
								className={styles.image}
								src={i}
								width={228}
								height={171}
								sizes='100vw'
								style={{
									width: "100%",
									height: "auto",
									objectFit: "cover",
									aspectRatio: "228 / 171"
								}}
								alt='image'
							/>
						</button>
					))}
				</Carousel>
			</div>
			<div className={styles.body}>
				<div className={styles.header}>
					<Title tag='h3'>{title}</Title>
					<Span className={styles.price}>
						{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)}
					</Span>
				</div>
				<Button rounded>Buy now</Button>
				<Divider marginSize='small' />
				<Text size='small'>{description}</Text>
			</div>
		</div>
	);
};
