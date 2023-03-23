"use client";

import { Pattern } from "#/components/icons";
import { Button, Input } from "#/components/UI";
import { useUser } from "#/hooks/useUser";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./signin.module.css";

interface FormInputs {
	email: string;
	password: string;
}

export default function Page() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		await signIn("credentials", {
			...data
		});
	};

	const { data, isLoading } = useUser({
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		shouldRetryOnError: false
	});
	const router = useRouter();

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
