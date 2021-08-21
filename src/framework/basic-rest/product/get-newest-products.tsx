import { Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useQuery } from "react-query";

type NewestProducts = {
    data: Product[];
};

const fetchNewestProducts = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS}`,
    );
    return {
        data,
    };
};

const useFetchNewestProductsQuery = () => {
    return useQuery<NewestProducts, Error>(
        [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS],
        fetchNewestProducts,
    );
};

export { useFetchNewestProductsQuery, fetchNewestProducts };
