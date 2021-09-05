import {
    ProductsQueryOptionsType,
    Product,
    Filter,
    CollectionBanner,
} from "@framework/types";
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
    seo?: CollectionBanner;
};

const fetchCollectionProducts = async (
    collection,
    options: ProductsQueryOptionsType,
) => {
    const allParams = _.omitBy(options, _.isNil);
    const {
        data: { products, pagination, seo },
    } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-overview/${collection}?seo=true`,
        {
            params: {
                page: options?.page || "1",
                ...allParams,
            },
        },
    );
    const { data: filter } = await http.get(
        `https://api.joolux-client.ml/admin/products/get-new-filter-collection/${collection}`,
        {
            params: allParams,
        },
    );
    return {
        products,
        pagination,
        filter,
        seo,
    };
};

const useFetchCollectionProducts = (
    options: ProductsQueryOptionsType,
    collection: string,
    key: string,
) => {
    return useQuery<PaginatedProducts, Error>(
        key,
        () => fetchCollectionProducts(collection, options),
        { keepPreviousData: true, staleTime: 5000 },
    );
};

export { useFetchCollectionProducts, fetchCollectionProducts };
