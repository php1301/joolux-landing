import React, { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
// import { useAmp } from "next/amp";
export const config = {
    amp: false,
    hybrid: false,
};
import { useUI } from "@contexts/ui.context";
import { Layout } from "@components/layout/layout";
import { Container, Subscription } from "@components";
import { useRouter } from "next/router";
import HeroBlock from "@containers/hero-block";
import BrandBlock from "@containers/brand-block";
import QualityBlock from "@containers/quality-block";
import AssuranceBlock from "@containers/assurance-block";
import BlogBlock from "@containers/blog-block";
// import { I18NExample } from "@components/examples/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewestProducts from "@containers/newest-products";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
    fetchNewestProducts,
    useFetchNewestProductsQuery,
} from "@framework/product/get-newest-products";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";

// Các pages sẽ không cần gắn types như :React.FC
const Home: NextPage & {
    Layout: typeof Layout;
} = () => {
    const { data, isLoading } = useFetchNewestProductsQuery();
    const {
        openModal,
        setPopupBanner,
        unauthorize,
        isAuthorized,
        setModalView,
    } = useUI();
    const { query } = useRouter();
    const { collectionBanner, homepageBanner, newestProducts, popupBanner } =
        data ?? {};
    useEffect(() => {
        if (query.logoutExpired && isAuthorized) {
            unauthorize();
        }
        // if (!localStorage.getItem("showPopup")) {
        //     setModalView("NEWSLETTER_VIEW");
        //     setPopupBanner(popupBanner);
        //     localStorage.setItem("popupId", popupBanner._id);
        //     setTimeout(() => {
        //         openModal();
        //     }, 2000);
        //     localStorage.setItem("showPopup", "true");
        // } else {
        //     if (localStorage.getItem("popupId") !== popupBanner._id) {
        //         localStorage.setItem("popupId", popupBanner._id);
        //         setModalView("NEWSLETTER_VIEW");
        //         setPopupBanner(popupBanner);
        //         localStorage.setItem("popupId", popupBanner._id);
        //         setTimeout(() => {
        //             openModal();
        //         }, 2000);
        //     }
        // }
        if (localStorage.getItem("popupId") !== popupBanner[0]._id) {
            localStorage.setItem("popupId", popupBanner[0]._id);
            setModalView("NEWSLETTER_VIEW");
            setPopupBanner(popupBanner);
            setTimeout(() => {
                openModal();
            }, 2000);
        }
    }, []);
    // const isAmp = useAmp();
    return (
        <>
            <SiteLinksSearchBoxJsonLd
                url={process.env.NEXT_PUBLIC_WEBSITE_URL}
                potentialActions={[
                    {
                        target: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/hang-moi-ve?q`,
                        queryInput: "Search",
                    },
                    {
                        target: `android-app://com.example/https/${process.env.NEXT_PUBLIC_WEBSITE_URL.substring(
                            8,
                        )}/hang-moi-ve?q`,
                        queryInput: "Search",
                    },
                ]}
            />
            <Subscription />
            {/* <Main />
            <I18NExample /> */}
            <Container>
                {!isLoading && homepageBanner && (
                    <HeroBlock homepageBanner={homepageBanner} />
                )}
                <QualityBlock />
                {!isLoading && collectionBanner && (
                    <BrandBlock collectionBanner={collectionBanner} />
                )}
                <AssuranceBlock />
                {data && <NewestProducts data={newestProducts} />}
                <BlogBlock />
            </Container>
            {/* <Cards /> */}
        </>
    );
};

{
    /* <amp-img
alt="Mountains"
width="550"
height="368"
layout="responsive"
src="https://amp.dev/static/inline-examples/images/mountains.webp"
>
<amp-img
    alt="Mountains"
    fallback=""
    width="550"
    height="368"
    layout="responsive"
    src="https://amp.dev/static/inline-examples/images/mountains.jpg"
></amp-img>
</amp-img> */
}
Home.Layout = Layout;
export default Home;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS,
        fetchNewestProducts,
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
        revalidate: 10,
    };
};
