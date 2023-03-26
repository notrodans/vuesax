import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return <Wrapper>{children}</Wrapper>;
}
