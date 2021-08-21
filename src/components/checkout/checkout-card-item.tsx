import { Item } from "@contexts/cart/cart.utils";
import { generateCartItemName } from "@utils/generate-cart-item-name";
import usePrice from "@framework/product/use-price";

export const CheckoutItem: React.FC<{ item: Item }> = ({ item }) => {
    const { price } = usePrice({
        amount: item.itemTotal,
        baseAmount: item.itemTotal,
        currencyCode: "VND",
    });
    return (
        <div className="flex py-4 items-center border-b border-gray-300">
            <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0">
                <img
                    src={
                        (item?.image &&
                            `${process.env.NEXT_PUBLIC_BASE_IMAGE}${item?.image}`) ??
                        "/assets/placeholder/cart-item.svg"
                    }
                    width="64"
                    height="64"
                    className="object-cover"
                />
            </div>
            <h6 className="text-sm ps-3 font-regular text-heading">
                {generateCartItemName(item.name, item.attributes)}{" "}
                <span className="text-[#101010] text-base font-semibold">{`X ${item.quantity}`}</span>
            </h6>
            <div className="flex ms-auto text-heading text-sm ps-2 flex-shrink-0">
                {price}&nbsp;₫
            </div>
        </div>
    );
};
