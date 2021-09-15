import { Layout } from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import About from "@containers/about/about";
import Team from "@containers/about/team";
import News from "@containers/about/news";

const VeChungToi: NextPage & {
    Layout: typeof Layout;
} = () => {
    return (
        <>
            <About />
            <Team />
            <News />
        </>
    );
};
VeChungToi.Layout = Layout;
export default VeChungToi;

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
