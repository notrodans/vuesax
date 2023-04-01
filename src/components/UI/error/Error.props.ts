import { HTMLMotionProps } from "framer-motion";

export interface IErrorProps extends HTMLMotionProps<"div"> {
	message: string;
}
