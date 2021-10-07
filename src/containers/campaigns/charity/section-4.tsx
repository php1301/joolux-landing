import React, { FC } from "react";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
const SectionFour: FC = () => {
    return (
        <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="mx-auto max-w-[1400px] text-center pt-8 pb-4 px-8 overflow-hidden"
        >
            <h2 className="font-brand text-black uppercase text-lg md:text-3xl mb-6">
                Sản phẩm đấu giá
            </h2>
            <img className="mx-auto" src="/assets/images/divider.jpg" />
            <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch">
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-1.jpg"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={360}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6">
                        Anna house
                    </p>
                    <p className="text-[#231f20] font-normal text-[20px] mb-0">
                        Cặp đá quý Natural swiss topaz & peridot
                    </p>
                    <p className="text-[#231f20] font-medium text-[20px] mb-0">
                        Giá khởi điểm:{" "}
                        <span className="text-[26px]"> 3.000.000đ</span>
                    </p>
                </div>
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-2.jpg"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={360}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6">
                        Trinnie
                    </p>
                    <p className="text-[#231f20] font-normal text-[20px] mb-0">
                        Tác phẩm tranh sơn dầu Đồng Bằng (năm 2020)
                    </p>
                    <p className="text-[#231f20] font-medium text-[20px] mb-0">
                        Giá khởi điểm:{" "}
                        <span className="text-[26px]"> 1.945.000đ</span>
                    </p>
                </div>
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-3.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={360}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6">
                        MVIO
                    </p>
                    <p className="text-[#231f20] font-normal text-[20px] mb-0">
                        Versace Wallet
                    </p>
                    <p className="text-[#231f20] font-medium text-[20px] mb-0">
                        Giá khởi điểm:{" "}
                        <span className="text-[26px]"> 3.000.000đ</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch">
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-4.jpg"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={360}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6">
                        Anna House
                    </p>
                    <p className="text-[#231f20] font-normal text-[20px] mb-0">
                        Mẫu 3
                    </p>
                    <p className="text-[#231f20] font-medium text-[20px] mb-0">
                        Giá khởi điểm:{" "}
                        <span className="text-[26px]"> 3.000.000đ</span>
                    </p>
                </div>
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left">
                    <Image
                        src="/assets/images/sp-5.png"
                        width={350}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(565, 275),
                        )}`}
                        height={360}
                        quality={100}
                    />
                    <p className="font-bold text-[14px] text-gray-400 uppercase mt-6">
                        Trinnie
                    </p>
                    <p className="text-[#231f20] font-normal text-[20px] mb-0">
                        Mẫu 10
                    </p>
                    <p className="text-[#231f20] font-medium text-[20px] mb-0">
                        Giá khởi điểm:{" "}
                        <span className="text-[26px]"> 1.945.000đ</span>
                    </p>
                </div>
                <div className="w-full smJl:w-1/3 max-w-[400px] p-4 flex flex-col items-start px-4 mb-10 text-left"></div>
            </div>
        </div>
    );
};

export default SectionFour;
