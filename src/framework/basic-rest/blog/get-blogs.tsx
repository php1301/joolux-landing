import { Blog, Order } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type PaginatedBlogs = {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
};

export const fetchBlogs = async (options) => {
    const {
        data: { blogs, pagination },
    } = await http.get(`https://api.joolux-client.ml${API_ENDPOINTS.BLOG}`, {
        params: {
            page: options?.page || "1",
        },
    });
    return { blogs, pagination };
};
export const useGetBlogsQuery = (options) => {
    return useQuery<PaginatedBlogs, Error>(
        [API_ENDPOINTS.BLOG],
        () => fetchBlogs(options),
        { keepPreviousData: true },
    );
};
