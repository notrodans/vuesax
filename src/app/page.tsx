import Link from "next/link";

export default function Home() {
	return (
		<div className='hero container'>
			<Link href={"/categories"}>Go to categories</Link>
		</div>
	);
}
