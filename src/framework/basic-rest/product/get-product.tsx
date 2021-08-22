import { Product } from "@framework/types";
import http from "@framework/utils/http";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProduct = async (id: string) => {
    // const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}`);
    const { data: data2 } = await http.get(
        `https://api.joolux-client.ml/admin/products/information?id=${id}`,
    );
    return data2;
};

export const useProductQuery = (slug: string) => {
    return useQuery<Product, Error>([slug], () => fetchProduct(slug));
};
