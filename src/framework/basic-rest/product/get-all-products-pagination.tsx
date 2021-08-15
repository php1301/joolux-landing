import { ProductsQueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";

type PaginatedProducts = {
    products: Product[];
};

const fetchProducts = async (page) => {
    // const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
    const { data } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-overview?page=${page.toString()}`,
    );
    console.log(data);
    return {
        products: data,
        // mock: data2,
    };
};

const useProductsPaginationQuery = (options: ProductsQueryOptionsType) => {
    return useQuery<PaginatedProducts, Error>(
        [API_ENDPOINTS.PRODUCTS, options],
        () => fetchProducts(options?.page),
        // { keepPreviousData: true, staleTime: 5000 },
    );
};

export { useProductsPaginationQuery, fetchProducts };
