import React, { FC } from "react";
import Image from "next/image";
// import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";
const SectionSeven: FC = () => {
    function handleClick(url: string) {
        window.open(url, "_blank");
    }

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="mx-auto max-w-[1400px] text-center pt-10 smJl:pb-16 pb-10 px-8 overflow-hidden"
        >
            <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch">
                <div className="w-full smJl:w-1/2 max-w-full p-4 flex flex-col items-center px-4 mb-10 text-left">
                    <Image
                        className="mx-auto bg-white"
                        src="/assets/images/joolux-logo.png"
                        width={336}
                        height={118.92}
                        quality={100}
                    />
                    <p className="w-full text-center text-[#231f20] font-normal text-[30px] tracking-wider px-0">
                        Sàn giao dịch hàng hiệu
                        <br />
                        chính hãng đã qua sử dụng
                    </p>
                </div>
                <div className="w-full smJl:w-1/2 max-w-full flex justify-center p-4 px-4 mb-10">
                    <div className="h-full flex flex-col justify-between items-start">
                        <div
                            className="flex flex-row items-center justify-between cursor-pointer"
                            onClick={() =>
                                handleClick("https://www.facebook.com/jooluxvn")
                            }
                        >
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g1.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[24px] tracking-wider px-7">
                                fb.com/joolux
                            </p>
                        </div>
                        <div
                            className="flex flex-row items-center justify-between cursor-pointer"
                            onClick={() => handleClick("https://joolux.com")}
                        >
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g2.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[24px] tracking-wider px-7">
                                www.joolux.com
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g3.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[24px] tracking-wider px-7">
                                1900 292984
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g4.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[24px] tracking-wider px-7">
                                info@joolux.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSeven;
