import { AuthWrapper } from "#/layouts/AuthWrapper/AuthWrapper";

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
	return <AuthWrapper>{children}</AuthWrapper>;
}
