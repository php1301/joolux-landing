// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface IFavoriteForm {
    productId: string;
}
async function favoriteProduct(input: IFavoriteForm) {
    // return http.post(API_ENDPOINTS.ChangeEmail, input);
    return input;
}

export const useFavoriteProductMutation = () => {
    return useMutation((input: IFavoriteForm) => favoriteProduct(input), {
        onSuccess: (data) => {
            console.log(data, "FavoriteProduct success response");
        },
        onError: (data) => {
            console.log(data, "FavoriteProduct error response");
        },
    });
};
