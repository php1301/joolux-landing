/* eslint-disable no-prototype-builtins */
import React, { useState } from "react";
import { Button } from "@components/ui/button";
// import { Counter } from "@components/common/counter";
// import { getVariations } from "@framework/utils/get-variations";
import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import { AiFillPhone } from "react-icons/ai";
import Link from "@components/ui/link";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import ProductMetaReview from "@components/product/product-meta-review";
import VerticalCarousel from "@components/ui/carousel/vertical-carousel";
import ImageMagnifier from "@components/ui/magnifier-image";
import { ROUTES } from "@utils/routes";
import ProductStatus from "./product-status";
import ProductShipping from "./product-shipping";
import ReviewForm from "@components/common/form/review-form";
import ProductDescription from "./product-description";
import ProductNumber from "./product-number";
import ProductPolicy from "./product-policy";
import { Product } from "@framework/types";
import { useRouter } from "next/router";
import Favorite from "@components/common/favorite";

const productGalleryCarouselResponsive = {
    "768": {
        slidesPerView: 2,
    },
    "0": {
        slidesPerView: 1,
    },
};

const ProductSingleDetails: React.FC<{
    data: Product;
    isFavorite: boolean;
}> = ({ data, isFavorite }) => {
    const router = useRouter();
    const { width } = useWindowSize();
    const { addItemToCart, isInCart } = useCart();
    // const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
    // const [quantity, setQuantity] = useState(1);
    const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
    const [immeAddToCartLoader, setImmeAddToCartLoader] =
        useState<boolean>(false);

    // const gallery = [
    //     {
    //         id: 1,
    //         thumbnail: "/assets/images/products/p-20-1.png",
    //         original: "/assets/images/products/p-20-1.png",
    //     },
    //     {
    //         id: 2,
    //         thumbnail: "/assets/images/products/p-20-2.png",
    //         original: "/assets/images/products/p-20-2.png",
    //     },
    //     {
    //         id: 3,
    //         thumbnail: "/assets/images/products/p-20-3.png",
    //         original: "/assets/images/products/p-20-3.png",
    //     },
    //     {
    //         id: 4,
    //         thumbnail: "/assets/images/products/p-20-4.png",
    //         original: "/assets/images/products/p-20-4.png",
    //     },
    // ];
    const { price, basePrice, discount } = usePrice(
        data && {
            amount:
                data?.onSale && data?.specialPrice
                    ? parseInt(data?.specialPrice as unknown as string)
                    : parseInt(data?.price as unknown as string),
            baseAmount: parseInt(data?.price as unknown as string),
            currencyCode: "VND",
        },
    );
    const { price: retailPrice } = usePrice(
        data && {
            amount: data?.retailPrice,
            baseAmount: data?.retailPrice,
            currencyCode: "VND",
        },
    );
    const { hasToContact } = data?.otherSpecialValue ?? {};
    // const variations = getVariations(data?.variations); // attributes.slug
    // Duyệt coi đã chọn attribute nào chưa, filter bằng slug
    const isSelected = isInCart(data?._id);
    const productMetaData = [
        {
            id: 1,
            title: "Tình trạng sản phẩm",
            content: <ProductStatus status={data?.status} />,
        },
        {
            id: 2,
            title: "Thông tin sản phẩm",
            content: (
                <ProductDescription
                    description={data?.productInformation || "Chưa có"}
                />
            ),
        },
        {
            id: 3,
            title: "Chi tiết sản phẩm",
            content: <ProductNumber details={data?.details} />,
        },
        {
            id: 4,
            title: "Thông tin giao hàng",
            content: <ProductShipping />,
        },
        {
            id: 5,
            title: "Chính sách đổi trả",
            content: <ProductPolicy />,
        },
        {
            id: 6,
            title: "Nhận xét",
            content: <ReviewForm />,
        },
    ];
    function addToCart() {
        if (isSelected) return;
        // to show btn feedback while product carting
        setAddToCartLoader(true);
        setTimeout(() => {
            setAddToCartLoader(false);
        }, 600);

        const item = generateCartItem(data!, {});
        addItemToCart(item, 1);
        toast("Đã thêm vào giỏ hàng", {
            type: "dark",
            progressClassName: "fancy-progress-bar",
            position: width > 768 ? "bottom-right" : "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    function immediatelyCheckout() {
        if (isSelected) return;
        setImmeAddToCartLoader(true);
        setTimeout(() => {
            setImmeAddToCartLoader(false);
        }, 600);

        const item = generateCartItem(data!, {});
        addItemToCart(item, 1);
        router.push("/cart");
    }

    // Debounce onclick with other value
    function contactSeller() {
        console.log("contact seller clicked");
    }
    // function handleAttribute(attribute: any) {
    //     setAttributes((prev) => ({
    //         ...prev,
    //         ...attribute,
    //     }));
    // }
    return (
        <div className="relative block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
            {width < 1025 ? (
                <Carousel
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={productGalleryCarouselResponsive}
                    className="product-gallery"
                    buttonClassName="hidden"
                >
                    {data?.images.map((item, index: number) => (
                        <SwiperSlide key={`product-gallery-key-${index}`}>
                            <ImageMagnifier
                                src={
                                    `${process.env.NEXT_PUBLIC_BASE_IMAGE}${item}` ||
                                    "/assets/placeholder/products/product-gallery.svg"
                                }
                                key={`product-row-gallery-key-${index}`}
                                className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                                alt={`${data?.name}--${index}`}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>
            ) : (
                <div className="col-span-5 grid grid-cols-2 gap-2.5">
                    <VerticalCarousel gallery={data?.images} />
                </div>
            )}

            <div className="col-span-4 pt-8 lg:pt-0 mr-8 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48">
                <div className="my-3">
                    <h4 className="text-2xl leading-[1.333] font-semibold">
                        {data?.brand}
                    </h4>
                    <p className="text-xl my-2 font-normal text-gray-700">
                        {data?.name}
                    </p>
                    <Link
                        href={`${ROUTES.SERVICES}/kiem-dinh-hang-hieu?tab=entrupy`}
                        target="_blank"
                        className="text-green-500 flex items-start"
                    >
                        <img
                            src="https://joolux.com/img/entrupy/verified-by-entrupy.jpg"
                            alt="Được kiểm định bởi Joolux bằng công nghệ Entrupy và chuyên gia"
                            className="mr-2"
                            height="22px"
                            width="22px"
                        />{" "}
                        Được kiểm định bởi Joolux bằng công nghệ Entrupy và
                        chuyên gia
                    </Link>
                    <div className="flex items-center mt-6 mb-8">
                        <div
                            className={`text-2xl font-bold mr-4 ${
                                data?.onSale && discount && "text-red-400"
                            }`}
                        >
                            {price}&nbsp;₫
                        </div>
                        {data?.onSale && discount && (
                            <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ps-2">
                                {basePrice}&nbsp;₫
                            </span>
                        )}
                    </div>
                    {data?.retailPrice && (
                        <div className="flex items-center mt-6 mb-8">
                            <div className="text-2xl font-semibold mr-4 text-black">
                                Giá retail: {retailPrice}&nbsp;₫
                            </div>
                        </div>
                    )}
                    {/* <div className="text-heading font-bold text-base md:text-xl lg:text-2xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
                        Số lượng
                    </div> */}
                    <div className="flex items-center space-s-4 justify-between pt-3 pb-8">
                        {/* <Counter
                            quantity={quantity}
                            onIncrement={() => setQuantity((prev) => prev + 1)}
                            onDecrement={() =>
                                setQuantity((prev) =>
                                    prev !== 1 ? prev - 1 : 1,
                                )
                            }
                            disableDecrement={quantity === 1}
                        /> */}
                        <div className="flex ml-auto flex-1">
                            <Favorite
                                isFavorite={isFavorite}
                                productId={data?._id}
                                className="mr-3"
                            />
                            <h3 className="h-6 text-base md:text-lg text-heading font-normal capitalize">
                                Thêm vào yêu thích
                            </h3>
                        </div>
                    </div>
                    {data?.qty === 0 || data?.is_in_stock === "2" ? (
                        <Button
                            variant="jl"
                            className={`w-full md:w-6/12 xl:w-full mb-4 bg-white text-black border solid border-[#101010] hover:opacity-60 hover:bg-white opacity-60`}
                            disabled
                            loading={addToCartLoader}
                        >
                            <span className="py-2 3xl:px-8">
                                {data?.qty === 0 && data?.is_in_stock !== "2"
                                    ? "Tạm hết hàng"
                                    : "Đang giao dịch"}
                            </span>
                        </Button>
                    ) : hasToContact ? (
                        <div className="flex items-center space-s-4 pt-3">
                            <Button
                                onClick={contactSeller}
                                variant="jl"
                                className={`w-full md:w-6/12 xl:w-full`}
                                disabled={false}
                                loading={immeAddToCartLoader}
                            >
                                <AiFillPhone
                                    color="white"
                                    className="mr-3"
                                    size={24}
                                />
                                <span className="py-2 3xl:px-8">
                                    Liên hệ người bán
                                </span>
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center space-s-4  pt-3">
                                <Button
                                    onClick={addToCart}
                                    variant="jl"
                                    className={`w-full md:w-6/12 xl:w-full mb-4 bg-white text-black border solid border-[#101010] hover:opacity-60 hover:bg-white ${
                                        isSelected &&
                                        "hover:opacity-65 hover:bg-white"
                                    }`}
                                    iconCart
                                    disabled={isSelected}
                                    loading={addToCartLoader}
                                >
                                    <span className="py-2 3xl:px-8">
                                        Thêm vào giỏ hàng
                                    </span>
                                </Button>
                            </div>
                            <div className="flex items-center space-s-4 pt-3">
                                <Button
                                    onClick={immediatelyCheckout}
                                    variant="jl"
                                    className={`w-full md:w-6/12 xl:w-full ${
                                        isSelected &&
                                        "bg-gray-400 hover:bg-gray-400"
                                    }`}
                                    disabled={isSelected}
                                    loading={immeAddToCartLoader}
                                >
                                    <span className="py-2 3xl:px-8">
                                        Thanh toán ngay
                                    </span>
                                </Button>
                            </div>
                        </>
                    )}
                </div>
                {/* <div className="pb-3 border-b border-gray-300">
                    {Object.keys(variations).map((variation) => {
                        return (
                            <ProductAttributes
                                key={variation}
                                title={variation}
                                attributes={variations[variation]}
                                active={attributes[variation]}
                                onClick={handleAttribute}
                            />
                        );
                    })}
                </div>

                <div className="py-6">
                    <ul className="text-sm space-y-5 pb-1">
                        <li>
                            <span className="font-semibold text-heading inline-block pe-2">
                                SKU:
                            </span>
                            {data?.sku}
                        </li>
                        <li>
                            <span className="font-semibold text-heading inline-block pe-2">
                                Category:
                            </span>
                            <Link
                                href="/"
                                className="transition hover:underline hover:text-heading"
                            >
                                {data?.category?.name}
                            </Link>
                        </li>
                        {data?.tags && Array.isArray(data.tags) && (
                            <li className="productTags">
                                <span className="font-semibold text-heading inline-block pe-2">
                                    Tags:
                                </span>
                                {data.tags.map((tag) => (
                                    <Link
                                        key={tag.id}
                                        href={tag.slug}
                                        className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                                    >
                                        {tag.name}
                                        <span className="text-heading">,</span>
                                    </Link>
                                ))}
                            </li>
                        )}
                    </ul>
                </div> */}

                <ProductMetaReview data={productMetaData} />
            </div>
        </div>
    );
};

export default ProductSingleDetails;
