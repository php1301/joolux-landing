import BlogContainer from "@components/blog/blog-container";
import { Layout } from "@components/layout/layout";
import { NextPage, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import React from "react";
import { fetchBlogs, useGetBlogsQuery } from "@framework/blog/get-blogs";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useRouter } from "next/router";
const BlogPage: NextPage & { Layout: typeof Layout } = () => {
    const { query } = useRouter();
    const { isLoading, data, error } = useGetBlogsQuery(query);
    if (error) return <p>{error.message}</p>;
    const { pagination, blogs } = data ?? {};

    return (
        <div>
            <BlogContainer
                isLoading={isLoading}
                pagination={pagination}
                blogs={blogs}
            />
        </div>
    );
};

BlogPage.Layout = Layout;
export default BlogPage;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([API_ENDPOINTS.BLOG], async () =>
        fetchBlogs(query),
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
