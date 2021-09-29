import { Blog } from "@framework/types";
import React, { FC } from "react";
import BlogPost from "./blog-post";
import BlogItemCenter from "./item-center";
import Pagination from "@components/common/pagination";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";

interface IBlogContainerProps {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    isLoading: boolean;
}

const BlogContainer: FC<IBlogContainerProps> = ({
    isLoading,
    pagination,
    blogs,
}) => {
    return (
        <div className="mx-auto max-w-[1440px]  pt-4 lg:px-8 px-5 blogContainer">
            <BlogItemCenter />
            {isLoading ? (
                <ProductFeedLoader limit={20} uniqueKey="search-product" />
            ) : (
                pagination?.total !== 0 && <BlogPost blogs={blogs} />
            )}

            {!isLoading && pagination?.total !== 0 && (
                <Pagination pagination={pagination} />
            )}
        </div>
    );
};
export default BlogContainer;
