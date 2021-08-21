import { useState } from "react";
import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { CheckoutItem } from "@components/checkout/checkout-card-item";
import { CheckoutCardFooterItem } from "./checkout-card-footer-item";
import { useTranslation } from "next-i18next";

const CheckoutCard: React.FC = () => {
    const { items, total, isEmpty, totalUniqueItems } = useCart();
    const {
        price: subtotal,
        basePrice,
        discount,
    } = usePrice({
        amount: total,
        currencyCode: "USD",
    });
    const { t } = useTranslation("common");
    const [collapseItem, setCollapseItem] = useState<boolean>(false);

    // const checkoutFooter = [
    //     {
    //         id: 1,
    //         name: t("text-sub-total"),
    //         price: subtotal,
    //     },
    //     {
    //         id: 2,
    //         name: t("text-shipping"),
    //         price: t("text-free"),
    //     },
    //     {
    //         id: 3,
    //         name: t("text-total"),
    //         price: subtotal,
    //     },
    // ];
    return (
        <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("text-your-order")}
            </h2>
            <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                <span>{t("text-product")}</span>
                <span className="ms-auto flex-shrink-0">
                    {t("text-sub-total")}
                </span>
            </div>
            <button
                onClick={() => {
                    setCollapseItem(!collapseItem);
                }}
                className="flex uppercase py-3 text-15px leading-none w-full justify-between items-center border-b border-gray-200 bg-transparent mb-2 outline-none"
            >
                <b>{`Sản phẩm (${totalUniqueItems})`}</b>
                <span
                    className={`createIcon ${
                        collapseItem ? "transform rotate-180" : ""
                    }`}
                >
                    <svg
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        className="createIconSvg"
                    >
                        <g fill="none">
                            <path
                                d="M5.25 15.375L12 8.625L18.75 15.375"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                    <svg
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        className="createIconSvg"
                    >
                        <g fill="none">
                            <path
                                d="M5.25 15.375L12 8.625L18.75 15.375"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </span>
            </button>
            <div>
                {!isEmpty && !collapseItem ? (
                    items.map((item) => (
                        <CheckoutItem item={item} key={item.id} />
                    ))
                ) : (
                    <p className="text-red-500 lg:px-3 py-4">
                        {isEmpty ? t("text-empty-cart") : ""}
                    </p>
                )}
            </div>
            {/* {checkoutFooter.map((item: any) => (
                <CheckoutCardFooterItem item={item} key={item.id} />
            ))} */}
            <CheckoutCardFooterItem
                totalItems={totalUniqueItems}
                subtotal={subtotal}
                discount={discount || "$0.00"}
                basePrice={basePrice || subtotal}
            />
        </div>
    );
};

export default CheckoutCard;
