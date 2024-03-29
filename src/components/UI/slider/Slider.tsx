import clsx from "clsx";
import { FC, useRef } from "react";
import {
	mergeProps,
	useFocusRing,
	useNumberFormatter,
	useSlider,
	useSliderThumb,
	VisuallyHidden
} from "react-aria";
import { useSliderState } from "react-stately";
import styles from "./Slider.module.css";
import { SliderProps, ThumbProps } from "./Slider.props";

const Slider: FC<SliderProps> = props => {
	const { multi = false, ...sliderProps } = props;
	const trackRef = useRef(null);
	const numberFormatter = useNumberFormatter(sliderProps.formatOptions);
	const state = useSliderState({ ...sliderProps, numberFormatter });
	const { groupProps, trackProps, labelProps, outputProps } = useSlider(
		sliderProps,
		state,
		trackRef
	);

	return (
		<div {...groupProps} className={styles.slider}>
			{props.label && (
				<div className={styles.label}>
					<label className={styles.labelTitle} {...labelProps}>
						{props.label}
					</label>
					<output {...outputProps}>
						{!multi
							? state.getThumbValueLabel(0)
							: `${state.getThumbValueLabel(0)} - ${state.getThumbValueLabel(1)}`}
					</output>
				</div>
			)}
			<div
				{...trackProps}
				ref={trackRef}
				className={clsx(styles.track, {
					[styles.disabled]: state.isDisabled
				})}
			>
				<Thumb index={0} state={state} trackRef={trackRef} />
				{multi && <Thumb index={1} state={state} trackRef={trackRef} />}
			</div>
		</div>
	);
};

const Thumb: FC<ThumbProps> = props => {
	const { state, trackRef, index } = props;
	const inputRef = useRef(null);
	const { thumbProps, inputProps } = useSliderThumb(
		{
			index,
			trackRef,
			inputRef
		},
		state
	);

	const { focusProps, isFocusVisible } = useFocusRing();
	return (
		<div
			{...thumbProps}
			className={clsx(styles.thumb, {
				[styles.focus]: isFocusVisible
			})}
		>
			<VisuallyHidden>
				<input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
			</VisuallyHidden>
		</div>
	);
};

export default Slider;
