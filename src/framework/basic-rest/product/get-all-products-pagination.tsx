import { ProductsQueryOptionsType, Product, Filter } from "@framework/types";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";
import _ from "lodash";
type PaginatedProducts = {
    products: Product[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    filter: Filter;
};

const fetchProducts = async (options: ProductsQueryOptionsType) => {
    const allParams = _.omitBy(options, _.isNil);
    const {
        data: { products, pagination },
    } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-overview`,
        {
            params: {
                page: options?.page || "1",
                ...allParams,
            },
        },
    );
    const { data: filter } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-new-filter`,
        {
            params: allParams,
        },
    );
    return {
        products,
        pagination,
        filter,
    };
};

const useProductsPaginationQuery = (
    options: ProductsQueryOptionsType,
    key: string,
) => {
    return useQuery<PaginatedProducts, Error>(
        key,
        () => fetchProducts(options),
        { keepPreviousData: true, staleTime: 5000 },
    );
};

export { useProductsPaginationQuery, fetchProducts };
