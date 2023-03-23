import { getInstance } from "#/axios";
import { useSession } from "next-auth/react";
import useSWR, { SWRConfiguration } from "swr";

export const useUser = (params?: SWRConfiguration) => {
	if (params) params.revalidateOnFocus = false;
	const session = useSession();

	if (!session.data) {
		return { data: null, error: null, isLoading: false };
	}
	const fetcher = async (url: string) => {
		const $axios = await getInstance({
			refreshToken: session?.data?.user.refreshToken,
			accessToken: session?.data?.user.accessToken
		});
		const { data } = await $axios.post(url);
		return data;
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const user = useSWR("user/profile", fetcher, params);

	return user;
};
