import { Footer, Header } from "#/components/common";
import { Breadcrumbs } from "#/components/UI";
import { SSRProvider } from "#/layouts/SSRProvider";
import "#/styles/globals.css";
import { Montserrat } from "next/font/google";
import styles from "./styles.module.css";

export const metadata = {
	title: "Vuesax | eCommerce shop"
};

const primaryFont = Montserrat({
	weight: ["300", "400", "600"],
	subsets: ["latin"],
	variable: "--primary-font",
	style: "normal"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={`${primaryFont.variable}`} lang='en'>
			<head>
				<link rel='shortcut icon' href={"/logo.png"} />
			</head>
			<body>
				<SSRProvider>
					<div className={styles.wrapper}>
						<Header />
						<Breadcrumbs />
						<main className={styles.page}>{children}</main>
						<Footer />
					</div>
				</SSRProvider>
			</body>
		</html>
	);
}
