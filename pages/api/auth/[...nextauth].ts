import { withJWT } from "#/axios";
import { decode } from "jsonwebtoken";
import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: AuthOptions = {
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				try {
					const response = await fetch("http://localhost:3001/api/auth/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(credentials)
					});
					const { user, tokens } = await response.json();
					return { user, ...tokens };
				} catch (err) {
					console.log(err);
				}
			}
		})
	],
	session: {
		strategy: "jwt"
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token = {
					id: user.user.id,
					email: user.user.email,
					name: user.user.login,
					firstName: user.user.firstName,
					lastName: user.user.lastName,
					image: "/avatar.png",
					accessToken: user.accessToken,
					refreshToken: user.refreshToken
				};
				return token;
			}
			if (token) {
				const currentTime = Math.floor(Date.now() / 1000);
				const decodedToken = decode(token.accessToken) as {
					email: string;
					iat: number;
					exp: number;
				};

				if (decodedToken && decodedToken.exp < currentTime) {
					const { data } = await withJWT.post(
						"auth/refresh",
						{
							refreshToken: token.refreshToken
						},
						{
							headers: {
								Authorization: `Bearer ${token.refreshToken}`
							}
						}
					);
					token.accessToken = data.accessToken;
					token.refreshToken = data.refreshToken;
				}
			}
			return token;
		},
		async session({ session, token }) {
			const { name, ...newSession } = session.user;
			newSession.login = token.name;
			newSession.image = "/avatar.png";
			newSession.firstName = token.firstName;
			newSession.lastName = token.lastName;
			newSession.accessToken = token.accessToken;
			newSession.refreshToken = token.refreshToken;
			session.user = newSession;
			return session;
		}
	}
};

export default NextAuth(options);
