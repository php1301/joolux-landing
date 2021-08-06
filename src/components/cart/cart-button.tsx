import { useState } from "react";
import CartIcon from "@components/icons/cart-icon";
import { useRouter } from "next/router";
import { useCart } from "@contexts/cart/cart.context";
import usePrice from "@framework/product/use-price";
import { ROUTES } from "@utils/routes";
import Scrollbar from "@components/common/scrollbar";
import CartItem from "./cart-item";
import EmptyCart from "./cart-empty";
import { usePopper } from "react-popper";
import { useTranslation } from "next-i18next";

interface ICartButton {
    className: string;
    backgroundCart: "white" | "black";
}
const CartButton: React.FC<ICartButton> = ({ className, backgroundCart }) => {
    const { t } = useTranslation("common");
    const { items, total, isEmpty } = useCart();
    const { price: cartTotal } = usePrice({
        amount: total,
        currencyCode: "USD",
    });
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [show, setShow] = useState(false);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            {
                name: "offset",
                options: {
                    offset: [27, -20],
                },
            },
        ],
        placement: "left-end",
    });

    const router = useRouter();
    const { totalItems } = useCart();
    const handleOpenCart: any = () => {
        router.push(ROUTES.CART, undefined, {
            locale: router.locale,
        });
    };

    return (
        <>
            <button
                className="cart-button-hover flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                onClick={handleOpenCart}
                ref={setReferenceElement}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                aria-label="cart-button"
            >
                <CartIcon color={backgroundCart} />
                <span
                    className={`cart-counter-badge flex items-center justify-center absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold ${className}`}
                >
                    {totalItems}
                </span>
            </button>
            {show && (
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    className="cart-dropdown-item bg-white shadow-cart"
                    {...attributes.popper}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    {!isEmpty ? (
                        <Scrollbar className="cart-scrollbar w-full flex-grow overflow-hidden">
                            <div className="w-full px-5 md:px-7 h-[350px]">
                                {items?.map((item) => (
                                    <>
                                        <CartItem item={item} key={item.id} />
                                        <CartItem item={item} key={item.id} />
                                        <CartItem item={item} key={item.id} />
                                        <CartItem item={item} key={item.id} />
                                        <CartItem item={item} key={item.id} />
                                        <CartItem item={item} key={item.id} />
                                    </>
                                ))}
                            </div>
                        </Scrollbar>
                    ) : (
                        <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
                            {/* layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                > */}
                            <EmptyCart />
                            <h3 className="text-lg text-heading font-bold pt-8">
                                {t("text-empty-cart")}
                            </h3>
                        </div>
                    )}
                    <div
                        ref={setArrowElement}
                        style={{
                            ...styles.arrow,
                            transform: `translate(-6px, -4px)`,
                        }}
                        className="arrow"
                    />
                </div>
            )}
        </>
    );
};

export default CartButton;
