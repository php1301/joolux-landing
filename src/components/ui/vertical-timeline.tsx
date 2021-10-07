import React from "react";

const VerticalTimeline: FC = () => {
    return (
        <div>
            <div className="container bg-gray-200 mx-auto w-full h-1/2">
                <div className="relative wrap overflow-hidden p-10 h-1/2">
                    <div
                        className="absolute h-full vertical-timeline-line"
                        style={{ left: "50%" }}
                    />
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline" data-aos="fade-right" data-aos-delay="1800">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4 ">
                            <h3 className="!text-[#E5C289] !text-[22px]">
                                07/10
                            </h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Những thương hiệu góp mặt tại chương trình
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" data-aos="fade-left" data-aos-delay="2000">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="!text-[#E5C289] !text-[22px]">
                                09/10
                            </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                                Livestream đấu giá và mở bán chính thức - Lần 1
                            </p>
                        </div>
                    </div>
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline" data-aos="fade-right" data-aos-delay="2200">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="!text-[#E5C289] !text-[22px]">
                                30/10
                            </h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Livestream đấu giá và mở bán chính thức - Lần 2
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                </div>
            </div>
        </div>
    );
};

export default VerticalTimeline;
