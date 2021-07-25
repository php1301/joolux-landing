import CartIcon from "@components/icons/cart-icon";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";

interface ICartButton {
    className: string;
    backgroundCart: "white" | "black";
}
const CartButton: React.FC<ICartButton> = ({ className, backgroundCart }) => {
    const { openCart } = useUI();
    const { totalItems } = useCart();

    const handleOpenCart: any = () => {
        return openCart();
    };

    return (
        <button
            className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
            onClick={handleOpenCart}
            aria-label="cart-button"
        >
            <CartIcon color={backgroundCart} />
            <span
                className={`cart-counter-badge flex items-center justify-center absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold ${className}`}
            >
                {totalItems}
            </span>
        </button>
    );
};

export default CartButton;
