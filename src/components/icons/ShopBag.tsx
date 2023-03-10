import { FC } from "react";
import { IconProps } from "./types";

const ShopBag: FC<IconProps> = props => {
	return (
		<svg
			{...props}
			width='18'
			height='20'
			viewBox='0 0 18 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				opacity='0.737212'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3.66667 1L1 4.6V17.2C1 18.1941 1.79594 19 2.77778 19H15.2222C16.2041 19 17 18.1941 17 17.2V4.6L14.3333 1H3.66667Z'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				opacity='0.737212'
				d='M1 5.5H17'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				opacity='0.737212'
				d='M13 9C13 10.6569 11.433 12 9.5 12C7.567 12 6 10.6569 6 9'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ShopBag;
