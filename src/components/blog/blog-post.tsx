import { Blog } from "@framework/types";
import { ProxyTypeSet } from "immer/dist/internal";
import React, { FC } from "react";
import BlogCategory from "./blog-category";
import BlogLayoutBody from "./blog-layout-body";

interface IBlogPostProps {
    blogs: Blog[];
}

const BlogPost: FC<IBlogPostProps> = ({ blogs }) => {
    return (
        <div className="flex flex-wrap mt-8">
            <BlogLayoutBody blogs={blogs} />
            <BlogCategory />
        </div>
    );
};
export default BlogPost;
