import { signIn } from "next-auth/react";

export const useSignIn = async (data: {
	email: string;
	password: string;
}): Promise<{ isSuccess: boolean; error: string | undefined; status?: number | undefined }> => {
	const response = await signIn("credentials", {
		...data,
		redirect: false
	});

	if (response?.ok) {
		return { isSuccess: true, error: undefined, status: response.status };
	} else {
		return {
			isSuccess: false,
			error: response?.error,
			status: response?.status ? +response?.status : undefined
		};
	}
};
