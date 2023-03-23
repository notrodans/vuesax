import axios from "axios";

const getInstance = async (params?: { accessToken: string; refreshToken: string }) => {
	const $axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true });

	$axios.interceptors.request.use(config => {
		if (params?.accessToken && params?.refreshToken) {
			if (!config.headers["Authorization"]) {
				config.headers["Authorization"] = `Bearer ${params.accessToken}`;
			}
			config.data = {
				refreshToken: params.refreshToken
			};
		}
		return config;
	});

	return $axios;
};

export default getInstance;
