import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode,Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../index.css'
import { CustomCarouselProps } from "@/props/materialUI/customCarousel";

const CustomCarousel = (props: CustomCarouselProps) => {

    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500, disableOnInteraction: false,}} pagination={{clickable: true,}}
                navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                {props.itemCarousel && props.itemCarousel.map((item, index) => (
                    <SwiperSlide key={index} className={"carousel-slide__wrapper"}>
                        <img
                            src={item.srcImage}
                            alt={item.altImg}
                            className={props.customClassImg || "default-carousel-img"}
                        />

                        <div className={props.customClassWrapperText || "carousel-slide__overlay"}>
                            <h2 className={props.customClassNameTextSlider || "carousel-slide__title"}>{item.name}</h2>
                            <p className={props.customClassDescriptionSlider || "carousel-slide__description"}>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    );
};

export default CustomCarousel;
