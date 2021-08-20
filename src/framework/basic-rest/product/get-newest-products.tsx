import { ProductsQueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useQuery } from "react-query";

type NewestProducts = {
    data: Product[];
};

const fetchProducts = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS}`,
    );
    return {
        data,
    };
};

const useProductsQuery = (options: ProductsQueryOptionsType) => {
    return useQuery<NewestProducts, Error>(
        [API_ENDPOINTS.PRODUCTS, options],
        fetchProducts,
    );
};

export { useProductsQuery, fetchProducts };
