import BlogContainer from "@components/blog/blog-container";
import { Layout } from "@components/layout/layout";
import { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import React from "react";
import { fetchBlogs, useGetBlogsQuery } from "@framework/blog/get-blogs";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import PageHeader from "@components/ui/page-header";
import { useRouter } from "next/router";
const BlogPage: NextPage & { Layout: typeof Layout } = () => {
    const { query, asPath } = useRouter();
    const { isLoading, data, error } = useGetBlogsQuery(query);
    if (error) return <p>{error.message}</p>;
    const { pagination, blogs, seo } = data ?? {};
    return (
        <>
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={`${seo?.name} | Blog | Joolux` || "Blog | Joolux"}
                description={seo?.description || "Bộ sưu tập"}
                canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`}
                openGraph={{
                    url: asPath,
                    title: `${seo?.name} | Blog | Joolux` || "Blog | Joolux",
                    description: seo?.description || "Pending",
                    images: [
                        {
                            url:
                                `${process.env.NEXT_PUBLIC_BASE_IMAGE}${seo?.image?.[0]}` ||
                                "https://joolux.com/og-image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url:
                                `${process.env.NEXT_PUBLIC_BASE_IMAGE}${seo?.image?.[0]}` ||
                                "https://joolux.com/og-image.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <PageHeader />
            <div>
                <BlogContainer
                    isLoading={isLoading}
                    pagination={pagination}
                    blogs={blogs}
                    seo={seo}
                />
            </div>
        </>
    );
};

BlogPage.Layout = Layout;
export default BlogPage;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([API_ENDPOINTS.BLOG, query], async () =>
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
