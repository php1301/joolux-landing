import React, { FC } from "react";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { Button } from "@components/ui/button";
import { shimmer } from "@utils/shimmer";
const SectionFive: FC = () => {
    function handleClick(url: string) {
        window.open(url, "_blank");
    }

    return (
        <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="mx-auto max-w-[1400px] text-center pt-4 smJl:pb-16 pb-10 px-8 overflow-hidden"
        >
            <h2 className="font-brand text-black uppercase text-lg md:text-3xl mb-6">
                Sản phẩm bán
            </h2>
            <img className="mx-auto" src="/assets/images/divider.jpg" />
            <div className="grid grid-cols-2 md:grid-cols-3 mt-10 justify-items-center items-center md:items-stretch">
                <div className="w-full  max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-4.jpg"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        Anna House
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Anna House BA01
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 2.280.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            1.280.000đ
                        </span>
                    </p>
                </div>
                <div className="w-full max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-9.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        The Mien
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Nhẫn Sapphire
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 7.000.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            3.900.000đ
                        </span>
                    </p>
                </div>
                <div className="w-full  max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-3.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        MVIO
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Versace Wallet
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 5.700.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            3.000.000đ
                        </span>
                    </p>
                </div>
                {/* </div>
            <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch"> */}
                <div className="w-full max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-11.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        The Mien
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Đầm họa tiết in hoa BC04
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 5.900.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            2.900.000đ
                        </span>
                    </p>
                </div>
                <div className="w-full  max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-7.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        Trinnie
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giày Cao Gót BT01
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 3.890.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            2.000.000đ
                        </span>
                    </p>
                </div>
                <div className="w-full  max-w-[400px] p-4  px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-12.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={450}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0">
                        The Mien
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Nhẫn Sapphire
                    </p>
                    <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                        Giá gốc:{" "}
                        <span className="line-through"> 5.000.000đ</span>
                    </p>
                    <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                        Giá bán:{" "}
                        <span className="text-[20px] smJl:text-[23px]">
                            {" "}
                            2.500.000đ
                        </span>
                    </p>
                </div>
            </div>
            <Button
                className="h-full w-1/2 md:w-1/4 mt-5  text-white text-xs md:text-md font-medium text-center uppercase countdown-button hover:text-[#101010]"
                onClick={() => handleClick("https://joolux.com")}
            >
                Xem thêm
            </Button>
        </div>
    );
};

export default SectionFive;
