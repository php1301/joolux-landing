import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface ProductsList {
    product: string;
    price: number;
}

export interface ICheckoutInputType {
    customerProvince: string;
    customerDistrict: string;
    customerPhone: string;
    customerWard: string;
    customerAddress: string;
    customerName: string;
    customerEmail: string;
    orderCode: string;
    customerNote: string;
    productsList: ProductsList[];
    totalCost: number;
    vat: number;
    finalPrice: number;
    paymentMethod: string;
    deliverySupplier: string;
    deliveryCode: string;
    deliveryStatus: string;
    deliveryFee: number;
}
// export interface ICheckoutInputType {
//     fullname: string;
//     address: string;
//     city: string;
//     district: string;
//     gender: string;
//     phone: string;
//     method: string;
//     email: string;
// }

async function checkout(input: ICheckoutInputType) {
    return http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.CHECKOUT}`,
        input,
    );
}
export const useCheckoutMutation = () => {
    return useMutation((input: ICheckoutInputType) => checkout(input), {
        onSuccess: (data) => {
            console.log(data, "Checkout success response");
        },
        onError: (data) => {
            console.log(data, "Checkout error response");
        },
    });
};
