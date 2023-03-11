import { FC } from "react";
import { IconProps } from "./types";

const Star: FC<IconProps> = props => {
	return (
		<svg
			{...props}
			width='13'
			height='14'
			viewBox='0 0 13 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.5 1L8.354 4.94953L12.5 5.58675L9.5 8.65931L10.208 13L6.5 10.9495L2.792 13L3.5 8.65931L0.5 5.58675L4.646 4.94953L6.5 1V1Z'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default Star;
