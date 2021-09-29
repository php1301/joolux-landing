import BlogContainer from "@components/blog/blog-container";
import BlogReviewPost from "@components/blog/blog-review-post";
import { Layout } from "@components/layout/layout";
import { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useRouter } from "next/router";
import { fetchBlog, useBlogQuery } from "@framework/blog/get-blog";
const BlogDetail: NextPage & { Layout: typeof Layout } = () => {
    const { query } = useRouter();
    const { isLoading, data, error } = useBlogQuery(
        query?.post as unknown as string,
    );
    if (error) return <p>{error.message}</p>;
    const { currentBlog, prevBlog, nextBlog, seo } = data ?? {};

    return (
        <div>
            <BlogReviewPost
                currentBlog={currentBlog}
                prevBlog={prevBlog}
                nextBlog={nextBlog}
                seo={seo}
                isLoading={isLoading}
            />
        </div>
    );
};

BlogDetail.Layout = Layout;
export default BlogDetail;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        [API_ENDPOINTS.BLOG, query?.post as unknown as string],
        async () => fetchBlog(query?.post as unknown as string),
    );
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
            dehydratedState: dehydrate(queryClient),
        },
    };
};
