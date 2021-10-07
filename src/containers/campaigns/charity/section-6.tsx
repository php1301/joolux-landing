import React, { FC } from "react";
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
// import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";

interface IFunderImg {
    id: number;
    image: {
        mobile: {
            width: number;
            height: number;
        };
        desktop: {
            width: number;
            height: number;
        };
    };
}

const fundersImg: IFunderImg[] = [
    {
        id: 1,
        image: {
            mobile: {
                width: 84.83,
                height: 84.83,
            },
            desktop: {
                width: 139,
                height: 139,
            },
        },
    },
    {
        id: 2,
        image: {
            mobile: {
                width: 206.88,
                height: 41.5,
            },
            desktop: {
                width: 339,
                height: 68,
            },
        },
    },
    {
        id: 3,
        image: {
            mobile: {
                width: 97,
                height: 39,
            },
            desktop: {
                width: 160,
                height: 64,
            },
        },
    },
    {
        id: 4,
        image: {
            mobile: {
                width: 80,
                height: 39,
            },
            desktop: {
                width: 132,
                height: 65,
            },
        },
    },
    {
        id: 5,
        image: {
            mobile: {
                width: 83,
                height: 38,
            },
            desktop: {
                width: 137,
                height: 63,
            },
        },
    },
    {
        id: 6,
        image: {
            mobile: {
                width: 73,
                height: 84,
            },
            desktop: {
                width: 121,
                height: 121,
            },
        },
    },
    {
        id: 7,
        image: {
            mobile: {
                width: 133.65,
                height: 86.66,
            },
            desktop: {
                width: 219,
                height: 142,
            },
        },
    },
    {
        id: 8,
        image: {
            mobile: {
                width: 68.35,
                height: 34.78,
            },
            desktop: {
                width: 112,
                height: 57,
            },
        },
    },
    {
        id: 9,
        image: {
            mobile: {
                width: 90,
                height: 21,
            },
            desktop: {
                width: 172,
                height: 38,
            },
        },
    },
    {
        id: 10,
        image: {
            mobile: {
                width: 107.41,
                height: 68.96,
            },
            desktop: {
                width: 176,
                height: 113,
            },
        },
    },
    {
        id: 11,
        image: {
            mobile: {
                width: 84.83,
                height: 10.98,
            },
            desktop: {
                width: 139,
                height: 18,
            },
        },
    },
    {
        id: 12,
        image: {
            mobile: {
                width: 89.1,
                height: 17.09,
            },
            desktop: {
                width: 146,
                height: 28,
            },
        },
    },
    {
        id: 13,
        image: {
            mobile: {
                width: 57.97,
                height: 37.84,
            },
            desktop: {
                width: 95,
                height: 62.01,
            },
        },
    },
    {
        id: 14,
        image: {
            mobile: {
                width: 77.5,
                height: 38.45,
            },
            desktop: {
                width: 127,
                height: 63,
            },
        },
    },
    {
        id: 15,
        image: {
            mobile: {
                width: 101.91,
                height: 10.37,
            },
            desktop: {
                width: 167,
                height: 17,
            },
        },
    },
    {
        id: 16,
        image: {
            mobile: {
                width: 33.56,
                height: 33.56,
            },
            desktop: {
                width: 55,
                height: 55,
            },
        },
    },
    {
        id: 17,
        image: {
            mobile: {
                width: 84.83,
                height: 26.85,
            },
            desktop: {
                width: 139,
                height: 44,
            },
        },
    },
];

function getImage(deviceWidth: number, imgIndex: number) {
    const imgObj: IFunderImg = fundersImg.filter(
        (img) => img.id == imgIndex,
    )[0];
    return deviceWidth < 640
        ? {
              width: imgObj.image.mobile.width,
              height: imgObj.image.mobile.height,
          }
        : {
              width: imgObj.image.desktop.width,
              height: imgObj.image.desktop.height,
          };
}

const SectionSix: FC = () => {
    const { width } = useWindowSize();
    return (
        <div className="section-1">
            <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="mx-auto max-w-[1400px] text-center pt-4 lg:pb-14 pb-10 px-2 md:px-12 overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center md:auto-cols-[170px] md:items-stretch">
                    {/* x0 y0 */}
                    <div className="w-full p-4 flex flex-col items-start px-4">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tổ chức
                        </p>
                        <div className="grid grid-cols-3 justify-items-between lg:justify-items-start gap-4 w-full overflow-hidden">
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f1.png"
                                    width={getImage(width, 1).width}
                                    height={getImage(width, 1).height}
                                    quality={100}
                                />
                            </div>
                            <div className="col-span-2 flex justify-center items-center w-[205px] h-[85px] px-2 lg:h-[170px] lg:w-[380px] bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f2.png"
                                    width={getImage(width, 2).width}
                                    height={getImage(width, 2).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/* x0 y1 */}
                    <div className="w-full p-4 flex flex-col items-start text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Bảo trợ truyền thông
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 w-full">
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f3.png"
                                    width={getImage(width, 3).width}
                                    height={getImage(width, 3).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f4.png"
                                    width={getImage(width, 4).width}
                                    height={getImage(width, 4).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f5.png"
                                    width={getImage(width, 5).width}
                                    height={getImage(width, 5).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    {/* <div className="flex justify-between md:flex-row flex-col mt-0 items-center md:items-stretch"> */}
                    {/* x1 y0 */}
                    <div className="w-full p-4 flex flex-col items-start px-4 text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tài trợ
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 lg:gap-y-8 w-full">
                            {/* Grid 6 items: Row 1 */}
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f6.png"
                                    width={getImage(width, 6).width}
                                    height={getImage(width, 6).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f7.png"
                                    width={getImage(width, 7).width}
                                    height={getImage(width, 7).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f8.png"
                                    width={getImage(width, 8).width}
                                    height={getImage(width, 8).height}
                                    quality={100}
                                />
                            </div>
                            {/* Grid5 items: Row 2 */}
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f9.png"
                                    width={getImage(width, 9).width}
                                    height={getImage(width, 9).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center pl-5 h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f10.png"
                                    width={getImage(width, 10).width}
                                    height={getImage(width, 10).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f11.png"
                                    width={getImage(width, 11).width}
                                    height={getImage(width, 11).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 flex flex-col items-start px-4 text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tổ chức
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 lg:gap-x-0 lg:gap-y-8 w-full">
                            {/* Grid 6 items: Row 1 */}
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f12.png"
                                    width={getImage(width, 12).width}
                                    height={getImage(width, 12).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f13.png"
                                    width={getImage(width, 13).width}
                                    height={getImage(width, 13).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f14.png"
                                    width={getImage(width, 14).width}
                                    height={getImage(width, 14).height}
                                    quality={100}
                                />
                            </div>
                            {/* Grid5 items: Row 2 */}
                            <div className="flex justify-center items-center pl-6 h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f15.png"
                                    width={getImage(width, 15).width}
                                    height={getImage(width, 15).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f16.png"
                                    width={getImage(width, 16).width}
                                    height={getImage(width, 16).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[85px] px-2 w-[85px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f17.png"
                                    width={getImage(width, 17).width}
                                    height={getImage(width, 17).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSix;
