import axios from "axios";
import { getSession, signOut } from "next-auth/react";

export const $baseAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL
});

const authInstance = () => {
	const $axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true });

	$axios.interceptors.request.use(async config => {
		const session = await getSession({ req: config.headers.referer });
		if (session?.user.accessToken && session?.user.refreshToken) {
			if (!config.headers["Authorization"]) {
				config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
			}
			config.data = {
				refreshToken: session?.user.refreshToken
			};
		}
		return config;
	});

	$axios.interceptors.response.use(
		response => response,
		async error => {
			const originalRequest = error.config;
			const session = await getSession({ req: originalRequest.headers.referer });
			if (
				(error.response?.status === 401 || error.response?.status === 500) &&
				!originalRequest._retry &&
				session?.user.refreshToken
			) {
				originalRequest._retry = true;

				try {
					const newSession = await getSession({ req: originalRequest.headers.referer });
					const { data } = await $axios.post("auth/refresh", {
						refreshToken: newSession?.user.refreshToken
					});
					if (newSession?.user.accesToken) {
						originalRequest.headers.Authorization = data.accessToken;
					}

					await $axios(originalRequest);
				} catch (e) {
					if (axios.isAxiosError(e)) {
						return await signOut();
					}
				}
			}

			return Promise.reject(error);
		}
	);

	return $axios;
};

export default authInstance();
