import { FC } from "react";
import { IconProps } from "./types";

const Grid: FC<IconProps> = () => {
	return (
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='1'
				y='1'
				width='6'
				height='6'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<rect
				x='11'
				y='1'
				width='6'
				height='6'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<rect
				x='11'
				y='11'
				width='6'
				height='6'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<rect
				x='1'
				y='11'
				width='6'
				height='6'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default Grid;
