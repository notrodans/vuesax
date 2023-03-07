"use client";

import React, { MutableRefObject } from "react";
import { FC, useRef } from "react";
import {
	mergeProps,
	useFocusRing,
	useNumberFormatter,
	useSlider,
	useSliderThumb,
	VisuallyHidden
} from "react-aria";
import { SliderState, useSliderState } from "react-stately";
import { SliderProps } from "./Slider.props";

const Slider: FC<SliderProps> = props => {
	const trackRef = useRef(null);
	const numberFormatter = useNumberFormatter({});
	const state = useSliderState({ ...props, numberFormatter });
	const { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);

	return (
		<div
			aria-label={props?.label || labelProps["aria-label"]}
			{...groupProps}
			className={`slider ${state.orientation}`}
		>
			{/* Create a container for the label and output element. */}
			{props.label && (
				<div className='label-container'>
					<label {...labelProps}>{props.label}</label>
					<output {...outputProps}>{state.getThumbValueLabel(0)}</output>
				</div>
			)}
			{/* The track element holds the visible track line and the thumb. */}
			<div {...trackProps} ref={trackRef} className={`track ${state.isDisabled ? "disabled" : ""}`}>
				<Thumb index={0} state={state} trackRef={trackRef} />
			</div>
		</div>
	);
};

const Thumb: FC<{
	state: SliderState;
	trackRef: MutableRefObject<null>;
	index: number;
}> = props => {
	const { state, trackRef, index } = props;
	const inputRef = React.useRef(null);
	const { thumbProps, inputProps, isDragging } = useSliderThumb(
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
			className={`thumb ${isFocusVisible ? "focus" : ""} ${isDragging ? "dragging" : ""}`}
		>
			<VisuallyHidden>
				<input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
			</VisuallyHidden>
		</div>
	);
};

export default Slider;
