import clsx from "clsx";
import {
	forwardRef,
	Fragment,
	KeyboardEvent,
	memo,
	ReactNode,
	useEffect,
	useRef,
	useState
} from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import { Star } from "./Star";

const Rating = forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
	const { rating, setRating, isEditable = false, className, tabIndex, ...ratingProps } = props;
	const [ratingArray, setRatingArray] = useState<ReactNode[]>(new Array(5).fill(<></>));
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

	function computeFocus(r: number, i: number): number {
		if (!isEditable) {
			return -1;
		}
		if (!rating && i === 0) {
			return tabIndex ?? 0;
		}
		if (r === i + 1) {
			return tabIndex ?? 0;
		}
		return -1;
	}

	function constructingRating(currentRating: number) {
		const updatedArray = ratingArray.map((_r, i: number) => (
			<button
				type='button'
				className={clsx(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable
				})}
				key={i}
				tabIndex={computeFocus(rating, i)}
				onClick={() => onClick(i + 1)}
				onKeyDown={handleKey}
				onMouseEnter={() => changeDisplay(i + 1)}
				onMouseLeave={() => changeDisplay(rating)}
				ref={r => ratingArrayRef.current?.push(r)}
				role={isEditable ? "slider" : ""}
				aria-label={isEditable ? "Set rating please" : "Rating " + rating}
				aria-valuemax={5}
				aria-valuemin={1}
				aria-valuenow={rating}
			>
				<Star />
			</button>
		));
		setRatingArray(updatedArray);
	}

	useEffect(() => {
		constructingRating(rating);
	}, [rating, tabIndex]);

	function changeDisplay(rating: number) {
		if (!isEditable) return;
		constructingRating(rating);
	}

	function onClick(rating: number) {
		if (!isEditable || !setRating) return;
		setRating(rating);
	}

	function handleKey(e: KeyboardEvent) {
		if (!isEditable || !setRating) {
			return;
		}
		if (e.code === "ArrowRight" || e.code === "ArrowUp") {
			if (!rating) {
				setRating(1);
			} else {
				e.preventDefault();
				setRating(rating < 5 ? rating + 1 : 5);
			}
			ratingArrayRef.current[rating]?.focus();
		}
		if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
			e.preventDefault();
			setRating(rating > 1 ? rating - 1 : 1);
			ratingArrayRef.current[rating - 2]?.focus();
		}
	}

	return (
		<div ref={ref} className={clsx(styles.rating, className)} {...ratingProps}>
			{ratingArray.map((r, i) => (
				<Fragment key={i}>{r}</Fragment>
			))}
		</div>
	);
});

Rating.displayName = "rating";

export default memo(Rating);
