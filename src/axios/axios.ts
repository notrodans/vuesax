import axios from "axios";

const getInstance = ({ accessToken }: { accessToken: string | undefined }) => {
	const $axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true });

	$axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

	return $axios;
};

export default getInstance;
