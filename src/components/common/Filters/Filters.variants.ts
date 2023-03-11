import { Variants } from "framer-motion";

export const variants: Variants = {
	visible: {
		opacity: 1,
		height: "100%",
		visibility: "visible",
		transition: {
			stiffness: 2500
		}
	},
	hidden: {
		opacity: 0,
		height: "0px",
		visibility: "hidden",
		transition: {
			stiffness: 1500
		}
	}
};
