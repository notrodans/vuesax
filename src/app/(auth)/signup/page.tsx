"use client";

import { Pattern } from "#/components/icons";
import { Button, Error, Input } from "#/components/UI";
import { fetchRegister } from "#/fetchers/fetchRegister";
import { useUser } from "#/hooks/useUser";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormInputs } from "../_interfaces";
import styles from "./signup.module.css";

export default function Page() {
	const router = useRouter();
	const [error, setError] = useState<string | string[]>("");
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<SignUpFormInputs>();

	const onSubmit: SubmitHandler<SignUpFormInputs> = async (data: SignUpFormInputs) => {
		const response = await fetchRegister(data);
		if (response?.isSuccess) {
			router.push("/signin");
		} else if (response?.error) {
			if (response?.messages) {
				setError([...response?.messages]);
			} else {
				setError(response.error.message);
			}
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
								{...register("login", {
									required: {
										value: true,
										message: "Please fill the login"
									}
								})}
								onChange={e => register("login").onChange(onChangeHandler(e))}
								errorMessage={errors.login?.message}
								label='Login'
								type='text'
								placeholder='JohnDoe228'
							/>
							<Input
								{...register("firstName", {
									required: {
										value: true,
										message: "Please fill the firstName"
									}
								})}
								errorMessage={errors.firstName?.message}
								onChange={e => register("firstName").onChange(onChangeHandler(e))}
								label='Firstname'
								type='text'
								placeholder='John'
							/>
							<Input
								{...register("lastName", {
									required: {
										value: true,
										message: "Please fill the lastName"
									}
								})}
								errorMessage={errors.lastName?.message}
								onChange={e => register("lastName").onChange(onChangeHandler(e))}
								label='Lastname'
								type='text'
								placeholder='Doe'
							/>
							<Input
								{...register("email", {
									required: {
										value: true,
										message: "Please fill the email"
									}
								})}
								errorMessage={errors.email?.message}
								onPaste={e => register("email").onChange(e)}
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
								onPaste={e => register("password").onChange(e)}
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
								Sign Up
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
