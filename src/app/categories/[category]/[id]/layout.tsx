import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	return <Wrapper>{children}</Wrapper>;
}
