import { Wrapper } from "#/layouts/Wrapper/Wrapper";
import Link from "next/link";

export default function Home() {
	return (
		<Wrapper>
			<div className='hero container'>
				<Link href={"/categories"}>Go to categories</Link>
				<br />
				<Link href='signin'>Go to signin</Link>
			</div>
		</Wrapper>
	);
}
