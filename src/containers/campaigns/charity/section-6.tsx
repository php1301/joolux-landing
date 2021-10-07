import React, { FC } from "react";
import Image from "next/image";
// import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";
const SectionSix: FC = () => {
    return (
        <div className="section-1">
            <div className="mx-auto max-w-[1400px] text-center pt-4 smJl:pb-16 pb-10 px-8 overflow-hidden">
                {/* Row 1 */}
                <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch">
                    <div className="w-full smJl:w-1/2 p-4 flex flex-col items-center smJl:items-start px-4 mb-0 text-left">
                        <p className="text-[#231f20] font-normal text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tổ chức
                        </p>
                        <div className="grid grid-cols-1 smJl:grid-cols-3 justify-items-center smJl:justify-items-start gap-7 w-full">
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f1.png"
                                    width={139}
                                    height={139}
                                    quality={100}
                                />
                            </div>
                            <div className="col-span-2 flex justify-center items-center h-[170px] w-[370px] bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f2.png"
                                    width={339}
                                    height={68}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full smJl:w-1/2 p-4 flex flex-col items-center smJl:items-start px-4 mb-10 text-left">
                        <p className="text-[#231f20] font-normal text-[28px] pt-0 pb-4 px-0">
                            Bảo trợ truyền thông
                        </p>
                        <div className="grid grid-cols-1 smJl:grid-cols-3 justify-items-center smJl:justify-items-start gap-7 w-full">
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f3.png"
                                    width={160}
                                    height={64}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f4.png"
                                    width={132}
                                    height={65}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f5.png"
                                    width={137}
                                    height={63}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="flex justify-between md:flex-row flex-col mt-0 items-center md:items-stretch">
                    <div className="w-full smJl:w-1/2 p-4 flex flex-col items-center smJl:items-start px-4 mb-10 text-left">
                        <p className="text-[#231f20] font-normal text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tài trợ
                        </p>
                        <div className="grid grid-cols-1 justify-items-center smJl:justify-items-start smJl:grid-cols-3 gap-x-7 gap-y-7 w-full">
                            {/* Grid 5 items: Row 1 */}
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f6.png"
                                    width={121}
                                    height={121}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f7.png"
                                    width={219}
                                    height={142}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f8.png"
                                    width={112}
                                    height={57}
                                    quality={100}
                                />
                            </div>
                            {/* Grid5 items: Row 2 */}
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f12.png"
                                    width={139}
                                    height={139}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] pl-4 bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f13.png"
                                    width={176}
                                    height={113}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full smJl:w-1/2 p-4 flex flex-col items-center smJl:items-start px-4 mb-10 text-left">
                        <p className="text-[#231f20] font-normal text-[28px] pt-0 pb-4 px-0">
                            Đơn vị đồng hành
                        </p>
                        <div className="grid grid-cols-1 justify-items-center smJl:justify-items-start smJl:grid-cols-3 gap-7 w-full">
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f9.png"
                                    width={95}
                                    height={62}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f10.png"
                                    width={127}
                                    height={63}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[170px] w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funders/f11.png"
                                    width={139}
                                    height={44}
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
