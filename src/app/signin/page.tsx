"use client";

import { Pattern } from "#/components/icons";
import { useUser } from "#/hooks/useUser";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./signin.module.css";

export default function Page() {
	const { data, isLoading } = useUser({
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		shouldRetryOnError: false
	});
	const router = useRouter();

	useEffect(() => {
		if (data) {
			router.push("/");
		}
	}, [router, data]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.signin}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<div className={styles.left}>
						<Pattern />
					</div>
					<div className={styles.right}>{data?.login}</div>
				</div>
			</div>
		</div>
	);
}
