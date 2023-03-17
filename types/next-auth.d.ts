import "next-auth";
import "next-auth/jwt";

type Role = "ADMIN" | "USER";

declare module "next-auth" {
	interface Session {
		user: {
			accessToken: string;
			refreshToken: string;
			role: Role;
		} & DefaultSession["user"];
	}
	interface User extends DefaultUser {
		accessToken: string;
		refreshToken: string;
		role: Role;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string;
		refreshToken: string;
		role: Role;
	}
}
