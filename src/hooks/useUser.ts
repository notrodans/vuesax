import { getInstance } from "#/axios";
import { useSession } from "next-auth/react";
import useSWR, { SWRConfiguration } from "swr";

export const useUser = (params?: SWRConfiguration) => {
	if (params) params.revalidateOnFocus = false;
	const session = useSession();
	const fetcher = async (url: string) => {
		const $axios = await getInstance({
			refreshToken: session?.data?.user.refreshToken,
			accessToken: session?.data?.user.accessToken
		});
		const { data } = await $axios.post(url);
		return data;
	};

	const user = useSWR("user/profile", fetcher, params);

	return user;
};
