import { useMutation } from "react-query";

export interface ICheckoutInputType {
    fullname: string;
    address: string;
    city: string;
    district: string;
    gender: string;
    phone: string;
    method: string;
    email: string;
}

async function checkout(input: ICheckoutInputType) {
    // return http.post(API_ENDPOINTS.ChangeEmail, input);
    input.city = input.city.split(" - ")[0];
    input.district = input.district.split(" - ")[0];
    return input;
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
