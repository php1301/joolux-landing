import { Layout } from "@components/layout/layout";
import { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import { useRouter } from "next/router";
import {
    fetchBrands,
    useGetBrandsQuery,
} from "@framework/other/get-all-brands";
import BrandsLayout from "@containers/brand/brands-layout";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";

const BrandsPage: NextPage & { Layout: typeof Layout } = () => {
    // const { query } = useRouter();
    const { isLoading, data, error } = useGetBrandsQuery();
    if (error) return <p>{error.message}</p>;
    const { data: brands } = data ?? {};

    return isLoading ? <ProductFeedLoader /> : <BrandsLayout brands={brands} />;
};

BrandsPage.Layout = Layout;
export default BrandsPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([API_ENDPOINTS.BRANDS], async () =>
        fetchBrands(),
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
