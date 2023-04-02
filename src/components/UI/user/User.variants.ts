import { Variants } from "framer-motion";

export const menuVariants: Variants = {
	visible: {
		className: "active",
		visibility: "visible",
		opacity: 1
	},
	hidden: {
		visibility: "hidden",
		opacity: 0
	}
};
