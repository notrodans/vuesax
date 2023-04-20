import { FC } from "react";
import { IconProps } from "./types";

const Home: FC<IconProps> = props => {
	return (
		<svg
			width='15'
			height='17'
			viewBox='0 0 15 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M1 6.25L7.5 1L14 6.25V14.5C14 15.3284 13.3533 16 12.5556 16H2.44444C1.6467 16 1 15.3284 1 14.5V6.25Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M5 16V8H10V16' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
};

export default Home;
