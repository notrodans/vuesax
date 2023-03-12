import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT, JWTOptions } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			login: string;
			firstName: string;
			lastName: string;
			accessToken: string;
			refreshToken: string;
		} & DefaultSession["user"];
	}
	interface User {
		user: {
			login: string;
			firstName: string;
			lastName: string;
		} & DefaultUser;
		accessToken: string;
		refreshToken: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		id: string | null;
		name: string;
		firstName: string;
		lastName: string;
		image: string;
		accessToken: string;
		refreshToken: string;
	}
}
