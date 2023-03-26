import { Variants } from "framer-motion";

export const variants: Variants = {
	visible: {
		opacity: 1,
		height: "auto",
		visibility: "visible"
	},
	hidden: {
		height: "0",
		opacity: 0,
		visibility: "hidden"
	}
};
