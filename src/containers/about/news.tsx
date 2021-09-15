import React, { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { newsCarousel } from "@framework/static/news";
const breakpoints = {
    "1500": {
        slidesPerView: 4,
    },
    "700": {
        slidesPerView: 3,
    },
    "0": {
        slidesPerView: 2,
    },
};
function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 480 ? imgObj?.mobile : imgObj?.desktop;
}

const News: FC = () => {
    const { width } = useWindowSize();
    return (
        <div className="border-t border-[#cfcfcf] ">
            <div className="mx-auto max-w-[1234px] py-10 sm:py-16 font-body">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 lg:w-1/4 md:pr-6 lg:pr-14">
                        <h5
                            style={{ fontSize: 32 }}
                            className="font-brand mb-8 text-[#101010]"
                        >
                            Truyền thông viết về chúng tôi
                        </h5>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-3/4 news-carousel relative">
                        <Carousel
                            breakpoints={breakpoints}
                            centeredSlides={false}
                            spaceBetween={20}
                            autoplay={{ delay: 3000 }}
                            loopedSlides={4}
                            slidesPerGroup={4}
                            autoHeight={false}
                            buttonClassName="hidden"
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {newsCarousel?.map((news) => (
                                <SwiperSlide
                                    className="carouselItem px-0 2xl:px-3.5 h-[104px] w-[226px]"
                                    key={`banner--key-${news?.id}`}
                                >
                                    <div>
                                        <a
                                            href={news.slug}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="bg-gray-100 py-2 px-4 xl:py-5 xl:px-8 h-[104px] w-[226px]"
                                            tabIndex={-1}
                                            style={{
                                                width: "100%",
                                                display: "inline-block",
                                            }}
                                        >
                                            <div className="flex h-full">
                                                <img
                                                    // width={226}
                                                    // height={104}
                                                    src={
                                                        getImage(
                                                            width,
                                                            news.image,
                                                        )?.url ||
                                                        "/assets/images/hero/banner-2-jl.jpg"
                                                    }
                                                    className="m-auto"
                                                    alt={news.title}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default News;
