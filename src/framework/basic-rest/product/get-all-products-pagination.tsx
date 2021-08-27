import { ProductsQueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";

type PaginatedProducts = {
    products: Product[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
};

const fetchProducts = async (page = 1) => {
    const {
        data: { products, pagination },
    } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-overview?page=${page.toString()}`,
    );
    console.log(products, pagination);
    const { data: filter } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-new-filter    `,
    );
    console.log(filter);
    return {
        products,
        pagination,
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
