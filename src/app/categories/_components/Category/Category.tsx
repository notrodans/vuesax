"use client";

import { Title } from "#/components/UI";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Category.module.css";
import { CardProps } from "./Category.props";

const Category: FC<CardProps> = props => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { name, slug, id, image, createdAt, updatedAt, ref, children, ...linkProps } = props;

	return (
		<Link href={`/categories/${slug}`} className={styles.category} {...linkProps}>
			<Image
				className={styles.image}
				src={image}
				width={220}
				height={273}
				style={{
					width: "100%",
					height: "auto"
				}}
				priority
				alt={"card"}
			/>
			<div className={styles.body}>
				<Title tag='h3'>{name}</Title>
			</div>
		</Link>
	);
};

export default Category;
