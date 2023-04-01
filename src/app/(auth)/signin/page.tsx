"use client";

import { Pattern } from "#/components/icons";
import { Button, Error, Input } from "#/components/UI";
import { fetchSignIn } from "#/fetchers/fetchSignIn";
import { useUser } from "#/hooks/useUser";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInFormInputs } from "../_interfaces";
import styles from "./signin.module.css";

export default function Page() {
	const router = useRouter();
	const [error, setError] = useState<string>("");
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignInFormInputs>();

	const onSubmit: SubmitHandler<SignInFormInputs> = async data => {
		const response = await fetchSignIn(data);

		if (response.isSuccess) {
			router.push("/");
		} else if (response.error) {
			setError(response.error.message);
		}
	};

	const { data, isLoading } = useUser({
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		shouldRetryOnError: false
	});

	useEffect(() => {
		if (data) {
			router.push("/");
		}
	}, [router, data]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const onChangeHandler = (event: string) => {
		const e = { target: { event } };
		return e;
	};

	return (
		<div className={styles.signin}>
			<div className={clsx(styles.container, "container")}>
				<div className={styles.body}>
					<div className={styles.left}>
						<Pattern />
					</div>
					<div className={styles.right}>
						{error && <Error message={error} />}
						<form method={"post"} onSubmit={handleSubmit(onSubmit)}>
							<Input
								{...register("email", {
									required: {
										value: true,
										message: "Please fill the email"
									}
								})}
								errorMessage={errors.email?.message}
								onChange={e => register("email").onChange(onChangeHandler(e))}
								label='Email'
								type='email'
								placeholder='example@gmail.com'
							/>
							<Input
								{...register("password", {
									required: { value: true, message: "Please fill the password" }
								})}
								errorMessage={errors.password?.message}
								onChange={e => register("password").onChange(onChangeHandler(e))}
								label='Password'
								type='password'
							/>
							<Button
								className={styles.button}
								rounded
								size='custom'
								apperance='primary'
								type='submit'
							>
								Sign In
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
