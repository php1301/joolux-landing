// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface IFavoriteForm {
    product: string;
}
async function favoriteProduct(input: IFavoriteForm) {
    return http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.FAVORITE}`,
        input,
    );
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
