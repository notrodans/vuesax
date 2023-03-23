import axios from "axios";
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
				const { data } = await axios.post(
					process.env.NEXT_PUBLIC_API_URL + "/auth/login",
					credentials
				);
				if (data) {
					const { user, tokens } = data;
					const role = user.role;
					return { role, ...tokens };
				}
				return null;
			}
		})
	],
	pages: {
		signIn: "/signin"
	},
	session: {
		strategy: "jwt",
		maxAge: 15 * 60 * 60 * 24
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return {
					...user
				};
			}
			if (token) {
				const currentTime = Math.floor(Date.now() / 1000);
				const decodedToken = decode(token.accessToken) as {
					email: string;
					iat: number;
					exp: number;
				};
				if (decodedToken && decodedToken.exp < currentTime) {
					try {
						const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/refresh", {
							refreshToken: token.refreshToken
						});
						token.accessToken = data.accessToken;
					} catch (err) {
						if (axios.isAxiosError(err))
							if (err.response?.status === 401) {
								console.log(err.response.data.message);
							}
					}
				}
			}
			return token;
		},
		async session({ session, token }) {
			session.user = {
				...token
			};
			return session;
		}
	}
};

export default NextAuth(options);
