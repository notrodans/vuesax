import { signIn } from "next-auth/react";

interface SignInResult {
	isSuccess: boolean;
	error?: Error;
	status: number;
}

export const fetchSignIn = async (data: {
	email: string;
	password: string;
}): Promise<SignInResult> => {
	const response = await signIn("credentials", {
		...data,
		redirect: false
	});

	if (!response) {
		throw new Error("No response from authentication server");
	}

	const { ok, status, error } = response;

	if (!ok) {
		return {
			isSuccess: false,
			error: new Error(error),
			status: status
		};
	}

	return {
		isSuccess: ok,
		error: undefined,
		status: status
	};
};
