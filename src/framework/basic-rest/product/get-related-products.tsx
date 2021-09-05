/* eslint-disable @typescript-eslint/no-unused-vars */
import { RelatedProductsQueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchRelatedProducts = async (
    category: string,
    brand: string,
    id: string,
) => {
    const { data } = await http.get(API_ENDPOINTS.RELATED_PRODUCTS);
    const { data: data2 } = await http.get(
        `https://api.joolux-client.ml/admin/products/related?category=${category}&brand=${brand}&id=${id}`,
    );
    console.log(data2, "related");
    return data2;
};

export const useRelatedProductsQuery = (
    options: RelatedProductsQueryOptionsType,
) => {
    return useQuery<Product[], Error>(
        [API_ENDPOINTS.RELATED_PRODUCTS],
        async () =>
            fetchRelatedProducts(options.category, options.brand, options.id),
        {
            keepPreviousData: true,
            staleTime: 5000,
            enabled: false,
        },
    );
};
