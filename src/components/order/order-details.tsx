import { useOrderQuery } from "@framework/order/get-order";
import usePrice from "@framework/product/use-price";
import { OrderItem } from "@framework/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const OrderItemCard = ({ product }: { product: OrderItem }) => {
    const { price: itemTotal } = usePrice({
        amount: product.price * product.quantity,
        currencyCode: "USD",
    });
    return (
        <tr
            className="border-b font-normal border-gray-300 last:border-b-0"
            key={product.id}
        >
            <td className="p-4">
                {product.name} * {product.quantity}
            </td>
            <td className="p-4">{itemTotal}</td>
        </tr>
    );
};
const OrderDetails: React.FC<{ className?: string }> = ({
    className = "pt-10 lg:pt-12",
}) => {
    const {
        query: { id },
    } = useRouter();
    const { t } = useTranslation("common");
    const { data: order, isLoading } = useOrderQuery(id[1]?.toString()!);
    const { price: subtotal } = usePrice(
        order && {
            amount: order.total,
            currencyCode: "USD",
        },
    );
    const { price: total } = usePrice(
        order && {
            amount: order.shipping_fee
                ? order.total + order.shipping_fee
                : order.total,
            currencyCode: "USD",
        },
    );
    const { price: shipping } = usePrice(
        order && {
            amount: order.shipping_fee,
            currencyCode: "USD",
        },
    );
    if (isLoading) return <p>Loading...</p>;
    return (
        <div className={className}>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("text-order-details")}:
            </h2>
            <table className="w-full text-heading font-semibold text-sm lg:text-base">
                <thead>
                    <tr>
                        <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
                            {t("text-product")}
                        </th>
                        <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
                            {t("text-total")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {order?.products.map((product, index) => (
                        <OrderItemCard key={index} product={product} />
                    ))}
                </tbody>
                <tfoot>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Tạm tính")}:</td>
                        <td className="p-4">{subtotal}</td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Phí vận chuyển")}:</td>
                        <td className="p-4">
                            {shipping}
                            <span className="text-[13px] font-normal ps-1.5 inline-block">
                                via Flat rate
                            </span>
                        </td>
                    </tr>
                    {/* Odd trong tailwind */}
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">
                            {t("Đơn vị vận chuyển")}:
                        </td>
                        <td className="p-4">Giao Hàng Nhanh - GHN</td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Trạng thái")}</td>
                        <td className="p-4">Hoàn thành</td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Tổng tiền")}:</td>
                        <td className="p-4">{total}</td>
                    </tr>
                    {/* <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("text-note")}:</td>
                        <td className="p-4">new order</td>
                    </tr> */}
                </tfoot>
            </table>
        </div>
    );
};

export default OrderDetails;
