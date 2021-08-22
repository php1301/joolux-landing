import { Layout } from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorInformation from "@components/404/error-information";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

export default function ErrorPage() {
    return (
        <>
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={"Trang không tồn tại | Joolux"}
                description={"Trang trang bạn tìm kiếm không tồn tại"}
                canonical={"https://joolux-client.ml"}
                openGraph={{
                    url: "https://joolux-client.ml",
                    title: "Trang không tồn tại | Joolux",
                    description: "Trang không tồn tại",
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
            <ErrorInformation />
        </>
    );
}

ErrorPage.Layout = Layout;

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
