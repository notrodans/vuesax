"use client";

import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Home() {
	return (
		<Wrapper>
			<div className='hero container'>
				<Link href={"/categories"}>Go to categories</Link>
				<br />
				<button onClick={() => signIn("credentials")}>Go to signin</button>
			</div>
		</Wrapper>
	);
}
