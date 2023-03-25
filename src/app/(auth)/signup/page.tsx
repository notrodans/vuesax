"use client";

import { getAuthInstance } from "#/axios";
import { Pattern } from "#/components/icons";
import { Button, Input } from "#/components/UI";
import { useUser } from "#/hooks/useUser";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./signup.module.css";

interface FormInputs {
	login: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export default function Page() {
	const router = useRouter();
	const [error, setError] = useState<string>("");
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const fetchRegister = async () => {
			try {
				const $axios = await getAuthInstance();
				await $axios.post("auth/register", { ...data });
				router.push("/signin");
			} catch (err) {
				if (axios.isAxiosError(err)) {
					return setError(err.message);
				}
				console.log(err);
			}
		};

		await fetchRegister();
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
								Sign Up
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
