import { FC } from "react";
import { IconProps } from "./types";

const Arrow: FC<IconProps> = props => {
	return (
		<svg
			width='8'
			height='14'
			viewBox='0 0 8 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M7 13L1 7L7 1'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default Arrow;
