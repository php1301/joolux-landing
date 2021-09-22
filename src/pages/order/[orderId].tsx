import Container from "@components/ui/container";
import { Layout } from "@components/layout/layout";
import { Subscription } from "@components/common/subscription";
import OrderInformation from "@components/order/order-information";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

export default function Order() {
    return (
        <>
            <Container clean>
                <OrderInformation />
            </Container>
            <Subscription hasTitle />
        </>
    );
}

Order.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
