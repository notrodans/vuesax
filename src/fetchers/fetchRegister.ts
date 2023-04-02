import { SignUpFormInputs } from "#/app/(auth)/_interfaces";
import { $baseAxios } from "#/axios";
import axios from "axios";

interface SignUpResult {
	isSuccess: boolean;
	error?: Error;
	messages?: string[];
	status?: number;
}

export const fetchRegister = async (data: SignUpFormInputs): Promise<SignUpResult | undefined> => {
	try {
		const response = await $baseAxios.post("auth/register", { ...data });

		return {
			isSuccess: true,
			error: undefined,
			status: response.status
		};
	} catch (e) {
		if (axios.isAxiosError(e)) {
			return {
				isSuccess: false,
				messages: [...e.response?.data.message],
				error: new Error(e.response?.statusText),
				status: e.response?.status
			};
		} else if (e instanceof Error) {
			return {
				isSuccess: false,
				error: e,
				status: undefined
			};
		}
	}
};
