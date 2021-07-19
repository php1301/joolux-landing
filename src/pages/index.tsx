import React from "react";
import { GetStaticProps } from "next";
import { useAmp } from "next/amp";
export const config = {
    amp: false,
    hybrid: false,
};
import { Layout } from "@components/layout/layout";
import { Container, Main, Cards, Subscription } from "@components";
import HeroBlock from "@containers/hero-block";
import BrandBlock from "@containers/brand-block";
import QualityBlock from "@containers/quality-block";
import AssuranceBlock from "@containers/assurance-block";
import BlogBlock from "@containers/blog-block";
// import { I18NExample } from "@components/examples/translate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Các pages sẽ không cần gắn types như :React.FC
const Home = () => {
    const isAmp = useAmp();
    return (
        <>
            <Subscription />
            {/* <Main />
            <I18NExample /> */}
            <Container>
                <HeroBlock />
                <QualityBlock />
                <BrandBlock />
                <AssuranceBlock />
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
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};
