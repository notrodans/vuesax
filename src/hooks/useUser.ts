import { $axiosWithAuth } from "#/axios";
import { IUser } from "#/interfaces/User.interface";
import { useSession } from "next-auth/react";
import useSWR, { SWRConfiguration } from "swr";

export const useUser = (params?: SWRConfiguration) => {
	if (params) params.revalidateOnFocus = false;
	const session = useSession();

	const fetcher = async (url: string) => {
		if (!session.data) {
			return null;
		}
		const { data } = await $axiosWithAuth.post<IUser>(url);
		return data;
	};

	const user = useSWR("user/profile", fetcher, params);

	return user;
};
