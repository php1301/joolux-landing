import { Layout } from "@components/layout/layout";
import { NextPage } from "next";
import Container from "@components/ui/container";
import { Subscription } from "@components/common/subscription";
import CheckoutForm from "@components/checkout/checkout-form";
import CheckoutCard from "@components/checkout/checkout-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
const Checkout: NextPage & { Layout: typeof Layout } = () => {
    return (
        <Container>
            <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
                    <CheckoutForm />
                </div>
                <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
                    <CheckoutCard />
                </div>
            </div>
            <Subscription />
        </Container>
    );
};
Checkout.Layout = Layout;
export default Checkout;

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
