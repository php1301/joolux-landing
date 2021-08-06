import Cart from "@components/cart/cart";
import { Layout } from "@components/layout/layout";
import { NextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const CartPage: NextPage & { Layout: typeof Layout } = () => {
    return <Cart />;
};

CartPage.Layout = Layout;
export default CartPage;
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
