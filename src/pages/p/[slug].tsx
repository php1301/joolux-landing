import { BreadcrumbItems } from "@components/common/breadcrumb";
import { Layout } from "@components/layout/layout";
import ActiveLink from "@components/ui/active-link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parse from "html-react-parser";
import React from "react";
import { fetchArticles } from "@framework/other/get-articles";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import {
    fetchArticleDetails,
    useFetchArticleDetailsQuery,
} from "@framework/other/get-article-details";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { sitePages } from "@settings/site-pages";
import { NextSeo } from "next-seo";

const DynamicArticles: NextPage & {
    Layout: typeof Layout;
} = () => {
    const { query, asPath } = useRouter();
    const { isLoading, data, error } = useFetchArticleDetailsQuery(query?.slug);
    const seoTitle =
        sitePages?.[query?.slug?.toString()]?.["page_title"] || "Joolux";
    if (error) return <p>{error.message}</p>;
    const { data: article } = data ?? {};
    return (
        <div>
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={`${seoTitle} | Joolux` || "Joolux"}
                canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`}
                openGraph={{
                    url: asPath,
                    title: `${seoTitle} | Joolux` || "Joolux",
                    images: [
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <div className="mx-auto max-w-[1234px] pt-4 smJl:pb-16 pb-10 px-8 font-body other-page">
                {isLoading ? (
                    <ProductFeedLoader />
                ) : (
                    <>
                        <div className="pb-7">
                            <BreadcrumbItems separator="/">
                                <ActiveLink
                                    href={"/"}
                                    activeClassName="font-semibold text-heading"
                                >
                                    <a className="font-extralight text-[#878787] hover:font-normal hover:text-black">
                                        Trang Chủ
                                    </a>
                                </ActiveLink>
                                <ActiveLink
                                    href={`/p/${article?.slug}`}
                                    activeClassName="text-heading font-bold"
                                >
                                    <a className="capitalize font-medium">
                                        {seoTitle}
                                    </a>
                                </ActiveLink>
                            </BreadcrumbItems>
                        </div>
                        <h1 className="leading-[1.333] text-4xl font-bold">
                            {seoTitle}
                        </h1>
                        <div className="py-10">{parse(article?.body)}</div>
                    </>
                )}
            </div>
        </div>
    );
};
DynamicArticles.Layout = Layout;
export default DynamicArticles;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        [API_ENDPOINTS.ARTICLES, params?.slug],
        async () => fetchArticleDetails(params?.slug),
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
            revalidate: 10,
        },
    };
};
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetchArticles();
    const paths = res?.data?.map((post) => ({
        params: { slug: post?.slug },
    }));
    console.log(paths);
    return { paths, fallback: false };
};
