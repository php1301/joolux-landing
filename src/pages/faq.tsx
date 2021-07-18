import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Faq() {
    return (
        <div>
            <h2>FAQ Page Placeholder</h2>
        </div>
    );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "faq",
                "footer",
            ])),
        },
    };
};
