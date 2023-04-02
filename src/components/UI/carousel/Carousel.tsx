import { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from "./Carousel.props";

const Carousel: FC<CarouselProps> = ({ children, ...props }) => {
	return (
		<Swiper {...props}>
			{Array.isArray(children) ? (
				children.map((element, key) => <SwiperSlide key={key}>{element}</SwiperSlide>)
			) : (
				<></>
			)}
		</Swiper>
	);
};

export default Carousel;
