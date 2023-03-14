import { options } from "#/../pages/api/auth/[...nextauth]";
import { SessionProvider } from "#/layouts/SessionProvider";
import { SSRProvider } from "#/layouts/SSRProvider";
import "#/styles/globals.css";
import { getServerSession } from "next-auth";
import { Montserrat } from "next/font/google";

export const metadata = {
	title: "Vuesax | eCommerce shop"
};

const primaryFont = Montserrat({
	weight: ["300", "400", "600"],
	subsets: ["latin"],
	variable: "--primary-font",
	style: "normal"
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(options);

	return (
		<html className={`${primaryFont.variable}`} lang='en'>
			<head>
				<link rel='shortcut icon' href={"/logo.png"} />
			</head>
			<body>
				<SSRProvider>
					<SessionProvider session={session} refetchInterval={5 * 60}>
						{children}
					</SessionProvider>
				</SSRProvider>
			</body>
		</html>
	);
}
