import axios from "axios";
import { getSession } from "next-auth/react";

const withJWT = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true });

withJWT.interceptors.request.use(async config => {
	const session = await getSession();
	if (session && !withJWT.defaults.headers["Authorization"]) {
		withJWT.defaults.headers.Authorization = `Bearer ${session.user.accessToken}`;
	}
	return config;
});

withJWT.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			!originalRequest._retry &&
			!error.config.url.includes("/auth")
		) {
			originalRequest._retry = true;
			const session = await getSession();
			if (session) {
				try {
					const { data } = await withJWT.post("/auth/refresh", {
						refreshToken: session.user.refreshToken
					});
					const { accessToken } = data;
					session.user.accessToken = accessToken;
					return withJWT(originalRequest);
				} catch (e) {
					console.error("Error refreshing token: ", e);
				}
			}
		}
		throw error;
	}
);

export default withJWT;
