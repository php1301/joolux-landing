import { Layout } from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
    fetchArticleDetails,
    useFetchArticleDetailsQuery,
} from "@framework/other/get-article-details";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import React from "react";
import About from "@containers/about/about";
import Team from "@containers/about/team";
import News from "@containers/about/news";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";

const VeChungToi: NextPage & {
    Layout: typeof Layout;
} = () => {
    const { isLoading, data, error } =
        useFetchArticleDetailsQuery("ve-chung-toi");
    if (error) return <p>{error.message}</p>;
    const { data: article } = data ?? {};
    return isLoading ? (
        <ProductFeedLoader />
    ) : (
        <>
            <About body={article?.body} />
            <Team teams={article?.teamMembers} />
            <News news={article?.newsCarousel} />
        </>
    );
};
VeChungToi.Layout = Layout;
export default VeChungToi;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        [API_ENDPOINTS.ARTICLES, "ve-chung-toi"],
        async () => fetchArticleDetails("ve-chung-toi"),
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
