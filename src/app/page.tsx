import Link from "next/link";

export default function Home() {
	return (
		<div className='hero container'>
			<Link href={"/category/1"}>В категорию</Link>
		</div>
	);
}
