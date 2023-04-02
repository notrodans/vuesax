import { RefObject, useEffect, useState } from "react";

export const useOutside = (
	ref: RefObject<HTMLDivElement>,
	callback?: (event?: MouseEvent | KeyboardEvent) => void
) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
				if (callback) callback(e);
			}
		};

		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsOpen(false);
				if (callback) callback(e);
			}
		};

		document.addEventListener("click", handleClick, true);
		document.addEventListener("keydown", handleEsc, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
			document.removeEventListener("keydown", handleEsc, true);
		};
	}, [ref, callback]);

	return { isOpen, setIsOpen };
};
