import { getInstance } from "#/axios";
import { useSession } from "next-auth/react";
import useSWR, { SWRConfiguration } from "swr";

export const useUser = (params?: SWRConfiguration) => {
	const session = useSession();
	const fetcher = async (url: string) => {
		const $axios = getInstance({ accessToken: session.data?.user.accessToken });
		const { data } = await $axios.post(url, {
			refreshToken: session.data?.user.refreshToken
		});
		return data;
	};

	const user = useSWR("user/profile", fetcher, params);

	return user;
};
