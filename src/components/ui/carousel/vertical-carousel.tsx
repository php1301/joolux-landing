import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import ImageMagnifier from "@components/ui/magnifier-image";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function VerticalCarousel({ data }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="gallery-container">
                <Swiper
                    watchOverflow
                    watchSlidesVisibility
                    watchSlidesProgress
                    preventInteractionOnTransition
                    effect={"fade"}
                    thumbs={{ swiper: thumbsSwiper }}
                    fadeEffect={{ crossFade: true }}
                    className="gallery-main"
                    // navigation
                >
                    <div className="swiper-wrapper">
                        {data?.gallery?.map((item, index: number) => (
                            <SwiperSlide>
                                <ImageMagnifier
                                    src={
                                        item?.original ??
                                        "/assets/placeholder/products/product-gallery.svg"
                                    }
                                    key={`product-gallery-key-${index}`}
                                    className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                                    alt={`${data?.name}--${index}`}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <Swiper
                    centeredSlides
                    centeredSlidesBounds
                    slidesPerView={4}
                    watchSlidesVisibility
                    watchSlidesProgress
                    spaceBetween={10}
                    direction="vertical"
                    onSwiper={setThumbsSwiper}
                    navigation
                    className="gallery-thumbs"
                >
                    <div className="swiper-wrapper">
                        {data?.gallery?.map((item, index: number) => (
                            <SwiperSlide>
                                <img
                                    src={
                                        item?.original ??
                                        "/assets/placeholder/products/product-gallery.svg"
                                    }
                                    key={`product-gallery-key-${index}`}
                                    className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                                    alt={`${data?.name}--${index}`}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    );
}
