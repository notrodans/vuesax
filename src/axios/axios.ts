import axios from "axios";

const getInstance = async ({
	accessToken,
	refreshToken
}: {
	accessToken?: string;
	refreshToken?: string;
}) => {
	const $axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true });

	$axios.interceptors.request.use(config => {
		if (!config.headers["Authorization"]) {
			config.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		config.data = {
			refreshToken: refreshToken
		};
		return config;
	});

	return $axios;
};

export default getInstance;
