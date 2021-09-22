import { useEffect } from "react";
import { useUI } from "@contexts/ui.context";
import CheckOutFormSuccessStep from "@components/checkout/checkout-form-success-step";
import { Layout } from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Container from "@components/ui/container";

const OrderSuccess: NextPage & { Layout: typeof Layout } = () => {
    const { displaySuccess } = useUI();
    const router = useRouter();
    useEffect(() => {
        if (!displaySuccess) router.push("/404");
    }, []);
    return (
        <Container clean>
            <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                <CheckOutFormSuccessStep />
            </div>
        </Container>
    );
};
OrderSuccess.Layout = Layout;
export default OrderSuccess;
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
