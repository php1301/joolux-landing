import { ProxyTypeSet } from "immer/dist/internal";
import React, { FC } from "react";
import BlogMenu from "./blog-menu";

interface IBlogNewsProps {
    banner?: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
}

const BlogNews: FC<IBlogNewsProps> = ({ ...props }) => {
    return (
        <div className="block main-blogs-news">
            <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF text-15px font-bold uppercase border-b border-gray-900 pb-3">
                Bài viết nổi bật
            </h6>

            <div className="py-4 blog-news">
                <ul className="p-0 m-0 block">
                    <li className="pb-2 border-b border-[#e7e7e7]">
                        <div className="flex">
                            <div className="ThumbImage__Container-sc-1m3pb9t-0 jtCWvI flex-none relative w-full overflow-hidden smJl:w-24">
                                <img
                                    src="https://images.ctfassets.net/b7g5dqsgeo8w/4fxPx5FkiC9eZVdyVYAlOD/a220c8bb100b2371aff542ec6f980cb5/thumbnail.jpg"
                                    className="absolute top-0 left-0 h-full w-full"
                                />
                            </div>

                            <div className="w-full pl-5 smJl:pl-6 content-news">
                                <a className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2">
                                    Loạt túi hiệu sang tay giảm giá sâu thời
                                    dịch
                                </a>
                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2 inline-block w-4 h-4 relative">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU absolute h-full w-full"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    25/06/2021
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4 border-b border-[#e7e7e7]">
                        <div className="flex">
                            <div className="ThumbImage__Container-sc-1m3pb9t-0 jtCWvI flex-none relative w-full overflow-hidden smJl:w-24">
                                <img
                                    src="https://images.ctfassets.net/b7g5dqsgeo8w/pozwhRfDLvtU840SMg9ob/ae11bdfb18fefc91dad15c7eb8d72171/H1-Joolux-Bottega-Veneta-Intrecciato-handbag-2.jpg"
                                    className="absolute top-0 left-0 h-full w-full"
                                />
                            </div>

                            <div className="w-full pl-5 smJl:pl-6 content-news">
                                <a className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2">
                                    Bottega Veneta: lựa chọn dành cho những
                                    người sành điệu
                                </a>
                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2 inline-block w-4 h-4 relative">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU absolute h-full w-full"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    25/06/2021
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4 border-b border-[#e7e7e7]">
                        <div className="flex">
                            <div className="ThumbImage__Container-sc-1m3pb9t-0 jtCWvI flex-none relative w-full overflow-hidden smJl:w-24">
                                <img
                                    src="https://images.ctfassets.net/b7g5dqsgeo8w/5uDmRai1IAwbwEquJ4UhJf/c5535e9b4d3f16af8b20ceed91437e11/H1-Joolux-Paris-Fashion-week-thumb.jpg"
                                    className="absolute top-0 left-0 h-full w-full"
                                />
                            </div>

                            <div className="w-full pl-5 smJl:pl-6 content-news">
                                <a className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2">
                                    Liệu Tuần lễ Thời trang Paris có phá vỡ chu
                                    trình biểu diễn trực tuyến?
                                </a>
                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2 inline-block w-4 h-4 relative">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU absolute h-full w-full"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    25/06/2021
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4">
                        <div className="flex">
                            <div className="w-full">
                                <a
                                    className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2"
                                    href="/blog/khong-con-la-thu-vui-xa-xi-suu-tam-giay-nay-tro-thanh-hinh-thuc-dau-tu-moi"
                                >
                                    Không còn là thú vui xa xỉ, sưu tầm giày nay
                                    trở thành hình thức đầu tư mới
                                </a>

                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    04/07/2020
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4">
                        <div className="flex">
                            <div className="w-full">
                                <a
                                    className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2"
                                    href="/blog/khong-con-la-thu-vui-xa-xi-suu-tam-giay-nay-tro-thanh-hinh-thuc-dau-tu-moi"
                                >
                                    Dior Bobby - Biểu tượng thời trang đương đại
                                    của Dior
                                </a>

                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    02/07/2020
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4">
                        <div className="flex">
                            <div className="w-full">
                                <a
                                    className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2"
                                    href="/blog/khong-con-la-thu-vui-xa-xi-suu-tam-giay-nay-tro-thanh-hinh-thuc-dau-tu-moi"
                                >
                                    HOT: Bộ sưu tập kết hợp của thương hiệu thời
                                    trang xa xỉ Louis Vuitton và Nigo
                                </a>

                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    01/07/2020
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4">
                        <div className="flex">
                            <div className="w-full">
                                <a
                                    className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2"
                                    href="/blog/khong-con-la-thu-vui-xa-xi-suu-tam-giay-nay-tro-thanh-hinh-thuc-dau-tu-moi"
                                >
                                    Kiệt tác Ronde Louis Cartier tượng trưng cho
                                    nghệ thuật của Maison des Métiers d’Art
                                </a>

                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    30/06/2020
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="pb-2 pt-4">
                        <div className="flex">
                            <div className="w-full">
                                <a
                                    className="font-semibold text-primary hover:text-secondary transition-colors duration-200 text-15px block mb-2"
                                    href="/blog/khong-con-la-thu-vui-xa-xi-suu-tam-giay-nay-tro-thanh-hinh-thuc-dau-tu-moi"
                                >
                                    Kanye West hợp tác cùng Gap trong bộ sưu tập
                                    Yeezy mới
                                </a>

                                <div className="text-xs flex items-center">
                                    <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
                                        <svg
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            stroke-linejoin="round"
                                            stroke-miterlimit="1.414"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-labelledby="title"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                        >
                                            <path
                                                d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    29/06/2020
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default BlogNews;
