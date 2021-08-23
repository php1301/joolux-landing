import { Layout } from "@components/layout/layout";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ProductCardLoader from "@components/ui/loaders/product-card-loader";
import dynamic from "next/dynamic";
import Container from "@components/ui/container";
import { Subscription } from "@components/common/subscription";
import CheckoutForm from "@components/checkout/checkout-form";
const CheckoutCard = dynamic(
    () => import("@components/checkout/checkout-card"),
    {
        ssr: false,
        loading: () => (
            <ProductCardLoader uniqueKey={"product-loading-checkout"} />
        ),
    },
);
const Checkout: NextPage & { Layout: typeof Layout } = () => {
    return (
        <>
            <Container>
                <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                    <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
                        <CheckoutForm />
                    </div>
                    <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
                        <CheckoutCard />
                    </div>
                </div>
            </Container>
            <Subscription hasTitle />
        </>
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
