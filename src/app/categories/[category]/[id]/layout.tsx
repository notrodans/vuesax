import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import { ReactNode } from "react";

export default async function Layout({
	children,
	params
}: {
	children: ReactNode;
	params: { id: string };
}) {
	return <Wrapper>{children}</Wrapper>;
}
